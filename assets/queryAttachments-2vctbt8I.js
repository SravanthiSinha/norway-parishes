import{f9 as p,U as u,fa as d,fb as i}from"./index-BLU2cKnj.js";import{a as l}from"./AttachmentInfo-BZfDvMZx.js";function y(n){const t=n.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function j(n,t){const a={};for(const s of t){const{parentObjectId:e,parentGlobalId:o,attachmentInfos:r}=s;for(const c of r){const{id:f}=c,h=d(i(`${n.path}/${e}/attachments/${f}`)),m=l.fromJSON(c);m.set({url:h,parentObjectId:e,parentGlobalId:o}),a[e]?a[e].push(m):a[e]=[m]}}return a}function q(n,t,a){let s={query:p({...n.query,f:"json",...y(t)})};return a&&(s={...a,...s,query:{...a.query,...s.query}}),u(n.path+"/queryAttachments",s).then(e=>e.data.attachmentGroups)}async function O(n,t,a){const{objectIds:s}=t,e=[];for(const o of s)e.push(u(n.path+"/"+o+"/attachments",a));return Promise.all(e).then(o=>s.map((r,c)=>({parentObjectId:r,attachmentInfos:o[c].data.attachmentInfos})))}export{q as executeAttachmentQuery,O as fetchAttachments,j as processAttachmentQueryResult};
//# sourceMappingURL=queryAttachments-2vctbt8I.js.map
