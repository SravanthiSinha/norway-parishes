import{ez as M,eA as j,eB as U,ag as h,aX as x,c6 as B,U as c,I as u,j as r,m as s,k as T,by as P,P as k}from"./index-5zHX_dwk.js";import{S as R}from"./MultiOriginJSONSupport-RBIYyr5w.js";import{f as I}from"./RefreshableLayer-BGHP0OgI.js";import{o as w}from"./imageBitmapUtils-B5QujcV-.js";import{z as b,p as a}from"./TileInfo-CmdPm9xa.js";import{t as $}from"./TileKey-DZd6gJy7.js";import{b as _}from"./OperationalLayer-dFN5wdq5.js";import"./commonProperties-6NkVIVhw.js";var f;const y=new $("0/0/0",0,0,0,void 0);let g=f=class extends M(j(I(U))){constructor(){super(...arguments),this.tileInfo=b.create({spatialReference:h.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new x(-20037508342787e-6,-2003750834278e-5,2003750834278e-5,20037508342787e-6,h.WebMercator),this.spatialReference=h.WebMercator}getTileBounds(e,t,o,n){const l=n||B();return y.level=e,y.row=t,y.col=o,y.extent=l,this.tileInfo.updateTileInfo(y),y.extent=void 0,l}fetchTile(e,t,o,n={}){const{signal:l}=n,p=this.getTileUrl(e,t,o),d={responseType:"image",signal:l,query:{...this.refreshParameters}};return c(p??"",d).then(m=>m.data)}async fetchImageBitmapTile(e,t,o,n={}){const{signal:l}=n;if(this.fetchTile!==f.prototype.fetchTile){const S=await this.fetchTile(e,t,o,n);return w(S,e,t,o,l)}const p=this.getTileUrl(e,t,o)??"",d={responseType:"blob",signal:l,query:{...this.refreshParameters}},{data:m}=await c(p,d);return w(m,e,t,o,l)}getTileUrl(){throw new u("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};r([s({type:b})],g.prototype,"tileInfo",void 0),r([s({type:["show","hide"]})],g.prototype,"listMode",void 0),r([s({readOnly:!0,value:"base-tile"})],g.prototype,"type",void 0),r([s({nonNullable:!0})],g.prototype,"fullExtent",void 0),r([s()],g.prototype,"spatialReference",void 0),g=f=r([T("esri.layers.BaseTileLayer")],g);const z=g,v=new k({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"}),A="https://dev.virtualearth.net";let i=class extends M(_(R(z))){constructor(e){super(e),this.type="bing-maps",this.tileInfo=new b({size:[256,256],dpi:96,origin:new P({x:-20037508342787e-6,y:20037508342787e-6,spatialReference:h.WebMercator}),spatialReference:h.WebMercator,lods:[new a({level:1,resolution:78271.5169639999,scale:295828763795777e-6}),new a({level:2,resolution:39135.7584820001,scale:147914381897889e-6}),new a({level:3,resolution:19567.8792409999,scale:73957190948944e-6}),new a({level:4,resolution:9783.93962049996,scale:36978595474472e-6}),new a({level:5,resolution:4891.96981024998,scale:18489297737236e-6}),new a({level:6,resolution:2445.98490512499,scale:9244648868618e-6}),new a({level:7,resolution:1222.99245256249,scale:4622324434309e-6}),new a({level:8,resolution:611.49622628138,scale:2311162217155e-6}),new a({level:9,resolution:305.748113140558,scale:1155581108577e-6}),new a({level:10,resolution:152.874056570411,scale:577790.554289}),new a({level:11,resolution:76.4370282850732,scale:288895.277144}),new a({level:12,resolution:38.2185141425366,scale:144447.638572}),new a({level:13,resolution:19.1092570712683,scale:72223.819286}),new a({level:14,resolution:9.55462853563415,scale:36111.909643}),new a({level:15,resolution:4.77731426794937,scale:18055.954822}),new a({level:16,resolution:2.38865713397468,scale:9027.977411}),new a({level:17,resolution:1.19432856685505,scale:4513.988705}),new a({level:18,resolution:.597164283559817,scale:2256.994353}),new a({level:19,resolution:.298582141647617,scale:1128.497176}),new a({level:20,resolution:.1492910708238085,scale:564.248588})]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(e){this._set("bingMetadata",e)}get copyright(){return this.bingMetadata!=null?this.bingMetadata.copyright:null}get operationalLayerType(){return v.toJSON(this.style)}get bingLogo(){return this.bingMetadata!=null?this.bingMetadata.brandLogoUri:null}load(e){return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then(()=>this._getMetadata())):this.addResolvingPromise(Promise.reject(new u("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}getTileUrl(e,t,o){if(!this.loaded||this.bingMetadata==null)return null;const n=this.bingMetadata.resourceSets[0].resources[0],l=n.imageUrlSubdomains[t%n.imageUrlSubdomains.length],p=this._getQuadKey(e,t,o);return n.imageUrl.replace("{subdomain}",l).replace("{quadkey}",p)}async fetchAttributionData(){return this.load().then(()=>this.bingMetadata==null?null:{contributors:this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map(e=>({attribution:e.attribution,coverageAreas:e.coverageAreas.map(t=>({zoomMin:t.zoomMin,zoomMax:t.zoomMax,score:1,bbox:[t.bbox[0],t.bbox[1],t.bbox[2],t.bbox[3]]}))}))})}_getMetadata(){const e={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return c(`${A}/REST/v1/Imagery/Metadata/${e}`,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then(t=>{const o=t.data;if(o.statusCode!==200)throw new u("bingmapslayer:getmetadata",o.statusDescription);if(this.bingMetadata=o,this.bingMetadata.resourceSets.length===0)throw new u("bingmapslayer:getmetadata","no bing resourcesets");if(this.bingMetadata.resourceSets[0].resources.length===0)throw new u("bingmapslayer:getmetadata","no bing resources")}).catch(t=>{throw new u("bingmapslayer:getmetadata",t.message)})}_getPortalBingKey(){return c(this.portalUrl??"",{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then(e=>{if(!e.data.bingKey)throw new u("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=e.data.bingKey}).catch(e=>{throw new u("bingmapslayer:getportalbingkey",e.message)})}_getQuadKey(e,t,o){let n="";for(let l=e;l>0;l--){let p=0;const d=1<<l-1;o&d&&(p+=1),t&d&&(p+=2),n+=p.toString()}return n}};r([s({json:{read:!1,write:!1},value:null})],i.prototype,"bingMetadata",null),r([s({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],i.prototype,"type",void 0),r([s({type:b})],i.prototype,"tileInfo",void 0),r([s({type:String,readOnly:!0,json:{read:!1,write:!1}})],i.prototype,"copyright",null),r([s({type:String,json:{write:!1,read:!1}})],i.prototype,"key",void 0),r([s({type:v.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:v.read}}})],i.prototype,"style",void 0),r([s({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],i.prototype,"operationalLayerType",null),r([s({type:String,json:{write:!1,read:!1}})],i.prototype,"culture",void 0),r([s({type:String,json:{write:!1,read:!1}})],i.prototype,"region",void 0),r([s({type:String,json:{write:!0,read:!0}})],i.prototype,"portalUrl",void 0),r([s({type:Boolean,json:{write:!1,read:!1}})],i.prototype,"hasAttributionData",void 0),r([s({type:String,readOnly:!0})],i.prototype,"bingLogo",null),i=r([T("esri.layers.BingMapsLayer")],i);const H=i;export{H as default};
//# sourceMappingURL=BingMapsLayer-G0FJLZtt.js.map
