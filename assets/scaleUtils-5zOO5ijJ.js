import{b2 as o,b3 as c,b4 as u}from"./index-BfLS464G.js";const a=96;function h(n,t){const r=t||n.extent,e=n.width,i=o(r==null?void 0:r.spatialReference);return r&&e?r.width/e*i*c*a:0}function d(n,t){return n/(o(t)*c*a)}function g(n,t){const r=n.extent,e=n.width-(n.padding?n.padding.left+n.padding.right:0),i=d(t,r.spatialReference);return r.clone().expand(i*e/r.width)}function l(n,t,r){return f(n,t)&&p(n,r)}function f(n,t){return t===0||u(n,t)||n<t}function p(n,t){return t===0||u(n,t)||n>t}export{l as d,g as f,h as i,d as o};
//# sourceMappingURL=scaleUtils-5zOO5ijJ.js.map
