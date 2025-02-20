import{N as v}from"./arcadeUtils-Bo-W8RLy.js";import{i as o,U as m,q as T,d as y,K as c,p as f,a as d,r as u,y as b,B as p,C as A,D as g,F as x,G as F,Y as D,N as V,Q as j}from"./languageUtils-trZGNG76.js";import{E as w}from"./shared-MiqNm7J1.js";import"./index-BLU2cKnj.js";import"./TimeOnly-C2tYrWkL.js";import"./ImmutableArray-BPVd6ESQ.js";import"./featureConversionUtils-WMYXStP2.js";import"./number-B8WpTUVB.js";import"./uuid-Cl5lrJ4c.js";function l(a,e){return a&&a.domain?a.domain.type==="coded-value"||a.domain.type==="codedValue"?v.convertObjectToArcadeDictionary({type:"codedValue",name:a.domain.name,dataType:w[a.field.type],codedValues:a.domain.codedValues.map(t=>({name:t.name,code:t.code}))},p(e)):v.convertObjectToArcadeDictionary({type:"range",name:a.domain.name,dataType:w[a.field.type],min:a.domain.minValue,max:a.domain.maxValue},p(e)):null}function K(a){a.mode==="async"&&(a.functions.domain=function(e,t){return a.standardFunctionAsync(e,t,async(i,s,n)=>{if(o(n,2,3,e,t),m(n[0]))return l(T(n[0],y(n[1]),n[2]===void 0?void 0:n[2]),e);if(c(n[0]))return await n[0]._ensureLoaded(),l(f(y(n[1]),n[0],null,n[2]===void 0?void 0:n[2]),e);throw new d(e,u.InvalidParameter,t)})},a.functions.subtypes=function(e,t){return a.standardFunctionAsync(e,t,async(i,s,n)=>{if(o(n,1,1,e,t),m(n[0])){const r=b(n[0]);return r?v.convertObjectToArcadeDictionary(r,p(e)):null}if(c(n[0])){await n[0]._ensureLoaded();const r=n[0].subtypeMetaData();return r?v.convertObjectToArcadeDictionary(r,p(e)):null}throw new d(e,u.InvalidParameter,t)})},a.functions.domainname=function(e,t){return a.standardFunctionAsync(e,t,async(i,s,n)=>{if(o(n,2,4,e,t),m(n[0]))return A(n[0],y(n[1]),n[2],n[3]===void 0?void 0:n[3]);if(c(n[0])){await n[0]._ensureLoaded();const r=f(y(n[1]),n[0],null,n[3]===void 0?void 0:n[3]);return g(r,n[2])}throw new d(e,u.InvalidParameter,t)})},a.signatures.push({name:"domainname",min:2,max:4}),a.functions.domaincode=function(e,t){return a.standardFunctionAsync(e,t,async(i,s,n)=>{if(o(n,2,4,e,t),m(n[0]))return x(n[0],y(n[1]),n[2],n[3]===void 0?void 0:n[3]);if(c(n[0])){await n[0]._ensureLoaded();const r=f(y(n[1]),n[0],null,n[3]===void 0?void 0:n[3]);return F(r,n[2])}throw new d(e,u.InvalidParameter,t)})},a.signatures.push({name:"domaincode",min:2,max:4}),a.functions.text=function(e,t){return a.standardFunctionAsync(e,t,async(i,s,n)=>{if(o(n,1,2,e,t),c(n[0])){const r=D(n[1],"");if(r==="")return n[0].castToText();if(r.toLowerCase()==="schema")return n[0].convertToText("schema",i.abortSignal);if(r.toLowerCase()==="featureset")return n[0].convertToText("featureset",i.abortSignal);throw new d(e,u.InvalidParameter,t)}return V(n[0],n[1])})},a.functions.gdbversion=function(e,t){return a.standardFunctionAsync(e,t,async(i,s,n)=>{if(o(n,1,1,e,t),m(n[0]))return n[0].gdbVersion();if(c(n[0]))return(await n[0].load()).gdbVersion;throw new d(e,u.InvalidParameter,t)})},a.functions.schema=function(e,t){return a.standardFunctionAsync(e,t,async(i,s,n)=>{if(o(n,1,1,e,t),c(n[0]))return await n[0].load(),v.convertObjectToArcadeDictionary(n[0].schema(),p(e));if(m(n[0])){const r=j(n[0]);return r?v.convertObjectToArcadeDictionary(r,p(e)):null}throw new d(e,u.InvalidParameter,t)})})}export{K as registerFunctions};
//# sourceMappingURL=featuresetstring-CFcTOH71.js.map
