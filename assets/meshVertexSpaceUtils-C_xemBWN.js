import{by as p,bF as u,s as l}from"./index-BMHxxDIj.js";import{H as s}from"./vec32-DdwaZZBw.js";import{a as f,b as d}from"./MeshLocalVertexSpace-7jne_07j.js";function a(){return l.getLogger("esri.geometry.Mesh")}function c(e){return e.origin!=null}function w(e){return c(e.vertexSpace)}function S(e,r){if(!c(e))return null;const[i,o,n]=e.origin;return new p({x:i,y:o,z:n,spatialReference:r})}function $(e,r){const{x:i,y:o,z:n,spatialReference:g}=e,t=[i,o,n??0];return(r==null?void 0:r.geographic)!==void 0&&(u(a(),"option: geographic",{replacement:"Use the `vertexSpace` option instead.",version:"4.29",warnOnce:!0}),r.vertexSpace&&a().warn("Deprecated geographic flag ignored since vertexSpace option is provided.")),((r==null?void 0:r.vertexSpace)??v(r==null?void 0:r.geographic)??m(g))==="local"?new f({origin:t}):new d({origin:t})}function m(e){return e.isGeographic||e.isWebMercator?"local":"georeferenced"}function v(e){return e==null?void 0:e?"local":"georeferenced"}function b(e,r){return e.type===r.type&&(e.origin===r.origin||e.origin!=null&&r.origin!=null&&s(e.origin,r.origin))}export{c as a,w as g,b as m,$ as s,S as u};
//# sourceMappingURL=meshVertexSpaceUtils-C_xemBWN.js.map
