import{d as n}from"./calcite-input-time-picker_2.entry--2NrOtaF.js";import"./index-BvuY3ppR.js";import"./locale-60f8ca58-CgRqPoDz.js";import"./form-8ec29459-CcVv7H4l.js";import"./dom-b6dedd88-SWkUsYhR.js";import"./guid-9c230b6a-BxSjQh8J.js";import"./interactive-1a42577a-CyFxETUd.js";import"./key-3ee05994-D63ExP77.js";import"./label-043ae25a-DVxlb3px.js";import"./component-5f0a8be8-6CIDVndn.js";import"./loadable-13e9ffb2-vyCmMp9r.js";import"./focusTrapComponent-7cfd1d69-DrU33ufA.js";import"./math-682795d0-CPc4dlb6.js";import"./t9n-75defee3-o7BPJQew.js";import"./Validation-c59cb4eb-KHj3P36U.js";import"./input-871f5b21-j1u1wOBY.js";import"./observers-9c166451-Dv68UhiS.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */var e={words:{m:["jedan minut","jednog minuta"],mm:["%d minut","%d minuta","%d minuta"],h:["jedan sat","jednog sata"],hh:["%d sat","%d sata","%d sati"],d:["jedan dan","jednog dana"],dd:["%d dan","%d dana","%d dana"],M:["jedan mesec","jednog meseca"],MM:["%d mesec","%d meseca","%d meseci"],y:["jednu godinu","jedne godine"],yy:["%d godinu","%d godine","%d godina"]},correctGrammarCase:function(r,t){return r%10>=1&&r%10<=4&&(r%100<10||r%100>=20)?r%10===1?t[0]:t[1]:t[2]},relativeTimeFormatter:function(r,t,a,d){var m=e.words[a];if(a.length===1)return a==="y"&&t?"jedna godina":d||t?m[0]:m[1];var o=e.correctGrammarCase(r,m);return a==="yy"&&t&&o==="%d godinu"?r+" godina":o.replace("%d",r)}},_={name:"sr",weekdays:"Nedelja_Ponedeljak_Utorak_Sreda_Četvrtak_Petak_Subota".split("_"),weekdaysShort:"Ned._Pon._Uto._Sre._Čet._Pet._Sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),months:"Januar_Februar_Mart_April_Maj_Jun_Jul_Avgust_Septembar_Oktobar_Novembar_Decembar".split("_"),monthsShort:"Jan._Feb._Mar._Apr._Maj_Jun_Jul_Avg._Sep._Okt._Nov._Dec.".split("_"),weekStart:1,relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",m:e.relativeTimeFormatter,mm:e.relativeTimeFormatter,h:e.relativeTimeFormatter,hh:e.relativeTimeFormatter,d:e.relativeTimeFormatter,dd:e.relativeTimeFormatter,M:e.relativeTimeFormatter,MM:e.relativeTimeFormatter,y:e.relativeTimeFormatter,yy:e.relativeTimeFormatter},ordinal:function(r){return r+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"D. M. YYYY.",LL:"D. MMMM YYYY.",LLL:"D. MMMM YYYY. H:mm",LLLL:"dddd, D. MMMM YYYY. H:mm"}};n.locale(_,null,!0);export{_ as default};
//# sourceMappingURL=sr-7095d964-CwkiExmR.js.map
