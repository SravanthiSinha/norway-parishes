import{I as l,w as c}from"./index-U3f91iFJ.js";async function w(a,e,t){let r;try{r=await createImageBitmap(a)}catch(o){throw new l("request:server",`Unable to load ${e}`,{url:e,error:o})}return c(t),r}async function u(a,e,t,r,o){let n;try{n=await createImageBitmap(a)}catch(s){throw new l("request:server",`Unable to load tile ${e}/${t}/${r}`,{error:s,level:e,row:t,col:r})}return c(o),n}export{u as o,w as t};
//# sourceMappingURL=imageBitmapUtils-BdXU1DLf.js.map
