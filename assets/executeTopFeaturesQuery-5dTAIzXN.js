import{db as s,dw as i}from"./index-Bs-G_wsu.js";import{p}from"./queryTopFeatures-CGn6ucNr.js";import n from"./TopFeaturesQuery-D14ND6TW.js";async function w(r,o,t,a){const m=s(r),e={...a},{data:f}=await p(m,n.from(o),t,e);return i.fromJSON(f)}export{w as executeTopFeaturesQuery};