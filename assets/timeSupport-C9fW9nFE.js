import{p as o,gg as i}from"./index-DbNmBX4d.js";import"./ColorBackground-DJ9LUBkO.js";function m(e){if(!e)return e;const{start:n,end:t}=e;return new o({start:n!=null?i(n,-n.getTimezoneOffset(),"minutes"):n,end:t!=null?i(t,-t.getTimezoneOffset(),"minutes"):t})}function a(e){if(!e)return e;const{start:n,end:t}=e;return new o({start:n!=null?i(n,n.getTimezoneOffset(),"minutes"):n,end:t!=null?i(t,t.getTimezoneOffset(),"minutes"):t})}function g(e,n,t){if((e==null?void 0:e.timeInfo)==null)return null;const{datesInUnknownTimezone:f=!1,timeOffset:r,useViewTime:l}=e;let u=e.timeExtent;f&&(u=a(u));let s=l?n&&u?n.intersection(u):n||u:u;return!s||s.isEmpty||s.isAllTime?s:(r&&(s=s.offset(-r.value,r.unit)),f&&(s=m(s)),s.equals(t)?t:s)}export{g as i};
//# sourceMappingURL=timeSupport-C9fW9nFE.js.map
