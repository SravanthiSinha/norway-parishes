import{U as b,cO as D,I as c,cP as O,cQ as E,cR as R,cS as S,ag as A,a9 as V,ah as j,ai as L,R as d,cT as X,cU as Y,aX as W,ce as q,ch as F}from"./index-Dqo4rVFT.js";import{u as z}from"./geojson-BRmbCKmT.js";import{o as x,n as g}from"./xmlUtils-CtUoQO7q.js";const C="xlink:href",f="2.0.0",k="__esri_wfs_id__",_="wfs-layer:getWFSLayerTypeInfo-error",Q="wfs-layer:empty-service",N="wfs-layer:feature-type-not-found",J="wfs-layer:geojson-not-supported",K="wfs-layer:kvp-encoding-not-supported",H="wfs-layer:malformed-json",G="wfs-layer:unknown-geometry-type",B="wfs-layer:unknown-field-type",Z="wfs-layer:unsupported-spatial-reference",ee="wfs-layer:unsupported-wfs-version";async function Se(r,t){const e=te((await b(r,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:f,...t==null?void 0:t.customParameters},signal:t==null?void 0:t.signal})).data);return ne(r,e),e}function te(r){const t=U(r);we(t),I(t);const e=t.firstElementChild,a=D(se(e));return{operations:re(e),get featureTypes(){return Array.from(a())},readFeatureTypes:a}}const ae=["json","application/json","geojson","application/json; subtype=geojson","application/geo+json"];function P(r){for(const t of ae){const e=r.findIndex(a=>a.toLowerCase()===t);if(e>=0)return r[e]}return null}function re(r){let t=!1;const e={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}},a=[],n=[];if(x(r,{OperationsMetadata:{Parameter:s=>{if(s.getAttribute("name")==="outputFormat")return{AllowedValues:{Value:({textContent:o})=>{o&&a.push(o)}}}},Operation:s=>{switch(s.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:o=>{e.GetCapabilities.url=o.getAttribute(C)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:o=>{e.DescribeFeatureType.url=o.getAttribute(C)}}}};case"GetFeature":return{DCP:{HTTP:{Get:o=>{e.GetFeature.url=o.getAttribute(C)}}},Parameter:o=>{if(o.getAttribute("name")==="outputFormat")return{AllowedValues:{Value:({textContent:i})=>{i&&n.push(i)}}}}}}},Constraint:s=>{switch(s.getAttribute("name")){case"KVPEncoding":return{DefaultValue:o=>{t=o.textContent.toLowerCase()==="true"}};case"ImplementsResultPaging":return{DefaultValue:o=>{e.GetFeature.supportsPagination=o.textContent.toLowerCase()==="true"}}}}}}),e.GetFeature.outputFormat=P(n)??P(a),!t)throw new c(K,"WFS service doesn't support key/value pair (KVP) encoding");if(e.GetFeature.outputFormat==null)throw new c(J,"WFS service doesn't support GeoJSON output format");return e}function ne(r,t){O(r)&&(E(r,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=R(t.operations.DescribeFeatureType.url)),E(r,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=R(t.operations.GetFeature.url)))}function $(r){var e,a,n;const t=parseInt(((n=(a=(e=r.textContent)==null?void 0:e.match(/(?<wkid>\d+$)/i))==null?void 0:a.groups)==null?void 0:n.wkid)??"",10);if(!Number.isNaN(t))return t}function se(r){return g(r,{FeatureTypeList:{FeatureType:t=>{const e={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",defaultSpatialReference:4326,supportedSpatialReferences:[]},a=new Set;return x(t,{Name:n=>{const{name:s,prefix:o}=w(n.textContent);e.typeName=`${o}:${s}`,e.name=s,e.namespacePrefix=o,e.namespaceUri=n.lookupNamespaceURI(o)},Abstract:n=>{e.description=n.textContent},Title:n=>{e.title=n.textContent},WGS84BoundingBox:n=>{e.extent=W.fromJSON(oe(n))},DefaultCRS:n=>{const s=$(n);s&&(e.defaultSpatialReference=s,a.add(s))},OtherCRS:n=>{const s=$(n);s&&a.add(s)}}),e.title||(e.title=e.name),a.add(4326),e.supportedSpatialReferences.push(...a),e}}})}function oe(r){let t,e,a,n;for(const s of r.children)switch(s.localName){case"LowerCorner":[t,e]=s.textContent.split(" ").map(o=>Number.parseFloat(o));break;case"UpperCorner":[a,n]=s.textContent.split(" ").map(o=>Number.parseFloat(o))}return{xmin:t,ymin:e,xmax:a,ymax:n,spatialReference:q}}function ie(r,t,e){return S(r,a=>e?a.name===t&&a.namespaceUri===e:a.typeName===t||a.name===t)}async function xe(r,t,e,a={}){const{featureType:n,extent:s}=await ue(r,t,e,a),{spatialReference:o}=be(r.operations.GetFeature.url,n,a.spatialReference),{fields:i,geometryType:p,swapXY:l,objectIdField:u,geometryField:y}=await pe(r,n,o,a);return{url:r.operations.GetCapabilities.url,name:n.name,namespaceUri:n.namespaceUri,fields:i,geometryField:y,geometryType:p,objectIdField:u,spatialReference:a.spatialReference??new A({wkid:n.defaultSpatialReference}),extent:s,swapXY:l,wfsCapabilities:r,customParameters:a.customParameters}}async function ue(r,t,e,a={}){const n=r.readFeatureTypes(),s=t?ie(n,t,e):n.next().value,{spatialReference:o=new A({wkid:s==null?void 0:s.defaultSpatialReference})}=a;if(s==null)throw t?new c(N,`The type '${t}' could not be found in the service`):new c(Q,"The service is empty");let i=s.extent;if(i&&!V(i.spatialReference,o))try{await j(i.spatialReference,o,void 0,a),i=L(i,o)}catch{throw new c(Z,"Projection not supported")}return{extent:i,spatialReference:o,featureType:s}}async function pe(r,t,e,a={}){var m,T,h;const{typeName:n}=t,[s,o]=await Promise.allSettled([ye(r.operations.DescribeFeatureType.url,n,a),le(r,n,e,a)]),i=M=>new c(_,`An error occurred while getting info about the feature type '${n}'`,{error:M});if(s.status==="rejected")throw i(s.reason);if(o.status==="rejected")throw i(o.reason);const{fields:p,errors:l}=s.value??{},u=((m=s.value)==null?void 0:m.geometryType)||((T=o.value)==null?void 0:T.geometryType),y=((h=o.value)==null?void 0:h.swapXY)??!1;if(u==null)throw new c(G,`The geometry type could not be determined for type '${n}`,{typeName:n,geometryType:u,fields:p,errors:l});return{...ce(p??[]),geometryType:u,swapXY:y}}function ce(r){const t=r.find(a=>a.type==="geometry");let e=r.find(a=>a.type==="oid");return r=r.filter(a=>a.type!=="geometry"),e||(e=new d({name:k,type:"oid",alias:k}),r.unshift(e)),{geometryField:(t==null?void 0:t.name)??null,objectIdField:e.name,fields:r}}async function le(r,t,e,a={}){var l;let n,s=!1;const[o,i]=await Promise.all([ge(r.operations.GetFeature.url,t,e,r.operations.GetFeature.outputFormat,{...a,count:1}),b(r.operations.GetFeature.url,{responseType:"text",query:v(t,e,void 0,{...a,count:1}),signal:a==null?void 0:a.signal})]),p=o.type==="FeatureCollection"&&((l=o.features[0])==null?void 0:l.geometry);if(p){let u;switch(n=X.fromJSON(z(p.type)),p.type){case"Point":u=p.coordinates;break;case"LineString":case"MultiPoint":u=p.coordinates[0];break;case"MultiLineString":case"Polygon":u=p.coordinates[0][0];break;case"MultiPolygon":u=p.coordinates[0][0][0]}const y=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(i.data);if(y){const m=u[0].toFixed(3),T=u[1].toFixed(3),h=parseFloat(y[1]).toFixed(3);m===parseFloat(y[2]).toFixed(3)&&T===h&&(s=!0)}}return{geometryType:n,swapXY:s}}async function ye(r,t,e){return me(t,(await b(r,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:f,TYPENAME:t,TYPENAMES:t,...e==null?void 0:e.customParameters},signal:e==null?void 0:e.signal})).data)}function me(r,t){const{name:e}=w(r),a=U(t);I(a);const n=S(g(a.firstElementChild,{element:s=>s}),s=>s.getAttribute("name")===e);if(n!=null){const s=n.getAttribute("type"),o=s?S(g(a.firstElementChild,{complexType:i=>i}),i=>i.getAttribute("name")===w(s).name):S(g(n,{complexType:i=>i}),()=>!0);if(o)return fe(o)}throw new c(N,`Type '${r}' not found in document`,{document:new XMLSerializer().serializeToString(a)})}const de=new Set(["objectid","fid"]);function fe(r){const t=[],e=[];let a;const n=g(r,{complexContent:{extension:{sequence:{element:s=>s}}}});for(const s of n){const o=s.getAttribute("name");if(!o)continue;let i,p;if(s.hasAttribute("type")?i=w(s.getAttribute("type")).name:x(s,{simpleType:{restriction:y=>(i=w(y.getAttribute("base")).name,{maxLength:m=>{p=+m.getAttribute("value")}})}}),!i)continue;const l=s.getAttribute("nillable")==="true";let u=!1;switch(i.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":e.push(new d({name:o,alias:o,type:"integer",nullable:l,length:F("integer")}));break;case"float":case"double":case"decimal":e.push(new d({name:o,alias:o,type:"double",nullable:l,length:F("double")}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":e.push(new d({name:o,alias:o,type:"string",nullable:l,length:p??F("string")}));break;case"datetime":case"date":e.push(new d({name:o,alias:o,type:"date",nullable:l,length:p??F("date")}));break;case"pointpropertytype":a="point",u=!0;break;case"multipointpropertytype":a="multipoint",u=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":a="polyline",u=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":a="polygon",u=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":u=!0,t.push(new c(G,`geometry type '${i}' is not supported`,{type:new XMLSerializer().serializeToString(r)}));break;default:t.push(new c(B,`Unknown field type '${i}'`,{type:new XMLSerializer().serializeToString(r)}))}u&&e.push(new d({name:o,alias:o,type:"geometry",nullable:l}))}for(const s of e)if(s.type==="integer"&&!s.nullable&&de.has(s.name.toLowerCase())){s.type="oid";break}return{geometryType:a,fields:e,errors:t}}async function ge(r,t,e,a,n){let{data:s}=await b(r,{responseType:"text",query:v(t,e,a,n),signal:n==null?void 0:n.signal});s=s.replaceAll(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{return JSON.parse(s)}catch(o){throw new c(H,"Error while parsing the response",{response:s,error:o})}}function v(r,t,e,a){const n=typeof t=="number"?t:t.wkid;return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:f,TYPENAMES:r,OUTPUTFORMAT:e,SRSNAME:"EPSG:"+n,STARTINDEX:a==null?void 0:a.startIndex,COUNT:a==null?void 0:a.count,...a==null?void 0:a.customParameters}}async function Ce(r,t,e){const a=await b(r,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:f,TYPENAMES:t,RESULTTYPE:"hits",...e==null?void 0:e.customParameters},signal:e==null?void 0:e.signal}),n=/numberMatched=["'](?<numberMatched>\d+)["']/gi.exec(a.data);if(n!=null&&n.groups)return+n.groups.numberMatched}function U(r){return new DOMParser().parseFromString(r.trim(),"text/xml")}function w(r){const[t,e]=r.split(":");return{prefix:e?t:"",name:e??t}}function we(r){var e;const t=(e=r.firstElementChild)==null?void 0:e.getAttribute("version");if(t&&t!==f)throw new c(ee,`Unsupported WFS version ${t}. Supported version: ${f}`)}function I(r){let t="",e="";if(x(r.firstElementChild,{Exception:a=>(t=a.getAttribute("exceptionCode"),{ExceptionText:n=>{e=n.textContent}})}),t)throw new c(`wfs-layer:${t}`,e)}function be(r,t,e){const a={wkid:t.defaultSpatialReference},n=(e==null?void 0:e.wkid)!=null?{wkid:e.wkid}:a;return{spatialReference:n,getFeatureSpatialReference:Y(r)||n.wkid&&t.supportedSpatialReferences.includes(n.wkid)?{wkid:n.wkid}:{wkid:t.defaultSpatialReference}}}export{ge as K,k as S,xe as W,ie as Y,Ce as e,be as o,Se as v,ce as z};
//# sourceMappingURL=wfsUtils-DamA5lhc.js.map
