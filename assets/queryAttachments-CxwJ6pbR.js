import{f2 as p,f3 as d,f4 as i,U as u}from"./index-Cj37dcSI.js";import{a as l}from"./AttachmentInfo-DEPC3T-J.js";function y(n){const t=n.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function b(n,t){const e={};for(const s of t){const{parentObjectId:a,parentGlobalId:o,attachmentInfos:r}=s;for(const c of r){const{id:f}=c,h=p(d(`${n.path}/${a}/attachments/${f}`)),m=l.fromJSON(c);m.set({url:h,parentObjectId:a,parentGlobalId:o}),e[a]?e[a].push(m):e[a]=[m]}}return e}function q(n,t,e){let s={query:i({...n.query,f:"json",...y(t)})};return e&&(s={...e,...s,query:{...e.query,...s.query}}),u(n.path+"/queryAttachments",s).then(a=>a.data.attachmentGroups)}async function O(n,t,e){const{objectIds:s}=t,a=[];for(const o of s)a.push(u(n.path+"/"+o+"/attachments",e));return Promise.all(a).then(o=>s.map((r,c)=>({parentObjectId:r,attachmentInfos:o[c].data.attachmentInfos})))}export{q as executeAttachmentQuery,O as fetchAttachments,b as processAttachmentQueryResult};
//# sourceMappingURL=queryAttachments-CxwJ6pbR.js.map
