import{P as l,$ as y}from"./utils-BnhsvxKk.js";import{o as f}from"./jsonContext-J92Yj9vD.js";import{s as v,a as d,f as s,i as I}from"./portalItemUtils-o0HMA_HX.js";import{p as i}from"./resourceUtils-CDxWINPh.js";import"./index-oLM2nnvm.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./saveUtils-9nxlRNVU.js";import"./uuid-Cl5lrJ4c.js";import"./resourceUtils-760uQ7he.js";const n="Group Layer",g="group-layer-save",P="group-layer-save-as",o=s.GROUP_LAYER_MAP;function c(e){return{isValid:e.type==="group",errorMessage:"Layer.type should be 'group'"}}function A(e){return{isValid:v(e,o),errorMessage:`Layer.portalItem.typeKeywords should have '${o}'`}}function m(e,r){return{...f(e,"web-map",!0),initiator:r}}function u(e){const r=e.layerJSON;return Promise.resolve(r&&Object.keys(r).length?r:null)}async function R(e,r){r.title||(r.title=e.title),d(r,s.METADATA),I(r,o)}async function D(e,r){return l({layer:e,itemType:n,validateLayer:c,validateItem:A,createJSONContext:t=>m(t,e),createItemData:u,errorNamePrefix:g,saveResources:async(t,a)=>(e.sourceIsPortalItem||await t.removeAllResources().catch(()=>{}),i(e.resourceReferences,a))},r)}async function J(e,r,t){return y({layer:e,itemType:n,validateLayer:c,createJSONContext:a=>m(a,e),createItemData:u,errorNamePrefix:P,newItem:r,setItemProperties:R,saveResources:(a,p)=>i(e.resourceReferences,p)},t)}export{D as save,J as saveAs};
//# sourceMappingURL=groupLayerUtils-LQeALpzO.js.map
