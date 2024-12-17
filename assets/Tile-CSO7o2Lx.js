import{cD as ie,aq as re,j as Y,m as b,k as le,ar as he,v as ae,eR as ce,j$ as ue,k0 as fe,k1 as Q,c3 as J,id as de,a_ as me,k2 as ge,k3 as pe}from"./index-BB6xpuj5.js";import{e as O}from"./TileKey-bsr5k5kR.js";import{_ as _e}from"./QueueProcessor-DuXSk4nk.js";import{t as ye}from"./quickselect-QQC62dOK.js";function k(o,e){return[o,e]}function z(o,e,t){return o[0]=e,o[1]=t,o}function ve(o,e,t,i,s){return o[0]=e,o[1]=t,o[2]=i,o[3]=s,o}const I=new O("0/0/0/0");let xe=class se{static create(e,t,i=null){const s=ie(e.spatialReference),n=t.origin||k(e.origin.x,e.origin.y),r=k(e.size[0]*t.resolution,e.size[1]*t.resolution),l=k(-1/0,-1/0),h=k(1/0,1/0),a=k(1/0,1/0);i!=null&&(z(l,Math.max(0,Math.floor((i.xmin-n[0])/r[0])),Math.max(0,Math.floor((n[1]-i.ymax)/r[1]))),z(h,Math.max(0,Math.floor((i.xmax-n[0])/r[0])),Math.max(0,Math.floor((n[1]-i.ymin)/r[1]))),z(a,h[0]-l[0]+1,h[1]-l[1]+1));const{cols:c,rows:u}=t;let d,y,x,g;return!i&&c&&u&&(z(l,c[0],u[0]),z(h,c[1],u[1]),z(a,c[1]-c[0]+1,u[1]-u[0]+1)),e.isWrappable?(d=k(Math.ceil(Math.round((s.valid[1]-s.valid[0])/t.resolution)/e.size[0]),a[1]),y=!0,x=s.origin,g=s.valid):(d=a,y=!1),new se(t.level,t.resolution,t.scale,n,l,h,a,r,d,y,x,g)}constructor(e,t,i,s,n,r,l,h,a,c,u,d){this.level=e,this.resolution=t,this.scale=i,this.origin=s,this.first=n,this.last=r,this.size=l,this.norm=h,this.worldSize=a,this.wrap=c,this._spatialReferenceOrigin=u,this._spatialReferenceValid=d}normalizeCol(e){if(!this.wrap)return e;const t=this.worldSize[0];return e<0?t-1-Math.abs((e+1)%t):e%t}normalizeKey(e){if(!this.wrap)return;const t=this.worldSize[0],i=e.col;i<0?(e.col=i+t,e.world-=1):i>=t&&(e.col=i-t,e.world+=1)}denormalizeCol(e,t){return this.wrap?this.worldSize[0]*t+e:e}getWorldForColumn(e){return this.wrap?Math.floor(e/this.worldSize[0]):0}getFirstColumnForWorld(e){return e*this.worldSize[0]+this.first[0]}getLastColumnForWorld(e){return e*this.worldSize[0]+this.first[0]+this.size[0]-1}getColumnForX(e){return(e-this.origin[0])/this.norm[0]}getXForColumn(e){const t=this.origin[0]+e*this.norm[0],i=this._spatialReferenceOrigin,s=this._spatialReferenceValid;return this.wrap&&i&&s?t===i[0]?s[0]:this.origin[0]===i[0]&&e===this.worldSize[0]?s[1]:t:t}getRowForY(e){return(this.origin[1]-e)/this.norm[1]}getYForRow(e){return this.origin[1]-e*this.norm[1]}getTileBounds(e,t,i=!1){I.set(t);const s=i?I.col:this.denormalizeCol(I.col,I.world),n=I.row;return ve(e,this.getXForColumn(s),this.getYForRow(n+1),this.getXForColumn(s+1),this.getYForRow(n)),e}getTileCoords(e,t,i=!1){I.set(t);const s=i?I.col:this.denormalizeCol(I.col,I.world);return Array.isArray(e)?z(e,this.getXForColumn(s),this.getYForRow(I.row)):(e.x=this.getXForColumn(s),e.y=this.getYForRow(I.row)),e}},j=class{constructor(){this.spans=[]}acquire(e){this.lodInfo=e}release(){this.lodInfo=null,this.spans.length=0}*keys(){const e=this.lodInfo;for(const{row:t,colFrom:i,colTo:s}of this.spans)for(let n=i;n<=s;n++){const r=e.getWorldForColumn(n);yield new O(e.level,t,e.normalizeCol(n),r)}}forEach(e,t){const{spans:i,lodInfo:s}=this,{level:n}=s;if(i.length!==0)for(const{row:r,colFrom:l,colTo:h}of i)for(let a=l;a<=h;a++)e.call(t,n,r,s.normalizeCol(a),s.getWorldForColumn(a))}};j.pool=new re(j);let K=class{constructor(e,t,i){this.row=e,this.colFrom=t,this.colTo=i}};const m=new O("0/0/0/0");let we=class oe{static create(e,t){e[1]>t[1]&&([e,t]=[t,e]);const[i,s]=e,[n,r]=t,l=n-i,h=r-s,a=h!==0?l/h:0,c=(Math.ceil(s)-s)*a,u=(Math.floor(s)-s)*a;return new oe(i,Math.floor(s),Math.ceil(r),a,l<0?c:u,l<0?u:c,l<0?n:i,l<0?i:n)}constructor(e,t,i,s,n,r,l,h){this.x=e,this.ymin=t,this.ymax=i,this.invM=s,this.leftAdjust=n,this.rightAdjust=r,this.leftBound=l,this.rightBound=h}incrRow(){this.x+=this.invM}getLeftCol(){return Math.max(this.x+this.leftAdjust,this.leftBound)}getRightCol(){return Math.min(this.x+this.rightAdjust,this.rightBound)}};const w=[[0,0],[0,0],[0,0],[0,0]],Ie=1e-6;let ke=class{constructor(e,t=null,i=e.lods[0].level,s=e.lods[e.lods.length-1].level){this.tileInfo=e,this.fullExtent=t,this.scales=[],this._infoByScale={},this._infoByLevel={};const n=e.lods.filter(l=>l.level>=i&&l.level<=s);this.minScale=n[0].scale,this.maxScale=n[n.length-1].scale;const r=this._lodInfos=n.map(l=>xe.create(e,l,t));n.forEach((l,h)=>{this._infoByLevel[l.level]=r[h],this._infoByScale[l.scale]=r[h],this.scales[h]=l.scale},this),this._wrap=e.isWrappable}get spatialReference(){return this.tileInfo.spatialReference}getLODInfoAt(e){return this._infoByLevel[typeof e=="number"?e:e.level]}getTileBounds(e,t,i=!1){m.set(t);const s=this._infoByLevel[m.level];return s?s.getTileBounds(e,m,i):e}getTileCoords(e,t,i=!1){m.set(t);const s=this._infoByLevel[m.level];return s?s.getTileCoords(e,m,i):e}getTileCoverage(e,t=192,i=!0,s="closest"){if(!i&&(e.scale>this.minScale||e.scale<this.maxScale))return null;const n=s==="closest"?this.getClosestInfoForScale(e.scale):this.getSmallestInfoForScale(e.scale),r=j.pool.acquire(n),l=this._wrap;let h,a,c,u=1/0,d=-1/0;const y=r.spans;w[0][0]=w[0][1]=w[1][1]=w[3][0]=-t,w[1][0]=w[2][0]=e.size[0]+t,w[2][1]=w[3][1]=e.size[1]+t;for(const f of w)e.toMap(f,f),f[0]=n.getColumnForX(f[0]),f[1]=n.getRowForY(f[1]);const x=[];let g=3;for(let f=0;f<4;f++){if(w[f][1]===w[g][1]){g=f;continue}const p=we.create(w[f],w[g]);u=Math.min(p.ymin,u),d=Math.max(p.ymax,d),x[p.ymin]===void 0&&(x[p.ymin]=[]),x[p.ymin].push(p),g=f}if(u==null||d==null||d-u>100)return null;let v=[];for(h=u;h<d;){x[h]!=null&&(v=v.concat(x[h])),a=1/0,c=-1/0;for(let f=v.length-1;f>=0;f--){const p=v[f];a=Math.min(a,p.getLeftCol()),c=Math.max(c,p.getRightCol())}if(a=Math.floor(a),c=Math.floor(c),h>=n.first[1]&&h<=n.last[1])if(l)if(n.size[0]<n.worldSize[0]){const f=Math.floor(c/n.worldSize[0]);for(let p=Math.floor(a/n.worldSize[0]);p<=f;p++)y.push(new K(h,Math.max(n.getFirstColumnForWorld(p),a),Math.min(n.getLastColumnForWorld(p),c)))}else y.push(new K(h,a,c));else a>n.last[0]||c<n.first[0]||(a=Math.max(a,n.first[0]),c=Math.min(c,n.last[0]),y.push(new K(h,a,c)));h+=1;for(let f=v.length-1;f>=0;f--){const p=v[f];p.ymax>=h?p.incrRow():v.splice(f,1)}}return r}getTileParentId(e){m.set(e);const t=this._infoByLevel[m.level],i=this._lodInfos.indexOf(t)-1;return i<0?null:(this._getTileIdAtLOD(m,this._lodInfos[i],m),m.id)}getTileResolution(e){const t=this._infoByLevel[typeof e=="object"?e.level:e];return t?t.resolution:-1}getTileScale(e){const t=this._infoByLevel[e.level];return t?t.scale:-1}intersects(e,t){m.set(t);const i=this._infoByLevel[m.level],s=e.lodInfo;if(s.resolution>i.resolution){this._getTileIdAtLOD(m,s,m);const r=s.denormalizeCol(m.col,m.world);for(const l of e.spans)if(l.row===m.row&&l.colFrom<=r&&l.colTo>=r)return!0}if(s.resolution<i.resolution){const[r,l,h,a]=e.spans.reduce((g,v)=>(g[0]=Math.min(g[0],v.row),g[1]=Math.max(g[1],v.row),g[2]=Math.min(g[2],v.colFrom),g[3]=Math.max(g[3],v.colTo),g),[1/0,-1/0,1/0,-1/0]),c=i.denormalizeCol(m.col,m.world),u=s.getColumnForX(i.getXForColumn(c)),d=s.getRowForY(i.getYForRow(m.row)),y=s.getColumnForX(i.getXForColumn(c+1))-1,x=s.getRowForY(i.getYForRow(m.row+1))-1;return!(u>a||y<h||d>l||x<r)}const n=s.denormalizeCol(m.col,m.world);return e.spans.some(r=>r.row===m.row&&r.colFrom<=n&&r.colTo>=n)}normalizeBounds(e,t,i){if(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],this._wrap){const s=ie(this.tileInfo.spatialReference),n=-i*(s.valid[1]-s.valid[0]);e[0]+=n,e[2]+=n}return e}getSmallestInfoForScale(e){const t=this.scales;if(this._infoByScale[e])return this._infoByScale[e];if(e>t[0])return this._infoByScale[t[0]];for(let i=1;i<t.length-1;i++)if(e>t[i]+Ie)return this._infoByScale[t[i-1]];return this._infoByScale[t[t.length-1]]}getClosestInfoForScale(e){const t=this.scales;return this._infoByScale[e]||(e=t.reduce((i,s)=>Math.abs(s-e)<Math.abs(i-e)?s:i,t[0])),this._infoByScale[e]}scaleToLevel(e){const t=this.scales;if(this._infoByScale[e])return this._infoByScale[e].level;for(let i=t.length-1;i>=0;i--)if(e<t[i])return i===t.length-1?this._infoByScale[t[t.length-1]].level:this._infoByScale[t[i]].level+(t[i]-e)/(t[i]-t[i+1]);return this._infoByScale[t[0]].level}scaleToZoom(e){return this.tileInfo.scaleToZoom(e)}zoomToScale(e){return this.tileInfo.zoomToScale(e)}_getTileIdAtLOD(e,t,i){const s=this._infoByLevel[i.level];return e.set(i),t.resolution<s.resolution?null:(t.resolution===s.resolution||(e.level=t.level,e.col=Math.floor(i.col*s.resolution/t.resolution+.01),e.row=Math.floor(i.row*s.resolution/t.resolution+.01)),e)}};const G=[0,0];let T=class extends he{constructor(e){super(e),this._keyToItem=new Map,this._tilesByScale=new Map,this.concurrency=6}initialize(){const{concurrency:e,process:t,scheduler:i,priority:s}=this;this._queue=new _e({concurrency:e,scheduler:i,priority:s,process:(n,r)=>{const l=this._keyToItem.get(n);return t(l,{signal:r})},peeker:n=>this._peek(n)})}destroy(){this.clear(),this._queue=ae(this._queue)}get length(){return this._queue?this._queue.length:0}abort(e){const t=typeof e=="string"?e:e.id;this._queue.abort(t)}clear(){this._queue.clear(),this._keyToItem.clear(),this._tilesByScale.clear()}has(e){return typeof e=="string"?this._keyToItem.has(e):this._keyToItem.has(e.id)}pause(){this._queue.pause()}push(e){const t=e.key.id;if(this._queue.has(t))return this._queue.get(t);const i=this._queue.push(t),s=this.tileInfoView.getTileScale(e.key),n=ce(this._tilesByScale,s,()=>new Set),r=()=>{n.delete(e.key),n.size===0&&this._tilesByScale.delete(s),this._keyToItem.delete(t)};return n.add(e.key),this._keyToItem.set(t,e),i.then(r,r),i}reset(){this._queue.reset()}resume(){this._queue.resume()}_peek(e){if(!this.state)return e.values().next().value;const t=new Set;for(const r of e)t.add(this._keyToItem.get(r).key);const i=this.state.scale;let s,n=Number.POSITIVE_INFINITY;for(const[r,l]of this._tilesByScale)if(ue(l,h=>t.has(h))){const h=Math.abs(r-i);h<n&&(s=l,n=h)}return this._getClosestTileKey(s,e).id}_getClosestTileKey(e,t){const i=this.tileInfoView,s=this.state.center;let n,r=Number.POSITIVE_INFINITY;for(const l of e)if(t.has(l.id)){i.getTileCoords(G,l);const h=fe(G,s);h<r&&(r=h,n=l)}return n}};Y([b({constructOnly:!0})],T.prototype,"concurrency",void 0),Y([b({constructOnly:!0})],T.prototype,"priority",void 0),Y([b({constructOnly:!0})],T.prototype,"process",void 0),Y([b({constructOnly:!0})],T.prototype,"scheduler",void 0),Y([b()],T.prototype,"state",void 0),Y([b({constructOnly:!0})],T.prototype,"tileInfoView",void 0),T=Y([le("esri.views.2d.tiling.TileQueue")],T);const $e=T;class Me{constructor(e,t,i){this.maxSize=e,this._tileInfoView=t,this._removedFunc=i,this._tilePerId=new Map,this._tileKeysPerLevel=[]}clear(){this._tilePerId.clear(),this._tileKeysPerLevel=[]}has(e){return this._tilePerId.has(e)}get(e){return this._tilePerId.get(e)}pop(e){const t=this._tilePerId.get(e);if(!t)return;const i=t.key.level,s=this._tileKeysPerLevel[i];H(this._tilePerId,e);for(let n=0;n<s.length;n++)if(s[n].id===e){s.splice(n,1);break}return t.visible=!0,t}add(e){e.visible=!1;const t=e.key,i=t.id;if(this._tilePerId.has(i))return;this._tilePerId.set(i,e);const s=t.level;this._tileKeysPerLevel[s]||(this._tileKeysPerLevel[s]=[]),this._tileKeysPerLevel[s].push(t)}prune(e,t,i){let s=this._tilePerId.size;if(s<=this.maxSize)return;let n=this._tileKeysPerLevel.length-1;for(;s>this.maxSize&&n>=0;)n!==e&&(s=this._pruneAroundCenterTile(s,t,i,n)),n--;s>this.maxSize&&(s=this._pruneAroundCenterTile(s,t,i,e))}_pruneAroundCenterTile(e,t,i,s){const n=this._tileKeysPerLevel[s];if(!n||n.length===0)return e;const{size:r,origin:l}=this._tileInfoView.tileInfo,h=i*r[0],a=i*r[1],c=[0,0],u=[0,0];for(n.sort((d,y)=>(c[0]=l.x+h*(d.col+.5),c[1]=l.y-a*(d.row+.5),u[0]=l.x+h*(y.col+.5),u[1]=l.y-a*(y.row+.5),Q(c,t)-Q(u,t)));n.length>0;){const d=n.pop();if(this._removeTile(d.id),--e===this.maxSize)break}return e}_removeTile(e){const t=this._tilePerId.get(e);this._removedFunc&&t&&this._removedFunc(t),H(this._tilePerId,e)}}function H(o,e){o.delete(e)}const X=new O(0,0,0,0),S=new Map,$=[],N=[];let Le=class{constructor(e){this._previousScale=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.coveragePolicy="closest",this.resampling=!0,this.tileIndex=new Map,this.tiles=[],this.buffer=192,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,e.resampling!=null&&(this.resampling=e.resampling),e.cachePolicy&&(this.cachePolicy=e.cachePolicy),e.coveragePolicy&&(this.coveragePolicy=e.coveragePolicy),e.buffer!=null&&(this.buffer=e.buffer),e.cacheSize&&(this._tileCache=new Me(e.cacheSize,this.tileInfoView,t=>{this.releaseTile(t)}))}destroy(){this.tileIndex.clear()}update(e){var f,p;const{resampling:t,tileIndex:i}=this,{scale:s,center:n,resolution:r}=e.state,{minScale:l,maxScale:h}=this.tileInfoView,a=!e.stationary&&s>this._previousScale;if(this._previousScale=s,!t&&(s>l||s<h))return this.tiles.length=0,void this.clear();const c=this.tileInfoView.getTileCoverage(e.state,this.buffer,this.resampling,this.coveragePolicy);if(!c)return this.tiles.length=0,void this.clear();const{spans:u,lodInfo:d}=c,{level:y}=d;this.tiles.length=0,i.forEach(_=>_.visible=!0);let x=0,g=0;if(u.length>0)for(const{row:_,colFrom:F,colTo:q}of u)for(let C=F;C<=q;C++){x++;const M=X.set(y,_,d.normalizeCol(C),d.getWorldForColumn(C)).id;let B=i.get(M);if(B)B.isReady?(S.set(M,B),g++):a||this._addParentTile(M,S);else{if((f=this._tileCache)!=null&&f.has(M)){if(B=this._tileCache.pop(M),this.tileIndex.set(M,B),B.isReady){S.set(M,B),g++;continue}}else B=this.acquireTile(X),this.tileIndex.set(M,B);a||this._addParentTile(M,S)}}const v=g===x;for(const[_,F]of i){if(S.has(_))continue;X.set(_);const q=this.tileInfoView.intersects(c,X),C=this.cachePolicy==="purge"?X.level!==y:X.level>y;!q||!a&&v?!C&&q||$.push(F):F.isReady?C&&this.cachePolicy==="purge"&&this._hasReadyAncestor(X,y)?$.push(F):N.push(F):C&&$.push(F)}for(const _ of N)_.isReady&&S.set(_.key.id,_);for(const _ of $)this._tileCache?this._tileCache.add(_):this.releaseTile(_),i.delete(_.key.id);for(const _ of S.values())this.tiles.push(_);for(const _ of i.values())S.has(_.key.id)||(_.visible=!1);(p=this._tileCache)==null||p.prune(y,n,r),j.pool.release(c),N.length=0,$.length=0,S.clear()}clear(){const{tileIndex:e}=this;for(const t of e.values())this.releaseTile(t);e.clear()}refresh(e){var t;for(const i of this.tileIndex.values())e(i);(t=this._tileCache)==null||t.clear()}updateCacheSize(e){this._tileCache&&(this._tileCache.maxSize=e)}_addParentTile(e,t){var n;let i=e,s=null;for(;i=this.tileInfoView.getTileParentId(i),i;)if(this.tileIndex.has(i)){if(s=this.tileIndex.get(i),s==null?void 0:s.isReady){t.has(s.key.id)||t.set(s.key.id,s);break}}else if((n=this._tileCache)!=null&&n.has(i)&&(s=this._tileCache.pop(i),this.tileIndex.set(i,s),s==null?void 0:s.isReady)){t.has(s.key.id)||t.set(s.key.id,s);break}}_hasReadyAncestor(e,t){const i=J();this.tileInfoView.getTileBounds(i,e,!0);for(const s of this.tileIndex.values())if(s.isReady&&s.key.level>=t&&s.key.level<e.level){const n=J();if(this.tileInfoView.getTileBounds(n,s.key,!0),de(n,i))return!0}return!1}};function Z(o,e){if(!(this instanceof Z))return new Z(o,e);this._maxEntries=Math.max(4,o||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&(typeof e=="function"?this.toBBox=e:this._initFormat(e)),this.clear()}function Be(o,e,t){if(!t)return e.indexOf(o);for(var i=0;i<e.length;i++)if(t(o,e[i]))return i;return-1}function P(o,e){L(o,0,o.children.length,e,o)}function L(o,e,t,i,s){s||(s=R(null)),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(var n,r=e;r<t;r++)n=o.children[r],V(s,o.leaf?i(n):n);return s}function V(o,e){return o.minX=Math.min(o.minX,e.minX),o.minY=Math.min(o.minY,e.minY),o.maxX=Math.max(o.maxX,e.maxX),o.maxY=Math.max(o.maxY,e.maxY),o}function U(o,e){return o.minX-e.minX}function ee(o,e){return o.minY-e.minY}function D(o){return(o.maxX-o.minX)*(o.maxY-o.minY)}function A(o){return o.maxX-o.minX+(o.maxY-o.minY)}function Se(o,e){return(Math.max(e.maxX,o.maxX)-Math.min(e.minX,o.minX))*(Math.max(e.maxY,o.maxY)-Math.min(e.minY,o.minY))}function Te(o,e){var t=Math.max(o.minX,e.minX),i=Math.max(o.minY,e.minY),s=Math.min(o.maxX,e.maxX),n=Math.min(o.maxY,e.maxY);return Math.max(0,s-t)*Math.max(0,n-i)}function W(o,e){return o.minX<=e.minX&&o.minY<=e.minY&&e.maxX<=o.maxX&&e.maxY<=o.maxY}function E(o,e){return e.minX<=o.maxX&&e.minY<=o.maxY&&e.maxX>=o.minX&&e.maxY>=o.minY}function R(o){return{children:o,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function te(o,e,t,i,s){for(var n,r=[e,t];r.length;)(t=r.pop())-(e=r.pop())<=i||(n=e+Math.ceil((t-e)/i/2)*i,ye(o,n,e,t,s),r.push(e,n,n,t))}Z.prototype={all:function(){return this._all(this.data,[])},search:function(o){var e=this.data,t=[],i=this.toBBox;if(!E(o,e))return t;for(var s,n,r,l,h=[];e;){for(s=0,n=e.children.length;s<n;s++)r=e.children[s],E(o,l=e.leaf?i(r):r)&&(e.leaf?t.push(r):W(o,l)?this._all(r,t):h.push(r));e=h.pop()}return t},collides:function(o){var e=this.data,t=this.toBBox;if(!E(o,e))return!1;for(var i,s,n,r,l=[];e;){for(i=0,s=e.children.length;i<s;i++)if(n=e.children[i],E(o,r=e.leaf?t(n):n)){if(e.leaf||W(o,r))return!0;l.push(n)}e=l.pop()}return!1},load:function(o){if(!o||!o.length)return this;if(o.length<this._minEntries){for(var e=0,t=o.length;e<t;e++)this.insert(o[e]);return this}var i=this._build(o.slice(),0,o.length-1,0);if(this.data.children.length)if(this.data.height===i.height)this._splitRoot(this.data,i);else{if(this.data.height<i.height){var s=this.data;this.data=i,i=s}this._insert(i,this.data.height-i.height-1,!0)}else this.data=i;return this},insert:function(o){return o!=null&&this._insert(o,this.data.height-1),this},clear:function(){return this.data=R([]),this},remove:function(o,e){if(o==null)return this;for(var t,i,s,n,r=this.data,l=this.toBBox(o),h=[],a=[];r||h.length;){if(r||(r=h.pop(),i=h[h.length-1],t=a.pop(),n=!0),r.leaf&&(s=Be(o,r.children,e))!==-1)return r.children.splice(s,1),h.push(r),this._condense(h),this;n||r.leaf||!W(r,l)?i?(t++,r=i.children[t],n=!1):r=null:(h.push(r),a.push(t),t=0,i=r,r=r.children[0])}return this},toBBox:function(o){return o},compareMinX:U,compareMinY:ee,toJSON:function(){return this.data},fromJSON:function(o){return this.data=o,this},_all:function(o,e){for(var t=[];o;)o.leaf?e.push.apply(e,o.children):t.push.apply(t,o.children),o=t.pop();return e},_build:function(o,e,t,i){var s,n=t-e+1,r=this._maxEntries;if(n<=r)return P(s=R(o.slice(e,t+1)),this.toBBox),s;i||(i=Math.ceil(Math.log(n)/Math.log(r)),r=Math.ceil(n/Math.pow(r,i-1))),(s=R([])).leaf=!1,s.height=i;var l,h,a,c,u=Math.ceil(n/r),d=u*Math.ceil(Math.sqrt(r));for(te(o,e,t,d,this.compareMinX),l=e;l<=t;l+=d)for(te(o,l,a=Math.min(l+d-1,t),u,this.compareMinY),h=l;h<=a;h+=u)c=Math.min(h+u-1,a),s.children.push(this._build(o,h,c,i-1));return P(s,this.toBBox),s},_chooseSubtree:function(o,e,t,i){for(var s,n,r,l,h,a,c,u;i.push(e),!e.leaf&&i.length-1!==t;){for(c=u=1/0,s=0,n=e.children.length;s<n;s++)h=D(r=e.children[s]),(a=Se(o,r)-h)<u?(u=a,c=h<c?h:c,l=r):a===u&&h<c&&(c=h,l=r);e=l||e.children[0]}return e},_insert:function(o,e,t){var i=this.toBBox,s=t?o:i(o),n=[],r=this._chooseSubtree(s,this.data,e,n);for(r.children.push(o),V(r,s);e>=0&&n[e].children.length>this._maxEntries;)this._split(n,e),e--;this._adjustParentBBoxes(s,n,e)},_split:function(o,e){var t=o[e],i=t.children.length,s=this._minEntries;this._chooseSplitAxis(t,s,i);var n=this._chooseSplitIndex(t,s,i),r=R(t.children.splice(n,t.children.length-n));r.height=t.height,r.leaf=t.leaf,P(t,this.toBBox),P(r,this.toBBox),e?o[e-1].children.push(r):this._splitRoot(t,r)},_splitRoot:function(o,e){this.data=R([o,e]),this.data.height=o.height+1,this.data.leaf=!1,P(this.data,this.toBBox)},_chooseSplitIndex:function(o,e,t){var i,s,n,r,l,h,a,c;for(h=a=1/0,i=e;i<=t-e;i++)r=Te(s=L(o,0,i,this.toBBox),n=L(o,i,t,this.toBBox)),l=D(s)+D(n),r<h?(h=r,c=i,a=l<a?l:a):r===h&&l<a&&(a=l,c=i);return c},_chooseSplitAxis:function(o,e,t){var i=o.leaf?this.compareMinX:U,s=o.leaf?this.compareMinY:ee;this._allDistMargin(o,e,t,i)<this._allDistMargin(o,e,t,s)&&o.children.sort(i)},_allDistMargin:function(o,e,t,i){o.children.sort(i);var s,n,r=this.toBBox,l=L(o,0,e,r),h=L(o,t-e,t,r),a=A(l)+A(h);for(s=e;s<t-e;s++)n=o.children[s],V(l,o.leaf?r(n):n),a+=A(l);for(s=t-e-1;s>=e;s--)n=o.children[s],V(h,o.leaf?r(n):n),a+=A(h);return a},_adjustParentBBoxes:function(o,e,t){for(var i=t;i>=0;i--)V(e[i],o)},_condense:function(o){for(var e,t=o.length-1;t>=0;t--)o[t].children.length===0?t>0?(e=o[t-1].children).splice(e.indexOf(o[t]),1):this.clear():P(o[t],this.toBBox)},_initFormat:function(o){var e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(o[0])),this.compareMinY=new Function("a","b",e.join(o[1])),this.toBBox=new Function("a","return {minX: a"+o[0]+", minY: a"+o[1]+", maxX: a"+o[2]+", maxY: a"+o[3]+"};")}};class ne{constructor(e,t){this.key=new O(0,0,0,0),this.bounds=J(),this.objectIds=new Set,this.key.set(t);const i=e.getLODInfoAt(this.key);this.tileInfoView=e,this.tileInfoView.getTileBounds(this.bounds,this.key,!0),this.resolution=i.resolution,this.level=i.level,this.scale=i.scale,this.minScale=e.zoomToScale(i.level-1),this.maxScale=e.zoomToScale(i.level+1)}get lod(){return this.tileInfoView.getLODInfoAt(this.key)}get id(){return this.key.id}get extent(){return me.fromBounds(this.bounds,this.tileInfoView.tileInfo.spatialReference)}get transform(){return{originPosition:"upperLeft",scale:[this.resolution,this.resolution],translate:[this.bounds[0],this.bounds[3]]}}createArcadeEvaluationOptions(e){return{$view:{scale:this.scale,timeZone:e}}}createChildTiles(){const e=this.key.getChildKeys(),t=ge.acquire();for(let i=0;i<e.length;i++)t[i]=new ne(this.tileInfoView,e[i]);return t}getQuantizationParameters(){return pe.fromJSON({mode:"view",originPosition:"upperLeft",tolerance:this.resolution,extent:{xmin:this.bounds[0],ymin:this.bounds[1],xmax:this.bounds[2],ymax:this.bounds[3],spatialReference:this.tileInfoView.tileInfo.spatialReference}})}}export{ke as h,Z as i,ne as n,$e as p,Le as r,j as s};