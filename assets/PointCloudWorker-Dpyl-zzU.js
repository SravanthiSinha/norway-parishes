import{g5 as S,c5 as O,ag as v,bW as x}from"./index-j6yFHuRy.js";import{O as C}from"./quat-Com0Jwzo.js";import{e as F}from"./quatf64-aQ5IuZRd.js";import{Q as k}from"./vec32-CLDLXykA.js";import{t as A,n as w}from"./vec3f32-nZdmKIgz.js";import{a as R,b as U,d as B}from"./PointCloudUniqueValueRenderer-B4_sKNzR.js";import{w as J,l as N,c as V,I as T}from"./I3SBinaryReader-xEj9q07O.js";import{I as q}from"./orientedBoundingBox-Djcx1UQ5.js";import"./mat3f64-q3fE-ZOt.js";import"./VertexAttribute-BdZWZuT1.js";import"./mat3-DSYHFVyP.js";import"./mat4f64-CSKppSlJ.js";import"./spatialReferenceEllipsoidUtils-DvkhqtJM.js";import"./computeTranslationToOriginAndRotation-4nTPOwOX.js";import"./plane-D_hNRzaa.js";import"./ViewingMode-dBUh39ak.js";function z(l,t,a,n){const{rendererJSON:f,isRGBRenderer:m}=l;let o=null,i=null;if(t&&m)o=t;else if(t&&(f==null?void 0:f.type)==="pointCloudUniqueValueRenderer"){i=R.fromJSON(f);const e=i.colorUniqueValueInfos;o=new Uint8Array(3*n);const c=g(i.fieldTransformType);for(let r=0;r<n;r++){const s=(c?c(t[r]):t[r])+"";for(let u=0;u<e.length;u++)if(e[u].values.includes(s)){o[3*r]=e[u].color.r,o[3*r+1]=e[u].color.g,o[3*r+2]=e[u].color.b;break}}}else if(t&&(f==null?void 0:f.type)==="pointCloudStretchRenderer"){i=U.fromJSON(f);const e=i.stops;o=new Uint8Array(3*n);const c=g(i.fieldTransformType);for(let r=0;r<n;r++){const s=c?c(t[r]):t[r],u=e.length-1;if(s<e[0].value)o[3*r]=e[0].color.r,o[3*r+1]=e[0].color.g,o[3*r+2]=e[0].color.b;else if(s>=e[u].value)o[3*r]=e[u].color.r,o[3*r+1]=e[u].color.g,o[3*r+2]=e[u].color.b;else for(let b=1;b<e.length;b++)if(s<e[b].value){const p=(s-e[b-1].value)/(e[b].value-e[b-1].value);o[3*r]=e[b].color.r*p+e[b-1].color.r*(1-p),o[3*r+1]=e[b].color.g*p+e[b-1].color.g*(1-p),o[3*r+2]=e[b].color.b*p+e[b-1].color.b*(1-p);break}}}else if(t&&(f==null?void 0:f.type)==="pointCloudClassBreaksRenderer"){i=B.fromJSON(f);const e=i.colorClassBreakInfos;o=new Uint8Array(3*n);const c=g(i.fieldTransformType);for(let r=0;r<n;r++){const s=c?c(t[r]):t[r];for(let u=0;u<e.length;u++)if(s>=e[u].minValue&&s<=e[u].maxValue){o[3*r]=e[u].color.r,o[3*r+1]=e[u].color.g,o[3*r+2]=e[u].color.b;break}}}else o=new Uint8Array(3*n).fill(255);if(a&&(i!=null&&i.colorModulation)){const e=i.colorModulation.minValue,c=i.colorModulation.maxValue,r=.3;for(let s=0;s<n;s++){const u=a[s],b=u>=c?1:u<=e?r:r+(1-r)*(u-e)/(c-e);o[3*s]=b*o[3*s],o[3*s+1]=b*o[3*s+1],o[3*s+2]=b*o[3*s+2]}}return o}function E(l,t){if(l.encoding==null||l.encoding===""){const a=J(t,l);if(a.vertexAttributes.position==null)return;const n=N(t,a.vertexAttributes.position),f=a.header.fields,m=[f.offsetX,f.offsetY,f.offsetZ],o=[f.scaleX,f.scaleY,f.scaleZ],i=n.length/3,e=new Float64Array(3*i);for(let c=0;c<i;c++)e[3*c]=n[3*c]*o[0]+m[0],e[3*c+1]=n[3*c+1]*o[1]+m[1],e[3*c+2]=n[3*c+2]*o[2]+m[2];return e}if(l.encoding==="lepcc-xyz")return V(t).result}function h(l,t,a){return l!=null&&l.attributeInfo.useElevation?t?X(t,a):null:l!=null&&l.attributeInfo.storageInfo?T(l.attributeInfo.storageInfo,l.buffer,a):null}function X(l,t){const a=new Float64Array(t);for(let n=0;n<t;n++)a[n]=l[3*n+2];return a}function Y(l,t,a,n,f){const m=l.length/3;let o=0;for(let i=0;i<m;i++){let e=!0;for(let c=0;c<n.length&&e;c++){const{filterJSON:r}=n[c],s=f[c].values[i];switch(r.type){case"pointCloudValueFilter":{const u=r.mode==="exclude";r.values.includes(s)===u&&(e=!1);break}case"pointCloudBitfieldFilter":{const u=M(r.requiredSetBits),b=M(r.requiredClearBits);((s&u)!==u||s&b)&&(e=!1);break}case"pointCloudReturnFilter":{const u=15&s,b=s>>>4&15,p=b>1,D=u===1,I=u===b;let y=!1;for(const d of r.includedReturns)if(d==="last"&&I||d==="firstOfMany"&&D&&p||d==="lastOfMany"&&I&&p||d==="single"&&!p){y=!0;break}y||(e=!1);break}}}e&&(a[o]=i,l[3*o]=l[3*i],l[3*o+1]=l[3*i+1],l[3*o+2]=l[3*i+2],t[3*o]=t[3*i],t[3*o+1]=t[3*i+1],t[3*o+2]=t[3*i+2],o++)}return o}function g(l){switch(l){default:case null:case"none":return t=>t;case"low-four-bit":return t=>15&t;case"high-four-bit":return t=>(240&t)>>4;case"absolute-value":return t=>Math.abs(t);case"modulo-ten":return t=>t%10}}function M(l){let t=0;for(const a of l||[])t|=1<<a;return t}class Z{transform(t){const a=this._transform(t),n=[a.points.buffer,a.rgb.buffer];a.pointIdFilterMap!=null&&n.push(a.pointIdFilterMap.buffer);for(const f of a.attributes)"buffer"in f.values&&S(f.values.buffer)&&f.values.buffer!==a.rgb.buffer&&n.push(f.values.buffer);return Promise.resolve({result:a,transferList:n})}_transform(t){const a=E(t.schema,t.geometryBuffer);let n=a.length/3,f=null;const m=new Array,o=h(t.primaryAttributeData,a,n);t.primaryAttributeData!=null&&o&&m.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:o});const i=h(t.modulationAttributeData,a,n);t.modulationAttributeData!=null&&i&&m.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:i});let e=z(t.rendererInfo,o,i,n);if(t.filterInfo&&t.filterInfo.length>0&&t.filterAttributesData!=null){const r=t.filterAttributesData.filter(O).map(s=>{const u=h(s,a,n),b={attributeInfo:s.attributeInfo,values:u};return m.push(b),b});f=new Uint32Array(n),n=Y(a,e,f,t.filterInfo,r)}for(const r of t.userAttributesData){const s=h(r,a,n);m.push({attributeInfo:r.attributeInfo,values:s})}3*n<e.length&&(e=new Uint8Array(e.buffer.slice(0,3*n))),j(a,n,t.elevationOffset);const c=_(a,n,q.fromData(t.obbData),v.fromJSON(t.inSR),v.fromJSON(t.outSR));return{obbData:t.obbData,points:c,rgb:e,attributes:m,pointIdFilterMap:f}}}function _(l,t,a,n,f){if(!x(l,n,0,l,f,0,t))throw new Error("Can't reproject");const m=A(a.center),o=w(),i=w(),e=A(a.halfSize);C($,a.quaternion);const c=new Float32Array(3*t);for(let r=0;r<t;r++){let s=3*r;o[0]=l[s]-m[0],o[1]=l[s+1]-m[1],o[2]=l[s+2]-m[2],k(i,o,$),e[0]=Math.max(e[0],Math.abs(i[0])),e[1]=Math.max(e[1],Math.abs(i[1])),e[2]=Math.max(e[2],Math.abs(i[2])),c[s++]=o[0],c[s++]=o[1],c[s]=o[2]}return a.halfSize=e,c}function j(l,t,a){if(a!==0)for(let n=0;n<t;n++)l[3*n+2]+=a}const $=F();function ut(){return new Z}export{ut as default};
//# sourceMappingURL=PointCloudWorker-Dpyl-zzU.js.map
