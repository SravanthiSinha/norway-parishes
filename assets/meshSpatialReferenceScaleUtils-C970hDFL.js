import{I as e,b2 as a}from"./index-5zHX_dwk.js";import{N as u}from"./MeshTransform-CMx173DG.js";const t="upload-assets",n=()=>new Error;class c extends e{constructor(){super(`${t}:unsupported`,"Layer does not support asset uploads.",n())}}let l=class extends e{constructor(){super(`${t}:no-glb-support`,"Layer does not support glb.",n())}};class m extends e{constructor(){super(`${t}:no-supported-source`,"No supported external source found",n())}}class f extends e{constructor(){super(`${t}:not-base-64`,"Expected gltf data in base64 format after conversion.",n())}}class $ extends e{constructor(){super(`${t}:unable-to-prepare-options`,"Unable to prepare uploadAsset request options.",n())}}class x extends e{constructor(o,r){super(`${t}:bad-response`,`Bad response. Uploaded ${o} items and received ${r} results.`,n())}}class b extends e{constructor(o,r){super(`${t}-layer:upload-failed`,`Failed to upload mesh file ${o}. Error code: ${(r==null?void 0:r.code)??"-1"}. Error message: ${(r==null?void 0:r.messages)??"unknown"}`,n())}}class v extends e{constructor(o){super(`${t}-layer:unsupported-format`,`The service allowed us to upload an asset of FormatID ${o}, but it does not list it in its supported formats.`,n())}}class g extends e{constructor(){super(`${t}:convert3D-failed`,"convert3D failed.")}}class w extends e{constructor(){super("invalid-input:no-model","No supported model found")}}class y extends e{constructor(){super("invalid-input:multiple-models","Multiple supported models found")}}function E(s){const o=1/a(s,1);return o!==1?new u({scale:[o,o,o]}):void 0}export{E as a,x as b,v as c,b as d,w as i,g as l,y as m,m as n,$ as p,c as r,l as t,f as u};
//# sourceMappingURL=meshSpatialReferenceScaleUtils-C970hDFL.js.map
