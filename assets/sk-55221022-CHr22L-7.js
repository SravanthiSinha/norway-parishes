import{d as _}from"./calcite-input-time-picker_2.entry-50TCHyu-.js";import"./index-5zHX_dwk.js";import"./locale-60f8ca58-CFp0CNJB.js";import"./form-8ec29459-7TMKc2ew.js";import"./dom-b6dedd88-CjM0FhoI.js";import"./guid-9c230b6a-BxSjQh8J.js";import"./interactive-1a42577a-CxwoLeAc.js";import"./key-3ee05994-D63ExP77.js";import"./label-043ae25a-C65XIviO.js";import"./component-5f0a8be8-6CIDVndn.js";import"./loadable-13e9ffb2-BI75l_jZ.js";import"./focusTrapComponent-7cfd1d69-C-xInxOH.js";import"./math-682795d0-CPc4dlb6.js";import"./t9n-75defee3-C-za1nk1.js";import"./Validation-c59cb4eb-C_9xPMjM.js";import"./input-871f5b21-j1u1wOBY.js";import"./observers-9c166451-DBztx5Yi.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */function t(e){return e>1&&e<5&&~~(e/10)!==1}function a(e,r,n,m){var o=e+" ";switch(n){case"s":return r||m?"pár sekúnd":"pár sekundami";case"m":return r?"minúta":m?"minútu":"minútou";case"mm":return r||m?o+(t(e)?"minúty":"minút"):o+"minútami";case"h":return r?"hodina":m?"hodinu":"hodinou";case"hh":return r||m?o+(t(e)?"hodiny":"hodín"):o+"hodinami";case"d":return r||m?"deň":"dňom";case"dd":return r||m?o+(t(e)?"dni":"dní"):o+"dňami";case"M":return r||m?"mesiac":"mesiacom";case"MM":return r||m?o+(t(e)?"mesiace":"mesiacov"):o+"mesiacmi";case"y":return r||m?"rok":"rokom";case"yy":return r||m?o+(t(e)?"roky":"rokov"):o+"rokmi"}}var s={name:"sk",weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),months:"január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),monthsShort:"jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),weekStart:1,yearStart:4,ordinal:function(r){return r+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"pred %s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a}};_.locale(s,null,!0);export{s as default};
//# sourceMappingURL=sk-55221022-CHr22L-7.js.map
