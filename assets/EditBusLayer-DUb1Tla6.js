const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/deleteForwardEdits-CYZmaBIB.js","assets/index-BMHxxDIj.js","assets/index-DQ5T3qjA.css","assets/DeleteForwardEditsParameters-Dv7YqsBC.js"])))=>i.map(i=>d[i]);
import{_ as V,U as L,j as A,m as R,k,b7 as p,ax as x,b5 as T}from"./index-BMHxxDIj.js";import{o as D}from"./uuid-Cl5lrJ4c.js";const P=D(),$=new Map,U=new Map;async function z(e,n,d){if(!e||!d)return!1;if(!n)return!0;const i=new URL(e).host;let t=$.get(i);if(!t){const s=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,"");t=(await L(s,{responseType:"json",query:{f:"json"}})).data.defaultVersionName}return t===n}async function C(e,n,d=!1){var s,a,o;if(!e||!n)return!0;const i=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),t=(s=U.get(i))==null?void 0:s.entries();if(t){for(const[m,l]of t)if(l.name===n){const u=!((a=l.stack)!=null&&a.hasForwardEdits());if(!u&&d){const[{deleteForwardEdits:h},{default:g}]=await Promise.all([V(()=>import("./deleteForwardEdits-CYZmaBIB.js"),__vite__mapDeps([0,1,2])),V(()=>import("./DeleteForwardEditsParameters-Dv7YqsBC.js"),__vite__mapDeps([3,1,2]))]),b=await h(i,m,new g({sessionId:P,moment:l.moment}));return b.success&&((o=l.stack)==null||o.clearForwardEdits()),b.success}return u}}return!0}function O(e,n){var t;if(!e)return!1;const d=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),i=(t=U.get(d))==null?void 0:t.entries();if(i){for(const[s,a]of i)if(a.name===n)return a.lockType==="edit"}return!1}const y=new T.EventEmitter;function W(e){return y.on("apply-edits",new WeakRef(e))}function q(e){return y.on("update-moment",new WeakRef(e))}function G(e,n,d=null,i=!1){const t=x();return i=n==null||i,y.emit("apply-edits",{serviceUrl:e,layerId:n,gdbVersion:d,mayReceiveServiceEdits:i,result:t.promise}),t}const H=Symbol();function J(e){return e!=null&&typeof e=="object"&&H in e}function f(e){return e!=null&&typeof e=="object"&&"gdbVersion"in e}function M(e,n,d){const i=new URL(e).host,t=$.get(i),s=a=>!a||a===t;return s(n)&&s(d)||n===d}const K=e=>{var n;let d=class extends e{constructor(...i){super(...i),this[n]=!0,this._applyEditsHandler=t=>{const{serviceUrl:s,layerId:a,gdbVersion:o,mayReceiveServiceEdits:m,result:l}=t,u=s===this.url,h=a!=null&&this.layerId!=null&&a===this.layerId,g=f(this),b=f(this)&&M(s,o,this.gdbVersion);if(!u||g&&!b||!h&&!m)return;const S=l.then(r=>{var _;if(this.lastEditsEventDate=new Date,h&&(r.addedFeatures.length||r.updatedFeatures.length||r.deletedFeatures.length||r.addedAttachments.length||r.updatedAttachments.length||r.deletedAttachments.length))return this.emit("edits",p(r)),r;const v=(_=r.editedFeatures)==null?void 0:_.find(({layerId:F})=>F===this.layerId);if(v){const{adds:F,updates:E,deletes:w}=v.editedFeatures,j={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:F?F.map(({attributes:c})=>({objectId:this.objectIdField&&c[this.objectIdField],globalId:this.globalIdField&&c[this.globalIdField]})):[],deletedFeatures:w?w.map(({attributes:c})=>({objectId:this.objectIdField&&c[this.objectIdField],globalId:this.globalIdField&&c[this.globalIdField]})):[],updatedFeatures:E?E.map(({current:{attributes:c}})=>({objectId:this.objectIdField&&c[this.objectIdField],globalId:this.globalIdField&&c[this.globalIdField]})):[],editedFeatures:p(r.editedFeatures),exceededTransferLimit:!1,historicMoment:p(r.historicMoment)};return this.emit("edits",j),j}const I={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:[],deletedFeatures:[],updatedFeatures:[],editedFeatures:p(r.editedFeatures),exceededTransferLimit:!1,historicMoment:p(r.historicMoment)};return"historicMoment"in this&&this._shouldUpdateHistoricMoment(s,o,I.historicMoment)&&this.emit("edits",I),I}).then(r=>("historicMoment"in this&&this._shouldUpdateHistoricMoment(s,o,r.historicMoment)&&(this.historicMoment=r.historicMoment),r));this.emit("apply-edits",{result:S})},this._updateMomentHandler=t=>{const{serviceUrl:s,gdbVersion:a,moment:o}=t,m=s===this.url,l=f(this),u=f(this)&&M(s,a,this.gdbVersion),h=f(this)&&!M(s,this.gdbVersion,null);m&&l&&u&&h&&"historicMoment"in this&&this.historicMoment!==o&&(this.historicMoment=o)},this.when().then(()=>{this.addHandles(W(this._applyEditsHandler)),"historicMoment"in this&&this.addHandles(q(this._updateMomentHandler))},()=>{})}_shouldUpdateHistoricMoment(i,t,s){return"historicMoment"in this&&this.historicMoment!==s&&O(i,t)}};return n=H,A([R()],d.prototype,"lastEditsEventDate",void 0),d=A([k("esri.layers.mixins.EditBusLayer")],d),d};export{K as F,O as a,G as c,M as g,q as h,C as i,W as l,z as o,J as p,P as t};
//# sourceMappingURL=EditBusLayer-DUb1Tla6.js.map
