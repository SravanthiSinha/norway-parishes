import{aX as s}from"./index-Du44_A8J.js";import{f as l}from"./scaleUtils-DosC-pxb.js";const m={close:"esri-icon-close",collapse:"esri-icon-collapse",down:"esri-icon-down",downArrow:"esri-icon-down-arrow",dragHorizontal:"esri-icon-drag-horizontal",dragVertical:"esri-icon-drag-vertical",duplicate:"esri-icon-duplicate",expand:"esri-icon-expand",fontFallbackText:"esri-icon-font-fallback-text",forward:"esri-icon-forward",handleVertical:"esri-icon-handle-vertical",icon:"esri-icon",left:"esri-icon-left",locateCircled:"esri-icon-locate-circled",noticeTriangle:"esri-icon-notice-triangle",pause:"esri-icon-pause",play:"esri-icon-play",plus:"esri-icon-plus",radioChecked:"esri-icon-radio-checked",radioUnchecked:"esri-icon-radio-unchecked",refresh:"esri-icon-refresh",reverse:"esri-icon-reverse",right:"esri-icon-right",search:"esri-icon-search",swap:"esri-icon-swap",table:"esri-icon-table",trash:"esri-icon-trash",up:"esri-icon-up",upArrow:"esri-icon-up-arrow",upDownArrows:"esri-icon-up-down-arrows",urbanModel:"esri-icon-urban-model",zoomInMagnifyingGlass:"esri-icon-zoom-in-magnifying-glass",zoomToObject:"esri-icon-zoom-to-object"};function f(e){return r=>{r.hasOwnProperty("_delegatedEventNames")||(r._delegatedEventNames=r._delegatedEventNames?r._delegatedEventNames.slice():[]);const n=r._delegatedEventNames,i=Array.isArray(e)?e:u(e);n.push(...i)}}function u(e){return e.split(",").map(r=>r.trim())}function h(e){var r;switch(e==null?void 0:e.type){case"point":return e;case"extent":return e.center;case"polygon":return e.centroid;case"multipoint":case"polyline":return(r=e.extent)==null?void 0:r.center;default:return null}}async function g(e,r){var o,t;if(e.hasZ||r.type==="2d")return e;const n=(o=r.map)==null?void 0:o.ground;if(!(n!=null&&n.layers.length))return e;const{geometry:i}=await n.queryElevation(e,{cache:(t=r.basemapTerrain)==null?void 0:t.elevationQueryCache});return i}function w(e,r,n){return c(e.center,r,n)}function y(e,r,n){switch(e==null?void 0:e.type){case"extent":return e;case"multipoint":case"polygon":case"polyline":return e.extent;case"point":return c(e,r,n);default:return null}}function c(e,r,n){const i=e.hasZ?e.z:void 0;if(r!=null&&r.map)return(n!=null?l(r,n):r.extent).clone().centerAt(e).set({zmax:i,zmin:i});const{x:o,y:t,spatialReference:a}=e;return new s({xmin:o-.25,ymin:t-.25,xmax:o+.25,ymax:t+.25,spatialReference:a,zmin:i,zmax:i})}export{w as a,y as c,f as e,m as i,h as n,g as r};
//# sourceMappingURL=geometryUtils-BW5_Nj8q.js.map