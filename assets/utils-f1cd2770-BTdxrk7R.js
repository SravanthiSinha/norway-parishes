import{a as p}from"./index-U3f91iFJ.js";import{f as y,n as S}from"./locale-60f8ca58-JSRNgc9i.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */function A(t,n,e){if(!t)return;const r=t.getTime(),a=!(n instanceof Date)||r>=n.getTime(),o=!(e instanceof Date)||r<=e.getTime();return a&&o}function C(t,n,e){if(!(t instanceof Date))return null;const r=t.getTime(),a=n instanceof Date&&r<n.getTime(),o=e instanceof Date&&r>e.getTime();return a?n:o?e:t}function F(t,n=!1){if(t instanceof Date)return t;if(!t||typeof t!="string")return null;const e=t.split(/[: T-]/).map(parseFloat),r=new Date(e[0],(e[1]||1)-1,e[2]||1);if(r.setFullYear(e[0]),isNaN(r.getTime()))throw new Error(`Invalid ISO 8601 date: "${t}"`);return n?w(r):r}function E(t,n){if(!n)return null;const{separator:e}=n,r=O(t,n),{day:a,month:o}=r,s=T(r.year,n),i=new Date(s,o,a);i.setFullYear(s);const c=a>0,u=o>-1,d=!isNaN(i.getTime()),h=t.split(e).filter(D=>D).length>2,m=s.toString().length>0;return c&&u&&d&&h&&m?i:null}function T(t,n){return g(t,n,"read")}function L(t,n){return g(t,n,"write")}function g(t,n,e){if(n["default-calendar"]!=="buddhist")return t;const a=543*(e==="read"?-1:1);return t+a}function M(t,n){const{separator:e,unitOrder:r}=n,a=Y(r),o=t.split(e).map(u=>S.delocalize(u)),s=o[a.indexOf("d")],i=o[a.indexOf("m")],c=o[a.indexOf("y")];return{day:s,month:i,year:c}}function R(t){if(t instanceof Date){const n=String(t.getMonth()+1).padStart(2,"0"),e=String(t.getDate()).padStart(2,"0");return`${String(t.getFullYear()).padStart(4,"0")}-${n}-${e}`}return""}function b(t){const n=t.split("-");return{day:n[2],month:n[1],year:n[0]}}function N(t,n){return t instanceof Date&&n instanceof Date&&t.getDate()===n.getDate()&&t.getMonth()===n.getMonth()&&t.getFullYear()===n.getFullYear()}function _(t){const n=t.getMonth(),e=new Date(t);return e.setMonth(n-1),n===e.getMonth()?new Date(t.getFullYear(),n,0):e}function $(t){const n=t.getMonth(),e=new Date(t);return e.setMonth(n+1),(n+2)%7===e.getMonth()%7?new Date(t.getFullYear(),n+2,0):e}function O(t,n){const{day:e,month:r,year:a}=M(t,n);return{day:parseInt(e),month:parseInt(r)-1,year:parseInt(a)}}function Y(t){const n=["d","m","y"],e=t.toLowerCase();return n.sort((r,a)=>e.indexOf(r)-e.indexOf(a))}function P(t,n){const e=t.getTime(),r=n.getTime();return(e-r)/(1e3*3600*24)}function w(t){return t.setHours(23,59,59,999),t}const f={},l={};async function I(t){const n=y(t);if(f[n])return f[n];l[n]||(l[n]=fetch(p(`./assets/date-picker/nls/${n}.json`)).then(r=>r.json()).catch(()=>(console.error(`Translations for "${n}" not found or invalid, falling back to english`),I("en"))));const e=await l[n];return f[n]=e,e}function j(t){return t.map((n,e)=>F(n,e===1))}export{E as a,R as b,F as c,M as d,C as e,I as f,j as g,b as h,A as i,P as j,N as k,Y as l,L as m,$ as n,T as o,_ as p,w as s};
//# sourceMappingURL=utils-f1cd2770-BTdxrk7R.js.map
