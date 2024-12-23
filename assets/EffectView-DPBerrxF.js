import{j as a,m as h,k as d,ar as y,T,s as v,b8 as _}from"./index-Cj37dcSI.js";import{d as E}from"./parser-vcRqrJ90.js";import{t as O,e as S}from"./utils-DYmthu9k.js";const u=-1;let l=class extends y{constructor(t){super(t),this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this.duration=T("mapview-transitions-duration"),this.effects=[]}set effect(t){if(this._get("effect")!==(t=t||"")){this._set("effect",t);try{this._transitionTo(p(t))}catch(e){this._transitionTo([]),v.getLogger(this).warn("Invalid Effect",{effect:t,error:e})}}}get final(){return this._final}get hasEffects(){return this.transitioning||!!this.effects.length}set scale(t){this._updateForScale(t)}get transitioning(){return this._to!==null}canTransitionTo(t){try{return this.scale>0&&g(this._current,p(t),this.scale)}catch{return!1}}transitionStep(t,e){this._applyTimeTransition(t),this._updateForScale(e)}endTransition(){this._applyTimeTransition(this.duration)}_transitionTo(t){this.scale>0&&g(this._current,t,this.scale)?(this._final=t,this._to=_(t),b(this._current,this._to,this.scale),this._from=_(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=t),this._set("effects",this._current[0]?_(this._current[0].effects):[])}_applyTimeTransition(t){if(!(this._to&&this._from&&this._current&&this._final))return;this._time+=t;const e=Math.min(1,this._time/this.duration);for(let c=0;c<this._current.length;c++){const r=this._current[c],i=this._from[c],f=this._to[c];r.scale=w(i.scale,f.scale,e);for(let s=0;s<r.effects.length;s++){const o=r.effects[s],n=i.effects[s],m=f.effects[s];o.interpolate(n,m,e)}}e===1&&(this._current=this._final,this._set("effects",this._current[0]?_(this._current[0].effects):[]),this._from=this._to=this._final=null)}_updateForScale(t){if(this._set("scale",t),this._current.length===0)return;const e=this._current,c=this._current.length-1;let r,i,f=1;if(e.length===1||t>=e[0].scale)i=r=e[0].effects;else if(t<=e[c].scale)i=r=e[c].effects;else for(let s=0;s<c;s++){const o=e[s],n=e[s+1];if(o.scale>=t&&n.scale<=t){f=(t-o.scale)/(n.scale-o.scale),r=o.effects,i=n.effects;break}}for(let s=0;s<this.effects.length;s++)this.effects[s].interpolate(r[s],i[s],f)}};function p(t){const e=E(t)||[];return F(e)?[{scale:u,effects:e}]:e}function g(t,e,c){var r,i,f,s;return!((r=t[0])!=null&&r.effects)||!((i=e[0])!=null&&i.effects)?!0:!((((f=t[0])==null?void 0:f.scale)===u||((s=e[0])==null?void 0:s.scale)===u)&&(t.length>1||e.length>1)&&c<=0)&&O(t[0].effects,e[0].effects)}function b(t,e,c){const r=t.length>e.length?t:e,i=t.length>e.length?e:t,f=i[i.length-1],s=(f==null?void 0:f.scale)??c,o=(f==null?void 0:f.effects)??[];for(let n=i.length;n<r.length;n++)i.push({scale:s,effects:[...o]});for(let n=0;n<r.length;n++)i[n].scale=i[n].scale===u?c:i[n].scale,r[n].scale=r[n].scale===u?c:r[n].scale,S(i[n].effects,r[n].effects)}function w(t,e,c){return t+(e-t)*c}function F(t){const e=t[0];return!!e&&"type"in e}a([h()],l.prototype,"_to",void 0),a([h()],l.prototype,"duration",void 0),a([h({value:""})],l.prototype,"effect",null),a([h({readOnly:!0})],l.prototype,"effects",void 0),a([h({readOnly:!0})],l.prototype,"final",null),a([h({readOnly:!0})],l.prototype,"hasEffects",null),a([h({value:0})],l.prototype,"scale",null),a([h({readOnly:!0})],l.prototype,"transitioning",null),l=a([d("esri.layers.effects.EffectView")],l);export{l as a};
//# sourceMappingURL=EffectView-DPBerrxF.js.map
