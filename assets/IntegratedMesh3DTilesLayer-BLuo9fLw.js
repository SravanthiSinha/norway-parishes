import{ez as D,ag as b,aX as w,eG as _,bP as x,bU as $,bZ as E,I as j,z as S,U as V,s as R,j as d,m as u,k as X,aN as g,eF as P}from"./index-CyZqSx7I.js";import{S as k}from"./MultiOriginJSONSupport-Dkp6reEM.js";import{c as F,u as p,E as I,s as T,l as N,d as U,R as f}from"./vec32-Tb7lCH7n.js";import{i as G}from"./APIKeyMixin-BGHR1LfF.js";import{l as W}from"./ArcGISService-BzMaLKW_.js";import{e as q}from"./CustomParametersMixin-DAS2X7v4.js";import{b as K}from"./OperationalLayer-CN-9hwyk.js";import{j as Z}from"./PortalLayer-CsB9XJVP.js";import{c as O,y as B}from"./commonProperties-D3jRdA_I.js";import{$ as z,Z as C,w as H}from"./elevationInfoUtils-B9dX1Ovm.js";import"./portalItemUtils-DZL-jnzT.js";let m=class extends W(K(Z(D(k(q(G(P))))))){constructor(r){super(r),this.operationalLayerType="IntegratedMesh3DTilesLayer",this.spatialReference=new b({wkid:4326,vcsWkid:115700}),this.fullExtent=new w(-180,-90,180,90,this.spatialReference),this.url=null,this.type="integrated-mesh-3dtiles",this.path=null,this.minScale=0,this.maxScale=0}set elevationInfo(r){this._set("elevationInfo",r),this._validateElevationInfo()}_verifyArray(r,i){if(!Array.isArray(r)||r.length<i)return!1;for(const n of r)if(typeof n!="number")return!1;return!0}_initFullExtent(r){var L,M;const i=(L=r.root)==null?void 0:L.boundingVolume;if(!i)return;if(i.box){const t=i==null?void 0:i.box;if(t[3]>7972671&&t[7]>7972671&&t[11]>7945940)return}const n=(M=r.root)==null?void 0:M.transform,h=g();if(i.region&&this._verifyArray(i.region,6)){const t=i.region,l=_(t[0]),o=_(t[1]),a=t[4],s=_(t[2]),e=_(t[3]),y=t[5];this.fullExtent=new w({xmin:l,ymin:o,zmin:a,xmax:s,ymax:e,zmax:y,spatialReference:this.spatialReference})}else if(i.sphere&&this._verifyArray(i.sphere,4)){const t=i.sphere,l=x(t[0],t[1],t[2]),o=t[3]/Math.sqrt(3),a=g();F(a,l,x(o,o,o));const s=g();if(p(s,l,x(o,o,o)),n&&this._verifyArray(n,16)){const v=n;I(h,a,v),T(a,h),I(h,s,v),T(s,h)}$(a,E,0,a,b.WGS84,0),$(s,E,0,s,b.WGS84,0);const e=g(),y=g();N(e,a,s),U(y,a,s),this.fullExtent=new w({xmin:e[0],ymin:e[1],zmin:e[2],xmax:y[0],ymax:y[1],zmax:y[2],spatialReference:this.spatialReference})}else if(i.box&&this._verifyArray(i.box,12)){const t=i.box,l=x(t[0],t[1],t[2]),o=x(t[3],t[4],t[5]),a=x(t[6],t[7],t[8]),s=x(t[9],t[10],t[11]),e=[];for(let c=0;c<8;++c)e.push(g());if(p(e[0],l,o),p(e[0],e[0],a),p(e[0],e[0],s),f(e[1],l,o),p(e[1],e[1],a),p(e[1],e[1],s),p(e[2],l,o),f(e[2],e[2],a),p(e[2],e[2],s),f(e[3],l,o),f(e[3],e[3],a),p(e[3],e[3],s),p(e[4],l,o),p(e[4],e[4],a),f(e[4],e[4],s),f(e[5],l,o),p(e[5],e[5],a),f(e[5],e[5],s),p(e[6],l,o),f(e[6],e[6],a),f(e[6],e[6],s),f(e[7],l,o),f(e[7],e[7],a),f(e[7],e[7],s),n&&this._verifyArray(n,16)){const c=n;for(let A=0;A<8;++A)I(e[A],e[A],c)}const y=x(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),v=x(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);for(let c=0;c<8;++c)$(e[c],E,0,e[c],b.WGS84,0),N(v,v,e[c]),U(y,y,e[c]);this.fullExtent=new w({xmin:v[0],ymin:v[1],zmin:v[2],xmax:y[0],ymax:y[1],zmax:y[2],spatialReference:this.spatialReference})}}async load(r){return this.addResolvingPromise(this._doLoad(r)),this}async _doLoad(r){const i=r!=null?r.signal:null;try{await this.loadFromPortal({supportedTypes:["3DTiles Service"],validateItem:n=>{var h;if((h=n.typeKeywords)!=null&&h.includes("IntegratedMesh"))return!0;throw new j("portal:invalid-layer-item-type","Invalid layer item, expected '${expectedType}' ",{expectedType:"3DTiles Service containing IntegratedMesh"})}},r)}catch(n){S(n)}this.url&&await V(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:i}).then(h=>{this._initFullExtent(h.data)},h=>{S(h)})}async fetchAttributionData(){return this.load().then(()=>({}))}_validateElevationInfo(){const r=this.elevationInfo,i="Integrated mesh 3d tiles layers";z(R.getLogger(this),C(i,"absolute-height",r)),z(R.getLogger(this),H(i,r))}};d([u({type:["IntegratedMesh3DTilesLayer"]})],m.prototype,"operationalLayerType",void 0),d([u({type:b})],m.prototype,"spatialReference",void 0),d([u({type:w})],m.prototype,"fullExtent",void 0),d([u(O)],m.prototype,"elevationInfo",null),d([u({type:["show","hide"]})],m.prototype,"listMode",void 0),d([u(B)],m.prototype,"url",void 0),d([u({readOnly:!0})],m.prototype,"type",void 0),d([u({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],m.prototype,"path",void 0),d([u({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:!1,write:!1}}}})],m.prototype,"minScale",void 0),d([u({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:!1,write:!1}}}})],m.prototype,"maxScale",void 0),m=d([X("esri.layers.IntegratedMesh3DTilesLayer")],m);const le=m;export{le as default};
//# sourceMappingURL=IntegratedMesh3DTilesLayer-BLuo9fLw.js.map
