import{j as h,m as p,k as _,an as u,ao as o,ap as g,aq as c,al as m,ar as l,as as H}from"./index-D2fbPmv2.js";let r=class extends u{constructor(){super(...arguments),this.updating=!1,this._handleId=0,this._scheduleHandleId=0,this._pendingPromises=new Set}destroy(){this.removeAll()}add(e,t,s={}){return this._installWatch(e,t,s,o)}addWhen(e,t,s={}){return this._installWatch(e,t,s,g)}addOnCollectionChange(e,t,{initial:s=!1,final:a=!1}={}){const n=++this._handleId;return this.addHandles([c(e,"after-changes",this._createSyncUpdatingCallback(),m),c(e,"change",t,{onListenerAdd:s?d=>t({added:d.toArray(),removed:[]}):void 0,onListenerRemove:a?d=>t({added:[],removed:d.toArray()}):void 0})],n),l(()=>this.removeHandles(n))}addPromise(e){if(e==null)return e;const t=++this._handleId;this.addHandles(l(()=>{this._pendingPromises.delete(e)&&(this._pendingPromises.size!==0||this.hasHandles(i)||this._set("updating",!1))}),t),this._pendingPromises.add(e),this._set("updating",!0);const s=()=>this.removeHandles(t);return e.then(s,s),e}removeAll(){this._pendingPromises.clear(),this.removeAllHandles(),this._set("updating",!1)}_installWatch(e,t,s={},a){const n=++this._handleId;s.sync||this._installSyncUpdatingWatch(e,n);const d=a(e,t,s);return this.addHandles(d,n),l(()=>this.removeHandles(n))}_installSyncUpdatingWatch(e,t){const s=this._createSyncUpdatingCallback(),a=o(e,s,{sync:!0,equals:()=>!1});return this.addHandles(a,t),a}_createSyncUpdatingCallback(){return()=>{this.removeHandles(i),++this._scheduleHandleId;const e=this._scheduleHandleId;this._get("updating")||this._set("updating",!0),this.addHandles(H(()=>{e===this._scheduleHandleId&&(this._set("updating",this._pendingPromises.size>0),this.removeHandles(i))}),i)}}};h([p({readOnly:!0})],r.prototype,"updating",void 0),r=h([_("esri.core.support.UpdatingHandles")],r);const i=-42;export{r as h};
//# sourceMappingURL=UpdatingHandles-DtwuLIN4.js.map
