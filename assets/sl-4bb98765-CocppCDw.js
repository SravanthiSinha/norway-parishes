import{d as s}from"./calcite-input-time-picker_2.entry-50TCHyu-.js";import"./index-5zHX_dwk.js";import"./locale-60f8ca58-CFp0CNJB.js";import"./form-8ec29459-7TMKc2ew.js";import"./dom-b6dedd88-CjM0FhoI.js";import"./guid-9c230b6a-BxSjQh8J.js";import"./interactive-1a42577a-CxwoLeAc.js";import"./key-3ee05994-D63ExP77.js";import"./label-043ae25a-C65XIviO.js";import"./component-5f0a8be8-6CIDVndn.js";import"./loadable-13e9ffb2-BI75l_jZ.js";import"./focusTrapComponent-7cfd1d69-C-xInxOH.js";import"./math-682795d0-CPc4dlb6.js";import"./t9n-75defee3-C-za1nk1.js";import"./Validation-c59cb4eb-C_9xPMjM.js";import"./input-871f5b21-j1u1wOBY.js";import"./observers-9c166451-DBztx5Yi.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */function _(a){return a%100==2}function o(a){return a%100==3||a%100==4}function m(a,e,t,r){var n=a+" ";switch(t){case"s":return e||r?"nekaj sekund":"nekaj sekundami";case"m":return e?"ena minuta":"eno minuto";case"mm":return _(a)?n+(e||r?"minuti":"minutama"):o(a)?n+(e||r?"minute":"minutami"):n+(e||r?"minut":"minutami");case"h":return e?"ena ura":"eno uro";case"hh":return _(a)?n+(e||r?"uri":"urama"):o(a)?n+(e||r?"ure":"urami"):n+(e||r?"ur":"urami");case"d":return e||r?"en dan":"enim dnem";case"dd":return _(a)?n+(e||r?"dneva":"dnevoma"):n+(e||r?"dni":"dnevi");case"M":return e||r?"en mesec":"enim mesecem";case"MM":return _(a)?n+(e||r?"meseca":"mesecema"):o(a)?n+(e||r?"mesece":"meseci"):n+(e||r?"mesecev":"meseci");case"y":return e||r?"eno leto":"enim letom";case"yy":return _(a)?n+(e||r?"leti":"letoma"):o(a)?n+(e||r?"leta":"leti"):n+(e||r?"let":"leti")}}var p={name:"sl",weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),weekStart:1,weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"čez %s",past:"pred %s",s:m,m,mm:m,h:m,hh:m,d:m,dd:m,M:m,MM:m,y:m,yy:m}};s.locale(p,null,!0);export{p as default};
//# sourceMappingURL=sl-4bb98765-CocppCDw.js.map
