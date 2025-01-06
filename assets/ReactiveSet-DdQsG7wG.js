import{E as g}from"./ByteSizeUnit-BsxeN7wM.js";import{h1 as b,dg as a,aT as h,aj as T,aR as x,h2 as F,h3 as p,h4 as v,h5 as $,h6 as d,h7 as z,h8 as B,aH as w,aI as o}from"./index-Du44_A8J.js";function M(s,t){return{type:b(t),value:s,unit:t}}function G(s){return{value:s}}function I(s,t){return{type:b(t),value:s,unit:t}}function E(s,t){return{type:b(t),value:s,unit:t}}function l(s,t,e="arithmetic"){return{type:b(t),value:s,unit:t,rotationType:e}}function H(s,t){const e=k(s,t);return s.type==="angle"?l(e,t,s.rotationType):M(e,t)}function k(s,t){return a(s.value,s.unit,t)}function O(s,t,e){if(t===e)return s;switch(e){case"arithmetic":case"geographic":return 90-s}}const J=I(0,"meters"),L=E(0,"square-meters");l(0,"radians");const N=l(0,"degrees"),Y=l(0,"degrees","geographic");function D(s,t,e){return s.units[t][e]}function u(s,t,e,r=2,i="abbr"){return`${h(t,{minimumFractionDigits:r,maximumFractionDigits:r,signDisplay:t>0?"never":"exceptZero"})} ${D(s,e,i)}`}function m(s,t,e,r=2,i="abbr"){return`${h(t,{minimumFractionDigits:r,maximumFractionDigits:r,signDisplay:"exceptZero"})} ${D(s,e,i)}`}function q(s,t,e,r=2,i="abbr"){const n=p(t,e);return u(s,a(t,e,n),n,r,i)}function A(s,t,e,r=2,i="abbr"){const n=p(t,e);return m(s,a(t,e,n),n,r,i)}function R(s,t,e,r=2,i="abbr"){const n=v(t,e);return u(s,a(t,e,n),n,r,i)}function C(s,t,e,r=2,i="abbr"){const n=v(t,e);return m(s,a(t,e,n),n,r,i)}function P(s,t,e,r=2,i="abbr"){const n=$(t,e);return u(s,a(t,e,n),n,r,i)}function Q(s,t,e,r=2,i="abbr"){const n=$(t,e);return m(s,a(t,e,n),n,r,i)}function V(s,t,e,r=2,i="abbr"){const n=d(t,e);return u(s,a(t,e,n),n,r,i)}function W(s,t,e,r=2,i="abbr"){const n=d(t,e);return m(s,a(t,e,n),n,r,i)}function X(s,t,e,r=2,i="abbr"){const n=z(t,e);return u(s,a(t,e,n),n,r,i)}function tt(s,t,e,r=2,i="abbr"){const n=B(t,e);return u(s,a(t,e,n),n,r,i)}const U=(s,t)=>({style:"unit",unitDisplay:"narrow",unit:"degree",maximumFractionDigits:t,minimumFractionDigits:t,signDisplay:s>0?"never":"exceptZero"});function et(s,t,e,r,i,n=F,S=!0){let c=n.normalize(O(a(s,t,"degrees"),e,r),0,S);const f=U(c,i??2);return c=j(c,f),h(c,f)}const _=new Map;function j(s,t){const e=JSON.stringify(t);let r=_.get(e);return r||(r=new Intl.NumberFormat("en-US",t),_.set(e,r)),/^[-+]?360\.?0*°?$/.test(r.format(s))?0:s}const y=["B","kB","MB","GB","TB"];function st(s,t){let e=(t=Math.round(t))===0?0:Math.floor(Math.log(t)/Math.log(g.KILOBYTES));e=x(e,0,y.length-1);const r=h(t/g.KILOBYTES**e,{maximumFractionDigits:2});return T(s.units.bytes[y[e]],{fileSize:r})}class rt{constructor(t){this._observable=new w,this._set=new Set(t)}get size(){return o(this._observable),this._set.size}add(t){const e=this._set.size;return this._set.add(t),this._set.size!==e&&this._observable.notify(),this}clear(){this._set.size>0&&(this._set.clear(),this._observable.notify())}delete(t){const e=this._set.delete(t);return e&&this._observable.notify(),e}entries(){return o(this._observable),this._set.entries()}forEach(t,e){o(this._observable),this._set.forEach((r,i)=>t.call(e,r,i,this),e)}has(t){return o(this._observable),this._set.has(t)}keys(){return o(this._observable),this._set.keys()}values(){return o(this._observable),this._set.values()}[Symbol.iterator](){return o(this._observable),this._set[Symbol.iterator]()}get[Symbol.toStringTag](){return this._set[Symbol.toStringTag]}}export{X as $,V as B,q as D,C as F,W as M,st as T,N as U,I as a,H as b,D as c,P as d,L as e,k as f,u as g,Q as h,G as i,tt as j,J as k,E as l,O as m,Y as n,l as o,m as p,rt as s,et as w,A as x,R as y};
//# sourceMappingURL=ReactiveSet-DdQsG7wG.js.map
