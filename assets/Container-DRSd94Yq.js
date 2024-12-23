import{j as r,m as h,k as p,ar as _,aB as u,T as g,c0 as b,g0 as m,aK as v,aL as f}from"./index-Cj37dcSI.js";import{e as R}from"./MapView-DAke9pUl.js";import{a as y}from"./EffectView-DPBerrxF.js";let n=class extends _{constructor(i){super(i),this.computedOpacity=1,this.computedVisible=!0,this.opacity=1,this.visible=!0,this._fadeOutResolver=null,this._fadeInResolver=null}get transitioning(){return(this._fadeOutResolver||!this.visible?0:this.opacity)!==this.computedOpacity}endTransition(){var i,t;(i=this._fadeInResolver)==null||i.call(this),(t=this._fadeOutResolver)==null||t.call(this),this._fadeInResolver=this._fadeOutResolver=null,this.computedOpacity=this.visible?this.opacity:0}fadeIn(){var i;return this._fadeInResolver||(this.opacity=1,this.computedOpacity=0,(i=this._fadeOutResolver)==null||i.call(this),this._fadeOutResolver=null,this._fadeInResolver=u()),this._fadeInResolver.promise}fadeOut(){var i;return this._fadeOutResolver||(this.opacity=0,(i=this._fadeInResolver)==null||i.call(this),this._fadeInResolver=null,this._fadeOutResolver=u()),this._fadeOutResolver.promise}transitionStep(i,t){var a,l;const e=g("mapview-transitions-duration"),s=e?1/e:0;if(s===0)this.computedOpacity=this.opacity,this.computedVisible=this.visible;else{const o=this._fadeOutResolver||!this.visible?0:this.opacity,d=this.computedOpacity;if(d===o)this.computedVisible=this.visible;else{const c=i*s;this.computedOpacity=d>o?Math.max(o,d-c):Math.min(o,d+c),this.computedVisible=this.computedOpacity>0}}this.transitioning||((a=this._fadeInResolver)==null||a.call(this),(l=this._fadeOutResolver)==null||l.call(this),this._fadeOutResolver=this._fadeInResolver=null)}};r([h()],n.prototype,"computedOpacity",void 0),r([h()],n.prototype,"computedVisible",void 0),r([h()],n.prototype,"opacity",void 0),r([h()],n.prototype,"visible",void 0),r([h()],n.prototype,"transitioning",null),r([h()],n.prototype,"_fadeOutResolver",void 0),r([h()],n.prototype,"_fadeInResolver",void 0),n=r([p("esri.views.2d.engine.transitions.FadeTransition")],n);class O extends b{constructor(){super(...arguments),this._transitionables=null,this._clips=null,this._fadeTransition=null,this._isReady=!1,this._opacity=1,this.parent=null,this._stage=null,this._visible=!0}get computedOpacity(){var t;return((t=this._fadeTransition)==null?void 0:t.computedOpacity)??this.opacity}get clips(){return this._clips}set clips(t){this._clips=t,this.requestRender()}get fadeTransitionEnabled(){return this._fadeTransition!==null}set fadeTransitionEnabled(t){!this._fadeTransition&&t?(this._fadeTransition=new n({opacity:this.opacity,visible:this.visible}),this.addTransitionable(this._fadeTransition)):this._fadeTransition&&!t&&(this.removeTransitionable(this._fadeTransition),this._fadeTransition=null)}get inFadeTransition(){var t;return((t=this._fadeTransition)==null?void 0:t.transitioning)??!1}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this._fadeTransition&&(this._fadeTransition.opacity=this._opacity),this.requestRender())}get stage(){return this._stage}set stage(t){var s;if(this._stage===t)return;const e=this._stage;this._stage=t,t?(s=this._stage)!=null&&s.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):e==null||e.trashDisplayObject(this)}get transforms(){return this._transforms==null&&(this._transforms=this._createTransforms()),this._transforms}get transitioning(){return this.isTransitioning()}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this._fadeTransition&&(this._fadeTransition.visible=this._visible),this.requestRender())}get hasLabels(){return!1}get hasHighlight(){return!1}get hasBlending(){return!1}addTransitionable(t){this._transitionables??(this._transitionables=[]),this._transitionables.push(t),this.requestRender()}removeTransitionable(t){t.endTransition(),this._transitionables&&m(this._transitionables,t),this.requestRender()}fadeIn(){this.fadeTransitionEnabled=!0;const t=this._fadeTransition.fadeIn();return this.opacity=1,this.requestRender(),t}fadeOut(){this.fadeTransitionEnabled=!0;const t=this._fadeTransition.fadeOut();return this.opacity=0,this.requestRender(),t}endTransitions(){if(this._transitionables){for(const t of this._transitionables)t.endTransition();this.requestRender()}}beforeRender(t){this.transitionStep(t.deltaTime,t.state.scale),this.setTransform(t.state)}afterRender(t){this.transitioning&&this.requestRender()}remove(){var t;(t=this.parent)==null||t.removeChild(this)}setTransform(t){}processRender(t){var e;this.stage&&(((e=this._fadeTransition)==null?void 0:e.computedVisible)??this.visible)&&this.doRender(t)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this.endTransitions(),this.onDetach(),this.emit("detach")}isTransitioning(){var t;return((t=this._transitionables)==null?void 0:t.some(e=>e.transitioning))??!1}transitionStep(t,e){if(this._transitionables)for(const s of this._transitionables)s.transitionStep(t,e)}onAttach(){}onDetach(){}doRender(t){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}let w=class extends O{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this._children=[],this._childrenObservable=new v,this._effectView=null,this._highlightGradient=null}get blendMode(){return this._blendMode}set blendMode(t){this._blendMode=t,this.requestRender()}get children(){return f(this._childrenObservable),this._children}get clips(){return this._clips}set clips(t){this._clips=t,this.children.forEach(e=>e.clips=t)}get computedEffects(){var t;return((t=this._effectView)==null?void 0:t.effects)??null}get effect(){var t;return((t=this._effectView)==null?void 0:t.effect)??""}set effect(t){(this._effectView||t)&&(this._effectView||(this._effectView=new y,this.addTransitionable(this._effectView)),this._effectView.effect=t,this.requestRender())}get highlightGradient(){return this._highlightGradient}set highlightGradient(t){this._highlightGradient=t,this.requestRender()}get hasBlending(){return!!this.blendMode}get hasHighlight(){return this.children.some(t=>t.hasHighlight)}get hasLabels(){return this.children.some(t=>t.hasLabels)}get requiresDedicatedFBO(){return this.children.some(t=>"blendMode"in t&&t.blendMode&&t.blendMode!=="normal")}get isReady(){return this.children.every(t=>t.isReady)}get sortFunction(){return this._sortFunction}set sortFunction(t){this._sortFunction=t,t&&(this._needsSort=!0)}doRender(t){var a;const e=this.createRenderParams(t),{painter:s}=e;s.beforeRenderLayer(e,(a=this._clips)!=null&&a.length?255:0,this.computedOpacity),this.renderChildren(e),s.afterRenderLayer(e,this.computedOpacity)}addChild(t){return this.addChildAt(t,this.children.length)}addChildAt(t,e=this.children.length){if(!t||this.contains(t))return t;this._needsSort=!0;const s=t.parent;return s&&s!==this&&s.removeChild(t),e>=this.children.length?this.children.push(t):this.children.splice(e,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),this._childrenObservable.notify(),t}contains(t){return f(this._childrenObservable),this._childrenSet.has(t)}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const t of this.children)this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null;this.children.length=0,this._childrenObservable.notify()}removeChild(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t}removeChildAt(t){if(t<0||t>=this.children.length)return null;this._needsSort=!0;const e=this.children.splice(t,1)[0];return this._childrenSet.delete(e),this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null,this._childrenObservable.notify(),e}beforeRender(t){super.beforeRender(t),this.sortFunction&&this._needsSort&&(this.children.sort(this.sortFunction),this._needsSort=!1,this._childrenObservable.notify());for(const e of this.children)e.beforeRender(t)}afterRender(t){super.afterRender(t);for(const e of this.children)e.afterRender(t)}_createTransforms(){return{displayViewScreenMat3:R()}}onAttach(){super.onAttach();const t=this.stage;for(const e of this.children)e.stage=t}onDetach(){super.onDetach();for(const t of this.children)t.stage=null}renderChildren(t){for(const e of this.children)e.processRender(t)}createRenderParams(t){return{...t,requireFBO:this.requiresDedicatedFBO,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:t.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition,highlightGradient:this._highlightGradient||t.highlightGradient}}isTransitioning(){return super.isTransitioning()||this.children.some(t=>t.transitioning)}};export{O as e,w as n};
//# sourceMappingURL=Container-DRSd94Yq.js.map
