const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FeatureLayer-BouGm6jC.js","assets/index-XUmwAfbD.js","assets/index-CcrRWlk4.css","assets/MultiOriginJSONSupport-TXhd9nAR.js","assets/commonProperties-D13FKckC.js","assets/ElevationInfo-z6ZU5G2f.js","assets/FeatureLayerBase-Chjkji4I.js","assets/HeightModelInfo-Cf5Fyha2.js","assets/featureLayerUtils-DUVMzVB1.js","assets/uuid-Cl5lrJ4c.js","assets/LayerFloorInfo-l-qGMZ_m.js","assets/Relationship-DKjzkrdP.js","assets/serviceCapabilitiesUtils-CAKHLNR4.js","assets/Layer-B5mrXn3K.js","assets/editsZScale-CdKAY04L.js","assets/APIKeyMixin-2z2CxhId.js","assets/ArcGISService-CB8oOmIt.js","assets/BlendLayer-Q9TmnPKi.js","assets/jsonUtils-lTMEmXdL.js","assets/parser-CTvraIcx.js","assets/utils-CXJkEfDz.js","assets/CustomParametersMixin-NfSN27e-.js","assets/EditBusLayer-DP5QNaY1.js","assets/FeatureEffectLayer-CaR4X2Bg.js","assets/FeatureEffect-C_BRmPW_.js","assets/FeatureReductionLayer-IbsAwH-k.js","assets/FeatureReductionSelection-CyX2kmVv.js","assets/labelingInfo-B9KvZpaH.js","assets/labelUtils-BQ78aDcx.js","assets/MD5-C9MwAd2G.js","assets/OperationalLayer-BeJ9mX3b.js","assets/OrderedLayer-DN--jf84.js","assets/OrderByInfo-DKQNrewq.js","assets/PortalLayer-bO1XB4Ox.js","assets/portalItemUtils-EEgQYIkq.js","assets/RefreshableLayer-YgujgLRm.js","assets/ScaleRangeLayer-BxZFwKIw.js","assets/TemporalLayer-BphDWGgM.js","assets/TimeInfo-BDtP0myK.js","assets/FeatureTemplate-CO10ietR.js","assets/FeatureType-CGT1PK4f.js","assets/fieldProperties-DHA7YMWE.js","assets/versionUtils-CEqFSS6L.js","assets/styleUtils-wX8vPq1a.js","assets/popupUtils-BUO4PhcE.js","assets/AlphaCutoff-UcccL64p.js","assets/interfaces-CL2NbQte.js"])))=>i.map(i=>d[i]);
import{c0 as N,I as c,j as d,m as p,k as S,hb as v,cz as F,s as a,g1 as O,aB as C,U as x,bu as E,_ as P,ff as $,ag as M,im as k}from"./index-XUmwAfbD.js";let m=class extends N.EventedAccessor{destroy(){this.emit("destroy")}get connectionError(){return this.errorString?new c("stream-connection",this.errorString):null}onFeature(e){this.emit("data-received",e)}onMessage(e){this.emit("message-received",e)}};d([p({readOnly:!0})],m.prototype,"connectionError",null),m=d([S("esri.layers.support.StreamConnection")],m);const R=m;var g;(function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED"})(g||(g={}));let f=class extends R{constructor(t){super({}),this._outstandingMessages=[],this.errorString=null;const{geometryType:r,spatialReference:s,sourceSpatialReference:o}=t;this._config=t,this._featureZScaler=v(r,o,s),this._open()}normalizeCtorArgs(){return{}}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){super.destroy(),this._websocket!=null&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if(this._websocket==null)return"disconnected";switch(this._websocket.readyState){case g.CONNECTING:case g.OPEN:return"connected";case g.CLOSING:case g.CLOSED:return"disconnected"}}sendMessageToSocket(t){this._websocket!=null?this._websocket.send(JSON.stringify(t)):this._outstandingMessages.push(t)}sendMessageToClient(t){this._onMessage(t)}updateCustomParameters(t){this._config.customParameters=t,this._websocket!=null&&this._websocket.close()}async _tryCreateWebSocket(t=this._config.source.path,r=1e3,s=0){try{if(this.destroyed)return;const o=F(t,this._config.customParameters??{});this._websocket=await this._createWebSocket(o),this.notifyChange("connectionStatus")}catch(o){const n=r/1e3;return this._config.maxReconnectionAttempts&&s>=this._config.maxReconnectionAttempts?(a.getLogger(this).error(new c("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(a.getLogger(this).error(new c("websocket-connection",`Failed to connect. Attempting to reconnect in ${n}s`,o)),await O(r),this._tryCreateWebSocket(t,Math.min(1.5*r,1e3*this._config.maxReconnectionInterval),s+1))}}_setWebSocketJSONParseHandler(t){t.onmessage=r=>{try{const s=JSON.parse(r.data);this._onMessage(s)}catch(s){return void a.getLogger(this).error(new c("websocket-connection","Failed to parse message, invalid JSON",{error:s}))}}}_createWebSocket(t){return new Promise((r,s)=>{const o=new WebSocket(t);o.onopen=()=>{if(o.onopen=null,this.destroyed)return o.onclose=null,void o.close();o.onclose=n=>this._onClose(n),o.onerror=n=>this._onError(n),this._setWebSocketJSONParseHandler(o),r(o)},o.onclose=n=>{o.onopen=o.onclose=null,s(n)}})}async _handshake(t=1e4){const r=this._websocket;if(r==null)return;const s=C(),o=r.onmessage,{filter:n,outFields:u,spatialReference:l}=this._config;return s.timeout(t),r.onmessage=h=>{var w;let i=null;try{i=JSON.parse(h.data)}catch{}i&&typeof i=="object"||(a.getLogger(this).error(new c("websocket-connection","Protocol violation. Handshake failed - malformed message",h.data)),s.reject(),this.destroy()),((w=i.spatialReference)==null?void 0:w.wkid)!==(l==null?void 0:l.wkid)&&(a.getLogger(this).error(new c("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${l.wkid}`,h.data)),s.reject(),this.destroy()),i.format!=="json"&&(a.getLogger(this).error(new c("websocket-connection","Protocol violation. Handshake failed - format is not set",h.data)),s.reject(),this.destroy()),n&&i.filter!==n&&a.getLogger(this).error(new c("websocket-connection","Tried to set filter, but server doesn't support it")),u&&i.outFields!==u&&a.getLogger(this).error(new c("websocket-connection","Tried to set outFields, but server doesn't support it")),r.onmessage=o;for(const _ of this._outstandingMessages)r.send(JSON.stringify(_));this._outstandingMessages=[],s.resolve()},r.send(JSON.stringify({filter:n,outFields:u,format:"json",spatialReference:{wkid:l.wkid}})),s.promise}_onMessage(t){if(this.onMessage(t),"type"in t)switch(t.type){case"features":case"featureResult":for(const r of t.features)this._featureZScaler!=null&&this._featureZScaler(r.geometry),this.onFeature(r)}}_onError(t){const r="Encountered an error over WebSocket connection";this._set("errorString",r),a.getLogger(this).error("websocket-connection",r)}_onClose(t){this._websocket=null,this.notifyChange("connectionStatus"),t.code!==1e3&&a.getLogger(this).error("websocket-connection",`WebSocket closed unexpectedly with error code ${t.code}`),this.destroyed||this._open()}};d([p()],f.prototype,"connectionStatus",null),d([p()],f.prototype,"errorString",void 0),f=d([S("esri.layers.graphics.sources.connections.WebSocketConnection")],f);const W=1e4,T={maxQueryDepth:5,maxRecordCountFactor:3};let b=class extends f{constructor(e){super({...T,...e}),this._buddyServicesQuery=null,this._relatedFeatures=null}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||a.getLogger(this).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:r,outFields:s}=this._config;this.destroyed||this._setFilter(r,s)}_onMessage(e){if("attributes"in e){let t;try{t=this._enrich(e),this._featureZScaler!=null&&this._featureZScaler(t.geometry)}catch(r){return void a.getLogger(this).error(new c("geoevent-connection","Failed to parse message",r))}this.onFeature(t)}else this.onMessage(e)}async _fetchServiceDefinition(e){const t={f:"json",...this._config.customParameters},r=x(e.path,{query:t,responseType:"json"}),s=(await r).data;return this._serviceDefinition=s,s}_fetchWebSocketUrl(e,t){const r=e[0],{urls:s,token:o}=r,n=this._inferWebSocketBaseUrl(s);return F(`${n}/subscribe`,{outSR:""+t.wkid,token:o})}_inferWebSocketBaseUrl(e){if(e.length===1)return e[0];for(const t of e)if(t.includes("wss"))return t;return a.getLogger(this).error(new c("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const r=this._websocket;if(r==null||e==null&&t==null)return;const s=JSON.stringify({filter:this._serializeFilter(e,t)});let o=!1;const n=C(),u=()=>{o||(this.destroyed||this._websocket!==r||a.getLogger(this).error(new c("geoevent-connection","Server timed out when setting filter")),n.reject())},l=h=>{const i=JSON.parse(h.data);i.filter&&(i.error&&(a.getLogger(this).error(new c("geoevent-connection","Failed to set service filter",i.error)),this._set("errorString",`Could not set service filter - ${i.error}`),n.reject(i.error)),this._setWebSocketJSONParseHandler(r),o=!0,n.resolve())};return r.onmessage=l,r.send(s),setTimeout(u,W),n.promise}_serializeFilter(e,t){const r={};if(e==null&&t==null)return r;if(e!=null&&e.geometry)try{const s=E(e.geometry);if(s.type!=="extent")throw new c(`Expected extent but found type ${s.type}`);r.geometry=JSON.stringify(s.shiftCentralMeridian())}catch(s){a.getLogger(this).error(new c("geoevent-connection","Encountered an error when setting connection geometryDefinition",s))}return e!=null&&e.where&&e.where!=="1 = 1"&&e.where!=="1=1"&&(r.where=e.where),t!=null&&(r.outFields=t.join(",")),r}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,r=e.attributes[t],s=this._relatedFeatures.get(r);if(!s)return a.getLogger(this).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:o,geometry:n}=s;for(const u in o)e.attributes[u]=o[u];return n&&(e.geometry=n),e.geometry||e.centroid||a.getLogger(this).error(new c("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),s=this._queryArchive(t);await r;const o=await s;if(!o)return;for(const n of o.features)this.onFeature(this._enrich(n))}catch(e){a.getLogger(this).error(new c("geoevent-connection","Encountered an error when querying buddy services",{error:e}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){var _;const t=new(await P(async()=>{const{default:L}=await import("./FeatureLayer-BouGm6jC.js");return{default:L}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46]))).default({url:e}),{capabilities:r}=await t.load(),s=r.query.supportsMaxRecordCountFactor,o=r.query.supportsPagination,n=r.query.supportsCentroid,u=this._config.maxRecordCountFactor,l=t.capabilities.query.maxRecordCount,h=s?l*u:l,i=new $;if(i.outFields=this._config.outFields??["*"],i.where=((_=this._config.filter)==null?void 0:_.where)??"1=1",i.returnGeometry=!0,i.returnExceededLimitFeatures=!0,i.outSpatialReference=M.fromJSON(this._config.spatialReference),n&&(i.returnCentroid=!0),s&&(i.maxRecordCountFactor=u),o)return i.num=h,t.destroy(),this._queryPages(e,i);const w=await k(e,i,this._config.sourceSpatialReference);return t.destroy(),w.data}async _queryPages(e,t,r=[],s=0){t.start=t.num!=null?s*t.num:null;const{data:o}=await k(e,t,this._config.sourceSpatialReference);return o.exceededTransferLimit&&s<(this._config.maxQueryDepth??0)?(o.features.forEach(n=>r.push(n)),this._queryPages(e,t,r,s+1)):(r.forEach(n=>o.features.push(n)),o)}_addRelatedFeatures(e){const t=new Map,r=e.features,s=this._serviceDefinition.relatedFeatures.joinField;for(const o of r){const n=o.attributes[s];t.set(n,o)}this._relatedFeatures=t}};b=d([S("esri.layers.graphics.sources.connections.GeoEventConnection")],b);const q=b;let y=class extends R{constructor(e){super({}),this.connectionStatus="connected",this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:s}=e;this._featureZScaler=v(t,s,r)}normalizeCtorArgs(){return{}}updateCustomParameters(e){}sendMessageToSocket(e){}sendMessageToClient(e){if("type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)this._featureZScaler!=null&&this._featureZScaler(t.geometry),this.onFeature(t)}this.onMessage(e)}};d([p()],y.prototype,"connectionStatus",void 0),d([p()],y.prototype,"errorString",void 0),y=d([S("esri.layers.support.ClientSideConnection")],y);function j(e,t){if(e==null&&t==null)return null;const r={};return t!=null&&(r.geometry=t),e!=null&&(r.where=e),r}function D(e,t,r,s,o,n,u,l,h){const i={source:e,sourceSpatialReference:t,spatialReference:r,geometryType:s,filter:j(o,n),maxReconnectionAttempts:u,maxReconnectionInterval:l,customParameters:h};return e?e.path.startsWith("wss://")||e.path.startsWith("ws://")?new f(i):new q(i):new y(i)}export{D as createConnection};
//# sourceMappingURL=createConnection-ik85PO03.js.map
