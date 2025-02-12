const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/layersLoader-B2K5vRk4.js","assets/index-j6yFHuRy.js","assets/index-Jib82o7I.css","assets/fetchService-cz6REEqV.js","assets/portalLayers-BzED89aL.js","assets/associatedFeatureServiceUtils-a5UKar0P.js","assets/portalItemUtils-DaLKdBuc.js","assets/layersCreator-D2wcl6xN.js","assets/styleUtils-D6agKPGj.js","assets/jsonContext-D1ZpWIye.js"])))=>i.map(i=>d[i]);
import{j as o,m as c,S as f,o as _,u as E,k as U,v as $,_ as b,w as H,x as F,s as L,z as n,A as T,B as O,W as S,E as y,G as I,N as k,I as x,K as v,J as D,U as M,L as R}from"./index-j6yFHuRy.js";import{E as P}from"./portalItemUtils-DaLKdBuc.js";const A=w=>{let a=class extends w{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=$(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(r){r!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",r))}readPortalItem(r,e,t){if(e.itemId)return new f({id:e.itemId,portal:t==null?void 0:t.portal})}writePortalItem(r,e){r!=null&&r.id&&(e.itemId=r.id)}async loadFromPortal(r,e){var t;if((t=this.portalItem)!=null&&t.id)try{const{load:s}=await b(()=>import("./layersLoader-B2K5vRk4.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]));return H(e),await s({instance:this,supportedTypes:r.supportedTypes,validateItem:r.validateItem,supportsData:r.supportsData,layerModuleTypeMap:r.layerModuleTypeMap},e)}catch(s){throw F(s)||L.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})
  ${s}`),s}}async finishLoadEditablePortalLayer(r){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(r).catch(e=>(n(e),!0)))}async setUserPrivileges(r,e){if(!T.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(e);if(this.url)try{const{features:{edit:t,fullEdit:s},content:{updateItem:i}}=await this._fetchUserPrivileges(r,e);this._set("userHasEditingPrivileges",t),this._set("userHasFullEditingPrivileges",s),this._set("userHasUpdateItemPrivileges",i)}catch(t){n(t)}}async _fetchUserPrivileges(r,e){var p;let t=this.portalItem;if(!r||!t||!t.loaded||t.sourceUrl)return this._fetchFallbackUserPrivileges(e);const s=r===t.id;if(s&&t.portal.user)return P(t);let i,h;if(s)i=t.portal.url;else try{i=await O(this.url,e)}catch(l){n(l)}if(!i||!S(i,t.portal.url))return this._fetchFallbackUserPrivileges(e);try{const l=e!=null?e.signal:null;h=await((p=y)==null?void 0:p.getCredential(`${i}/sharing`,{prompt:!1,signal:l}))}catch(l){n(l)}const m=!0,u=!1,d=!1;if(!h)return{features:{edit:m,fullEdit:u},content:{updateItem:d}};try{if(s?await t.reload():(t=new f({id:r,portal:{url:i}}),await t.load(e)),t.portal.user)return P(t)}catch(l){n(l)}return{features:{edit:m,fullEdit:u},content:{updateItem:d}}}async _fetchFallbackUserPrivileges(r){let e=!0;try{e=await this._fetchUserHasEditingPrivileges(r)}catch(t){n(t)}return{features:{edit:e,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(r){var s;const e=this.url?(s=y)==null?void 0:s.findCredential(this.url):null;if(!e)return!0;const t=g.credential===e?g.user:await this._fetchEditingUser(r);return g.credential=e,g.user=t,(t==null?void 0:t.privileges)==null||t.privileges.includes("features:user:edit")}async _fetchEditingUser(r){var d,p,l;const e=(p=(d=this.portalItem)==null?void 0:d.portal)==null?void 0:p.user;if(e)return e;const t=(l=y)==null?void 0:l.findServerInfo(this.url??"");if(!(t!=null&&t.owningSystemUrl))return null;const s=`${t.owningSystemUrl}/sharing/rest`,i=I.getDefault();if(i&&i.loaded&&v(i.restUrl)===v(s))return i.user;const h=`${s}/community/self`,m=r!=null?r.signal:null,u=await D(M(h,{authMode:"no-prompt",query:{f:"json"},signal:m}));return u.ok?R.fromJSON(u.value.data):null}read(r,e){e&&(e.layer=this),super.read(r,e)}write(r,e){var i;const t=e==null?void 0:e.portal,s=((i=this.portalItem)==null?void 0:i.id)&&(this.portalItem.portal||I.getDefault());return t&&s&&!k(s.restUrl,t.restUrl)?(e.messages&&e.messages.push(new x("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(r,{...e,layer:this})}};return o([c({type:f})],a.prototype,"portalItem",null),o([_("web-document","portalItem",["itemId"])],a.prototype,"readPortalItem",null),o([E("web-document","portalItem",{itemId:{type:String}})],a.prototype,"writePortalItem",null),o([c({clonable:!1})],a.prototype,"resourceReferences",void 0),o([c({type:Boolean,readOnly:!0})],a.prototype,"userHasEditingPrivileges",void 0),o([c({type:Boolean,readOnly:!0})],a.prototype,"userHasFullEditingPrivileges",void 0),o([c({type:Boolean,readOnly:!0})],a.prototype,"userHasUpdateItemPrivileges",void 0),a=o([U("esri.layers.mixins.PortalLayer")],a),a},g={credential:null,user:null};export{A as j};
//# sourceMappingURL=PortalLayer-Qvkbh7tI.js.map
