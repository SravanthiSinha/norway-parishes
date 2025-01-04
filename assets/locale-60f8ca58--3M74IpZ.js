import{m as D,n as I}from"./dom-b6dedd88-9CMuDstV.js";import{n as E}from"./key-3ee05994-D63ExP77.js";import{c as A}from"./observers-9c166451-BLVGRbsu.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const _=new RegExp("\\.(0+)?$"),T=new RegExp("0+$");class i{constructor(e){if(e instanceof i)return e;const[n,r]=H(e).split(".").concat("");this.value=BigInt(n+r.padEnd(i.DECIMALS,"0").slice(0,i.DECIMALS))+BigInt(i.ROUNDED&&r[i.DECIMALS]>="5"),this.isNegative=e.charAt(0)==="-"}getIntegersAndDecimals(){const e=this.value.toString().replace("-","").padStart(i.DECIMALS+1,"0"),n=e.slice(0,-i.DECIMALS),r=e.slice(-i.DECIMALS).replace(T,"");return{integers:n,decimals:r}}toString(){const{integers:e,decimals:n}=this.getIntegersAndDecimals();return`${this.isNegative?"-":""}${e}${n.length?"."+n:""}`}formatToParts(e){const{integers:n,decimals:r}=this.getIntegersAndDecimals(),s=e.numberFormatter.formatToParts(BigInt(n));return this.isNegative&&s.unshift({type:"minusSign",value:e.minusSign}),r.length&&(s.push({type:"decimal",value:e.decimal}),r.split("").forEach(a=>s.push({type:"fraction",value:a}))),s}format(e){const{integers:n,decimals:r}=this.getIntegersAndDecimals(),s=`${this.isNegative?e.minusSign:""}${e.numberFormatter.format(BigInt(n))}`,a=r.length?`${e.decimal}${r.split("").map(l=>e.numberFormatter.format(Number(l))).join("")}`:"";return`${s}${a}`}add(e){return i.fromBigInt(this.value+new i(e).value)}subtract(e){return i.fromBigInt(this.value-new i(e).value)}multiply(e){return i._divRound(this.value*new i(e).value,i.SHIFT)}divide(e){return i._divRound(this.value*i.SHIFT,new i(e).value)}}i.DECIMALS=100;i.ROUNDED=!0;i.SHIFT=BigInt("1"+"0".repeat(i.DECIMALS));i._divRound=(t,e)=>i.fromBigInt(t/e+(i.ROUNDED?t*BigInt(2)/e%BigInt(2):BigInt(0)));i.fromBigInt=t=>Object.assign(Object.create(i.prototype),{value:t,isNegative:t<BigInt(0)});function $(t){return!(!t||isNaN(Number(t)))}function V(t){return!t||!k(t)?"":f(t,e=>{let n=!1;const r=e.split("").filter((s,a)=>s.match(/\./g)&&!n?(n=!0,!0):s.match(/-/g)&&a===0?!0:E.includes(s)).join("");return $(r)?new i(r).toString():""})}const N=/^([-0])0+(?=\d)/,x=/(?!^\.)\.$/,R=/(?!^-)-/g,z=/^-\b0\b\.?0*$/,M=/0*$/,tt=t=>f(t,e=>{const n=e.replace(R,"").replace(x,"").replace(N,"$1");return $(n)?z.test(n)?n:j(n):e});function j(t){const e=t.split(".")[1],n=new i(t).toString(),[r,s]=n.split(".");return e&&s!==e?`${r}.${e}`:n}function f(t,e){if(!t)return t;const n=t.toLowerCase().indexOf("e")+1;return n?t.replace(/[eE]*$/g,"").substring(0,n).concat(t.slice(n).replace(/[eE]/g,"")).split(/[eE]/).map((r,s)=>e(s===1?r.replace(/\./g,""):r)).join("e").replace(/^e/,"1e"):e(t)}function H(t){const e=t.split(/[eE]/);if(e.length===1)return t;const n=+t;if(Number.isSafeInteger(n))return`${n}`;const r=t.charAt(0)==="-",s=+e[1],a=e[0].split("."),l=(r?a[0].substring(1):a[0])||"",S=a[1]||"",C=(c,o)=>{const m=Math.abs(o)-c.length,p=m>0?`${"0".repeat(m)}${c}`:c;return`${p.slice(0,o)}.${p.slice(o)}`},L=(c,o)=>{const m=o>c.length?`${c}${"0".repeat(o-c.length)}`:c;return`${m.slice(0,o)}.${m.slice(o)}`},v=s>0?`${l}${L(S,s)}`:`${C(l,s)}${S}`;return`${r?"-":""}${v.charAt(0)==="."?"0":""}${v.replace(_,"").replace(N,"")}`}function k(t){return E.some(e=>t.includes(e))}function et(t,e,n){const r=e.split(".")[1];if(r){const s=r.match(M)[0];if(s&&n.delocalize(t).length!==e.length&&r.indexOf("e")===-1){const a=n.decimal;return t=t.includes(a)?t:`${t}${a}`,t.padEnd(t.length+s.length,n.localize("0"))}}return t}const u="en",P=["ar","bg","bs","ca","cs","da","de","el",u,"es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","no","nl","pl","pt-BR","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],U=["ar","bg","bs","ca","cs","da","de","de-AT","de-CH","el",u,"en-AU","en-CA","en-GB","es","es-MX","et","fi","fr","fr-CH","he","hi","hr","hu","id","it","it-CH","ja","ko","lt","lv","mk","no","nl","pl","pt","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],Z=["arab","arabext","latn"],w=t=>Z.includes(t),b=new Intl.NumberFormat().resolvedOptions().numberingSystem,y=b==="arab"||!w(b)?"latn":b,G=t=>w(t)?t:y;function O(t,e="cldr"){const n=e==="cldr"?U:P;return t?n.includes(t)?t:(t=t.toLowerCase(),t==="nb"?"no":e==="t9n"&&t==="pt"?"pt-BR":(t.includes("-")&&(t=t.replace(/(\w+)-(\w+)/,(r,s,a)=>`${s}-${a.toUpperCase()}`),n.includes(t)||(t=t.split("-")[0])),t==="zh"?"zh-CN":n.includes(t)?t:(console.warn(`Translations for the "${t}" locale are not available and will fall back to the default, English (en).`),u))):u}function nt(t){switch(t){case"it-CH":return"de-CH";case"bs":return"bs-Cyrl";default:return t}}const h=new Set;function rt(t){K(t),h.size===0&&(d==null||d.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],subtree:!0})),h.add(t)}function K(t){t.effectiveLocale=B(t)}function st(t){h.delete(t),h.size===0&&d.disconnect()}const d=A("mutation",t=>{t.forEach(e=>{const n=e.target;h.forEach(r=>{if(!D(n,r.el))return;const a=I(r.el,"[lang]");if(!a){r.effectiveLocale=u;return}const l=a.lang;r.effectiveLocale=a.hasAttribute("lang")&&l===""?u:l})})});function B(t){var e;return t.el.lang||((e=I(t.el,"[lang]"))==null?void 0:e.lang)||document.documentElement.lang||u}class J{constructor(){this.delocalize=e=>this._numberFormatOptions?f(e,n=>n.replace(new RegExp(`[${this._minusSign}]`,"g"),"-").replace(new RegExp(`[${this._group}]`,"g"),"").replace(new RegExp(`[${this._decimal}]`,"g"),".").replace(new RegExp(`[${this._digits.join("")}]`,"g"),this._getDigitIndex)):e,this.localize=e=>this._numberFormatOptions?f(e,n=>$(n.trim())?new i(n.trim()).format(this).replace(new RegExp(`[${this._actualGroup}]`,"g"),this._group):n):e}get group(){return this._group}get decimal(){return this._decimal}get minusSign(){return this._minusSign}get digits(){return this._digits}get numberFormatter(){return this._numberFormatter}get numberFormatOptions(){return this._numberFormatOptions}set numberFormatOptions(e){if(e.locale=O(e==null?void 0:e.locale),e.numberingSystem=G(e==null?void 0:e.numberingSystem),!this._numberFormatOptions&&e.locale===u&&e.numberingSystem===y&&Object.keys(e).length===2||JSON.stringify(this._numberFormatOptions)===JSON.stringify(e))return;this._numberFormatOptions=e,this._numberFormatter=new Intl.NumberFormat(this._numberFormatOptions.locale,this._numberFormatOptions),this._digits=[...new Intl.NumberFormat(this._numberFormatOptions.locale,{useGrouping:!1,numberingSystem:this._numberFormatOptions.numberingSystem}).format(9876543210)].reverse();const n=new Map(this._digits.map((s,a)=>[s,a])),r=new Intl.NumberFormat(this._numberFormatOptions.locale,{numberingSystem:this._numberFormatOptions.numberingSystem}).formatToParts(-123456789e-1);this._actualGroup=r.find(s=>s.type==="group").value,this._group=this._actualGroup.trim().length===0||this._actualGroup==" "?" ":this._actualGroup,this._decimal=r.find(s=>s.type==="decimal").value,this._minusSign=r.find(s=>s.type==="minusSign").value,this._getDigitIndex=s=>n.get(s)}}const it=new J;let g,F;function W(t={}){return Object.entries(t).sort(([e],[n])=>e.localeCompare(n)).map(e=>`${e[0]}-${e[1]}`).flat().join(":")}function at(t,e){t=O(t),g||(g=new Map),F!==t&&(g.clear(),F=t);const n=W(e),r=g.get(n);if(r)return r;const s=new Intl.DateTimeFormat(t,e);return g.set(n,s),s}export{i as B,J as N,et as a,nt as b,rt as c,st as d,at as e,O as f,G as g,$ as i,it as n,V as p,tt as s};
//# sourceMappingURL=locale-60f8ca58--3M74IpZ.js.map
