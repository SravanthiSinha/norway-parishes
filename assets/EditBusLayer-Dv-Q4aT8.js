const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/deleteForwardEdits-CMZnFw5W.js","assets/index-UqHiE_Ae.js","assets/index-Jib82o7I.css","assets/DeleteForwardEditsParameters-Loka2TU8.js"])))=>i.map(i=>d[i]);
import{U as L,_ as V,c3 as R,j as A,m as k,k as x,ax as T,b5 as p}from"./index-UqHiE_Ae.js";import{o as D}from"./uuid-Cl5lrJ4c.js";const P=D(),$=new Map,U=new Map;async function z(e,r,d){if(!e||!d)return!1;if(!r)return!0;const i=new URL(e).host;let t=$.get(i);if(!t){const s=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,"");t=(await L(s,{responseType:"json",query:{f:"json"}})).data.defaultVersionName}return t===r}async function C(e,r,d=!1){var s,a,o;if(!e||!r)return!0;const i=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),t=(s=U.get(i))==null?void 0:s.entries();if(t){for(const[m,l]of t)if(l.name===r){const h=!((a=l.stack)!=null&&a.hasForwardEdits());if(!h&&d){const[{deleteForwardEdits:u},{default:g}]=await Promise.all([V(()=>import("./deleteForwardEdits-CMZnFw5W.js"),__vite__mapDeps([0,1,2])),V(()=>import("./DeleteForwardEditsParameters-Loka2TU8.js"),__vite__mapDeps([3,1,2]))]),F=await u(i,m,new g({sessionId:P,moment:l.moment}));return F.success&&((o=l.stack)==null||o.clearForwardEdits()),F.success}return h}}return!0}function O(e,r){var t;if(!e)return!1;const d=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),i=(t=U.get(d))==null?void 0:t.entries();if(i){for(const[s,a]of i)if(a.name===r)return a.lockType==="edit"}return!1}const y=new R.EventEmitter;function W(e){return y.on("apply-edits",new WeakRef(e))}function q(e){return y.on("update-moment",new WeakRef(e))}function G(e,r,d=null,i=!1){const t=T();return i=r==null||i,y.emit("apply-edits",{serviceUrl:e,layerId:r,gdbVersion:d,mayReceiveServiceEdits:i,result:t.promise}),t}const H=Symbol();function J(e){return e!=null&&typeof e=="object"&&H in e}function f(e){return e!=null&&typeof e=="object"&&"gdbVersion"in e}function M(e,r,d){const i=new URL(e).host,t=$.get(i),s=a=>!a||a===t;return s(r)&&s(d)||r===d}const K=e=>{var r;let d=class extends e{constructor(...i){super(...i),this[r]=!0,this._applyEditsHandler=t=>{const{serviceUrl:s,layerId:a,gdbVersion:o,mayReceiveServiceEdits:m,result:l}=t,h=s===this.url,u=a!=null&&this.layerId!=null&&a===this.layerId,g=f(this),F=f(this)&&M(s,o,this.gdbVersion);if(!h||g&&!F||!u&&!m)return;const S=l.then(n=>{var _;if(this.lastEditsEventDate=new Date,u&&(n.addedFeatures.length||n.updatedFeatures.length||n.deletedFeatures.length||n.addedAttachments.length||n.updatedAttachments.length||n.deletedAttachments.length))return this.emit("edits",p(n)),n;const v=(_=n.editedFeatures)==null?void 0:_.find(({layerId:b})=>b===this.layerId);if(v){const{adds:b,updates:E,deletes:w}=v.editedFeatures,j={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:b?b.map(({attributes:c})=>({objectId:this.objectIdField&&c[this.objectIdField],globalId:this.globalIdField&&c[this.globalIdField]})):[],deletedFeatures:w?w.map(({attributes:c})=>({objectId:this.objectIdField&&c[this.objectIdField],globalId:this.globalIdField&&c[this.globalIdField]})):[],updatedFeatures:E?E.map(({current:{attributes:c}})=>({objectId:this.objectIdField&&c[this.objectIdField],globalId:this.globalIdField&&c[this.globalIdField]})):[],editedFeatures:p(n.editedFeatures),exceededTransferLimit:!1,historicMoment:p(n.historicMoment)};return this.emit("edits",j),j}const I={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:[],deletedFeatures:[],updatedFeatures:[],editedFeatures:p(n.editedFeatures),exceededTransferLimit:!1,historicMoment:p(n.historicMoment)};return"historicMoment"in this&&this._shouldUpdateHistoricMoment(s,o,I.historicMoment)&&this.emit("edits",I),I}).then(n=>("historicMoment"in this&&this._shouldUpdateHistoricMoment(s,o,n.historicMoment)&&(this.historicMoment=n.historicMoment),n));this.emit("apply-edits",{result:S})},this._updateMomentHandler=t=>{const{serviceUrl:s,gdbVersion:a,moment:o}=t,m=s===this.url,l=f(this),h=f(this)&&M(s,a,this.gdbVersion),u=f(this)&&!M(s,this.gdbVersion,null);m&&l&&h&&u&&"historicMoment"in this&&this.historicMoment!==o&&(this.historicMoment=o)},this.when().then(()=>{this.addHandles(W(this._applyEditsHandler)),"historicMoment"in this&&this.addHandles(q(this._updateMomentHandler))},()=>{})}_shouldUpdateHistoricMoment(i,t,s){return"historicMoment"in this&&this.historicMoment!==s&&O(i,t)}};return r=H,A([k()],d.prototype,"lastEditsEventDate",void 0),d=A([x("esri.layers.mixins.EditBusLayer")],d),d};export{K as F,O as a,G as c,M as g,q as h,C as i,W as l,z as o,J as p,P as t};
//# sourceMappingURL=EditBusLayer-Dv-Q4aT8.js.map
