import{O as d,j as i,m as n,k as u,dc as y,de as l,dd as h,U as x}from"./index-BMHxxDIj.js";import{d as $}from"./Association-B7o6PJ4D.js";import"./NetworkElement-XUlsniGG.js";let r=class extends d{constructor(t){super(t),this.maxGeometryCountExceeded=!1,this.associations=[]}};i([n({type:Boolean,json:{write:!0}})],r.prototype,"maxGeometryCountExceeded",void 0),i([n({type:[$],json:{write:!0}})],r.prototype,"associations",void 0),r=i([u("esri.rest.networks.support.AssociationGeometriesResult")],r);const G=r;async function O(t,o,e){const s=y(t),a={...o.toJSON(),f:"json"},c=l({...s.query,...a});e?e.method="post":e={method:"post"};const p=h(c,e),m=`${s.path}/synthesizeAssociationGeometries`;return x(m,p).then(f=>j(f,o.outSpatialReference))}function j(t,o){const{data:e}=t;if(o)for(const s of e.associations)s.geometry.spatialReference||(s.geometry.spatialReference=o.clone());return G.fromJSON(e)}export{O as synthesizeAssociationGeometries};
//# sourceMappingURL=synthesizeAssociationGeometries-BkRADWOg.js.map
