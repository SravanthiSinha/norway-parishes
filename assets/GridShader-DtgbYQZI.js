import{d as R}from"./WGLContainer-goCc6JF4.js";import{aN as he,aR as z,j as c,ht as I,T as Yt,c3 as Te,an as Y,m as f,k as W,gq as ke,lw as xt,bw as Mt,ap as ce,lx as ft,ly as Fe,bP as Se,gm as Nt,lz as De,ke as Ee,lA as ze,go as nt,lB as Ve,lC as Bt,lD as Le,lE as Re,v as mt,lF as Jt}from"./index-vxzybAz5.js";import{h as Ct,C as F,g as w,S as G,j as h,K as Ie,m as P,I as $t,v as Tt,P as ot,a as kt,H as y,z as Pe,l as j,x as $,U as S,k as Z,G as x,D as p,Y as me,n as qt,p as k,r as A,q as de,E as Kt,s as Ae,u as te,y as Ze,A as Wt,w as Ft,b as Ne,B as pe,V as Be,J as qe,F as Oe,L as Ue,M as Ge,Z as je,t as Ye,O as Ot,N as We,Q as Xe,R as ee,T as ie,W as He,X as Qe}from"./UpdateTracking2D-DdmW80q6.js";import{t as Je}from"./CircularArray-CujHzHWW.js";import{a as Ke}from"./testSVGPremultipliedAlpha-Bvd9taKb.js";import{M as ti,N as ei,L as ii}from"./definitions-C0Jy3zs7.js";import{L as si,_ as se,c as ge}from"./MapView-B3fITiR9.js";import{t as ni}from"./AttributeStore-D0W-9kcg.js";import{o as oi,r as ai,g as _e}from"./vec32-DTc6Zn5m.js";let L=class{constructor(t){this._gain=t,this.lastValue=void 0,this.filteredDelta=void 0}update(t){if(this.hasLastValue()){const e=this.computeDelta(t);this._updateDelta(e)}this.lastValue=t}reset(){this.lastValue=void 0,this.filteredDelta=void 0}hasLastValue(){return this.lastValue!==void 0}hasFilteredDelta(){return this.filteredDelta!==void 0}computeDelta(t){return this.lastValue===void 0?NaN:t-this.lastValue}_updateDelta(t){this.filteredDelta!==void 0?this.filteredDelta=(1-this._gain)*this.filteredDelta+this._gain*t:this.filteredDelta=t}},Xt=class{constructor(t,e,i){this._initialVelocity=t,this._stopVelocity=e,this._friction=i,this._duration=Math.abs(Math.log(Math.abs(this._initialVelocity)/this._stopVelocity)/Math.log(1-this._friction))}get duration(){return this._duration}isFinished(t){return t>this.duration}get friction(){return this._friction}value(t){return this.valueFromInitialVelocity(this._initialVelocity,t)}valueDelta(t,e){const i=this.value(t);return this.value(t+e)-i}valueFromInitialVelocity(t,e){e=Math.min(e,this.duration);const i=1-this.friction;return t*(i**e-1)/Math.log(i)}},ri=class extends Xt{constructor(t,e,i,a,s){super(t,e,i),this._sceneVelocity=a,this.direction=s}value(t){return super.valueFromInitialVelocity(this._sceneVelocity,t)}},li=class{constructor(t=300,e=12,i=.84){this._minimumInitialVelocity=t,this._stopVelocity=e,this._friction=i,this.enabled=!0,this._time=new L(.6),this._screen=[new L(.4),new L(.4)],this._scene=[new L(.6),new L(.6),new L(.6)],this._tmpDirection=he()}add(t,e,i){if(this.enabled){if(this._time.hasLastValue()&&this._time.computeDelta(i)<.015)return;this._screen[0].update(t[0]),this._screen[1].update(t[1]),this._scene[0].update(e[0]),this._scene[1].update(e[1]),this._scene[2].update(e[2]),this._time.update(i)}}reset(){this._screen[0].reset(),this._screen[1].reset(),this._scene[0].reset(),this._scene[1].reset(),this._scene[2].reset(),this._time.reset()}evaluateMomentum(){if(!this.enabled||!this._screen[0].hasFilteredDelta()||!this._time.hasFilteredDelta())return null;const t=this._screen[0].filteredDelta,e=this._screen[1].filteredDelta,i=t==null||e==null?0:Math.sqrt(t*t+e*e),a=this._time.filteredDelta,s=a==null||i==null?0:i/a;return Math.abs(s)<this._minimumInitialVelocity?null:this.createMomentum(s,this._stopVelocity,this._friction)}createMomentum(t,e,i){oi(this._tmpDirection,this._scene[0].filteredDelta??0,this._scene[1].filteredDelta??0,this._scene[2].filteredDelta??0);const a=ai(this._tmpDirection);a>0&&_e(this._tmpDirection,this._tmpDirection,1/a);const s=this._time.filteredDelta;return new ri(t,e,i,s==null?0:a/s,this._tmpDirection)}},ye=class{constructor(t=2.5,e=.01,i=.95,a=12){this._minimumInitialVelocity=t,this._stopVelocity=e,this._friction=i,this._maxVelocity=a,this.enabled=!0,this.value=new L(.8),this.time=new L(.3)}add(t,e){if(this.enabled&&e!=null){if(this.time.hasLastValue()){if(this.time.computeDelta(e)<.01)return;if(this.value.hasFilteredDelta()){const i=this.value.computeDelta(t);this.value.filteredDelta*i<0&&this.value.reset()}}this.time.update(e),this.value.update(t)}}reset(){this.value.reset(),this.time.reset()}evaluateMomentum(){if(!this.enabled||!this.value.hasFilteredDelta()||!this.time.hasFilteredDelta())return null;let t=this.value.filteredDelta/this.time.filteredDelta;return t=z(t,-this._maxVelocity,this._maxVelocity),Math.abs(t)<this._minimumInitialVelocity?null:this.createMomentum(t,this._stopVelocity,this._friction)}createMomentum(t,e,i){return new Xt(t,e,i)}},ui=class extends ye{constructor(t=3,e=.01,i=.95,a=12){super(t,e,i,a)}add(t,e){const i=this.value.lastValue;if(i!=null){let a=t-i;for(;a>Math.PI;)a-=2*Math.PI;for(;a<-Math.PI;)a+=2*Math.PI;t=i+a}super.add(t,e)}},hi=class extends Xt{constructor(t,e,i){super(t,e,i)}value(t){const e=super.value(t);return Math.exp(e)}valueDelta(t,e){const i=super.value(t),a=super.value(t+e)-i;return Math.exp(a)}};class ci extends ye{constructor(t=2.5,e=.01,i=.95,a=12){super(t,e,i,a)}add(t,e){super.add(Math.log(t),e)}createMomentum(t,e,i){return new hi(t,e,i)}}const Bi={shaders:{vertexShader:R("bitBlit/bitBlit.vert"),fragmentShader:R("bitBlit/bitBlit.frag")},attributes:new Map([["a_pos",0],["a_tex",1]])},qi={shaders:{vertexShader:R("stencil/stencil.vert"),fragmentShader:R("stencil/stencil.frag")},attributes:new Map([["a_pos",0]])};class ve extends $t{}c([Ct(0,F)],ve.prototype,"position",void 0);class mi extends Tt{}class K extends ot{}c([w(G)],K.prototype,"layerTexture",void 0),c([w(G)],K.prototype,"backbufferTexture",void 0),c([w(h)],K.prototype,"opacity",void 0),c([w(h)],K.prototype,"inFadeOpacity",void 0);class dt extends kt{vertex(t){return{uv:t.position,glPosition:new y(Pe(t.position),0,1)}}fragment(t){const e=new Ft,i=j(this.config.layerTexture,t.uv),a=j(this.config.backbufferTexture,t.uv),s=$(S(i.a,new h(0)),i.rgb,i.rgb.divide(i.a)),o=$(S(a.a,new h(0)),a.rgb,a.rgb.divide(a.a)),l=this.config.opacity.multiply(i.a),r=a.a;switch(this.blendMode){case"destination-over":e.glFragColor=new y(s.multiply(l).multiply(p(r)).add(o.multiply(r)),l.add(r).subtract(l.multiply(r)));break;case"source-in":{const u=new y(s.multiply(l).multiply(r),l.multiply(r)),m=new y(o.multiply(r),r).multiply(p(this.config.opacity)).multiply(this.config.inFadeOpacity);e.glFragColor=u.add(m)}break;case"destination-in":{const u=new y(o.multiply(r).multiply(l),r.multiply(l)),m=new y(o.multiply(r),r).multiply(new y(p(this.config.opacity).multiply(this.config.inFadeOpacity)));e.glFragColor=u.add(m)}break;case"source-out":e.glFragColor=new y(s.multiply(l).multiply(p(r)),l.multiply(p(r)));break;case"destination-out":e.glFragColor=new y(o.multiply(r).multiply(p(l)),r.multiply(p(l)));break;case"source-atop":e.glFragColor=new y(s.multiply(l).multiply(r).add(o.multiply(r.multiply(p(l)))),r);break;case"destination-atop":e.glFragColor=new y(s.multiply(l.multiply(p(r))).add(o.multiply(r).multiply(l)),l);break;case"xor":e.glFragColor=new y(s.multiply(l.multiply(p(r))).add(o.multiply(r.multiply(p(l)))),l.multiply(p(r)).add(r.multiply(p(l))));break;case"multiply":e.glFragColor=new y(s.multiply(l).multiply(o.multiply(r)).add(s.multiply(l).multiply(p(r))).add(o.multiply(r).multiply(p(l))),l.add(r.multiply(p(l))));break;case"screen":e.glFragColor=new y(s.add(o).subtract(s.multiply(o)).multiply(l.multiply(r)).add(s.multiply(l).multiply(p(r))).add(o.multiply(r).multiply(p(l))),l.add(r.multiply(p(l))));break;case"overlay":{const u=new x(St(o.r,s.r),St(o.g,s.g),St(o.b,s.b));e.glFragColor=M(u,s,o,l,r)}break;case"darken":{const u=k(s,o);e.glFragColor=M(u,s,o,l,r)}break;case"lighter":e.glFragColor=new y(s.multiply(l).add(o.multiply(r)),l.add(r));break;case"lighten":{const u=qt(s,o);e.glFragColor=M(u,s,o,l,r)}break;case"color-dodge":{const u=Z(new x(vt(o.r,s.r),vt(o.g,s.g),vt(o.b,s.b)),new x(0),new x(1));e.glFragColor=M(u,s,o,l,r)}break;case"color-burn":{const u=new x(wt(o.r,s.r),wt(o.g,s.g),wt(o.b,s.b));e.glFragColor=M(u,s,o,l,r)}break;case"hard-light":{const u=new x(Dt(o.r,s.r),Dt(o.g,s.g),Dt(o.b,s.b));e.glFragColor=M(u,s,o,l,r)}break;case"soft-light":{const u=new x(Et(o.r,s.r),Et(o.g,s.g),Et(o.b,s.b));e.glFragColor=M(u,s,o,l,r)}break;case"difference":{const u=me(o.subtract(s));e.glFragColor=M(u,s,o,l,r)}break;case"exclusion":{const u=s.add(o).subtract(new h(2).multiply(s).multiply(o));e.glFragColor=M(u,s,o,l,r)}break;case"invert":e.glFragColor=new y(new x(1).subtract(o).multiply(l).multiply(r).add(o.multiply(r).multiply(p(l))),r);break;case"vivid-light":{const u=new x(Z(zt(o.r,s.r),new h(0),new h(1)),Z(zt(o.g,s.g),new h(0),new h(1)),Z(zt(o.b,s.b),new h(0),new h(1)));e.glFragColor=M(u,s,o,l,r)}break;case"hue":{const u=oe(s,o,o);e.glFragColor=M(u,s,o,l,r)}break;case"saturation":{const u=oe(o,s,o);e.glFragColor=M(u,s,o,l,r)}break;case"color":{const u=Gt(s,o);e.glFragColor=M(u,s,o,l,r)}break;case"luminosity":{const u=Gt(o,s);e.glFragColor=M(u,s,o,l,r)}break;case"plus":e.glFragColor=Z(new y(i.r.add(o.r),i.g.add(o.g),i.b.add(o.b),l.add(r)),new y(0),new y(1));break;case"minus":e.glFragColor=new y(Z(new x(o.r.subtract(i.r),o.g.subtract(i.g),o.b.subtract(i.b)),new x(0),new x(1)),r.multiply(l));break;case"average":{const u=o.add(s).divide(2);e.glFragColor=M(u,s,o,l,r)}break;case"reflect":{const u=Z(new x(Vt(o.r,s.r),Vt(o.g,s.g),Vt(o.b,s.b)),new x(0),new x(1));e.glFragColor=M(u,s,o,l,r)}break;default:e.glFragColor=i.multiply(this.config.opacity)}return e}}function M(n,t,e,i,a){return new y(n.multiply(i).multiply(a).add(t.multiply(i).multiply(p(a))).add(e.multiply(a).multiply(p(i))),i.add(a.multiply(p(i))))}function St(n,t){return new h(1).subtract(A(new h(.5),t)).multiply(p(new h(2).multiply(p(t).multiply(p(n))))).add(A(new h(.5),t).multiply(new h(2).multiply(t).multiply(n)))}function vt(n,t){return $(S(n,new h(0)),new h(0),$(S(t,new h(1)),new h(1),k(new h(1),n.divide(new h(1).subtract(t)))))}function wt(n,t){return $(S(n,new h(1)),new h(1),$(S(t,new h(0)),new h(0),p(k(new h(1),p(n).divide(t)))))}function Dt(n,t){return new h(1).subtract(A(new h(.5),t)).multiply(new h(2).multiply(t).multiply(n)).add(A(new h(.5),t).multiply(p(new h(2).multiply(p(t).multiply(p(n))))))}function Et(n,t){return de([te(t,new h(.5)),()=>{const e=new h(2).multiply(t),i=p(e),a=p(n);return n.subtract(i.multiply(n).multiply(a))}],[te(n,new h(.25)),()=>{const e=new h(2).multiply(t),i=Kt(e).multiply(n),a=new h(16).multiply(n).subtract(new h(12)).multiply(n).add(new h(3));return n.add(i.multiply(a))}],[!0,()=>{const e=new h(2).multiply(t),i=Kt(e),a=Ae(n).subtract(n);return n.add(i.multiply(a))}])}function zt(n,t){const e=p(A(new h(.5),t)).multiply(wt(n,new h(2).multiply(t))),i=A(new h(.5),t).multiply(vt(n,new h(2).multiply(Ze(t,.5))));return e.add(i)}function Ht(n){return k(k(n.r,n.g),n.b)}function we(n){return qt(qt(n.r,n.g),n.b)}function Ut(n){return Ne(n,new x(.3,.59,.11))}function ne(n){return we(n).subtract(Ht(n))}function di(n){const t=Ut(n),e=Ht(n),i=we(n);return de([pe(e,new h(0)),()=>{const a=n.subtract(t).multiply(t),s=t.subtract(e);return t.add(a.divide(s))}],[Wt(i,new h(1)),()=>{const a=n.subtract(t),s=p(t),o=a.multiply(s),l=i.subtract(t);return t.add(o.divide(l))}],[!0,n])}function Gt(n,t){const e=Ut(n),i=Ut(t).subtract(e);return di(n.add(new x(i)))}function oe(n,t,e){const i=Ht(n),a=ne(n),s=ne(t);return Gt($(Wt(a,new h(0)),()=>n.subtract(i).multiply(s).divide(a),new x(0)),e)}function Vt(n,t){return $(S(t,new h(1)),t,()=>{const e=p(t),i=n.multiply(n).divide(e);return k(i,new h(1))})}c([Ie],dt.prototype,"blendMode",void 0),c([w(K)],dt.prototype,"config",void 0),c([I(0,P(ve))],dt.prototype,"vertex",null),c([I(0,P(mi))],dt.prototype,"fragment",null);class fe extends $t{}c([Ct(0,F)],fe.prototype,"position",void 0);class pi extends Tt{}let jt=class extends ot{};c([w(G)],jt.prototype,"layerTexture",void 0),c([w(h)],jt.prototype,"opacity",void 0);let Lt=class extends kt{vertex(t){return{uv:t.position,glPosition:new y(t.position.subtract(new F(.5)).multiply(2),0,1)}}fragment(t){const e=new Ft;return e.glFragColor=j(this.config.layerTexture,t.uv).multiply(this.config.opacity),e}};c([w(jt)],Lt.prototype,"config",void 0),c([I(0,P(fe))],Lt.prototype,"vertex",null),c([I(0,P(pi))],Lt.prototype,"fragment",null);const Gi={shaders:{vertexShader:R("highlight/textured.vert"),fragmentShader:R("highlight/highlight.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])},ji={shaders:{vertexShader:R("highlight/textured.vert"),fragmentShader:R("highlight/blur.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])},T=!!Yt("esri-2d-profiler");let Yi=class{constructor(t,e){if(this._events=new Te,this._entries=new Map,this._timings=new Je(10),this._currentContainer=null,this._currentPass=null,this._currentBrush=null,this._currentSummary=null,!T)return;this._ext=Ke(t.gl,{}),this._debugOutput=e;const i=t.gl;if(!this.enableCommandLogging)return;let a;for(a in i)if(typeof i[a]=="function"){const s=i[a],o=a.includes("draw");i[a]=(...l)=>(this._events.emit("command",{container:this._currentContainer,pass:this._currentPass,brush:this._currentBrush,method:a,args:l,isDrawCommand:o}),this._currentSummary&&(this._currentSummary.commands++,o&&this._currentSummary.drawCommands++),s.apply(i,l))}}get enableCommandLogging(){return!(typeof T=="object"&&T.disableCommands)}recordContainerStart(t){T&&(this._currentContainer=t)}recordContainerEnd(){T&&(this._currentContainer=null)}recordPassStart(t){T&&(this._currentPass=t,this._initSummary())}recordPassEnd(){T&&(this._currentPass=null,this._emitSummary())}recordBrushStart(t){T&&(this._currentBrush=t)}recordBrushEnd(){T&&(this._currentBrush=null)}recordStart(t){if(T&&this._ext!=null){if(this._entries.has(t)){const i=this._entries.get(t),a=this._ext.resultAvailable(i.query),s=this._ext.disjoint();if(a&&!s){const o=this._ext.getResult(i.query)/1e6;let l=0;if(this._timings.enqueue(o)!=null){const m=this._timings.entries,g=m.length;let v=0;for(const d of m)v+=d;l=v/g}const r=o.toFixed(2),u=l?l.toFixed(2):"--";this.enableCommandLogging?(console.groupCollapsed(`Frame report for ${t}, ${r} ms (${u} last 10 avg)
${i.commandsLen} Commands (${i.drawCommands} draw)`),console.log("RenderPass breakdown: "),console.table(i.summaries),console.log("Commands: ",i.commands),console.groupEnd()):console.log(`Frame report for ${t}, ${r} ms (${u} last 10 avg)`),this._debugOutput.innerHTML=`${r} (${u})`}for(const o of i.handles)o.remove();this._ext.deleteQuery(i.query),this._entries.delete(t)}const e={name:t,query:this._ext.createQuery(),commands:[],commandsLen:0,drawCommands:0,summaries:[],handles:[]};this.enableCommandLogging&&(e.handles.push(this._events.on("command",i=>{e.commandsLen++,e.commands.push(i),i.isDrawCommand&&e.drawCommands++})),e.handles.push(this._events.on("summary",i=>{e.summaries.push(i)}))),this._ext.beginTimeElapsed(e.query),this._entries.set(t,e)}}recordEnd(t){T&&this._ext!=null&&this._entries.has(t)&&this._ext.endTimeElapsed()}_initSummary(){this.enableCommandLogging&&(this._currentSummary={container:this._currentContainer,pass:this._currentPass,drawCommands:0,commands:0})}_emitSummary(){this.enableCommandLogging&&this._currentSummary&&this._events.emit("summary",this._currentSummary)}};const D=1,bt=0,it=1,st=2;let gi=class{constructor(t,e,i){this._width=t*i,this._height=e*i,this._pixelRatio=i;const a=Math.ceil(this._width/D),s=Math.ceil(this._height/D);this._cols=a,this._rows=s,this._cells=ni.create(a*s)}insertMetrics(t){this._markMetrics(t)}hasCollision(t){let e=0;for(const{transformedX:i,transformedY:a,width:s,height:o}of t.bounds){const l=s*this._pixelRatio,r=o*this._pixelRatio,u=i*this._pixelRatio,m=a*this._pixelRatio;switch(this._collide(u,m,l,r)){case st:return st;case it:e++}}return e===t.bounds.length?it:bt}getCellId(t,e){return t+e*this._cols}has(t){return this._cells.has(t)}hasRange(t,e){return this._cells.hasRange(t,e)}set(t){this._cells.set(t)}setRange(t,e){this._cells.setRange(t,e)}_collide(t,e,i,a){const s=t-i/2,o=e-a/2,l=s+i,r=o+a;if(l<0||r<0||s>this._width||o>this._height)return it;const u=z(Math.floor(s/D),0,this._cols),m=z(Math.floor(o/D),0,this._rows),g=z(Math.ceil(l/D),0,this._cols),v=z(Math.ceil(r/D),0,this._rows);for(let d=m;d<=v;d++)for(let _=u;_<=g;_++){const b=this.getCellId(_,d);if(this.has(b))return st}return bt}_mark(t,e,i,a){const s=t-i/2,o=e-a/2,l=s+i,r=o+a,u=z(Math.floor(s/D),0,this._cols),m=z(Math.floor(o/D),0,this._rows),g=z(Math.ceil(l/D),0,this._cols),v=z(Math.ceil(r/D),0,this._rows);for(let d=m;d<=v;d++)for(let _=u;_<=g;_++){const b=this.getCellId(_,d);this.set(b)}return!1}_markMetrics(t){for(const{transformedX:e,transformedY:i,width:a,height:s}of t.bounds){const o=a*this._pixelRatio,l=s*this._pixelRatio,r=e*this._pixelRatio,u=i*this._pixelRatio;this._mark(r,u,o,l)}}};const H=254,pt=255,Q=0;function B(n,t){const e=n.children.slice();e.sort((i,a)=>i.tileAge-a.tileAge),e.forEach(i=>{i.labelMetrics!=null&&i.isReady&&t(i,i.labelMetrics)})}function ae(n,t){return(!n.minScale||n.minScale>=t)&&(!n.maxScale||n.maxScale<=t)}class _i{run(t,e,i,a){var o;const s=[];for(let l=t.length-1;l>=0;l--){const r=t[l];(o=r.labelingCollisionInfos)!=null&&o.length&&s.push(...r.labelingCollisionInfos)}Yt("esri-2d-update-debug")&&s.length&&console.debug("CollisionEngine.run"),this._transformMetrics(s),this._runCollision(s,e,i,a);for(const l of s)l.container.requestRender()}_runCollision(t,e,i,a){const[s,o]=e.state.size,l=new gi(s,o,e.pixelRatio);for(const{container:r,deconflictionEnabled:u,visible:m}of t){const g=r.attributeView;u?m?(this._prepare(r),this._collideVisible(l,r,i,a),this._collideInvisible(l,r)):B(r,(v,d)=>{for(const _ of d)g.setLabelMinZoom(_.entityTexel,pt)}):B(r,(v,d)=>{for(const _ of d)ae(_,i)?(g.setLabelMinZoom(_.entityTexel,Q),m&&l.insertMetrics(_)):g.setLabelMinZoom(_.entityTexel,H)})}}_isFiltered(t,e,i){const a=e.getFilterFlags(t),s=!i.hasFilter||!!(a&ti),o=i.featureEffect==null||i.featureEffect.excludedLabelsVisible||!!(a&ei);return!(s&&o)}_prepare(t){const e=t.attributeView,i=new Set;B(t,(a,s)=>{for(const o of s){const l=o.entityTexel;if(!i.has(l)){if(i.add(l),this._isFiltered(l,e,t.layerView)){e.setLabelMinZoom(l,H);continue}e.getLabelMinZoom(l)!==Q?e.setLabelMinZoom(l,pt):e.setLabelMinZoom(l,Q)}}})}_collideVisible(t,e,i,a){const s=e.attributeView,o=new Set;B(e,(l,r)=>{for(let u=0;u<r.length;u++){const m=r[u].entityTexel;if(o.has(m))continue;if(l.key.level!==a){s.setLabelMinZoom(m,H),o.add(m);continue}if(!ae(r[u],i)){s.setLabelMinZoom(m,H),o.add(m);continue}if(s.getLabelMinZoom(m)!==0){o.add(m);continue}let g=!1,v=!0;const d=u;let _=u;for(;_<r.length;_++){const b=r[_];if(b.entityTexel!==m)break;if(!g)switch(t.hasCollision(b)){case it:break;case st:g=!0,v=!1;break;case bt:v=!1}}if(!g)for(let b=d;b<_;b++)t.insertMetrics(r[b]);u=_-1,v||(o.add(m),s.setLabelMinZoom(m,g?H:Q))}})}_collideInvisible(t,e){const i=e.attributeView,a=new Set;B(e,(s,o)=>{for(let l=0;l<o.length;l++){const r=o[l].entityTexel;if(a.has(r))continue;if(i.getLabelMinZoom(r)!==pt){a.add(r);continue}let u=!1,m=!0;const g=l;let v=l;for(;v<o.length;v++){const d=o[v];if(d.entityTexel!==r)break;if(!u)switch(t.hasCollision(d)){case it:break;case st:u=!0,m=!1;break;case bt:m=!1}}if(!u)for(let d=g;d<v;d++)t.insertMetrics(o[d]);l=v-1,m||(a.add(r),i.setLabelMinZoom(r,u?pt:Q))}})}_transformMetrics(t){for(const{container:e,geometryType:i,vvEvaluators:a}of t)B(e,(s,o)=>{var m;const l=e.attributeView,r=s.transforms.labelMat2d;r[4]=Math.round(r[4]),r[5]=Math.round(r[5]);const u=i==="polyline";for(const g of o){const{entityTexel:v,anchorX:d,anchorY:_}=g;let b=((m=g.referenceBounds)==null?void 0:m.size)??0;const at=a[0];if(at!=null){const C=at(l.getVisualVariableData(v,si.SIZE));b=isNaN(C)||C==null||C===1/0?b:C}const rt=ii+b/2,X=g.directionX*rt,Qt=g.directionY*rt;for(const C of g.bounds){let lt=d,ut=_;if(u){const ht=d+C.x+X,ct=_+C.y+Qt;lt=r[0]*ht+r[2]*ct+r[4],ut=r[1]*ht+r[3]*ct+r[5];const Ce=lt,$e=ut;C.transformedX=Math.floor(Ce),C.transformedY=Math.floor($e)}else{lt=r[0]*d+r[2]*_+r[4],ut=r[1]*d+r[3]*_+r[5];const ht=lt+C.x+X,ct=ut+C.y+Qt;C.transformedX=ht,C.transformedY=ct}}}})}}const yi=32;let J=class extends Y{constructor(n){super(n),this._lastUpdate=0,this.collisionEngine=new _i,this.lastUpdateId=-1,this.updateRequested=!1,this.view=null}get updating(){return Yt("esri-2d-log-updating")&&console.log(`Updating LabelManager ${this.updateRequested}:
-> updateRequested: ${this.updateRequested}`),this.updateRequested}update(n){const t=performance.now();t-this._lastUpdate>=yi?(this._lastUpdate=t,this.doUpdate(n)):this.requestUpdate()}viewChange(){this.requestUpdate()}requestUpdate(){var n;this.updateRequested||(this.updateRequested=!0,(n=this.view)==null||n.requestUpdate())}processUpdate(n){this.updateRequested&&(this.updateRequested=!1,this.update(n))}doUpdate(n){const t=this.view;if(t)try{const e=n.state.scale,i=t.featuresTilingScheme.getClosestInfoForScale(e).level;this.collisionEngine.run(t.allLayerViews.items,n,e,i)}catch{}}};c([f()],J.prototype,"updateRequested",void 0),c([f()],J.prototype,"updating",null),c([f()],J.prototype,"view",void 0),J=c([W("esri.views.2d.LabelManager")],J);const gt="esri-zoom-box",_t={container:`${gt}__container`,overlay:`${gt}__overlay`,background:`${gt}__overlay-background`,box:`${gt}__outline`},Rt={zoom:"Shift",counter:"Control"};let tt=class extends Y{constructor(t){super(t),this._container=null,this._overlay=null,this._backgroundShape=null,this._boxShape=null,this._box={x:0,y:0,width:0,height:0},this._rafId=null,this._redraw=this._redraw.bind(this)}destroy(){this.view=null}set view(t){this.removeAllHandles(),this._destroyOverlay(),this._set("view",t),t&&this.addHandles([t.on("drag",[Rt.zoom],e=>this._handleDrag(e,1),se.INTERNAL),t.on("drag",[Rt.zoom,Rt.counter],e=>this._handleDrag(e,-1),se.INTERNAL)])}_start(){this._createContainer(),this._createOverlay(),this.navigation.begin()}_update(t,e,i,a){this._box.x=t,this._box.y=e,this._box.width=i,this._box.height=a,this._rafId||(this._rafId=requestAnimationFrame(this._redraw))}_end(t,e,i,a,s){const o=this.view,l=o.toMap(ke(t+.5*i,e+.5*a));let r=Math.max(i/o.width,a/o.height);s===-1&&(r=1/r),this._destroyOverlay(),this.navigation.end(),o.goTo({center:l,scale:o.scale*r},{animationMode:"always",duration:ge()})}_updateBox(t,e,i,a){const s=this._boxShape;s.setAttributeNS(null,"x",""+t),s.setAttributeNS(null,"y",""+e),s.setAttributeNS(null,"width",""+i),s.setAttributeNS(null,"height",""+a),s.setAttributeNS(null,"class",_t.box)}_updateBackground(t,e,i,a){this._backgroundShape.setAttributeNS(null,"d",this._toSVGPath(t,e,i,a,this.view.width,this.view.height))}_createContainer(){const t=document.createElement("div");t.className=_t.container,this.view.root.appendChild(t),this._container=t}_createOverlay(){const t=this.view.width,e=this.view.height,i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttributeNS(null,"d","M 0 0 L "+t+" 0 L "+t+" "+e+" L 0 "+e+" Z"),i.setAttributeNS(null,"class",_t.background);const a=document.createElementNS("http://www.w3.org/2000/svg","rect"),s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),s.setAttributeNS(null,"class",_t.overlay),s.appendChild(i),s.appendChild(a),this._container.appendChild(s),this._backgroundShape=i,this._boxShape=a,this._overlay=s}_destroyOverlay(){this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container),this._container=this._backgroundShape=this._boxShape=this._overlay=null}_toSVGPath(t,e,i,a,s,o){const l=t+i,r=e+a;return"M 0 0 L "+s+" 0 L "+s+" "+o+" L 0 "+o+" ZM "+t+" "+e+" L "+t+" "+r+" L "+l+" "+r+" L "+l+" "+e+" Z"}_handleDrag(t,e){const i=t.x,a=t.y,s=t.origin.x,o=t.origin.y;let l,r,u,m;switch(i>s?(l=s,u=i-s):(l=i,u=s-i),a>o?(r=o,m=a-o):(r=a,m=o-a),t.action){case"start":this._start();break;case"update":this._update(l,r,u,m);break;case"end":this._end(l,r,u,m,e)}t.stopPropagation()}_redraw(){if(!this._rafId||(this._rafId=null,!this._overlay))return;const{x:t,y:e,width:i,height:a}=this._box;this._updateBox(t,e,i,a),this._updateBackground(t,e,i,a),this._rafId=requestAnimationFrame(this._redraw)}};c([f()],tt.prototype,"navigation",void 0),c([f()],tt.prototype,"view",null),tt=c([W("esri.views.2d.navigation.ZoomBox")],tt);const vi=tt;let O=class extends Y{constructor(t){super(t),this.animationTime=0,this.momentumEstimator=new li(500,6,.92),this.momentum=null,this.tmpMomentum=he(),this.momentumFinished=!1,this.viewpoint=new xt({targetGeometry:new Mt,scale:0,rotation:0}),this._previousDrag=null,ce(()=>this.momentumFinished,()=>this.navigation.stop())}begin(t,e){this.navigation.begin(),this.momentumEstimator.reset(),this.addToEstimator(e),this._previousDrag=e}update(t,e){this.addToEstimator(e);let i=e.center.x,a=e.center.y;const s=this._previousDrag;i=s?s.center.x-i:-i,a=s?a-s.center.y:a,t.viewpoint=ft(this.viewpoint,t.viewpoint,[i||0,a||0]),this._previousDrag=e}end(t,e){this.addToEstimator(e);const i=t.navigation.effectiveMomentumEnabled;this.momentum=i?this.momentumEstimator.evaluateMomentum():null,this.animationTime=0,this.momentum&&this.onAnimationUpdate(t),this._previousDrag=null,this.navigation.end()}addToEstimator(t){const e=t.center.x,i=t.center.y,a=Fe(-e,i),s=Se(-e,i,0);this.momentumEstimator.add(a,s,.001*t.timestamp)}onAnimationUpdate(t){var e;(e=this.navigation.animationManager)==null||e.animateContinuous(t.viewpoint,(i,a)=>{const{momentum:s,animationTime:o,tmpMomentum:l}=this,r=.001*a;if(!(this.momentumFinished=!s||s.isFinished(o))){const u=s.valueDelta(o,r);_e(l,s.direction,u),ft(i,i,l),t.constraints.constrainByGeometry(i)}this.animationTime+=r})}stopMomentumNavigation(){this.momentum&&(this.momentumEstimator.reset(),this.momentum=null,this.navigation.stop())}};c([f()],O.prototype,"momentumFinished",void 0),c([f()],O.prototype,"viewpoint",void 0),c([f()],O.prototype,"navigation",void 0),O=c([W("esri.views.2d.navigation.actions.Pan")],O);const wi=O;let U=class extends Y{constructor(t){super(t),this._animationTime=0,this._momentumFinished=!1,this._previousAngle=0,this._previousRadius=0,this._previousCenter=null,this._rotationMomentumEstimator=new ui(.6,.15,.95),this._rotationDirection=1,this._startAngle=0,this._startRadius=0,this._updateTimestamp=null,this._zoomDirection=1,this._zoomMomentumEstimator=new ci,this._zoomOnly=null,this.viewpoint=new xt({targetGeometry:new Mt,scale:0,rotation:0}),this.zoomMomentum=null,this.rotateMomentum=null,this.addHandles(ce(()=>this._momentumFinished,()=>this.navigation.stop()))}begin(t,e){this.navigation.begin(),this._rotationMomentumEstimator.reset(),this._zoomMomentumEstimator.reset(),this._zoomOnly=null,this._previousAngle=this._startAngle=e.angle,this._previousRadius=this._startRadius=e.radius,this._previousCenter=e.center,this._updateTimestamp=null,t.constraints.rotationEnabled&&this.addToRotateEstimator(0,e.timestamp),this.addToZoomEstimator(e,1)}update(t,e){this._updateTimestamp===null&&(this._updateTimestamp=e.timestamp);const i=e.angle,a=e.radius,s=e.center,o=Math.abs(180*(i-this._startAngle)/Math.PI),l=Math.abs(a-this._startRadius),r=this._startRadius/a;if(this._previousRadius&&this._previousCenter){const u=a/this._previousRadius;let m=180*(i-this._previousAngle)/Math.PI;this._rotationDirection=m>=0?1:-1,this._zoomDirection=u>=1?1:-1,t.constraints.rotationEnabled?(this._zoomOnly===null&&e.timestamp-this._updateTimestamp>200&&(this._zoomOnly=l-o>0),this._zoomOnly===null||this._zoomOnly?m=0:this.addToRotateEstimator(i-this._startAngle,e.timestamp)):m=0,this.addToZoomEstimator(e,r),this.navigation.setViewpoint([s.x,s.y],1/u,m,[this._previousCenter.x-s.x,s.y-this._previousCenter.y])}this._previousAngle=i,this._previousRadius=a,this._previousCenter=s}end(t){this.rotateMomentum=this._rotationMomentumEstimator.evaluateMomentum(),this.zoomMomentum=this._zoomMomentumEstimator.evaluateMomentum(),this._animationTime=0,(this.rotateMomentum||this.zoomMomentum)&&this.onAnimationUpdate(t),this.navigation.end()}addToRotateEstimator(t,e){this._rotationMomentumEstimator.add(t,.001*e)}addToZoomEstimator(t,e){this._zoomMomentumEstimator.add(e,.001*t.timestamp)}canZoomIn(t){const e=t.scale,i=t.constraints.effectiveMaxScale;return i===0||e>i}canZoomOut(t){const e=t.scale,i=t.constraints.effectiveMinScale;return i===0||e<i}onAnimationUpdate(t){var e;(e=this.navigation.animationManager)==null||e.animateContinuous(t.viewpoint,(i,a)=>{const s=!this.canZoomIn(t)&&this._zoomDirection>1||!this.canZoomOut(t)&&this._zoomDirection<1,o=!this.rotateMomentum||this.rotateMomentum.isFinished(this._animationTime),l=s||!this.zoomMomentum||this.zoomMomentum.isFinished(this._animationTime),r=.001*a;if(this._momentumFinished=o&&l,!this._momentumFinished){const u=this.rotateMomentum?Math.abs(this.rotateMomentum.valueDelta(this._animationTime,r))*this._rotationDirection*180/Math.PI:0;let m=this.zoomMomentum?Math.abs(this.zoomMomentum.valueDelta(this._animationTime,r)):1;const g=nt(),v=nt();if(this._previousCenter){Nt(g,this._previousCenter.x,this._previousCenter.y),De(v,t.size,t.padding),Ee(g,g,v);const{constraints:d,scale:_}=t,b=_*m;m<1&&!d.canZoomInTo(b)?(m=_/d.effectiveMaxScale,this.zoomMomentum=null,this.rotateMomentum=null):m>1&&!d.canZoomOutTo(b)&&(m=_/d.effectiveMinScale,this.zoomMomentum=null,this.rotateMomentum=null),ze(i,t.viewpoint,m,u,g,t.size),t.constraints.constrainByGeometry(i)}}this._animationTime+=r})}stopMomentumNavigation(){(this.rotateMomentum||this.zoomMomentum)&&(this.rotateMomentum&&(this._rotationMomentumEstimator.reset(),this.rotateMomentum=null),this.zoomMomentum&&(this._zoomMomentumEstimator.reset(),this.zoomMomentum=null),this.navigation.stop())}};c([f()],U.prototype,"_momentumFinished",void 0),c([f()],U.prototype,"viewpoint",void 0),c([f()],U.prototype,"navigation",void 0),U=c([W("esri.views.2d.navigation.actions.Pinch")],U);const fi=U,It=nt(),re=nt();let et=class extends Y{constructor(t){super(t),this._previousCenter=nt(),this.viewpoint=new xt({targetGeometry:new Mt,scale:0,rotation:0})}begin(t,e){this.navigation.begin(),Nt(this._previousCenter,e.center.x,e.center.y)}update(t,e){const{state:{size:i,padding:a}}=t;Nt(It,e.center.x,e.center.y),Ve(re,i,a),t.viewpoint=Bt(this.viewpoint,t.state.paddedViewState.viewpoint,Le(re,this._previousCenter,It)),Re(this._previousCenter,It)}end(){this.navigation.end()}};c([f()],et.prototype,"viewpoint",void 0),c([f()],et.prototype,"navigation",void 0),et=c([W("esri.views.2d.navigation.actions.Rotate")],et);const bi=et,q=10,le=1,Pt=new xt({targetGeometry:new Mt}),At=[0,0],ue=250;let E=class extends Y{constructor(n){super(n),this._endTimer=null,this._lastEventTimestamp=null,this.animationManager=null,this.interacting=!1}initialize(){this.pan=new wi({navigation:this}),this.rotate=new bi({navigation:this}),this.pinch=new fi({navigation:this}),this.zoomBox=new vi({view:this.view,navigation:this})}destroy(){this.pan=mt(this.pan),this.rotate=mt(this.rotate),this.pinch=mt(this.pinch),this.zoomBox=mt(this.zoomBox),this.animationManager=null}begin(){this.stop(),this._set("interacting",!0)}end(){this._lastEventTimestamp=performance.now(),this._startTimer(ue)}async zoom(n,t=this._getDefaultAnchor()){if(this.begin(),this.view.constraints.snapToZoom&&this.view.constraints.effectiveLODs)return n<1?this.zoomIn(t):this.zoomOut(t);this.setViewpoint(t,n,0,[0,0])}async zoomIn(n){const t=this.view,e=t.constraints.snapToNextScale(t.scale);return this._zoomToScale(e,n)}async zoomOut(n){const t=this.view,e=t.constraints.snapToPreviousScale(t.scale);return this._zoomToScale(e,n)}setViewpoint(n,t,e,i){this.begin(),this.view.stateManager.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,n,t,e,i),this.end()}setViewpointImmediate(n,t=0,e=[0,0],i=this._getDefaultAnchor()){this.view.stateManager.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,i,n,t,e)}continuousRotateClockwise(){var t;const n=this.view.viewpoint;(t=this.animationManager)==null||t.animateContinuous(n,e=>{Bt(e,e,-le)})}continuousRotateCounterclockwise(){var t;const n=this.view.viewpoint;(t=this.animationManager)==null||t.animateContinuous(n,e=>{Bt(e,e,le)})}resetRotation(){this.view.constraints.rotationEnabled&&(this.view.rotation=0)}continuousPanLeft(){this._continuousPan([-q,0])}continuousPanRight(){this._continuousPan([q,0])}continuousPanUp(){this._continuousPan([0,q])}continuousPanDown(){this._continuousPan([0,-q])}continuousPanVector({x:n,y:t}){this._continuousPan([n*q,t*q])}stop(){var n;this.pan.stopMomentumNavigation(),(n=this.animationManager)==null||n.stop(),this.end(),this._endTimer!==null&&(clearTimeout(this._endTimer),this._endTimer=null,this._set("interacting",!1))}_continuousPan(n){var e;const t=this.view.viewpoint;(e=this.animationManager)==null||e.animateContinuous(t,i=>{ft(i,i,n),this.view.constraints.constrainByGeometry(i)})}_startTimer(n){return this._endTimer!==null||(this._endTimer=setTimeout(()=>{this._endTimer=null;const t=performance.now()-(this._lastEventTimestamp??0);t<ue?this._endTimer=this._startTimer(t):this._set("interacting",!1)},n)),this._endTimer}_getDefaultAnchor(){const{size:n,padding:{left:t,right:e,top:i,bottom:a}}=this.view;return At[0]=.5*(n[0]-e+t),At[1]=.5*(n[1]-a+i),At}async _zoomToScale(n,t=this._getDefaultAnchor()){const{view:e}=this,{constraints:i,scale:a,viewpoint:s,size:o,padding:l}=e,r=i.canZoomInTo(n),u=i.canZoomOutTo(n);if(!(n<a&&!r||n>a&&!u))return Jt(Pt,s,n/a,0,t,o,l),i.constrainByGeometry(Pt),e.goTo(Pt,{animate:!0,animationMode:"always",duration:ge(),pickClosestTarget:!1})}_scaleRotateTranslateViewpoint(n,t,e,i,a){const{view:s}=this,{size:o,padding:l,constraints:r,scale:u,viewpoint:m}=s,g=u*e,v=r.canZoomInTo(g),d=r.canZoomOutTo(g);return(e<1&&!v||e>1&&!d)&&(e=1),ft(m,m,a),Jt(n,m,e,i,t,o,l),r.constrainByGeometry(n)}};c([f()],E.prototype,"animationManager",void 0),c([f({type:Boolean,readOnly:!0})],E.prototype,"interacting",void 0),c([f()],E.prototype,"pan",void 0),c([f()],E.prototype,"pinch",void 0),c([f()],E.prototype,"rotate",void 0),c([f()],E.prototype,"view",void 0),c([f()],E.prototype,"zoomBox",void 0),E=c([W("esri.views.2d.navigation.MapViewNavigation")],E);const ts=E;class be extends $t{}c([Ct(0,F)],be.prototype,"position",void 0);class xi extends Tt{}class V extends ot{}c([w(G)],V.prototype,"readbackTexture",void 0),c([w(G)],V.prototype,"maskTexture",void 0),c([w(G)],V.prototype,"overlayTexture",void 0),c([w(y)],V.prototype,"background",void 0),c([w(y)],V.prototype,"drawPos",void 0),c([w(h)],V.prototype,"maskEnabled",void 0),c([w(h)],V.prototype,"overlayEnabled",void 0);class Zt extends kt{vertex(t){const e=t.position,i=t.position.subtract(new F(.5)).multiply(this.config.drawPos.zw),a=this.config.drawPos.xy.add(i);return{glPosition:new y(a,0,1),texCoord:e}}fragment(t){let e=j(this.config.readbackTexture,Mi(t.texCoord));e=e.add(new h(1).subtract(e.a)).multiply(this.config.background);const i=$(S(this.config.maskEnabled,new h(1)),j(this.config.maskTexture,t.texCoord).a,new h(1));e=e.multiply(i);const a=$(S(this.config.overlayEnabled,new h(1)),j(this.config.overlayTexture,t.texCoord),new y(0)),s=new Ft;return s.glFragColor=a.add(new h(1).subtract(a.a).multiply(e)),s}}function Mi(n){const t=n.multiply(new F(2)).subtract(1);return $(S(t.x,new h(0)).and(S(t.y,new h(0))),new F(.5),()=>{const e=Be(t.y,t.x),i=qe(Ue(t),new h(Oe)),a=new F(Ge(e),je(e));return i.multiply(a).multiply(new F(.5)).add(new h(.5))})}c([w(V)],Zt.prototype,"config",void 0),c([I(0,P(be))],Zt.prototype,"vertex",null),c([I(0,P(xi))],Zt.prototype,"fragment",null);class xe extends $t{}c([Ct(0,F)],xe.prototype,"position",void 0);class Ci extends Tt{}class Me extends ot{}c([w(Ye)],Me.prototype,"dvs",void 0);class N extends ot{}c([w(h)],N.prototype,"halfWidth",void 0),c([w(h)],N.prototype,"aaWidth",void 0),c([w(h)],N.prototype,"pxPerCell",void 0),c([w(y)],N.prototype,"minorLineColor",void 0),c([w(y)],N.prototype,"majorLineColor",void 0),c([w(Ot)],N.prototype,"majorLineInterval",void 0);class yt extends kt{vertex(t){const e=t.position.multiply(2).subtract(1);return{gridPos:this.transform.dvs.multiply(new x(e,1)).xy,glPosition:new y(e,0,1)}}fragment(t){const e=me(t.gridPos),i=We(e),a=k(i.x,new h(1).subtract(i.x)),s=k(i.y,new h(1).subtract(i.y)),o=new F(a,s).multiply(this.config.pxPerCell).subtract(this.config.halfWidth),l=k(o.x,o.y),r=new h(1).subtract(Xe(new h(0),this.config.aaWidth,l)),u=new Ot(ee(e.x)),m=new Ot(ee(e.y)),g=new h(ie(u,this.config.majorLineInterval)),v=new h(ie(m,this.config.majorLineInterval)),d=$(pe(o.x,o.y),g,v),_=Wt(He(A(o.x,this.config.aaWidth),A(o.y,this.config.aaWidth)),new h(.5)),b=k(g,v),at=$(_,b,d),rt=Qe(this.config.majorLineColor,this.config.minorLineColor,k(at,new h(1))),X=new Ft;return X.glFragColor=rt.multiply(r),X}}c([w(Me)],yt.prototype,"transform",void 0),c([w(N)],yt.prototype,"config",void 0),c([I(0,P(xe))],yt.prototype,"vertex",null),c([I(0,P(Ci))],yt.prototype,"fragment",null);export{dt as D,Zt as E,yt as S,ji as a,J as b,Bi as e,Yi as n,qi as r,Gi as t,Lt as v,ts as y};
//# sourceMappingURL=GridShader-DtgbYQZI.js.map
