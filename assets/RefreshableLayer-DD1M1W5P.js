import{ae as d,ak as c,al as m,j as n,m as f,bd as p,k as v,fd as g,fj as y,s as I}from"./index-U3f91iFJ.js";import{a as b}from"./commonProperties-CwULv9TP.js";const a=new d,o=new WeakMap;function w(t){$(t)&&a.push(new WeakRef(t))}function C(t){const e=a.find(s=>s.deref()===t);e&&a.remove(e)}function $(t){return t!=null&&typeof t=="object"&&"refreshInterval"in t&&"refresh"in t}function u(t,e){return Number.isFinite(t)&&Number.isFinite(e)?e<=0?t:u(e,t%e):0}let h=0,i=0;function D(){const t=Date.now();let e=!1;for(const s of a){const r=s.deref();r?r.refreshInterval&&t-(o.get(r)??0)+5>=6e4*r.refreshInterval&&(o.set(r,t),r.refresh(t)):e=!0}if(e)for(let s=a.length-1;s>=0;s--)a.at(s).deref()||a.removeAt(s)}c(()=>{const t=Date.now();let e=0;for(const s of a){const r=s.deref();r&&(e=u(Math.round(6e4*r.refreshInterval),e),r.refreshInterval?o.get(r)||o.set(r,t):o.delete(r))}if(e!==i){if(i=e,clearInterval(h),i===0)return void(h=0);h=setInterval(D,i)}},m);const l=.1,j=t=>{let e=class extends t{constructor(...s){super(...s),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=g(()=>this.hasDataChanged()),this.when().then(()=>{this.destroyed||w(this)},()=>{})}destroy(){C(this)}castRefreshInterval(s){return s>=l?s:s<=0?0:l}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(s=Date.now()){y(this._debounceHasDataChanged()).then(r=>{r&&this._set("refreshTimestamp",s),this.emit("refresh",{dataChanged:r})},r=>{I.getLogger(this).error(r),this.emit("refresh",{dataChanged:!1,error:r})})}async hasDataChanged(){return!0}get test(){}};return n([f({type:Number,json:{write:!0,origins:{"web-scene":{write:{enabled:!0,layerContainerTypes:b}}}}})],e.prototype,"refreshInterval",void 0),n([p("refreshInterval")],e.prototype,"castRefreshInterval",null),n([f({readOnly:!0})],e.prototype,"refreshTimestamp",void 0),n([f({readOnly:!0})],e.prototype,"refreshParameters",null),e=n([v("esri.layers.mixins.RefreshableLayer")],e),e};export{j as f};
//# sourceMappingURL=RefreshableLayer-DD1M1W5P.js.map
