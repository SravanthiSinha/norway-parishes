import{j as i,m as s,k as r,q as n,y as u,s as o}from"./index-Bs-G_wsu.js";const h=l=>{let e=class extends l{get title(){if(this._get("title")&&this.originOf("title")!=="defaults")return this._get("title");if(this.url){const t=n(this.url);if(t!=null&&t.title)return t.title}return this._get("title")||""}set title(t){this._set("title",t)}set url(t){this._set("url",u(t,o.getLogger(this)))}};return i([s()],e.prototype,"title",null),i([s({type:String})],e.prototype,"url",null),e=i([r("esri.layers.mixins.ArcGISService")],e),e};export{h as l};
