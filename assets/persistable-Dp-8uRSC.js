import{bg as P,eI as b,eJ as N,eK as v,eL as x,eM as S,eN as A,eO as O,eP as U,eQ as R,eR as $,I as F,bk as J,eS as K,bl as k}from"./index-5zHX_dwk.js";import{x as z}from"./MD5-C9MwAd2G.js";import{i as C}from"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import{n as H}from"./uuid-Cl5lrJ4c.js";import{p as y}from"./resourceExtension-DTYtyFyT.js";function T(e){const o=(e==null?void 0:e.origins)??[void 0];return(t,n)=>{const s=L(e,t,n);for(const a of o){const i=P(t,a,n);for(const r in s)i[r]=s[r]}}}function L(e,o,t){if((e==null?void 0:e.type)==="resource")return M(e,o,t);switch((e==null?void 0:e.type)??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:s}=b;return{read:n,write:s}}}}function M(e,o,t){const n=N(o,t);return{type:String,read:(s,a,i)=>{const r=R(s,a,i);return n.type===String?r:typeof n.type=="function"?new n.type({url:r}):void 0},write:{writer(s,a,i,r){if(!(r!=null&&r.resources))return typeof s=="string"?void(a[i]=v(s,r)):void(a[i]=s.write({},r));const c=Y(s),p=v(c,{...r,verifyItemRelativeUrls:r!=null&&r.verifyItemRelativeUrls?{writtenUrls:r.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},x.NO),d=n.type!==String&&(!C(this)||(r==null?void 0:r.origin)&&this.originIdOf(t)>S(r.origin)),l={object:this,propertyName:t,value:s,targetUrl:p,dest:a,targetPropertyName:i,context:r,params:e};r!=null&&r.portalItem&&p&&!A(p)?d&&(e!=null&&e.contentAddressed)?g(l):d?Q(l):V(l):r!=null&&r.portalItem&&(p==null||O(p)!=null||U(p)||d)?g(l):a[i]=p}}}}function g(e){var h;const{targetUrl:o,params:t,value:n,context:s,dest:a,targetPropertyName:i}=e;if(!s.portalItem)return;const r=$(o),c=I(n,o,s);if(t!=null&&t.contentAddressed&&c.type!=="json")return void((h=s.messages)==null?void 0:h.push(new F("persistable:contentAddressingUnsupported",`Property "${i}" is trying to serializing a resource with content of type ${c.type} with content addressing. Content addressing is only supported for json resources.`,{content:c})));const p=t!=null&&t.contentAddressed&&c.type==="json"?z(c.jsonString):(r==null?void 0:r.filename)??H(),d=J((t==null?void 0:t.prefix)??(r==null?void 0:r.prefix),p),l=`${d}.${y(c)}`;if(t!=null&&t.contentAddressed&&s.resources&&c.type==="json"){const m=s.resources.toKeep.find(({resource:f})=>f.path===l)??s.resources.toAdd.find(({resource:f})=>f.path===l);if(m)return void(a[i]=m.resource.itemRelativeUrl)}const u=s.portalItem.resourceFromPath(l);U(o)&&s.resources&&s.resources.pendingOperations.push(K(o).then(m=>{u.path=`${d}.${y({type:"blob",blob:m})}`,a[i]=u.itemRelativeUrl}).catch(()=>{}));const j=(t==null?void 0:t.compress)??!1;s.resources&&w({...e,resource:u,content:c,compress:j,updates:s.resources.toAdd}),a[i]=u.itemRelativeUrl}function Q(e){const{context:o,targetUrl:t,params:n,value:s,dest:a,targetPropertyName:i}=e;if(!o.portalItem)return;const r=o.portalItem.resourceFromPath(t),c=I(s,t,o),p=y(c),d=k(r.path),l=(n==null?void 0:n.compress)??!1;p===d?(o.resources&&w({...e,resource:r,content:c,compress:l,updates:o.resources.toUpdate}),a[i]=t):g(e)}function V({context:e,targetUrl:o,dest:t,targetPropertyName:n}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(o),compress:!1}),t[n]=o)}function w({object:e,propertyName:o,updates:t,resource:n,content:s,compress:a}){const i=r=>{Z(e,o,r)};t.push({resource:n,content:s,compress:a,finish:i})}function I(e,o,t){return typeof e=="string"?{type:"url",url:o}:{type:"json",jsonString:JSON.stringify(e.toJSON(t))}}function Y(e){return e==null?null:typeof e=="string"?e:e.url}function Z(e,o,t){typeof e[o]=="string"?e[o]=t.url:e[o].url=t.url}export{T as j};
//# sourceMappingURL=persistable-Dp-8uRSC.js.map
