import{j as v,k as y,aN as p,w as L,cN as m}from"./index-UqHiE_Ae.js";import{q as l,p as _,u as h}from"./vec32-BSCBtxXw.js";import{v as j,b as x,j as P}from"./lineSegment-Bk30srDh.js";import{E as S,U as f,i as C}from"./sphere-iTe_0FTJ.js";import{Y as b}from"./Octree-Dwc9o6za.js";import{m as $}from"./edgeProcessing-BJrrM5rc.js";import"./plane-7YoF7ZLn.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-CSKppSlJ.js";import"./quatf64-aQ5IuZRd.js";import"./mat3-DBYGNwdL.js";import"./Util-CJ-4KOEi.js";import"./deduplicate-CGBxU-Ri.js";import"./Indices-C7r5HZ7u.js";import"./InterleavedLayout-DNHUlUVG.js";import"./BufferView-tC5Mp6Kf.js";import"./types-D0PSWh4d.js";import"./VertexAttribute-BdZWZuT1.js";import"./glUtil-CFv2RXTA.js";import"./enums-Dk3osxpS.js";import"./VertexElementDescriptor-BOD-G50G.js";const I=1e3;function V(t,o,n){const i=S(),e=f(i);return l(e,e,t,.5),l(e,e,o,.5),i[3]=_(e,t),h(e,e,n),i}let g=class{constructor(){this._idToComponent=new Map,this._components=new b(t=>t.bounds),this._edges=new b(t=>t.bounds),this._tmpLineSegment=j(),this._tmpP1=p(),this._tmpP2=p(),this._tmpP3=p(),this.remoteClient=null}async fetchCandidates(t,o){await Promise.resolve(),L(o),await this._ensureEdgeLocations(t,o);const n=[];return this._edges.forEachNeighbor(i=>(this._addCandidates(t,i,n),n.length<I),t.bounds),{result:{candidates:n}}}async _ensureEdgeLocations(t,o){const n=[];if(this._components.forEachNeighbor(s=>{if(s.info==null){const{id:c,uid:r}=s;n.push({id:c,uid:r})}return!0},t.bounds),!n.length)return;const i={components:n},e=await this.remoteClient.invoke("fetchAllEdgeLocations",i,o??{});for(const s of e.components)this._setFetchEdgeLocations(s)}async add(t){const o=new u(t.id,t.bounds);return this._idToComponent.set(o.id,o),this._components.add([o]),{result:{}}}async remove(t){const o=this._idToComponent.get(t.id);if(o){const n=[];this._edges.forEachNeighbor(i=>(i.component===o&&n.push(i),!0),o.bounds),this._edges.remove(n),this._components.remove([o]),this._idToComponent.delete(o.id)}return{result:{}}}_setFetchEdgeLocations(t){const o=this._idToComponent.get(t.id);if(o==null||t.uid!==o.uid)return;const n=$.createView(t.locations),i=new Array(n.count),e=p(),s=p();for(let d=0;d<n.count;d++){n.position0.getVec(d,e),n.position1.getVec(d,s);const a=V(e,s,t.origin),E=new N(o,d,a);i[d]=E}this._edges.add(i);const{objectIds:c,origin:r}=t;o.info={locations:n,objectIds:c,origin:r}}_addCandidates(t,o,n){const{info:i}=o.component,{origin:e,objectIds:s}=i,c=i.locations,r=c.position0.getVec(o.index,this._tmpP1),d=c.position1.getVec(o.index,this._tmpP2);h(r,r,e),h(d,d,e);const a=s[c.componentIndex.get(o.index)];this._addEdgeCandidate(t,a,r,d,n),w(t,a,r,n),w(t,a,d,n)}_addEdgeCandidate(t,o,n,i,e){if(!t.returnEdge)return;const s=f(t.bounds),c=x(n,i,this._tmpLineSegment),r=P(c,s,this._tmpP3);C(t.bounds,r)&&e.push({type:"edge",objectId:o,target:m(r),distance:_(s,r),start:m(n),end:m(i)})}};g=v([y("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],g);const tt=g;function w(t,o,n,i){if(!t.returnVertex||!C(t.bounds,n))return;const e=f(t.bounds);i.push({type:"vertex",objectId:o,target:m(n),distance:_(e,n)})}class u{constructor(o,n){this.id=o,this.bounds=n,this.info=null,this.uid=++u.uid}}u.uid=0;class N{constructor(o,n,i){this.component=o,this.index=n,this.bounds=i}}export{tt as default};
//# sourceMappingURL=SceneLayerSnappingSourceWorker-CHRNN05E.js.map
