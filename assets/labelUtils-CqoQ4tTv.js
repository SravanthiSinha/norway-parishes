import{aj as u}from"./index-Du44_A8J.js";const s="__begin__",t="__end__",c=new RegExp(s,"ig"),p=new RegExp(t,"ig"),l=new RegExp("^"+s,"i"),o=new RegExp(t+"$","i"),r='"',x=r+" + ",f=" + "+r;function g(n){return n.replaceAll(new RegExp("\\[","g"),"{").replaceAll(new RegExp("\\]","g"),"}")}function y(n){return n.replaceAll(new RegExp("\\{","g"),"[").replaceAll(new RegExp("\\}","g"),"]")}function i(n){const e={expression:"",type:"none"};return n.labelExpressionInfo?n.labelExpressionInfo.value?(e.expression=n.labelExpressionInfo.value,e.type="conventional"):n.labelExpressionInfo.expression&&(e.expression=n.labelExpressionInfo.expression,e.type="arcade"):n.labelExpression!=null&&(e.expression=g(n.labelExpression),e.type="conventional"),e}function A(n){const e=i(n);if(!e)return null;switch(e.type){case"conventional":return E(e.expression);case"arcade":return e.expression}return null}function I(n){const e=i(n);if(!e)return null;switch(e.type){case"conventional":return w(e.expression);case"arcade":return _(e.expression)}return null}function E(n){let e;return n?(e=u(n,a=>s+'$feature["'+a+'"]'+t),e=l.test(e)?e.replace(l,""):r+e,e=o.test(e)?e.replace(o,""):e+r,e=e.replaceAll(c,x).replaceAll(p,f)):e='""',e}const $=/^\s*\{([^}]+)\}\s*$/i;function w(n){const e=n==null?void 0:n.match($);return(e==null?void 0:e[1].trim())||null}const b=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])(.+)(\2)\]));?\s*$/i,m=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])(.+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,R=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(.+)(\1)\s*\));?\s*$/i;function _(n){if(!n)return null;let e=b.exec(n)||m.exec(n);return e?e[1]||e[3]:(e=R.exec(n),e?e[2]:null)}export{E,_,A as f,I as g,g as p,y as u,i as x};
//# sourceMappingURL=labelUtils-CqoQ4tTv.js.map
