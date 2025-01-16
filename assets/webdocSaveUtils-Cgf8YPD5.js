const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/geometryServiceUtils-CLNNABgB.js","assets/index-D2fbPmv2.js","assets/index-Jib82o7I.css","assets/project-CM04MxmI.js"])))=>i.map(i=>d[i]);
import{dL as w,I as m,a9 as B,S as U,G as F,af as K,_ as H,ag as J,W as z,aQ as q,d3 as W,dM as Q,dN as X}from"./index-D2fbPmv2.js";import{m as Y}from"./MultiOriginJSONSupport-CiWwiGwF.js";import{i as Z}from"./originUtils-D69mHv66.js";import{o as $}from"./jsonContext-BypIdMOa.js";import{a as n,f as y,i as p,s as d}from"./portalItemUtils-CSjrXciv.js";import{p as ee,n as ae}from"./project-CM04MxmI.js";import{j as te,T as oe,U as re}from"./basemapUtils-DjbuSOSo.js";import{p as A}from"./resourceUtils-DOldvmld.js";import{r as T,t as P}from"./saveUtils-BnpW_vfG.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./uuid-Cl5lrJ4c.js";import"./resourceUtils-D1dyHKOI.js";const ie=["NatGeo_World_Map","Ocean_Basemap","USA_Topo_Maps","World_Imagery","World_Street_Map","World_Terrain_Base","World_Topo_Map","World_Hillshade","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Reference/World_Boundaries_and_Places","Reference/World_Reference_Overlay","Reference/World_Transportation"].map(a=>a.toLowerCase());async function Ke(a,e,t){t??(t={}),ne(a,e),await w(()=>!e.updatingFromView),await e.load(),await D(e),await T(e),await C(a,e);const o=e.portalItem,{json:r,jsonContext:i}=await O(e,o);return P(i,{errorName:`${a.name}:save`},t),await E(e,o),await Oe(a,e,o,r,i),await Promise.all([e.updateItemThumbnail(),A(e.resourceReferences,i)]),o}async function O(a,e){const t=$(e,"web-map",!0),o=a.write({},t);return await Promise.all(t.resources.pendingOperations),{json:o,jsonContext:t}}async function He(a,e,t,o){o??(o={});const r=se(a,t);await w(()=>!e.updatingFromView),await e.load(),await D(e),await T(e),await C(a,e);const{json:i,jsonContext:s}=await O(e,r);P(s,{errorName:`${a.name}:save`},o),await ue(e,r);const l=e.getThumbnailState();return await Se(a,e,r,i,s,o)&&(e.resourceReferences.portalItem=r),e.restoreThumbnailFromState(l),await Promise.all([e.updateItemThumbnail(),A(e.resourceReferences,s)]),r}function ne(a,e){if(!e.portalItem)throw new m(`${a.name}:portal-item-not-set`,"Portal item to save to has not been set on the WebMap");S(a,e.portalItem)}function S(a,e){if(e.type!==a.itemType)throw new m(`${a.name}:portal-item-wrong-type`,`Portal item needs to have type "${a.itemType}"`)}async function C(a,e){var o;if(!((o=e.basemap)!=null&&o.baseLayers.length))throw new m(`${a.name}:save`,"Map does not have a valid basemap with a base layer.");let t=null;if(await w(()=>{const r=te(e.initialViewProperties,e.basemap);return t=r.spatialReference,!r.updating}),!B(t,e.initialViewProperties.spatialReference))throw new m(`${a.name}:save`,"The spatial reference of the basemap is not compatible with the one from the map.",{expected:e.initialViewProperties.spatialReference,actual:t})}function se(a,e){let t=U.from(e);return t.id&&(t=t.clone(),t.id=null),t.type||(t.type=a.itemType),t.portal||(t.portal=F.getDefault()),S(a,t),t}function D(a){const e=[];return a.basemap&&e.push(a.basemap.load()),a.ground&&e.push(a.ground.load()),Promise.allSettled(e).then(()=>{})}async function E(a,e){e.extent=await ve(a.portalItem,a.initialViewProperties.viewpoint.targetGeometry),await de(a,e)}const le=y.JSAPI,M="CollectorDisabled",h="Collector",g="Data Editing",V="OfflineDisabled",b="Offline",L="Workforce Project",G="Workforce Worker",N="Workforce Dispatcher",pe="Offline Map Areas",ce="FieldMapsDisabled",v=y.DEVELOPER_BASEMAP,R="UtilityNetwork",I="IPS";async function ue(a,e){n(e,M),n(e,ce),n(e,y.METADATA),n(e,V),n(e,pe),n(e,N),n(e,L),n(e,G),await E(a,e)}async function de(a,e){p(e,le),await me(a),we(a,e),ye(a,e),_e(a,e),he(a,e),ge(a,e),be(a,e),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((t,o,r)=>r.indexOf(t)===o))}function me(a){const e=_(a).map(t=>t.load()).toArray();return Promise.allSettled(e).then(()=>{})}function _(a){return a.allLayers.concat(a.allTables)}function j(a){return _(a).some(e=>e.loaded&&W(e)&&e.capabilities.operations.supportsEditing&&e.editingEnabled&&(e.type!=="subtype-group"||e.sublayers.some(t=>t.editingEnabled)))}function fe(a){return _(a).filter(e=>e.type!=="group").every(e=>e.loaded&&We(a,e))}function we(a,e){d(e,M)||d(e,L)||d(e,G)||d(e,N)||!j(a)?n(e,h):p(e,h)}function ye(a,e){j(a)?p(e,g):n(e,g)}function _e(a,e){!d(e,V)&&fe(a)?p(e,b):n(e,b)}function he(a,e){oe(a.basemap)?p(e,v):n(e,v)}function ge(a,e){var t;(t=a.utilityNetworks)!=null&&t.length?p(e,R):n(e,R)}function be(a,e){a.ipsInfo?p(e,I):n(e,I)}async function ve(a,e){const t=e.clone().normalize();let o;if(t.length>1)for(const r of t)o?r.width>o.width&&(o=r):o=r;else o=t[0];return Re(a,o)}async function Re(a,e){const t=e.spatialReference;if(t.isWGS84)return e.clone();if(t.isWebMercator)return K(e);const{getGeometryServiceURL:o}=await H(()=>import("./geometryServiceUtils-CLNNABgB.js"),__vite__mapDeps([0,1,2,3])),r=await o(a),i=new ee({geometries:[e],outSpatialReference:J.WGS84});return(await ae(r,i))[0]}function Ie(a){return X(a)||a.type==="map-notes"||a.type==="route"}function We(a,e){return W(e)&&e.capabilities.operations.supportsSync||Ie(e)&&!e.portalItem||Ae(e)&&!Te(e)&&e.spatialReference.equals(a.initialViewProperties.spatialReference)}function Ae(a){return(a.type==="tile"||a.type==="vector-tile")&&(a.capabilities.operations.supportsExportTiles||Pe(a)||re(a))}function Te(a){return a.type==="vector-tile"&&Object.keys(a.sourceNameToSource).length>1}function Pe(a){return a.type==="tile"&&Q(a.url)&&ie.some(e=>{var t;return(t=a.url)==null?void 0:t.toLowerCase().includes("/"+e+"/")})}async function Oe(a,e,t,o,r){await t.update({data:o}),k(a,e,t,o,r)}async function Se(a,e,t,o,r,i){const s=e.portalItem,l={item:s,authenticated:!(!(s!=null&&s.id)||!s.portal.user)},c=t.portal;await c.signIn();const{copyAllowed:u,itemReloaded:f}=await Ce(l,c);if(l.authenticated||(l.authenticated=f),!u)throw new m(`${a.name}:save-as-copy-not-allowed`,"Owner of this map does not allow others to save a copy");const x=await De(t,l,o,i);return e.portalItem=t,k(a,e,t,o,r),x}async function Ce(a,e){var r;const{item:t,authenticated:o}=a;return t!=null&&t.id&&((r=t.typeKeywords)!=null&&r.includes("useOnly"))?t.portal.portalHostname!==e.portalHostname?{copyAllowed:!1,itemReloaded:!1}:(o||await t.reload(),{copyAllowed:t.itemControl==="admin"||t.itemControl==="update",itemReloaded:!0}):{copyAllowed:!0,itemReloaded:!1}}async function De(a,e,t,o){const r=a.portal,{item:i}=e,{folder:s,copyAllResources:l}=o;let c=!1;if(l&&(i!=null&&i.id)&&z(i.portal.url,r.url)&&parseInt(i.portal.currentVersion,10)>=2023){const{total:u}=await i.fetchResources();c=!!u}if(c){const u=await i.copy({copyResources:"all",folder:s});a.id=u.id,a.portal=u.portal;const f=a.toJSON();await a.load(),a.read(f),await a.update({data:t})}else await r.user.addItem({item:a,folder:s,data:t});return c}function k(a,e,t,o,r){Y.prototype.read.call(e,{version:o.version,authoringApp:o.authoringApp,authoringAppVersion:o.authoringAppVersion},{origin:a.origin,ignoreDefaults:!0,url:t.itemUrl?q(t.itemUrl):void 0}),Z(r),e.resourceInfo=o}export{O as createJSON,De as initializeNewItem,Ce as isCopyAllowed,Ke as save,He as saveAs};
//# sourceMappingURL=webdocSaveUtils-Cgf8YPD5.js.map
