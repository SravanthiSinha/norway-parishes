import{j as a,m as l,k as y,P as d,db as f,dd as g,dc as v,U as $,gr as j,s as w}from"./index-Du44_A8J.js";import{i as S}from"./NetworkElement-BiASxGsQ.js";import{d as k}from"./Association-B7fvkqna.js";let r=class extends d{constructor(s){super(s),this.associations=[]}};a([l({type:[k],json:{write:!0}})],r.prototype,"associations",void 0),r=a([y("esri.rest.networks.support.QueryAssociationsResult")],r);const I=r;function J(e){const{returnDeletes:s,elements:n,gdbVersion:o,moment:i}=e.toJSON();return{returnDeletes:s,elements:JSON.stringify(n.map(t=>({globalId:t.globalId,networkSourceId:t.networkSourceId,terminalId:t.terminalId}))),types:JSON.stringify(e.types.map(t=>S.toJSON(t))).replaceAll('"connectivity"','"junctionJunctionConnectivity"'),gdbVersion:o,moment:i}}async function N(e,s,n){const o=f(e),i={...J(s),f:"json"},t=g({...o.query,...i}),c=v(t,{...n,method:"post"}),p=`${o.path}/associations/query`,{data:u}=await $(p,c),m=I.fromJSON(u);return s.types.includes("connectivity")&&j(w.getLogger("esri/rest/networks/support/QueryAssociationsParameters"),"types",{replacement:"Please use 'junction-junction-connectivity' instead of 'connectivity'.",see:"https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-networks-support-QueryAssociationsParameters.html#types",version:"4.29",warnOnce:!0}),m}export{N as queryAssociations};
//# sourceMappingURL=queryAssociations-CcbCDX-S.js.map