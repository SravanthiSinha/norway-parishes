import{J as a,w as c,Y as g}from"./index-Vdm0PCas.js";async function u(r,e,o){const s=r&&r.getAtOrigin&&r.getAtOrigin("renderer",e.origin);if(s&&s.type==="unique-value"&&s.styleOrigin){const n=await a(s.populateFromStyle());if(c(o),n.ok===!1){const t=n.error;e!=null&&e.messages&&e.messages.push(new g("renderer:style-reference",`Failed to create unique value renderer from style reference: ${t.message}`,{error:t,context:e})),r.clear("renderer",e==null?void 0:e.origin)}}}export{u as t};
//# sourceMappingURL=styleUtils-CRQmAKAx.js.map
