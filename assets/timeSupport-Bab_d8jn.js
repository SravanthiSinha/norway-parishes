import{p as f,g6 as s}from"./index-Bs-G_wsu.js";import"./ColorBackground-CCzJQZw-.js";function m(e){if(!e)return e;const{start:n,end:t}=e;return new f({start:n!=null?s(n,-n.getTimezoneOffset(),"minutes"):n,end:t!=null?s(t,-t.getTimezoneOffset(),"minutes"):t})}function a(e){if(!e)return e;const{start:n,end:t}=e;return new f({start:n!=null?s(n,n.getTimezoneOffset(),"minutes"):n,end:t!=null?s(t,t.getTimezoneOffset(),"minutes"):t})}function d(e,n,t){if((e==null?void 0:e.timeInfo)==null)return null;const{datesInUnknownTimezone:o=!1,timeOffset:r,useViewTime:l}=e;let i=e.timeExtent;o&&(i=a(i));let u=l?n&&i?n.intersection(i):n||i:i;return!u||u.isEmpty||u.isAllTime?u:(r&&(u=u.offset(-r.value,r.unit)),o&&(u=m(u)),u.equals(t)?t:u)}export{d as i};