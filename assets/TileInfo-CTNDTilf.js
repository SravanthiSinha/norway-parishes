import{j as r,m as a,P as _,e_ as O,k as L,M as P,o as b,u as S,ag as M,cv as G,bt as y,cG as j,b2 as W,d9 as F,a9 as D,cD as A,c6 as E}from"./index-Dqo4rVFT.js";import{t as I}from"./TileKey-DZd6gJy7.js";var R;let f=R=class extends _{constructor(e){super(e),this.cols=null,this.level=0,this.levelValue=null,this.origin=null,this.resolution=0,this.rows=null,this.scale=0}clone(){return new R({cols:this.cols,level:this.level,levelValue:this.levelValue,resolution:this.resolution,rows:this.rows,scale:this.scale})}};r([a({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],f.prototype,"cols",void 0),r([a({type:O,json:{write:!0}})],f.prototype,"level",void 0),r([a({type:String,json:{write:!0}})],f.prototype,"levelValue",void 0),r([a({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],f.prototype,"origin",void 0),r([a({type:Number,json:{write:!0}})],f.prototype,"resolution",void 0),r([a({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],f.prototype,"rows",void 0),r([a({type:Number,json:{write:!0}})],f.prototype,"scale",void 0),f=R=r([L("esri.layers.support.LOD")],f);const v=f;var d;const N=new P({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let n=d=class extends _{static create(e={}){const{resolutionFactor:t=1,scales:s,size:i=256,spatialReference:o=M.WebMercator,numLODs:l=24}=e;if(!G(o)){const c=[];if(s)for(let u=0;u<s.length;u++){const h=s[u];c.push(new v({level:u,scale:h,resolution:h}))}else{let u=5e-4;for(let h=l-1;h>=0;h--)c.unshift(new v({level:h,scale:u,resolution:u})),u*=2}return new d({dpi:96,lods:c,origin:new y(0,0,o),size:[i,i],spatialReference:o})}const p=j(o),g=e.origin?new y({x:e.origin.x,y:e.origin.y,spatialReference:o}):new y(p?{x:p.origin[0],y:p.origin[1],spatialReference:o}:{x:0,y:0,spatialReference:o}),m=96,w=1/(W(o)*39.37*m),x=[];if(s)for(let c=0;c<s.length;c++){const u=s[c],h=u*w;x.push(new v({level:c,scale:u,resolution:h}))}else{let c=F(o)?512/i*5916575275917094e-7:256/i*591657527591555e-6;const u=Math.ceil(l/t);x.push(new v({level:0,scale:c,resolution:c*w}));for(let h=1;h<u;h++){const z=c/2**t,T=z*w;x.push(new v({level:h,scale:z,resolution:T})),c=z}}return new d({dpi:m,lods:x,origin:g,size:[i,i],spatialReference:o})}constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.size=null,this.spatialReference=null}get isWrappable(){const{spatialReference:e,origin:t}=this;if(e&&t){const s=j(e);return e.isWrappable&&!!s&&Math.abs(s.origin[0]-t.x)<=s.dx}return!1}readOrigin(e,t){return y.fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,s=0;const i=[],o=this._levelToLOD={};e&&(t=-1/0,s=1/0,e.forEach(l=>{i.push(l.scale),t=l.scale>t?l.scale:t,s=l.scale<s?l.scale:s,o[l.level]=l})),this._set("scales",i),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[1]}zoomToScale(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length-1)return t[t.length-1];const s=Math.floor(e),i=s+1;return t[s]/(t[s]/t[i])**(e-s)}scaleToZoom(e){const t=this.scales,s=t.length-1;let i=0;for(;i<s;i++){const o=t[i],l=t[i+1];if(o<=e)return i;if(l===e)return i+1;if(o>e&&l<e)return i+Math.log(o/e)/Math.log(o/l)}return i}tileAt(e,t,s,i){const o=this.lodAt(e);if(!o)return null;let l,p;if(typeof t=="number")l=t,p=s;else if(D(t.spatialReference,this.spatialReference))l=t.x,p=t.y,i=s;else{const w=A(t,this.spatialReference);if(w==null)return null;l=w.x,p=w.y,i=s}const g=o.resolution*this.size[0],m=o.resolution*this.size[1];return i||(i=new I(null,0,0,0,E())),i.level=e,i.row=Math.floor((this.origin.y-p)/m+.001),i.col=Math.floor((l-this.origin.x)/g+.001),this.updateTileInfo(i),i}updateTileInfo(e,t=d.ExtrapolateOptions.NONE){let s=this.lodAt(e.level);if(!s&&t===d.ExtrapolateOptions.POWER_OF_TWO){const p=this.lods[this.lods.length-1];p.level<e.level&&(s=p)}if(!s)return;const i=e.level-s.level,o=s.resolution*this.size[0]/2**i,l=s.resolution*this.size[1]/2**i;e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=E()),e.extent[0]=this.origin.x+e.col*o,e.extent[1]=this.origin.y-(e.row+1)*l,e.extent[2]=e.extent[0]+o,e.extent[3]=e.extent[1]+l}upsampleTile(e){const t=this._upsampleLevels[e.level];return!(!t||t.parentLevel===-1)&&(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),!0)}getTileBounds(e,t){const s=this.lodAt(t.level);if(s==null)return null;const{resolution:i}=s,o=i*this.size[0],l=i*this.size[1];return e[0]=this.origin.x+t.col*o,e[1]=this.origin.y-(t.row+1)*l,e[2]=e[0]+o,e[3]=e[1]+l,e}lodAt(e){var t;return((t=this._levelToLOD)==null?void 0:t[e])??null}clone(){return d.fromJSON(this.write({}))}getCompatibleForVTL(e){if(this.size[0]!==this.size[1]||this.size[0]===256&&e===512)return null;const t=(this.size[0]===512&&e===256?-1:0)+(this.spatialReference.isGeographic?1:0);if(this.size[0]===e&&t===0)return this;const s=[],i=this.lods.length-t;for(let o=0;o<i;o++){const l=o+t,{scale:p,resolution:g}=l>=0?this.lods[l]:{scale:2*this.lods[0].scale,resolution:2*this.lods[0].resolution};s.push(new v({level:o,scale:p,resolution:g}))}return new d({size:[e,e],dpi:this.dpi,format:this.format,compressionQuality:this.compressionQuality,origin:this.origin,spatialReference:this.spatialReference,lods:s})}_initializeUpsampleLevels(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let s=0;s<e.length;s++){const i=e[s];this._upsampleLevels[i.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/i.resolution:0},t=i}}};r([a({type:Number,json:{write:!0}})],n.prototype,"compressionQuality",void 0),r([a({type:Number,json:{write:!0}})],n.prototype,"dpi",void 0),r([a({type:String,json:{read:N.read,write:N.write,origins:{"web-scene":{read:!1,write:!1}}}})],n.prototype,"format",void 0),r([a({readOnly:!0})],n.prototype,"isWrappable",null),r([a({type:y,json:{write:!0}})],n.prototype,"origin",void 0),r([b("origin")],n.prototype,"readOrigin",null),r([a({type:[v],value:null,json:{write:!0}})],n.prototype,"lods",null),r([a({readOnly:!0})],n.prototype,"scales",void 0),r([a({cast:e=>Array.isArray(e)?e:typeof e=="number"?[e,e]:[256,256]})],n.prototype,"size",void 0),r([b("size",["rows","cols"])],n.prototype,"readSize",null),r([S("size",{cols:{type:O},rows:{type:O}})],n.prototype,"writeSize",null),r([a({type:M,json:{write:!0}})],n.prototype,"spatialReference",void 0),n=d=r([L("esri.layers.support.TileInfo")],n),function(e){var t;(t=e.ExtrapolateOptions||(e.ExtrapolateOptions={}))[t.NONE=0]="NONE",t[t.POWER_OF_TWO=1]="POWER_OF_TWO"}(n||(n={}));const C=n;export{v as p,C as z};
//# sourceMappingURL=TileInfo-CTNDTilf.js.map
