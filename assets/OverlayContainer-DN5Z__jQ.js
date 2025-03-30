import{j as r,hy as D,v as J,hx as Q,cJ as V,hz as X,hA as G}from"./index-BMHxxDIj.js";import{o as Y,i as Z,M as tt,f as et,h as st}from"./mat3-DeZjtwo_.js";import{e as ot,E as it}from"./MapView-CwV6ENjH.js";import{t as rt}from"./vec2f32-BbH2jxlN.js";import{r as nt}from"./vec3f32-nZdmKIgz.js";import{n as at}from"./WGLContainer-B_jhkoyJ.js";import{t as pt,a as L,i as dt}from"./FeatureCommandQueue-Jo4Ywmen.js";import{j as ht,a as P,h as lt,G as ct,C as w,H as ut,l as ft,w as vt,b as q,g as a,t as mt,S as xt,m as B,I as yt,P as W,v as wt,e as gt}from"./UpdateTracking2D-pQf_z9NE.js";import{I as R,O as _t,E as Mt,C as U}from"./enums-Dk3osxpS.js";class I extends yt{}r([q(0,w)],I.prototype,"pos",void 0),r([q(1,w)],I.prototype,"uv",void 0);class $t extends wt{}class F extends W{}r([a(mt)],F.prototype,"dvs",void 0);class m extends W{}r([a(w)],m.prototype,"perspective",void 0),r([a(w)],m.prototype,"texSize",void 0),r([a(P)],m.prototype,"wrapAroundShift",void 0),r([a(P)],m.prototype,"opacity",void 0),r([a(xt)],m.prototype,"texture",void 0);class y extends ht{vertex(e){const t=e.uv.divide(this.config.texSize),s=new P(1).add(lt(t,this.config.perspective)),o=new ct(e.pos.add(new w(this.config.wrapAroundShift,0)),1),i=this.transform.dvs.multiply(o);return{uv:t,glPosition:new ut(i.xy.multiply(s),0,s)}}fragment(e){const t=ft(this.config.texture,e.uv).multiply(this.config.opacity),s=new vt;return s.glFragColor=t,s}}r([a(F)],y.prototype,"transform",void 0),r([a(m)],y.prototype,"config",void 0),r([D(0,B(I))],y.prototype,"vertex",null),r([D(0,B($t))],y.prototype,"fragment",null);let St=class extends pt{constructor(){super(...arguments),this.type=gt.Overlay,this._mesh=null,this.shaders={overlay:new y}}render(e,t){const{context:s,painter:o}=e,i=this._getMesh(e,t);o.setPipelineState(L);const{isWrapAround:p,wrapAroundShift:c}=t.config,u={...t.config,wrapAroundShift:0},f={shader:this.shaders.overlay,uniforms:{transform:t.transform,config:u},defines:null,optionalAttributes:null,useComputeBuffer:!1};o.setPipelineState({...L,stencil:{write:!1,test:{compare:_t.EQUAL,op:{fail:R.KEEP,zFail:R.KEEP,zPass:R.REPLACE},ref:0,mask:255}}}),o.submitDrawMeshUntyped(s,f,i),p&&(u.wrapAroundShift=c,o.submitDrawMeshUntyped(s,f,i))}shutdown(){J(this._mesh)}_getMesh(e,t){const{context:s}=e;if(this._mesh){const o=this._mesh.vertexBuffers.get("positions");if(!o)throw new Error("Buffer not found");o.setData(t.position)}else{const o=t.index!=null?t.index.length:t.position.length/2;this._mesh=new dt(s,{vertex:{positions:t.position,uvs:t.tex},index:t.index!=null?{index:t.index}:void 0,groups:[{attributes:[{name:"pos",count:2,type:U.FLOAT,location:0,vertex:"positions",stride:8,offset:0},{name:"tex",count:2,type:U.UNSIGNED_SHORT,location:1,vertex:"uvs",stride:4,offset:0}],index:t.index!=null?"index":void 0,primitive:Mt.TRIANGLE_STRIP}],parts:[{group:0,start:0,count:o}]})}return this._mesh}};class Tt extends at{constructor(){super(...arguments),this._viewStateId=-1,this._dvsMat3=ot(),this._overlayTechnique=new St}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}doRender(e){if(e.drawPhase!==it.MAP||!this.visible)return;super.doRender(e);const t=this._overlayTechnique;for(const s of this.children)s.draw(e,t)}onDetach(){this._overlayTechnique.shutdown()}_updateMatrices(e){const{state:t}=e,{id:s,size:o,pixelRatio:i,resolution:p,rotation:c,viewpoint:u,displayMat3:f}=t;if(this._viewStateId===s)return;const g=G(c),d=i*o[0],v=i*o[1];this._localOrigin=u.targetGeometry.clone();const{x,y:$}=this._localOrigin,_=Q(x,t.spatialReference);this._localOrigin.x=_,this._localOrigin.y=$;const S=p*d,O=p*v,n=Y(this._dvsMat3);Z(n,n,f),tt(n,n,rt(d/2,v/2)),et(n,n,nt(d/S,-v/O,1)),st(n,n,-g),this._viewStateId=s}_updateOverlays(e,t){const{state:s}=e,{rotation:o,spatialReference:i,worldScreenWidth:p,size:c,viewpoint:u}=s,f=this._localOrigin;let g,d=0;const v=V(i);if(v&&i.isWrappable){const x=c[0],$=c[1],_=G(o),S=Math.abs(Math.cos(_)),O=Math.abs(Math.sin(_)),n=Math.round(x*S+$*O),[j,z]=v.valid,h=X(i),{x:C,y:H}=u.targetGeometry,N=[C,H],b=[0,0];s.toScreen(b,N);const M=[0,0];let A;A=n>p?.5*p:.5*n;const T=Math.floor((C+.5*h)/h),K=j+T*h,k=z+T*h,E=[b[0]+A,0];s.toMap(M,E),M[0]>k&&(d=h),E[0]=b[0]-A,s.toMap(M,E),M[0]<K&&(d=-h),g={worldWidth:h,xBounds:[j,z]}}for(const x of t)x.updateDrawCoords(f,d,i,g)}}export{Tt as u};
//# sourceMappingURL=OverlayContainer-DN5Z__jQ.js.map
