import{v as g,A as h,aA as i,aB as u,aC as I,aD as R,aE as w,s as T,ae as U,aF as q,K as x,aG as A}from"./index-D2fbPmv2.js";const c=()=>T.getLogger("esri.support.basemapUtils");function V(){return{}}function D(e){for(const a in e){const t=e[a];g(t),delete e[a]}}function E(e,a){let t;if(typeof e=="string"){const n=e in i,r=!n&&e.includes("/");if(!n&&!r){if(h.apiKey)c().warn(`Unable to find basemap definition for: ${e}. See available styles at https://developers.arcgis.com/rest/basemap-styles/`);else{const l=Object.entries(i).filter(([s,f])=>f.classic||f.is3d).map(([s])=>`"${s}"`).sort().join(", ");c().warn(`Unable to find basemap definition for: ${e}. Try one of these: ${l}`)}return null}a&&(t=a[e]),t||(t=n?u.fromId(e):new u({style:{id:e}}),a&&(a[e]=t))}else t=I(u,e);return t!=null&&t.destroyed&&(c().warn("The provided basemap is already destroyed",{basemap:t}),t=null),t}function F(e){var a;return((a=e.portalItem)==null?void 0:a.type)==="Web Scene"||e.referenceLayers.some(t=>t.type==="scene")}function O(e){var a,t;return!!((t=(a=e==null?void 0:e.portalItem)==null?void 0:a.tags)!=null&&t.some(n=>n.toLowerCase()==="beta"))}function M(e){let a=null;const t=o(e),n=!(t!=null&&t.baseLayers.length);for(const r in i){const l=L(t,v(i[r]),{mustMatchReferences:n});if(l==="equal"){a=r;break}l==="base-layers-equal"&&(a=r)}return a}function W(e,a){var t,n;return e===a||((t=e==null?void 0:e.portalItem)==null?void 0:t.id)!=null&&e.portalItem.id===((n=a==null?void 0:a.portalItem)==null?void 0:n.id)?!0:L(o(e),o(a),{mustMatchReferences:!0})==="equal"}function _(e){return!!(e!=null&&e.baseLayers.concat(e.referenceLayers).some(k))}function k(e){if(p(e.url))return!0;if(e.type==="vector-tile")for(const a in e.sourceNameToSource){const t=e.sourceNameToSource[a];if(p(t==null?void 0:t.sourceUrl))return!0}return!1}function $(e,a){var l;if(a==null||e==null)return{spatialReference:null,updating:!1};if(a.loadStatus==="not-loaded")return a.load(),{spatialReference:null,updating:!0};if(a.spatialReference)return{spatialReference:a.spatialReference,updating:!1};if(a.baseLayers.length===0)return{spatialReference:null,updating:!1};const t=a.baseLayers.at(0);switch(t.loadStatus){case"not-loaded":t.load();case"loading":return{spatialReference:null,updating:!0};case"failed":return{spatialReference:null,updating:!1}}const n=(("supportedSpatialReferences"in t?t.supportedSpatialReferences:null)||["tileInfo"in t?(l=t.tileInfo)==null?void 0:l.spatialReference:t.spatialReference]).filter(Boolean),r=e.spatialReference;return r?{spatialReference:n.find(s=>r.equals(s))??n[0]??null,updating:!1}:{spatialReference:n[0],updating:!1}}const C=/^(basemaps|ibasemaps).*-api\.arcgis\.com$/i;function p(e){if(!e)return!1;const a=new R(w(e));return!!a.authority&&C.test(a.authority)}function o(e){return e?!e.loaded&&e.resourceInfo?v(e.resourceInfo.data):{baseLayers:y(e.baseLayers),referenceLayers:y(e.referenceLayers)}:null}function y(e){return(U.isCollection(e)?e.toArray():e).map(G)}function G(e){var a,t;return{type:e.type,effect:"effect"in e?e.effect:void 0,url:S("urlTemplate"in e&&e.urlTemplate||e.url||"styleUrl"in e&&e.styleUrl||""),minScale:"minScale"in e&&e.minScale!=null?e.minScale:0,maxScale:"maxScale"in e&&e.maxScale!=null?e.maxScale:0,opacity:e.opacity!=null?e.opacity:1,visible:e.visible==null||!!e.visible,sublayers:e.type!=="map-image"&&e.type!=="wms"||e.sublayers==null||(a=e.sublayers)==null?void 0:a.map(n=>({id:n.id,visible:n.visible})),activeLayerId:e.type==="wmts"?(t=e.activeLayer)==null?void 0:t.id:void 0}}function d(e){return e.isReference||e.layerType==="ArcGISSceneServiceLayer"}function v(e){return e?{baseLayers:b((e.baseMapLayers??[]).filter(a=>!d(a))),referenceLayers:b((e.baseMapLayers??[]).filter(a=>d(a)))}:null}function b(e){return e.map(a=>K(a))}function K(e){let a;switch(e.layerType){case"VectorTileLayer":a="vector-tile";break;case"ArcGISTiledMapServiceLayer":a="tile";break;case"ArcGISSceneServiceLayer":a="scene";break;default:a="unknown"}return{type:a,effect:e.effect,url:S(e.templateUrl||e.urlTemplate||e.styleUrl||e.url),minScale:e.minScale??0,maxScale:e.maxScale??0,opacity:e.opacity??1,visible:e.visibility==null||!!e.visibility,sublayers:void 0,activeLayerId:void 0}}function L(e,a,t){return e!=null!=(a!=null)?"not-equal":!e||!a?"equal":m(e.baseLayers,a.baseLayers)?m(e.referenceLayers,a.referenceLayers)?"equal":t.mustMatchReferences?"not-equal":"base-layers-equal":"not-equal"}function m(e,a){if(e.length!==a.length)return!1;for(let t=0;t<e.length;t++)if(!j(e[t],a[t]))return!1;return!0}function j(e,a){if(e.type!==a.type||e.url!==a.url||e.minScale!==a.minScale||e.maxScale!==a.maxScale||e.visible!==a.visible||e.opacity!==a.opacity||!q(e.effect,a.effect))return!1;if(e.activeLayerId!=null||a.activeLayerId!=null)return e.activeLayerId===a.activeLayerId;if(e.sublayers!=null||a.sublayers!=null){if(e.sublayers==null||a.sublayers==null||e.sublayers.length!==a.sublayers.length)return!1;for(let t=0;t<e.sublayers.length;t++){const n=e.sublayers.at(t),r=a.sublayers.at(t);if((n==null?void 0:n.id)!==(r==null?void 0:r.id)||(n==null?void 0:n.visible)!==(r==null?void 0:r.visible))return!1}}return!0}function S(e){return e?x(e).replace(/^\s*https?:/i,"").toLowerCase():""}function z(e){if(!e)return null;const{thumbnailUrl:a}=e;if(a)return a;const t=M(e);return t?i[t].thumbnailUrl:A(e.baseLayers,B)}function B(e){var a;return"portalItem"in e?(a=e.portalItem)==null?void 0:a.thumbnailUrl:void 0}export{O as L,z as O,W as R,_ as T,k as U,E as b,F as d,$ as j,D as m,V as y};
//# sourceMappingURL=basemapUtils-DjbuSOSo.js.map