import{j as r,m as n,k as f,P as u,db as y,dd as h,dc as l,U as x}from"./index-Bs-G_wsu.js";import{d as $}from"./Association-IyyUx6Tu.js";import"./NetworkElement-DrdCd9jQ.js";let i=class extends u{constructor(o){super(o),this.maxGeometryCountExceeded=!1,this.associations=[]}};r([n({type:Boolean,json:{write:!0}})],i.prototype,"maxGeometryCountExceeded",void 0),r([n({type:[$],json:{write:!0}})],i.prototype,"associations",void 0),i=r([f("esri.rest.networks.support.AssociationGeometriesResult")],i);const G=i;async function S(o,t,e){const s=y(o),a={...t.toJSON(),f:"json"},c=h({...s.query,...a});e?e.method="post":e={method:"post"};const p=l(c,e),m=`${s.path}/synthesizeAssociationGeometries`;return x(m,p).then(d=>j(d,t.outSpatialReference))}function j(o,t){const{data:e}=o;if(t)for(const s of e.associations)s.geometry.spatialReference||(s.geometry.spatialReference=t.clone());return G.fromJSON(e)}export{S as synthesizeAssociationGeometries};
