import{O as l,j as a,m as y,k as d,dc as f,de as g,dd as v,U as $,gs as j,s as w}from"./index-DbNmBX4d.js";import{i as O}from"./NetworkElement-xemfa5ne.js";import{d as S}from"./Association-BVEU89YC.js";let r=class extends l{constructor(e){super(e),this.associations=[]}};a([y({type:[S],json:{write:!0}})],r.prototype,"associations",void 0),r=a([d("esri.rest.networks.support.QueryAssociationsResult")],r);const k=r;function I(s){const{returnDeletes:e,elements:n,gdbVersion:o,moment:i}=s.toJSON();return{returnDeletes:e,elements:JSON.stringify(n.map(t=>({globalId:t.globalId,networkSourceId:t.networkSourceId,terminalId:t.terminalId}))),types:JSON.stringify(s.types.map(t=>O.toJSON(t))).replaceAll('"connectivity"','"junctionJunctionConnectivity"'),gdbVersion:o,moment:i}}async function b(s,e,n){const o=f(s),i={...I(e),f:"json"},t=g({...o.query,...i}),c=v(t,{...n,method:"post"}),p=`${o.path}/associations/query`,{data:u}=await $(p,c),m=k.fromJSON(u);return e.types.includes("connectivity")&&j(w.getLogger("esri/rest/networks/support/QueryAssociationsParameters"),"types",{replacement:"Please use 'junction-junction-connectivity' instead of 'connectivity'.",see:"https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-networks-support-QueryAssociationsParameters.html#types",version:"4.29",warnOnce:!0}),m}export{b as queryAssociations};
//# sourceMappingURL=queryAssociations-BCxFaG6-.js.map
