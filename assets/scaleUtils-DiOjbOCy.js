import{b2 as o,b3 as c,b4 as u}from"./index-BMHxxDIj.js";const a=96;function h(n,t){const i=n.extent,r=n.width,e=o(i==null?void 0:i.spatialReference);return i&&r?i.width/r*e*c*a:0}function d(n,t){return n/(o(t)*c*a)}function g(n,t){const i=n.extent,r=n.width-(n.padding?n.padding.left+n.padding.right:0),e=d(t,i.spatialReference);return i.clone().expand(e*r/i.width)}function l(n,t,i){return f(n,t)&&p(n,i)}function f(n,t){return t===0||u(n,t)||n<t}function p(n,t){return t===0||u(n,t)||n>t}export{l as d,g as f,h as i,d as o};
//# sourceMappingURL=scaleUtils-DiOjbOCy.js.map
