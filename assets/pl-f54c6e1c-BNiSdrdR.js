import{d as s}from"./calcite-input-time-picker_2.entry--2NrOtaF.js";import"./index-BvuY3ppR.js";import"./locale-60f8ca58-CgRqPoDz.js";import"./form-8ec29459-CcVv7H4l.js";import"./dom-b6dedd88-SWkUsYhR.js";import"./guid-9c230b6a-BxSjQh8J.js";import"./interactive-1a42577a-CyFxETUd.js";import"./key-3ee05994-D63ExP77.js";import"./label-043ae25a-DVxlb3px.js";import"./component-5f0a8be8-6CIDVndn.js";import"./loadable-13e9ffb2-vyCmMp9r.js";import"./focusTrapComponent-7cfd1d69-DrU33ufA.js";import"./math-682795d0-CPc4dlb6.js";import"./t9n-75defee3-o7BPJQew.js";import"./Validation-c59cb4eb-KHj3P36U.js";import"./input-871f5b21-j1u1wOBY.js";import"./observers-9c166451-Dv68UhiS.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */function a(t){return t%10<5&&t%10>1&&~~(t/10)%10!==1}function r(t,i,_){var e=t+" ";switch(_){case"m":return i?"minuta":"minutę";case"mm":return e+(a(t)?"minuty":"minut");case"h":return i?"godzina":"godzinę";case"hh":return e+(a(t)?"godziny":"godzin");case"MM":return e+(a(t)?"miesiące":"miesięcy");case"yy":return e+(a(t)?"lata":"lat")}}var m="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),n="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),p=/D MMMM/,o=function(i,_){return p.test(_)?m[i.month()]:n[i.month()]};o.s=n;o.f=m;var l={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:o,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(i){return i+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:r,mm:r,h:r,hh:r,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:r,y:"rok",yy:r},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};s.locale(l,null,!0);export{l as default};
//# sourceMappingURL=pl-f54c6e1c-BNiSdrdR.js.map
