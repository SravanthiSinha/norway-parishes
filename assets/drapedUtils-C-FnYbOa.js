import{aX as m,b2 as c}from"./index-CRM8otC0.js";function u(e,n){return n?"xoffset"in n&&n.xoffset?Math.max(e,Math.abs(n.xoffset)):"yoffset"in n&&n.yoffset?Math.max(e,Math.abs(n.yoffset||0)):e:e}function h(e){let n=0,t=0;for(let r=0;r<e.length;r++){const s=e[r].size;typeof s=="number"&&(n+=s,t++)}return n/t}function p(e,n){var t;return typeof e=="number"?e:(t=e==null?void 0:e.stops)!=null&&t.length?h(e.stops):n}function b(e,n){if(!n)return e;const t=n.filter(o=>o.type==="size").map(o=>{const{maxSize:a,minSize:i}=o;return(p(a,e)+p(i,e))/2});let r=0;const s=t.length;if(s===0)return e;for(let o=0;o<s;o++)r+=t[o];const f=Math.floor(r/s);return Math.max(f,e)}function M(e){var f;const n=e==null?void 0:e.renderer,t=e==null?void 0:e.pointerType,r=t==="touch"?9:6;if(!n)return r;const s="visualVariables"in n?b(r,n.visualVariables):r;if(n.type==="simple")return u(s,n.symbol);if(n.type==="unique-value"){let o=s;return(f=n.uniqueValueInfos)==null||f.forEach(a=>{o=u(o,a.symbol)}),o}if(n.type==="class-breaks"){let o=s;return n.classBreakInfos.forEach(a=>{o=u(o,a.symbol)}),o}return n.type==="dot-density"||n.type,s}function z(e,n,t,r=new m){let s=0;if(t.type==="2d")s=n*(t.resolution??0);else if(t.type==="3d"){const x=t.overlayPixelSizeInMapUnits(e),l=t.basemapSpatialReference;s=l==null||l.equals(t.spatialReference)?n*x:c(l)/c(t.spatialReference)}const f=e.x-s,o=e.y-s,a=e.x+s,i=e.y+s,{spatialReference:y}=t;return r.xmin=Math.min(f,a),r.ymin=Math.min(o,i),r.xmax=Math.max(f,a),r.ymax=Math.max(o,i),r.spatialReference=y,r}function v(e,n,t){const r=t.toMap(e);return r==null?!1:z(r,M(),t,d).intersects(n)}const d=new m;export{v as i,M as o,z as r};
//# sourceMappingURL=drapedUtils-C-FnYbOa.js.map
