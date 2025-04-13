import{fW as Oe,cY as me,hr as Re,hw as M,aN as F,cc as D,bR as O,am as be}from"./index-BlI3-bLW.js";import{o as pe,s as Q,I as Ae,v as Z,g as q,u as y}from"./vec32-Bu1rR2Op.js";import{s as ae,b as ee,a as C,k as te,N as K,H as ne,E as L,U as f}from"./sphere-CIp6bdxt.js";import{M as p,h as Fe,a as Ee,r as Ne,p as I}from"./plane-ELSex9JT.js";import{i as he}from"./Util-NGItsJfU.js";function le(o){return o?{ray:ee(o.ray),c0:o.c0,c1:o.c1}:{ray:ee(),c0:0,c1:Number.MAX_VALUE}}new ae(()=>le());function ye(o){return o?[p(o[0]),p(o[1]),p(o[2]),p(o[3]),p(o[4]),p(o[5])]:[p(),p(),p(),p(),p(),p()]}function ge(){return[F(),F(),F(),F(),F(),F(),F(),F()]}function Ke(o,e){for(let t=0;t<ue;t++)Fe(o[t],e[t]);return o}function Je(o,e,t,n=xe){const i=Oe(Ee.get(),e,o);me(i,i);for(let r=0;r<Se;++r){const a=Re(Ne.get(),Be[r],i);pe(n[r],a[0]/a[3],a[1]/a[3],a[2]/a[3])}Me(t,n)}function Me(o,e){I(e[s.FAR_BOTTOM_LEFT],e[s.NEAR_BOTTOM_LEFT],e[s.NEAR_TOP_LEFT],o[S.LEFT]),I(e[s.NEAR_BOTTOM_RIGHT],e[s.FAR_BOTTOM_RIGHT],e[s.FAR_TOP_RIGHT],o[S.RIGHT]),I(e[s.FAR_BOTTOM_LEFT],e[s.FAR_BOTTOM_RIGHT],e[s.NEAR_BOTTOM_RIGHT],o[S.BOTTOM]),I(e[s.NEAR_TOP_LEFT],e[s.NEAR_TOP_RIGHT],e[s.FAR_TOP_RIGHT],o[S.TOP]),I(e[s.NEAR_BOTTOM_LEFT],e[s.NEAR_BOTTOM_RIGHT],e[s.NEAR_TOP_RIGHT],o[S.NEAR]),I(e[s.FAR_BOTTOM_RIGHT],e[s.FAR_BOTTOM_LEFT],e[s.FAR_TOP_LEFT],o[S.FAR])}function v(o,e){for(let t=0;t<ue;t++){const n=o[t];if(n[0]*e[0]+n[1]*e[1]+n[2]*e[2]+n[3]>=e[3])return!1}return!0}var S,s;(function(o){o[o.LEFT=0]="LEFT",o[o.RIGHT=1]="RIGHT",o[o.BOTTOM=2]="BOTTOM",o[o.TOP=3]="TOP",o[o.NEAR=4]="NEAR",o[o.FAR=5]="FAR"})(S||(S={})),function(o){o[o.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",o[o.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",o[o.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",o[o.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",o[o.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",o[o.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",o[o.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",o[o.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(s||(s={}));s.FAR_BOTTOM_RIGHT,s.NEAR_BOTTOM_RIGHT,s.NEAR_BOTTOM_LEFT,s.FAR_BOTTOM_LEFT,s.NEAR_BOTTOM_LEFT,s.NEAR_BOTTOM_RIGHT,s.NEAR_TOP_RIGHT,s.NEAR_TOP_LEFT,s.FAR_BOTTOM_RIGHT,s.FAR_BOTTOM_LEFT,s.FAR_TOP_LEFT,s.FAR_TOP_RIGHT,s.NEAR_BOTTOM_RIGHT,s.FAR_BOTTOM_RIGHT,s.FAR_TOP_RIGHT,s.NEAR_TOP_RIGHT,s.FAR_BOTTOM_LEFT,s.NEAR_BOTTOM_LEFT,s.NEAR_TOP_LEFT,s.FAR_TOP_LEFT,s.FAR_TOP_LEFT,s.NEAR_TOP_LEFT,s.NEAR_TOP_RIGHT,s.FAR_TOP_RIGHT;const ue=6,Se=8,Be=[M(-1,-1,-1,1),M(1,-1,-1,1),M(1,1,-1,1),M(-1,1,-1,1),M(-1,-1,1,1),M(1,-1,1,1),M(1,1,1,1),M(-1,1,1,1)];new ae(le);const xe=ge();class H{get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}constructor(e,t){this.objectToBoundingSphere=e,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new u,this._objectCount=0,t&&(t.maximumObjectsPerNode!==void 0&&(this._maximumObjectsPerNode=t.maximumObjectsPerNode),t.maximumDepth!==void 0&&(this._maximumDepth=t.maximumDepth))}destroy(){this._degenerateObjects.clear(),u.clearPool(),X[0]=null,j.prune(),P.prune()}add(e,t=e.length){this._objectCount+=t,this._grow(e,t);const n=u.acquire();for(let i=0;i<t;i++){const r=e[i];this._isDegenerate(r)?this._degenerateObjects.add(r):(n.init(this._root),this._add(r,n))}u.release(n)}remove(e,t=null){this._objectCount-=e.length;const n=u.acquire();for(const i of e){const r=t??C(this.objectToBoundingSphere(i),De);$(r[3])?(n.init(this._root),je(i,r,n)):this._degenerateObjects.delete(i)}u.release(n),this._shrink()}update(e,t){if(!$(t[3])&&this._isDegenerate(e))return;const n=$e(e);this.remove(n,t),this.add(n)}forEachAlongRay(e,t,n){const i=te(e,t);x(this._root,r=>{if(!He(i,r))return!1;const a=r.node;return a.terminals.forAll(l=>{this._intersectsObject(i,l)&&n(l)}),a.residents!==null&&a.residents.forAll(l=>{this._intersectsObject(i,l)&&n(l)}),!0})}forEachAlongRayWithVerticalOffset(e,t,n,i){const r=te(e,t);x(this._root,a=>{if(!Ie(r,a,i))return!1;const l=a.node;return l.terminals.forAll(h=>{this._intersectsObjectWithOffset(r,h,i)&&n(h)}),l.residents!==null&&l.residents.forAll(h=>{this._intersectsObjectWithOffset(r,h,i)&&n(h)}),!0})}forEach(e){x(this._root,t=>{const n=t.node;return n.terminals.forAll(e),n.residents!==null&&n.residents.forAll(e),!0}),this._degenerateObjects.forEach(e)}forEachDegenerateObject(e){this._degenerateObjects.forEach(e)}findClosest(e,t,n,i=()=>!0,r=1/0){let a=1/0,l=1/0,h=null;const c=J(e,t),T=d=>{if(--r,!i(d))return;const m=this.objectToBoundingSphere(d);if(!v(n,m))return;const E=B(e,t,f(m)),z=E-m[3],_=E+m[3];z<a&&(a=z,l=_,h=d)};return oe(this._root,d=>{if(r<=0||!v(n,d.bounds)||(q(A,c,d.halfSize),y(A,A,f(d.bounds)),B(e,t,A)>l))return!1;const m=d.node;return m.terminals.forAll(E=>T(E)),m.residents!==null&&m.residents.forAll(E=>T(E)),!0},e,t),h}forEachInDepthRange(e,t,n,i,r,a,l){let h=-1/0,c=1/0;const T={setRange:_=>{n===H.DepthOrder.FRONT_TO_BACK?(h=Math.max(h,_.near),c=Math.min(c,_.far)):(h=Math.max(h,-_.far),c=Math.min(c,-_.near))}};T.setRange(i);const d=B(t,n,e),m=J(t,n),E=J(t,-n),z=_=>{if(!l(_))return;const g=this.objectToBoundingSphere(_),G=f(g),Y=B(t,n,G)-d,fe=Y-g[3],Te=Y+g[3];fe>c||Te<h||!v(a,g)||r(_,T)};oe(this._root,_=>{if(!v(a,_.bounds)||(q(A,m,_.halfSize),y(A,A,f(_.bounds)),B(t,n,A)-d>c)||(q(A,E,_.halfSize),y(A,A,f(_.bounds)),B(t,n,A)-d<h))return!1;const g=_.node;return g.terminals.forAll(G=>z(G)),g.residents!==null&&g.residents.forAll(G=>z(G)),!0},t,n)}forEachNode(e){x(this._root,t=>e(t.node,t.bounds,t.halfSize,t.depth))}forEachNeighbor(e,t){const n=K(t),i=f(t),r=h=>{const c=this.objectToBoundingSphere(h),T=K(c),d=n+T;return!(Z(f(c),i)-d*d<=0)||e(h)};let a=!0;const l=h=>{a&&(a=r(h))};x(this._root,h=>{const c=K(h.bounds),T=n+c;if(Z(f(h.bounds),i)-T*T>0)return!1;const d=h.node;return d.terminals.forAll(l),a&&d.residents!==null&&d.residents.forAll(l),a}),a&&this.forEachDegenerateObject(l)}_intersectsObject(e,t){const n=this.objectToBoundingSphere(t);return!(n[3]>0)||ne(n,e)}_intersectsObjectWithOffset(e,t,n){const i=this.objectToBoundingSphere(t);return!(i[3]>0)||ne(n.applyToBoundingSphere(i),e)}_add(e,t){t.advanceTo(this.objectToBoundingSphere(e))?t.node.terminals.push(e):(t.node.residents.push(e),t.node.residents.length>this._maximumObjectsPerNode&&t.depth<this._maximumDepth&&this._split(t))}_split(e){const t=e.node.residents;e.node.residents=null;for(let n=0;n<t.length;n++){const i=u.acquire().init(e);this._add(t.at(n),i),u.release(i)}}_grow(e,t){if(t!==0&&(ie(e,t,n=>this.objectToBoundingSphere(n),N),$(N[3])&&!this._fitsInsideTree(N)))if(de(this._root.node))C(N,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize();else{const n=this._rootBoundsForRootAsSubNode(N);this._placingRootViolatesMaxDepth(n)?this._rebuildTree(N,n):this._growRootAsSubNode(n),u.release(n)}}_rebuildTree(e,t){Q(f(U),f(t.bounds)),U[3]=t.halfSize,ie([e,U],2,i=>i,V);const n=u.acquire().init(this._root);this._root.initFrom(null,V,V[3]),this._root.increaseHalfSize(1.25),x(n,i=>(this.add(i.node.terminals.data,i.node.terminals.length),i.node.residents!==null&&this.add(i.node.residents.data,i.node.residents.length),!0)),u.release(n)}_placingRootViolatesMaxDepth(e){const t=Math.log(e.halfSize/this._root.halfSize)*Math.LOG2E;let n=0;return x(this._root,i=>(n=Math.max(n,i.depth),n+t<=this._maximumDepth)),n+t>this._maximumDepth}_rootBoundsForRootAsSubNode(e){const t=e[3],n=e;let i=-1/0;const r=this._root.bounds,a=this._root.halfSize;for(let h=0;h<3;h++){const c=r[h]-a-(n[h]-t),T=n[h]+t-(r[h]+a),d=Math.max(0,Math.ceil(c/(2*a))),m=Math.max(0,Math.ceil(T/(2*a)))+1,E=2**Math.ceil(Math.log(d+m)*Math.LOG2E);i=Math.max(i,E),w[h].min=d,w[h].max=m}for(let h=0;h<3;h++){let c=w[h].min,T=w[h].max;const d=(i-(c+T))/2;c+=Math.ceil(d),T+=Math.floor(d);const m=r[h]-a-c*a*2;W[h]=m+(T+c)*a}const l=i*a;return W[3]=l*_e,u.acquire().initFrom(null,W,l,0)}_growRootAsSubNode(e){const t=this._root.node;Q(f(N),f(this._root.bounds)),N[3]=this._root.halfSize,this._root.init(e),e.advanceTo(N,null,!0),e.node.children=t.children,e.node.residents=t.residents,e.node.terminals=t.terminals}_shrink(){for(;;){const e=this._findShrinkIndex();if(e===-1)break;this._root.advance(e),this._root.depth=0}}_findShrinkIndex(){if(this._root.node.terminals.length!==0||this._root.isLeaf())return-1;let e=null;const t=this._root.node.children;let n=0,i=0;for(;i<t.length&&e==null;)n=i++,e=t[n];for(;i<t.length;)if(t[i++])return-1;return n}_isDegenerate(e){return!$(this.objectToBoundingSphere(e)[3])}_fitsInsideTree(e){const t=this._root.bounds,n=this._root.halfSize;return e[3]<=n&&e[0]>=t[0]-n&&e[0]<=t[0]+n&&e[1]>=t[1]-n&&e[1]<=t[1]+n&&e[2]>=t[2]-n&&e[2]<=t[2]+n}toJSON(){const{maximumDepth:e,maximumObjectsPerNode:t,_objectCount:n}=this,i=this._nodeToJSON(this._root.node);return{maximumDepth:e,maximumObjectsPerNode:t,objectCount:n,root:{bounds:this._root.bounds,halfSize:this._root.halfSize,depth:this._root.depth,node:i}}}_nodeToJSON(e){var r,a;const t=e.children.map(l=>l?this._nodeToJSON(l):null),n=(r=e.residents)==null?void 0:r.map(l=>this.objectToBoundingSphere(l)),i=(a=e.terminals)==null?void 0:a.map(l=>this.objectToBoundingSphere(l));return{children:t,residents:n,terminals:i}}static fromJSON(e){const t=new H(n=>n,{maximumDepth:e.maximumDepth,maximumObjectsPerNode:e.maximumObjectsPerNode});return t._objectCount=e.objectCount,t._root.initFrom(e.root.node,e.root.bounds,e.root.halfSize,e.root.depth),t}}class u{constructor(){this.bounds=L(),this.halfSize=0,this.initFrom(null,null,0,0)}init(e){return this.initFrom(e.node,e.bounds,e.halfSize,e.depth)}initFrom(e,t,n,i=this.depth){return this.node=e??u.createEmptyNode(),t&&C(t,this.bounds),this.halfSize=n,this.depth=i,this}increaseHalfSize(e){this.halfSize*=e,this.updateBoundsRadiusFromHalfSize()}updateBoundsRadiusFromHalfSize(){this.bounds[3]=this.halfSize*_e}advance(e){let t=this.node.children[e];t||(t=u.createEmptyNode(),this.node.children[e]=t),this.node=t,this.halfSize/=2,this.depth++;const n=ce[e];return this.bounds[0]+=n[0]*this.halfSize,this.bounds[1]+=n[1]*this.halfSize,this.bounds[2]+=n[2]*this.halfSize,this.updateBoundsRadiusFromHalfSize(),this}advanceTo(e,t,n=!1){for(;;){if(this.isTerminalFor(e))return t&&t(this,-1),!0;if(this.isLeaf()){if(!n)return t&&t(this,-1),!1;this.node.residents=null}const i=this._childIndex(e);t&&t(this,i),this.advance(i)}}isLeaf(){return this.node.residents!=null}isTerminalFor(e){return e[3]>this.halfSize/2}_childIndex(e){const t=this.bounds;return(t[0]<e[0]?1:0)+(t[1]<e[1]?2:0)+(t[2]<e[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new D({shrink:!0}),residents:new D({shrink:!0})}}static acquire(){return u._pool.acquire()}static release(e){u._pool.release(e)}static clearPool(){u._pool.prune()}}function x(o,e){let t=u.acquire().init(o);const n=[t];for(;n.length!==0;){if(t=n.pop(),e(t)&&!t.isLeaf())for(let i=0;i<t.node.children.length;i++)t.node.children[i]&&n.push(u.acquire().init(t).advance(i));u.release(t)}}function oe(o,e,t,n=H.DepthOrder.FRONT_TO_BACK){let i=u.acquire().init(o);const r=[i];for(Ge(t,n,se);r.length!==0;){if(i=r.pop(),e(i)&&!i.isLeaf())for(let a=7;a>=0;--a){const l=se[a];i.node.children[l]&&r.push(u.acquire().init(i).advance(l))}u.release(i)}}function je(o,e,t){j.clear();const n=t.advanceTo(e,(i,r)=>{j.push(i.node),j.push(r)})?t.node.terminals:t.node.residents;if(n.removeUnordered(o),n.length===0)for(let i=j.length-2;i>=0&&Pe(j.data[i],j.data[i+1]);i-=2);}function Pe(o,e){return e>=0&&(o.children[e]=null),!!de(o)&&(o.residents===null&&(o.residents=new D({shrink:!0})),!0)}function He(o,e){return k(f(e.bounds),2*-e.halfSize,R),k(f(e.bounds),2*e.halfSize,b),he(o.origin,o.direction,R,b)}function Ie(o,e,t){return k(f(e.bounds),2*-e.halfSize,R),k(f(e.bounds),2*e.halfSize,b),t.applyToMinMax(R,b),he(o.origin,o.direction,R,b)}function de(o){if(o.terminals.length!==0)return!1;if(o.residents!==null)return o.residents.length===0;for(let e=0;e<o.children.length;e++)if(o.children[e])return!1;return!0}function Le(o,e){o[0]=Math.min(o[0],e[0]-e[3]),o[1]=Math.min(o[1],e[1]-e[3]),o[2]=Math.min(o[2],e[2]-e[3])}function ze(o,e){o[0]=Math.max(o[0],e[0]+e[3]),o[1]=Math.max(o[1],e[1]+e[3]),o[2]=Math.max(o[2],e[2]+e[3])}function k(o,e,t){t[0]=o[0]+e,t[1]=o[1]+e,t[2]=o[2]+e}function ie(o,e,t,n){if(e===1){const i=t(o[0]);C(i,n)}else{R[0]=1/0,R[1]=1/0,R[2]=1/0,b[0]=-1/0,b[1]=-1/0,b[2]=-1/0;for(let i=0;i<e;i++){const r=t(o[i]);$(r[3])&&(Le(R,r),ze(b,r))}Ae(f(n),R,b,.5),n[3]=Math.max(b[0]-R[0],b[1]-R[1],b[2]-R[2])/2}}function Ge(o,e,t){if(!P.length)for(let n=0;n<8;++n)P.push({index:0,distance:0});for(let n=0;n<8;++n){const i=ce[n];P.data[n].index=n,P.data[n].distance=B(o,e,i)}P.sort((n,i)=>n.distance-i.distance);for(let n=0;n<8;++n)t[n]=P.data[n].index}function J(o,e){let t,n=1/0;for(let i=0;i<8;++i){const r=B(o,e,re[i]);r<n&&(n=r,t=re[i])}return t}function B(o,e,t){return e*(o[0]*t[0]+o[1]*t[1]+o[2]*t[2])}function $(o){return!isNaN(o)&&o!==-1/0&&o!==1/0&&o>0}u._pool=new be(u),function(o){var e;(e=o.DepthOrder||(o.DepthOrder={}))[e.FRONT_TO_BACK=1]="FRONT_TO_BACK",e[e.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(H||(H={}));const ce=[O(-1,-1,-1),O(1,-1,-1),O(-1,1,-1),O(1,1,-1),O(-1,-1,1),O(1,-1,1),O(-1,1,1),O(1,1,1)],re=[O(-1,-1,-1),O(-1,-1,1),O(-1,1,-1),O(-1,1,1),O(1,-1,-1),O(1,-1,1),O(1,1,-1),O(1,1,1)],_e=Math.sqrt(3),X=[null];function $e(o){return X[0]=o,X}const W=L(),A=F(),R=F(),b=F(),j=new D,De=L(),N=L(),U=L(),V=L(),w=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],P=new D,se=[0,0,0,0,0,0,0,0],We=H;export{ye as H,Je as L,Ke as N,We as Y};
//# sourceMappingURL=Octree-B0DYcQd3.js.map
