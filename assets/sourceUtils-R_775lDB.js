const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/geometryEngineJSON-jXV8q20E.js","assets/geometryEngineBase-yFIvKOkM.js","assets/_commonjsHelpers-DCkdB7M8.js","assets/index-BfLS464G.js","assets/index-Jib82o7I.css"])))=>i.map(i=>d[i]);
import{cq as d,cr as h,cp as g,cs as p,ct as m,cu as y,cv as a,_ as w}from"./index-BfLS464G.js";import{n as _}from"./date-DLgTylpo.js";class I{constructor(){this.code=null,this.description=null}}class b{constructor(t){this.error=new I,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}}function l(n){return new b(n)}class q{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}}function A(n){return new q(n)}const c=new Set;function F(n,t,e,f=!1){c.clear();for(const i in e){const r=n.get(i);if(!r)continue;const o=P(r,e[i]);if(c.add(r.name),r&&(f||r.editable)){const u=d(r,o);if(u)return l(h(u,r,o));t[r.name]=o}}for(const i of n.requiredFields??[])if(!c.has(i.name))return l(`missing required field "${i.name}"`);return null}function P(n,t){let e=t;return g(n)&&typeof t=="string"?e=parseFloat(t):p(n)&&t!=null&&typeof t!="string"?e=String(t):m(n)&&typeof t=="string"&&(e=_(t)),y(e)}let s;function G(n,t){if(!n||!a(t))return n;if("rings"in n||"paths"in n){if(s==null)throw new TypeError("geometry engine not loaded");return s.simplify(t,n)}return n}async function j(){return s==null&&(s=await w(()=>import("./geometryEngineJSON-jXV8q20E.js").then(n=>n.g),__vite__mapDeps([0,1,2,3,4]))),s}async function S(n,t){!a(n)||t!=="esriGeometryPolygon"&&t!=="esriGeometryPolyline"||await j()}export{A as d,l as f,S as j,F as p,G as y};
//# sourceMappingURL=sourceUtils-R_775lDB.js.map
