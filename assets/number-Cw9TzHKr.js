import{bw as E,bx as w}from"./index-BMHxxDIj.js";const x={ar:[".",","],bg:[","," "],bs:[",","."],ca:[",","."],cs:[","," "],da:[",","."],de:[",","."],"de-ch":[".","’"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[","," "],fi:[","," "],fr:[","," "],"fr-ch":[","," "],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[","," "],id:[",","."],it:[",","."],"it-ch":[".","’"],ja:[".",","],ko:[".",","],lt:[","," "],lv:[","," "],mk:[",","."],nb:[","," "],nl:[",","."],pl:[","," "],pt:[",","."],"pt-pt":[","," "],ro:[",","."],ru:[","," "],sk:[","," "],sl:[",","."],sr:[",","."],sv:[","," "],th:[".",","],tr:[",","."],uk:[","," "],vi:[",","."],zh:[".",","]};function S(e=E()){let r=(e=e.toLowerCase())in x;if(!r){const s=e.split("-");s.length>1&&s[0]in x&&(e=s[0],r=!0),r||(e="en")}const[t,n,l="#,##0.###"]=x[e];return{decimal:t,group:n,pattern:l}}function k(e,r){const t=S((r={...r}).locale);r.customs=t;const n=r.pattern||t.pattern;return isNaN(e)||Math.abs(e)===1/0?null:v(e,n,r)}const N=/[#0,]*[#0](?:\.0*#*)?/;function v(e,r,t){const n=(t=t||{}).customs.group,l=t.customs.decimal,s=r.split(";"),a=s[0];if((r=s[e<0?1:0]||"-"+a).includes("%"))e*=100;else if(r.includes("‰"))e*=1e3;else{if(r.includes("¤"))throw new Error("currency notation not supported");if(r.includes("E"))throw new Error("exponential notation not supported")}const d=N,u=a.match(d);if(!u)throw new Error("unable to find a number expression in pattern: "+r);return t.fractional===!1&&(t.places=0),r.replace(d,z(e,u[0],{decimal:l,group:n,places:t.places,round:t.round}))}function z(e,r,t){(t=t||{}).places===!0&&(t.places=0),t.places===1/0&&(t.places=6);const n=r.split("."),l=typeof t.places=="string"&&t.places.indexOf(",");let s=t.places;l?s=t.places.slice(l+1):+s>=0||(s=(n[1]||[]).length),t.round<0||(e=Number(e.toFixed(Number(s))));const a=String(Math.abs(e)).split("."),d=a[1]||"";if(n[1]||t.places){l&&(t.places=t.places.slice(0,Math.max(0,l)));const o=t.places!==void 0?t.places:n[1]&&n[1].lastIndexOf("0")+1;+o>d.length&&(a[1]=d.padEnd(Number(o),"0")),+s<d.length&&(a[1]=d.slice(0,Math.max(0,Number(s))))}else a[1]&&a.pop();const u=n[0].replace(",","");let f=u.indexOf("0");f!==-1&&(f=u.length-f,f>a[0].length&&(a[0]=a[0].padStart(f,"0")),u.includes("#")||(a[0]=a[0].slice(-f)));let p,c,i=n[0].lastIndexOf(",");if(i!==-1){p=n[0].length-i-1;const o=n[0].slice(0,i);i=o.lastIndexOf(","),i!==-1&&(c=o.length-i-1)}const g=[];for(let o=a[0];o;){const m=o.length-p;g.push(m>0?o.slice(Math.max(0,m)):o),o=m>0?o.slice(0,m):"",c&&(p=c,c=void 0)}return a[0]=g.reverse().join(t.group||","),a.join(t.decimal||".")}function y(e){const r=S((e=e||{}).locale),t=e.pattern||r.pattern,n=r.group,l=r.decimal;let s=1;if(t.includes("%"))s/=100;else if(t.includes("‰"))s/=1e3;else if(t.includes("¤"))throw new Error("currency notation not supported");const a=t.split(";");return a.length===1&&a.push("-"+a[0]),{regexp:h(a,u=>(u="(?:"+w(u,".")+")").replace(N,f=>{const p={signed:!1,separator:e.strict?n:[n,""],fractional:e.fractional,decimal:l,exponent:!1},c=f.split(".");let i=e.places;c.length===1&&s!==1&&(c[1]="###"),c.length===1||i===0?p.fractional=!1:(i===void 0&&(i=e.pattern?c[1].lastIndexOf("0")+1:1/0),i&&e.fractional==null&&(p.fractional=!0),!e.places&&+i<c[1].length&&(i+=","+c[1].length),p.places=i);const g=c[0].split(",");return g.length>1&&(p.groupSize=g.pop().length,g.length>1&&(p.groupSize2=g.pop().length)),"("+O(p)+")"}),!0).replaceAll(/[\xa0 ]/g,"[\\s\\xa0]"),group:n,decimal:l,factor:s}}function A(e,r){const t=y(r),n=new RegExp("^"+t.regexp+"$").exec(e);if(!n)return NaN;let l=n[1];if(!n[1]){if(!n[2])return NaN;l=n[2],t.factor*=-1}return l=l.replaceAll(new RegExp("["+t.group+"\\s\\xa0]","g"),"").replace(t.decimal,"."),Number(l)*t.factor}function O(e){"places"in(e=e||{})||(e.places=1/0),typeof e.decimal!="string"&&(e.decimal="."),"fractional"in e&&!String(e.places).startsWith("0")||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);const r=b(e),t=h(e.fractional,l=>{let s="";return l&&e.places!==0&&(s="\\"+e.decimal,e.places===1/0?s="(?:"+s+"\\d+)?":s+="\\d{"+e.places+"}"),s},!0);let n=r+t;return t&&(n="(?:(?:"+n+")|(?:"+t+"))"),n+h(e.exponent,l=>l?"([eE]"+b({signed:e.eSigned})+")":"")}function b(e){return"signed"in(e=e||{})||(e.signed=[!0,!1]),"separator"in e?"groupSize"in e||(e.groupSize=3):e.separator="",h(e.signed,r=>r?"[-+]":"",!0)+h(e.separator,r=>{if(!r)return"(?:\\d+)";(r=w(r))===" "?r="\\s":r===" "&&(r="\\s\\xa0");const t=e.groupSize,n=e.groupSize2;if(n){const l="(?:0|[1-9]\\d{0,"+(n-1)+"}(?:["+r+"]\\d{"+n+"})*["+r+"]\\d{"+t+"})";return t-n>0?"(?:"+l+"|(?:0|[1-9]\\d{0,"+(t-1)+"}))":l}return"(?:0|[1-9]\\d{0,"+(t-1)+"}(?:["+r+"]\\d{"+t+"})*)"},!0)}const h=(e,r,t)=>{if(!Array.isArray(e))return r(e);const n=[];for(let l=0;l<e.length;l++)n.push(r(e[l]));return M(n.join("|"),!!t)},M=(e,r)=>"("+(r?"?:":"")+e+")";export{y as c,k as l,A as p};
//# sourceMappingURL=number-Cw9TzHKr.js.map
