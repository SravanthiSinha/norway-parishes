import{j as r,m as s,k as a}from"./index-BMHxxDIj.js";function p(t){return"portalItem"in t}const l=t=>{let i=class extends t{get apiKey(){var e;return this._isOverridden("apiKey")?this._get("apiKey"):p(this)?(e=this.portalItem)==null?void 0:e.apiKey:null}set apiKey(e){e!=null?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return r([s({type:String})],i.prototype,"apiKey",null),i=r([a("esri.layers.mixins.APIKeyMixin")],i),i};export{l as i};
//# sourceMappingURL=APIKeyMixin-DyEFyqla.js.map
