import{ev as g,ew as h,dh as m}from"./index-BMHxxDIj.js";function c(e){return e?I:y}function p(e,n){return n!=null&&n.mode?n.mode:c(e).mode}function P(e,n){return n??c(e)}function f(e,n){return p(e==null||(e.hasZ??!1),n)}function w(e){const n=d(e);return f(e.geometry,n)}function $(e){const n=d(e),o=f(e.geometry,n),t=n!=null&&o!=="on-the-ground"?x(n):0,r=n==null?void 0:n.featureExpressionInfo;return{mode:o,offset:t,featureExpressionInfo:r}}function d(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function a(e,n){if(!(e!=null&&e.offset))return 0;const{offset:o,unit:t}=e;if(t==="decimal-degrees")return 0;const r=t!=="unknown"&&t?t:"meters",i=h(n);return i?m(o,r,i):0}function R(e,n,o){if(!(o!=null&&o.mode))return;const t=e.hasZ?e.z:0,r=a(o,e.spatialReference);switch(o.mode){case"absolute-height":return t-r;case"on-the-ground":return 0;case"relative-to-ground":return t-((n.elevationProvider.getElevation(e.x,e.y,t,e.spatialReference,"ground")??0)+r);case"relative-to-scene":return t-((n.elevationProvider.getElevation(e.x,e.y,t,e.spatialReference,"scene")??0)+r)}}function z(e,n,o,t=null){return v(e,n.x,n.y,n.hasZ?n.z:0,n.spatialReference,o,t)}function j(e,n,o,t,r=null){return v(e,n[0],n[1],n.length>2?n[2]:0,o,t,r)}function v(e,n,o,t,r,i,l=null){if(i==null)return;const u=l!=null?l.mode:"absolute-height";if(u==="on-the-ground")return 0;const{absoluteZ:s}=E(n,o,t,r,e,i);return b(s,n,o,t,r,e,l,u)}function E(e,n,o,t,r,i){const l=a(i,t);switch(i.mode){case"absolute-height":return{absoluteZ:o+l,elevation:0};case"on-the-ground":{const u=r.elevationProvider.getElevation(e,n,0,t,"ground")??0;return{absoluteZ:u,elevation:u}}case"relative-to-ground":{const u=r.elevationProvider.getElevation(e,n,o,t,"ground")??0;return{absoluteZ:o+u+l,elevation:u}}case"relative-to-scene":{const u=r.elevationProvider.getElevation(e,n,o,t,"scene")??0;return{absoluteZ:o+u+l,elevation:u}}}}function b(e,n,o,t,r,i,l,u){const s=a(l,r);switch(u){case"absolute-height":return e-s;case"relative-to-ground":return e-((i.elevationProvider.getElevation(n,o,t,r,"ground")??0)+s);case"relative-to-scene":return e-((i.elevationProvider.getElevation(n,o,t,r,"scene")??0)+s)}}function k(e,n,o){return o&&o.mode!==n?`${e} only support ${n} elevation mode`:null}function q(e,n,o){return(o==null?void 0:o.mode)===n?`${e} do not support ${n} elevation mode`:null}function A(e,n){return(n==null?void 0:n.featureExpressionInfo)!=null&&n.featureExpressionInfo.expression!=="0"?`${e} do not support featureExpressionInfo`:null}function B(e,n){n&&e.warn(".elevationInfo=",n)}function x(e){return((e==null?void 0:e.offset)??0)*g(e==null?void 0:e.unit)}const I={mode:"absolute-height",offset:0},y={mode:"on-the-ground",offset:null};export{B as $,v as E,q as P,k as Z,$ as a,E as b,f as i,I as j,w as l,z as m,R as p,P as u,A as w,j as x};
//# sourceMappingURL=elevationInfoUtils-Aiw692hr.js.map
