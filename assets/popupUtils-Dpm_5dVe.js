import{du as h,V as m}from"./index-Vdm0PCas.js";async function T(e,d=e.popupTemplate){var n,o;if(d==null)return[];const t=await d.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:r}=d,{objectIdField:u,typeIdField:a,globalIdField:p,relationships:i}=e;if(t.includes("*"))return["*"];const c=r?h(e):[],l=m(e.fieldsIndex,[...t,...c]);return a&&l.push(a),l&&u&&((n=e.fieldsIndex)!=null&&n.has(u))&&!l.includes(u)&&l.push(u),l&&p&&((o=e.fieldsIndex)!=null&&o.has(p))&&!l.includes(p)&&l.push(p),i&&i.forEach(I=>{var f;const{keyField:s}=I;l&&s&&((f=e.fieldsIndex)!=null&&f.has(s))&&!l.includes(s)&&l.push(s)}),l}function F(e,d){return e.popupTemplate?e.popupTemplate:d!=null&&d.defaultPopupTemplateEnabled&&e.defaultPopupTemplate!=null?e.defaultPopupTemplate:null}export{T as n,F as p};
//# sourceMappingURL=popupUtils-Dpm_5dVe.js.map
