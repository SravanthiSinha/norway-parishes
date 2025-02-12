import{fU as Oe,cZ as me,hl as Re,hs as M,aN as F,am as be,cc as D,bR as O}from"./index-j6yFHuRy.js";import{o as pe,s as Y,I as Ae,g as q,u as y,v as Z}from"./vec32-CLDLXykA.js";import{s as he,b as ee,a as C,k as te,N as K,H as ne,U as f,E as L}from"./sphere-B8YNY3VQ.js";import{M as p,h as Fe,a as Ee,r as Ne,p as I}from"./plane-D_hNRzaa.js";import{i as ae}from"./Util-BxOTaDfH.js";function le(o){return o?{ray:ee(o.ray),c0:o.c0,c1:o.c1}:{ray:ee(),c0:0,c1:Number.MAX_VALUE}}new he(()=>le());function ye(o){return o?[p(o[0]),p(o[1]),p(o[2]),p(o[3]),p(o[4]),p(o[5])]:[p(),p(),p(),p(),p(),p()]}function ge(){return[F(),F(),F(),F(),F(),F(),F(),F()]}function Ke(o,e){for(let t=0;t<de;t++)Fe(o[t],e[t]);return o}function Je(o,e,t,n=xe){const i=Oe(Ee.get(),e,o);me(i,i);for(let s=0;s<Se;++s){const h=Re(Ne.get(),Be[s],i);pe(n[s],h[0]/h[3],h[1]/h[3],h[2]/h[3])}Me(t,n)}function Me(o,e){I(e[r.FAR_BOTTOM_LEFT],e[r.NEAR_BOTTOM_LEFT],e[r.NEAR_TOP_LEFT],o[S.LEFT]),I(e[r.NEAR_BOTTOM_RIGHT],e[r.FAR_BOTTOM_RIGHT],e[r.FAR_TOP_RIGHT],o[S.RIGHT]),I(e[r.FAR_BOTTOM_LEFT],e[r.FAR_BOTTOM_RIGHT],e[r.NEAR_BOTTOM_RIGHT],o[S.BOTTOM]),I(e[r.NEAR_TOP_LEFT],e[r.NEAR_TOP_RIGHT],e[r.FAR_TOP_RIGHT],o[S.TOP]),I(e[r.NEAR_BOTTOM_LEFT],e[r.NEAR_BOTTOM_RIGHT],e[r.NEAR_TOP_RIGHT],o[S.NEAR]),I(e[r.FAR_BOTTOM_RIGHT],e[r.FAR_BOTTOM_LEFT],e[r.FAR_TOP_LEFT],o[S.FAR])}function v(o,e){for(let t=0;t<de;t++){const n=o[t];if(n[0]*e[0]+n[1]*e[1]+n[2]*e[2]+n[3]>=e[3])return!1}return!0}var S,r;(function(o){o[o.LEFT=0]="LEFT",o[o.RIGHT=1]="RIGHT",o[o.BOTTOM=2]="BOTTOM",o[o.TOP=3]="TOP",o[o.NEAR=4]="NEAR",o[o.FAR=5]="FAR"})(S||(S={})),function(o){o[o.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",o[o.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",o[o.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",o[o.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",o[o.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",o[o.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",o[o.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",o[o.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(r||(r={}));r.FAR_BOTTOM_RIGHT,r.NEAR_BOTTOM_RIGHT,r.NEAR_BOTTOM_LEFT,r.FAR_BOTTOM_LEFT,r.NEAR_BOTTOM_LEFT,r.NEAR_BOTTOM_RIGHT,r.NEAR_TOP_RIGHT,r.NEAR_TOP_LEFT,r.FAR_BOTTOM_RIGHT,r.FAR_BOTTOM_LEFT,r.FAR_TOP_LEFT,r.FAR_TOP_RIGHT,r.NEAR_BOTTOM_RIGHT,r.FAR_BOTTOM_RIGHT,r.FAR_TOP_RIGHT,r.NEAR_TOP_RIGHT,r.FAR_BOTTOM_LEFT,r.NEAR_BOTTOM_LEFT,r.NEAR_TOP_LEFT,r.FAR_TOP_LEFT,r.FAR_TOP_LEFT,r.NEAR_TOP_LEFT,r.NEAR_TOP_RIGHT,r.FAR_TOP_RIGHT;const de=6,Se=8,Be=[M(-1,-1,-1,1),M(1,-1,-1,1),M(1,1,-1,1),M(-1,1,-1,1),M(-1,-1,1,1),M(1,-1,1,1),M(1,1,1,1),M(-1,1,1,1)];new he(le);const xe=ge();class H{get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}constructor(e,t){this.objectToBoundingSphere=e,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new d,this._objectCount=0,t&&(t.maximumObjectsPerNode!==void 0&&(this._maximumObjectsPerNode=t.maximumObjectsPerNode),t.maximumDepth!==void 0&&(this._maximumDepth=t.maximumDepth))}destroy(){this._degenerateObjects.clear(),d.clearPool(),X[0]=null,j.prune(),P.prune()}add(e,t=e.length){this._objectCount+=t,this._grow(e,t);const n=d.acquire();for(let i=0;i<t;i++){const s=e[i];this._isDegenerate(s)?this._degenerateObjects.add(s):(n.init(this._root),this._add(s,n))}d.release(n)}remove(e,t=null){this._objectCount-=e.length;const n=d.acquire();for(const i of e){const s=t??C(this.objectToBoundingSphere(i),De);$(s[3])?(n.init(this._root),je(i,s,n)):this._degenerateObjects.delete(i)}d.release(n),this._shrink()}update(e,t){if(!$(t[3])&&this._isDegenerate(e))return;const n=$e(e);this.remove(n,t),this.add(n)}forEachAlongRay(e,t,n){const i=te(e,t);x(this._root,s=>{if(!He(i,s))return!1;const h=s.node;return h.terminals.forAll(l=>{this._intersectsObject(i,l)&&n(l)}),h.residents!==null&&h.residents.forAll(l=>{this._intersectsObject(i,l)&&n(l)}),!0})}forEachAlongRayWithVerticalOffset(e,t,n,i){const s=te(e,t);x(this._root,h=>{if(!Ie(s,h,i))return!1;const l=h.node;return l.terminals.forAll(a=>{this._intersectsObjectWithOffset(s,a,i)&&n(a)}),l.residents!==null&&l.residents.forAll(a=>{this._intersectsObjectWithOffset(s,a,i)&&n(a)}),!0})}forEach(e){x(this._root,t=>{const n=t.node;return n.terminals.forAll(e),n.residents!==null&&n.residents.forAll(e),!0}),this._degenerateObjects.forEach(e)}forEachDegenerateObject(e){this._degenerateObjects.forEach(e)}findClosest(e,t,n,i=()=>!0,s=1/0){let h=1/0,l=1/0,a=null;const c=J(e,t),T=u=>{if(--s,!i(u))return;const m=this.objectToBoundingSphere(u);if(!v(n,m))return;const E=B(e,t,f(m)),z=E-m[3],_=E+m[3];z<h&&(h=z,l=_,a=u)};return oe(this._root,u=>{if(s<=0||!v(n,u.bounds)||(q(A,c,u.halfSize),y(A,A,f(u.bounds)),B(e,t,A)>l))return!1;const m=u.node;return m.terminals.forAll(E=>T(E)),m.residents!==null&&m.residents.forAll(E=>T(E)),!0},e,t),a}forEachInDepthRange(e,t,n,i,s,h,l){let a=-1/0,c=1/0;const T={setRange:_=>{n===H.DepthOrder.FRONT_TO_BACK?(a=Math.max(a,_.near),c=Math.min(c,_.far)):(a=Math.max(a,-_.far),c=Math.min(c,-_.near))}};T.setRange(i);const u=B(t,n,e),m=J(t,n),E=J(t,-n),z=_=>{if(!l(_))return;const g=this.objectToBoundingSphere(_),G=f(g),Q=B(t,n,G)-u,fe=Q-g[3],Te=Q+g[3];fe>c||Te<a||!v(h,g)||s(_,T)};oe(this._root,_=>{if(!v(h,_.bounds)||(q(A,m,_.halfSize),y(A,A,f(_.bounds)),B(t,n,A)-u>c)||(q(A,E,_.halfSize),y(A,A,f(_.bounds)),B(t,n,A)-u<a))return!1;const g=_.node;return g.terminals.forAll(G=>z(G)),g.residents!==null&&g.residents.forAll(G=>z(G)),!0},t,n)}forEachNode(e){x(this._root,t=>e(t.node,t.bounds,t.halfSize,t.depth))}forEachNeighbor(e,t){const n=K(t),i=f(t),s=a=>{const c=this.objectToBoundingSphere(a),T=K(c),u=n+T;return!(Z(f(c),i)-u*u<=0)||e(a)};let h=!0;const l=a=>{h&&(h=s(a))};x(this._root,a=>{const c=K(a.bounds),T=n+c;if(Z(f(a.bounds),i)-T*T>0)return!1;const u=a.node;return u.terminals.forAll(l),h&&u.residents!==null&&u.residents.forAll(l),h}),h&&this.forEachDegenerateObject(l)}_intersectsObject(e,t){const n=this.objectToBoundingSphere(t);return!(n[3]>0)||ne(n,e)}_intersectsObjectWithOffset(e,t,n){const i=this.objectToBoundingSphere(t);return!(i[3]>0)||ne(n.applyToBoundingSphere(i),e)}_add(e,t){t.advanceTo(this.objectToBoundingSphere(e))?t.node.terminals.push(e):(t.node.residents.push(e),t.node.residents.length>this._maximumObjectsPerNode&&t.depth<this._maximumDepth&&this._split(t))}_split(e){const t=e.node.residents;e.node.residents=null;for(let n=0;n<t.length;n++){const i=d.acquire().init(e);this._add(t.at(n),i),d.release(i)}}_grow(e,t){if(t!==0&&(ie(e,t,n=>this.objectToBoundingSphere(n),N),$(N[3])&&!this._fitsInsideTree(N)))if(ue(this._root.node))C(N,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize();else{const n=this._rootBoundsForRootAsSubNode(N);this._placingRootViolatesMaxDepth(n)?this._rebuildTree(N,n):this._growRootAsSubNode(n),d.release(n)}}_rebuildTree(e,t){Y(f(V),f(t.bounds)),V[3]=t.halfSize,ie([e,V],2,i=>i,W);const n=d.acquire().init(this._root);this._root.initFrom(null,W,W[3]),this._root.increaseHalfSize(1.25),x(n,i=>(this.add(i.node.terminals.data,i.node.terminals.length),i.node.residents!==null&&this.add(i.node.residents.data,i.node.residents.length),!0)),d.release(n)}_placingRootViolatesMaxDepth(e){const t=Math.log(e.halfSize/this._root.halfSize)*Math.LOG2E;let n=0;return x(this._root,i=>(n=Math.max(n,i.depth),n+t<=this._maximumDepth)),n+t>this._maximumDepth}_rootBoundsForRootAsSubNode(e){const t=e[3],n=e;let i=-1/0;const s=this._root.bounds,h=this._root.halfSize;for(let a=0;a<3;a++){const c=s[a]-h-(n[a]-t),T=n[a]+t-(s[a]+h),u=Math.max(0,Math.ceil(c/(2*h))),m=Math.max(0,Math.ceil(T/(2*h)))+1,E=2**Math.ceil(Math.log(u+m)*Math.LOG2E);i=Math.max(i,E),w[a].min=u,w[a].max=m}for(let a=0;a<3;a++){let c=w[a].min,T=w[a].max;const u=(i-(c+T))/2;c+=Math.ceil(u),T+=Math.floor(u);const m=s[a]-h-c*h*2;U[a]=m+(T+c)*h}const l=i*h;return U[3]=l*_e,d.acquire().initFrom(null,U,l,0)}_growRootAsSubNode(e){const t=this._root.node;Y(f(N),f(this._root.bounds)),N[3]=this._root.halfSize,this._root.init(e),e.advanceTo(N,null,!0),e.node.children=t.children,e.node.residents=t.residents,e.node.terminals=t.terminals}_shrink(){for(;;){const e=this._findShrinkIndex();if(e===-1)break;this._root.advance(e),this._root.depth=0}}_findShrinkIndex(){if(this._root.node.terminals.length!==0||this._root.isLeaf())return-1;let e=null;const t=this._root.node.children;let n=0,i=0;for(;i<t.length&&e==null;)n=i++,e=t[n];for(;i<t.length;)if(t[i++])return-1;return n}_isDegenerate(e){return!$(this.objectToBoundingSphere(e)[3])}_fitsInsideTree(e){const t=this._root.bounds,n=this._root.halfSize;return e[3]<=n&&e[0]>=t[0]-n&&e[0]<=t[0]+n&&e[1]>=t[1]-n&&e[1]<=t[1]+n&&e[2]>=t[2]-n&&e[2]<=t[2]+n}toJSON(){const{maximumDepth:e,maximumObjectsPerNode:t,_objectCount:n}=this,i=this._nodeToJSON(this._root.node);return{maximumDepth:e,maximumObjectsPerNode:t,objectCount:n,root:{bounds:this._root.bounds,halfSize:this._root.halfSize,depth:this._root.depth,node:i}}}_nodeToJSON(e){var s,h;const t=e.children.map(l=>l?this._nodeToJSON(l):null),n=(s=e.residents)==null?void 0:s.map(l=>this.objectToBoundingSphere(l)),i=(h=e.terminals)==null?void 0:h.map(l=>this.objectToBoundingSphere(l));return{children:t,residents:n,terminals:i}}static fromJSON(e){const t=new H(n=>n,{maximumDepth:e.maximumDepth,maximumObjectsPerNode:e.maximumObjectsPerNode});return t._objectCount=e.objectCount,t._root.initFrom(e.root.node,e.root.bounds,e.root.halfSize,e.root.depth),t}}class d{constructor(){this.bounds=L(),this.halfSize=0,this.initFrom(null,null,0,0)}init(e){return this.initFrom(e.node,e.bounds,e.halfSize,e.depth)}initFrom(e,t,n,i=this.depth){return this.node=e??d.createEmptyNode(),t&&C(t,this.bounds),this.halfSize=n,this.depth=i,this}increaseHalfSize(e){this.halfSize*=e,this.updateBoundsRadiusFromHalfSize()}updateBoundsRadiusFromHalfSize(){this.bounds[3]=this.halfSize*_e}advance(e){let t=this.node.children[e];t||(t=d.createEmptyNode(),this.node.children[e]=t),this.node=t,this.halfSize/=2,this.depth++;const n=ce[e];return this.bounds[0]+=n[0]*this.halfSize,this.bounds[1]+=n[1]*this.halfSize,this.bounds[2]+=n[2]*this.halfSize,this.updateBoundsRadiusFromHalfSize(),this}advanceTo(e,t,n=!1){for(;;){if(this.isTerminalFor(e))return t&&t(this,-1),!0;if(this.isLeaf()){if(!n)return t&&t(this,-1),!1;this.node.residents=null}const i=this._childIndex(e);t&&t(this,i),this.advance(i)}}isLeaf(){return this.node.residents!=null}isTerminalFor(e){return e[3]>this.halfSize/2}_childIndex(e){const t=this.bounds;return(t[0]<e[0]?1:0)+(t[1]<e[1]?2:0)+(t[2]<e[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new D({shrink:!0}),residents:new D({shrink:!0})}}static acquire(){return d._pool.acquire()}static release(e){d._pool.release(e)}static clearPool(){d._pool.prune()}}function x(o,e){let t=d.acquire().init(o);const n=[t];for(;n.length!==0;){if(t=n.pop(),e(t)&&!t.isLeaf())for(let i=0;i<t.node.children.length;i++)t.node.children[i]&&n.push(d.acquire().init(t).advance(i));d.release(t)}}function oe(o,e,t,n=H.DepthOrder.FRONT_TO_BACK){let i=d.acquire().init(o);const s=[i];for(Ge(t,n,re);s.length!==0;){if(i=s.pop(),e(i)&&!i.isLeaf())for(let h=7;h>=0;--h){const l=re[h];i.node.children[l]&&s.push(d.acquire().init(i).advance(l))}d.release(i)}}function je(o,e,t){j.clear();const n=t.advanceTo(e,(i,s)=>{j.push(i.node),j.push(s)})?t.node.terminals:t.node.residents;if(n.removeUnordered(o),n.length===0)for(let i=j.length-2;i>=0&&Pe(j.data[i],j.data[i+1]);i-=2);}function Pe(o,e){return e>=0&&(o.children[e]=null),!!ue(o)&&(o.residents===null&&(o.residents=new D({shrink:!0})),!0)}function He(o,e){return k(f(e.bounds),2*-e.halfSize,R),k(f(e.bounds),2*e.halfSize,b),ae(o.origin,o.direction,R,b)}function Ie(o,e,t){return k(f(e.bounds),2*-e.halfSize,R),k(f(e.bounds),2*e.halfSize,b),t.applyToMinMax(R,b),ae(o.origin,o.direction,R,b)}function ue(o){if(o.terminals.length!==0)return!1;if(o.residents!==null)return o.residents.length===0;for(let e=0;e<o.children.length;e++)if(o.children[e])return!1;return!0}function Le(o,e){o[0]=Math.min(o[0],e[0]-e[3]),o[1]=Math.min(o[1],e[1]-e[3]),o[2]=Math.min(o[2],e[2]-e[3])}function ze(o,e){o[0]=Math.max(o[0],e[0]+e[3]),o[1]=Math.max(o[1],e[1]+e[3]),o[2]=Math.max(o[2],e[2]+e[3])}function k(o,e,t){t[0]=o[0]+e,t[1]=o[1]+e,t[2]=o[2]+e}function ie(o,e,t,n){if(e===1){const i=t(o[0]);C(i,n)}else{R[0]=1/0,R[1]=1/0,R[2]=1/0,b[0]=-1/0,b[1]=-1/0,b[2]=-1/0;for(let i=0;i<e;i++){const s=t(o[i]);$(s[3])&&(Le(R,s),ze(b,s))}Ae(f(n),R,b,.5),n[3]=Math.max(b[0]-R[0],b[1]-R[1],b[2]-R[2])/2}}function Ge(o,e,t){if(!P.length)for(let n=0;n<8;++n)P.push({index:0,distance:0});for(let n=0;n<8;++n){const i=ce[n];P.data[n].index=n,P.data[n].distance=B(o,e,i)}P.sort((n,i)=>n.distance-i.distance);for(let n=0;n<8;++n)t[n]=P.data[n].index}function J(o,e){let t,n=1/0;for(let i=0;i<8;++i){const s=B(o,e,se[i]);s<n&&(n=s,t=se[i])}return t}function B(o,e,t){return e*(o[0]*t[0]+o[1]*t[1]+o[2]*t[2])}function $(o){return!isNaN(o)&&o!==-1/0&&o!==1/0&&o>0}d._pool=new be(d),function(o){var e;(e=o.DepthOrder||(o.DepthOrder={}))[e.FRONT_TO_BACK=1]="FRONT_TO_BACK",e[e.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(H||(H={}));const ce=[O(-1,-1,-1),O(1,-1,-1),O(-1,1,-1),O(1,1,-1),O(-1,-1,1),O(1,-1,1),O(-1,1,1),O(1,1,1)],se=[O(-1,-1,-1),O(-1,-1,1),O(-1,1,-1),O(-1,1,1),O(1,-1,-1),O(1,-1,1),O(1,1,-1),O(1,1,1)],_e=Math.sqrt(3),X=[null];function $e(o){return X[0]=o,X}const U=L(),A=F(),R=F(),b=F(),j=new D,De=L(),N=L(),V=L(),W=L(),w=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],P=new D,re=[0,0,0,0,0,0,0,0],Ue=H;export{ye as H,Je as L,Ke as N,Ue as Y};
//# sourceMappingURL=Octree-k12zQ0CE.js.map
