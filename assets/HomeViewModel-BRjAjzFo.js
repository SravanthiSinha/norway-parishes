import{I as s,b5 as r,j as e,m as o,b6 as a,k as h}from"./index-DbNmBX4d.js";import{t as p}from"./GoTo-3MWGmEXL.js";let i=class extends p(r.EventedAccessor){constructor(t){super(t),this._initialViewpoint=null,this._goingHomeController=null,this.go=this.go.bind(this)}destroy(){this._cancelGo(),this.view=null}get state(){var t;return(t=this.view)!=null&&t.ready?this._goingHomeController?"going-home":"ready":"disabled"}set view(t){this._initialViewpoint=null,this._set("view",t),t&&t.when().then(()=>{this.view===t&&(this._initialViewpoint=t.viewpoint.clone(),this.notifyChange("viewpoint"))})}get viewpoint(){return this._get("viewpoint")||this._initialViewpoint}set viewpoint(t){this._set("viewpoint",t)}async go(){var n,l;if(!((n=this.view)!=null&&n.ready))throw new s("home:disabled-state","Cannot go when disabled.");this._cancelGo(),this.emit("go");const t=new AbortController;this._goingHomeController=t;try{await((l=this.view)==null?void 0:l.when()),await this.callGoTo({target:this.viewpoint,options:{signal:t.signal}})}catch{}this._goingHomeController=null}cancelGo(){this._cancelGo()}_cancelGo(){const{_goingHomeController:t}=this;t&&t.abort(),this._goingHomeController=null}};e([o()],i.prototype,"_goingHomeController",void 0),e([o({readOnly:!0})],i.prototype,"state",null),e([o()],i.prototype,"view",null),e([o({type:a})],i.prototype,"viewpoint",null),e([o()],i.prototype,"go",null),e([o()],i.prototype,"cancelGo",null),i=e([h("esri.widgets.Home.HomeViewModel")],i);const d=i;export{d as default};
//# sourceMappingURL=HomeViewModel-BRjAjzFo.js.map
