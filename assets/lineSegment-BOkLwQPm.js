import{cN as v,aN as a,aR as f}from"./index-Du44_A8J.js";import{s as N}from"./sphere-DF4hN4iF.js";import{c as u,P as e,g as m,j as P,u as b,s as h}from"./vec32-DeRCSSXC.js";import{c as s}from"./plane-DU5lC3C7.js";function p(o){return o?{origin:v(o.origin),vector:v(o.vector)}:{origin:a(),vector:a()}}function d(o,t,r=p()){return h(r.origin,o),u(r.vector,t,o),r}function k(o,t){const r=u(s.get(),t,o.origin),g=e(o.vector,r),n=e(o.vector,o.vector),i=f(g/n,0,1),c=u(s.get(),m(s.get(),o.vector,i),r);return e(c,c)}function l(o,t,r){return w(o,t,0,1,r)}function w(o,t,r,g,n){const{vector:i,origin:c}=o,$=u(s.get(),t,c),j=e(i,$)/P(i);return m(n,i,f(j,r,g)),b(n,n,o.origin)}new N(()=>p());export{w as A,k as M,d as b,l as j,p as v};
//# sourceMappingURL=lineSegment-BOkLwQPm.js.map