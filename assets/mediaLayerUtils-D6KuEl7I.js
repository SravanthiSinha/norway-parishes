import{P as c,$ as f}from"./utils-Bu1aKKzw.js";import{o as y}from"./jsonContext-DzSR_Clx.js";import{l as d,a as v,f as x}from"./portalItemUtils-Cdx2zb1g.js";import{p as o}from"./resourceUtils-C4FKCWMV.js";import"./index-DhfeYpQB.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./saveUtils-DqPND0Ln.js";import"./uuid-Cl5lrJ4c.js";import"./resourceUtils-CHFYL0sS.js";const s="Media Layer",P="media-layer-save",E="media-layer-save-as",i=["media-layer:unsupported-source"];function n(e){return{isValid:e.type==="media",errorMessage:"Layer.type should be 'media'"}}function m(e){return y(e,"portal-item",!0)}function p(e){return Promise.resolve(e.layerJSON)}async function u(e,r){r.extent=e.fullExtent?await d(e.fullExtent):null}async function I(e,r){r.title||(r.title=e.title),await u(e,r),v(r,x.METADATA)}async function O(e,r){return c({layer:e,itemType:s,validateLayer:n,createJSONContext:t=>m(t),createItemData:p,errorNamePrefix:P,supplementalUnsupportedErrors:i,setItemProperties:u,saveResources:(t,a)=>o(e.resourceReferences,a)},r)}async function S(e,r,t){return f({layer:e,itemType:s,validateLayer:n,createJSONContext:a=>m(a),createItemData:p,errorNamePrefix:E,supplementalUnsupportedErrors:i,newItem:r,setItemProperties:I,saveResources:(a,l)=>o(e.resourceReferences,l)},t)}export{O as save,S as saveAs};
//# sourceMappingURL=mediaLayerUtils-D6KuEl7I.js.map
