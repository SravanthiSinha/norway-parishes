import{d as M}from"./calcite-input-time-picker_2.entry-B-t74nCm.js";import"./index-CyZqSx7I.js";import"./locale-60f8ca58-BZb7UF3k.js";import"./form-8ec29459-DDbl1X2-.js";import"./dom-b6dedd88-lXcN1LJK.js";import"./guid-9c230b6a-BxSjQh8J.js";import"./interactive-1a42577a-B5mJYQkX.js";import"./key-3ee05994-D63ExP77.js";import"./label-043ae25a-B2CTWzGS.js";import"./component-5f0a8be8-6CIDVndn.js";import"./loadable-13e9ffb2-CNielhY5.js";import"./focusTrapComponent-7cfd1d69-BA3YGbOq.js";import"./math-682795d0-CPc4dlb6.js";import"./t9n-75defee3-DCHx0k8-.js";import"./Validation-c59cb4eb-D3N1L_XM.js";import"./input-871f5b21-j1u1wOBY.js";import"./observers-9c166451-DjNhmij5.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */var e="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),n="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),a="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),s="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),p=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function h(r,_){var t=r.split("_");return _%10===1&&_%100!==11?t[0]:_%10>=2&&_%10<=4&&(_%100<10||_%100>=20)?t[1]:t[2]}function o(r,_,t){var l={mm:_?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"};return t==="m"?_?"минута":"минуту":r+" "+h(l[t],+r)}var m=function(_,t){return p.test(t)?e[_.month()]:n[_.month()]};m.s=n;m.f=e;var i=function(_,t){return p.test(t)?a[_.month()]:s[_.month()]};i.s=s;i.f=a;var d={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:m,monthsShort:i,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:o,mm:o,h:"час",hh:o,d:"день",dd:o,M:"месяц",MM:o,y:"год",yy:o},ordinal:function(_){return _},meridiem:function(_){return _<4?"ночи":_<12?"утра":_<17?"дня":"вечера"}};M.locale(d,null,!0);export{d as default};
//# sourceMappingURL=ru-6235dc2b-Xsvxx9js.js.map
