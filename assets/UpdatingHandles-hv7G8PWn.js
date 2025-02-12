import{an as u,ao as h,ap as p,aq as l,ar as o,al as _,as as g,j as c,m,k as H}from"./index-BvuY3ppR.js";let r=class extends u{constructor(){super(...arguments),this.updating=!1,this._handleId=0,this._scheduleHandleId=0,this._pendingPromises=new Set}destroy(){this.removeAll()}add(e,s,t={}){return this._installWatch(e,s,t,h)}addWhen(e,s,t={}){return this._installWatch(e,s,t,p)}addOnCollectionChange(e,s,{initial:t=!1,final:a=!1}={}){const n=++this._handleId;return this.addHandles([o(e,"after-changes",this._createSyncUpdatingCallback(),_),o(e,"change",s,{onListenerAdd:t?d=>s({added:d.toArray(),removed:[]}):void 0,onListenerRemove:a?d=>s({added:[],removed:d.toArray()}):void 0})],n),l(()=>this.removeHandles(n))}addPromise(e){if(e==null)return e;const s=++this._handleId;this.addHandles(l(()=>{this._pendingPromises.delete(e)&&(this._pendingPromises.size!==0||this.hasHandles(i)||this._set("updating",!1))}),s),this._pendingPromises.add(e),this._set("updating",!0);const t=()=>this.removeHandles(s);return e.then(t,t),e}removeAll(){this._pendingPromises.clear(),this.removeAllHandles(),this._set("updating",!1)}_installWatch(e,s,t={},a){const n=++this._handleId;t.sync||this._installSyncUpdatingWatch(e,n);const d=a(e,s,t);return this.addHandles(d,n),l(()=>this.removeHandles(n))}_installSyncUpdatingWatch(e,s){const t=this._createSyncUpdatingCallback(),a=h(e,t,{sync:!0,equals:()=>!1});return this.addHandles(a,s),a}_createSyncUpdatingCallback(){return()=>{this.removeHandles(i),++this._scheduleHandleId;const e=this._scheduleHandleId;this._get("updating")||this._set("updating",!0),this.addHandles(g(()=>{e===this._scheduleHandleId&&(this._set("updating",this._pendingPromises.size>0),this.removeHandles(i))}),i)}}};c([m({readOnly:!0})],r.prototype,"updating",void 0),r=c([H("esri.core.support.UpdatingHandles")],r);const i=-42;export{r as h};
//# sourceMappingURL=UpdatingHandles-hv7G8PWn.js.map
