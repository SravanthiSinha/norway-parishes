import{de as p,ag as l}from"./index-Cj37dcSI.js";import{G as n}from"./geometryEngineBase-yFIvKOkM.js";import{hydratedAdapter as r}from"./hydrated--DSOsiQ2.js";import"./_commonjsHelpers-DCkdB7M8.js";function i(e){const t=Array.isArray(e)?e[0].spatialReference:e.spatialReference;return t?p(l,t):l.WGS84}function w(e){return n.extendedSpatialReferenceInfo(e)}function R(e,t){return n.clip(r,i(e),e,t)}function x(e,t){return n.cut(r,i(e),e,t)}function S(e,t){return n.contains(r,i(e),e,t)}function y(e,t){return n.crosses(r,i(e),e,t)}function A(e,t,a){return n.distance(r,i(e),e,t,a)}function D(e,t){return n.equals(r,i(e),e,t)}function L(e,t){return n.intersects(r,i(e),e,t)}function T(e,t){return n.touches(r,i(e),e,t)}function V(e,t){return n.within(r,i(e),e,t)}function v(e,t){return n.disjoint(r,i(e),e,t)}function z(e,t){return n.overlaps(r,i(e),e,t)}function H(e,t,a){return n.relate(r,i(e),e,t,a)}function I(e){return n.isSimple(r,i(e),e)}function J(e){return n.simplify(r,i(e),e)}function N(e,t=!1){return n.convexHull(r,i(e),e,t)}function O(e,t){return n.difference(r,i(e),e,t)}function b(e,t){return n.symmetricDifference(r,i(e),e,t)}function j(e,t){return n.intersect(r,i(e),e,t)}function q(e,t=null){return n.union(r,i(e),e,t)}function B(e,t,a,s,c,u){return n.offset(r,i(e),e,t,a,s,c,u)}function C(e,t,a,s=!1){return n.buffer(r,i(e),e,t,a,s)}function E(e,t,a,s,c,u){return n.geodesicBuffer(r,i(e),e,t,a,s,c,u)}function G(e,t,a=!0){return n.nearestCoordinate(r,i(e),e,t,a)}function P(e,t){return n.nearestVertex(r,i(e),e,t)}function W(e,t,a,s){return n.nearestVertices(r,i(e),e,t,a,s)}function f(e){var t;return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?((t=e.extent)==null?void 0:t.center)??null:null}function $(e,t,a){if(e==null)throw new o;const s=e.spatialReference;if((a=a??f(e))==null)throw new o;const c=e.constructor.fromJSON(n.rotate(e,t,a));return c.spatialReference=s,c}function k(e,t){if(e==null)throw new o;const a=e.spatialReference;if((t=t??f(e))==null)throw new o;const s=e.constructor.fromJSON(n.flipHorizontal(e,t));return s.spatialReference=a,s}function F(e,t){if(e==null)throw new o;const a=e.spatialReference;if((t=t??f(e))==null)throw new o;const s=e.constructor.fromJSON(n.flipVertical(e,t));return s.spatialReference=a,s}function K(e,t,a,s){return n.generalize(r,i(e),e,t,a,s)}function M(e,t,a){return n.densify(r,i(e),e,t,a)}function Q(e,t,a,s=0){return n.geodesicDensify(r,i(e),e,t,a,s)}function U(e,t){return n.planarArea(r,i(e),e,t)}function X(e,t){return n.planarLength(r,i(e),e,t)}function Y(e,t,a){return n.geodesicArea(r,i(e),e,t,a)}function Z(e,t,a){return n.geodesicLength(r,i(e),e,t,a)}function _(e,t){return n.intersectLinesToPoints(r,i(e),e,t)}function ee(e,t){n.changeDefaultSpatialReferenceTolerance(e,t)}function te(e){n.clearDefaultSpatialReferenceTolerance(e)}class o extends Error{constructor(){super("Illegal Argument Exception")}}export{C as buffer,ee as changeDefaultSpatialReferenceTolerance,te as clearDefaultSpatialReferenceTolerance,R as clip,S as contains,N as convexHull,y as crosses,x as cut,M as densify,O as difference,v as disjoint,A as distance,D as equals,w as extendedSpatialReferenceInfo,k as flipHorizontal,F as flipVertical,K as generalize,Y as geodesicArea,E as geodesicBuffer,Q as geodesicDensify,Z as geodesicLength,j as intersect,_ as intersectLinesToPoints,L as intersects,I as isSimple,G as nearestCoordinate,P as nearestVertex,W as nearestVertices,B as offset,z as overlaps,U as planarArea,X as planarLength,H as relate,$ as rotate,J as simplify,b as symmetricDifference,T as touches,q as union,V as within};
//# sourceMappingURL=geometryEngine-DL0PyMbf.js.map
