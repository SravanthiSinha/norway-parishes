import{j as r,m as p,k as l,ae as o,dF as w,dE as c,bf as y,d4 as a,aG as _}from"./index-Vdm0PCas.js";let s=class extends o{constructor(t){super(t),this.addHandles([this.on("before-add",e=>{e.item==null&&e.preventDefault()}),this.on("after-add",e=>this._own(e.item)),this.on("after-remove",e=>this._release(e.item))])}get owner(){return this._get("owner")}set owner(t){t!==this._get("owner")&&(this._releaseAll(),this._set("owner",t),this._ownAll())}_ownAll(){for(const t of this.items)this._own(t)}_releaseAll(){for(const t of this.items)this._release(t)}_createNewInstance(t){return this.itemType?new(o.ofType(this.itemType.Type))(t):new o(t)}};function m(t,e){return{type:t,cast:w,set(h){const i=c(h,this._get(e),t);i.owner=this,this._set(e,i)}}}r([p()],s.prototype,"owner",null),s=r([l("esri.core.support.OwningCollection")],s);let n=class extends s{_own(e){e.layer&&"remove"in e.layer&&e.layer!==this.owner&&e.layer.remove(e),e.layer=this.owner}_release(e){e.layer===this.owner&&(e.layer=null)}};r([y({Type:a,ensureType:_(a)})],n.prototype,"itemType",void 0),n=r([l("esri.support.GraphicsCollection")],n);export{n as c,m as l,s as n};
//# sourceMappingURL=GraphicsCollection-BXU5Eiom.js.map
