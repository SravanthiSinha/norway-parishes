import{p as o,gf as s}from"./index-UqHiE_Ae.js";import"./ColorBackground-Bi33awfy.js";function m(e){if(!e)return e;const{start:n,end:t}=e;return new o({start:n!=null?s(n,-n.getTimezoneOffset(),"minutes"):n,end:t!=null?s(t,-t.getTimezoneOffset(),"minutes"):t})}function a(e){if(!e)return e;const{start:n,end:t}=e;return new o({start:n!=null?s(n,n.getTimezoneOffset(),"minutes"):n,end:t!=null?s(t,t.getTimezoneOffset(),"minutes"):t})}function d(e,n,t){if((e==null?void 0:e.timeInfo)==null)return null;const{datesInUnknownTimezone:f=!1,timeOffset:r,useViewTime:l}=e;let i=e.timeExtent;f&&(i=a(i));let u=l?n&&i?n.intersection(i):n||i:i;return!u||u.isEmpty||u.isAllTime?u:(r&&(u=u.offset(-r.value,r.unit)),f&&(u=m(u)),u.equals(t)?t:u)}export{d as i};
//# sourceMappingURL=timeSupport-DUttKEiZ.js.map
