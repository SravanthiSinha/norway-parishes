import{dc as m,aX as r}from"./index-U3f91iFJ.js";import{d as s}from"./queryTopFeatures-CqPyMtJS.js";import x from"./TopFeaturesQuery-CjodPeoC.js";async function f(o,n,e){const i=m(o),a=await s(i,x.from(n),{...e}),t=a.data.extent;return!t||isNaN(t.xmin)||isNaN(t.ymin)||isNaN(t.xmax)||isNaN(t.ymax)?{count:a.data.count,extent:null}:{count:a.data.count,extent:r.fromJSON(t)}}export{f as executeForTopExtents};
//# sourceMappingURL=executeForTopExtents-C6AQdBBR.js.map
