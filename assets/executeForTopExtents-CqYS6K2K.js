import{db as m,a_ as r}from"./index-Bs-G_wsu.js";import{d as s}from"./queryTopFeatures-CGn6ucNr.js";import x from"./TopFeaturesQuery-D14ND6TW.js";async function f(o,n,e){const i=m(o),a=await s(i,x.from(n),{...e}),t=a.data.extent;return!t||isNaN(t.xmin)||isNaN(t.ymin)||isNaN(t.xmax)||isNaN(t.ymax)?{count:a.data.count,extent:null}:{count:a.data.count,extent:r.fromJSON(t)}}export{f as executeForTopExtents};
