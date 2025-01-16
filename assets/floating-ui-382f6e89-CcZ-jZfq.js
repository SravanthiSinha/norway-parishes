import{D as xt,i as Mt}from"./index-BfLS464G.js";import{g as qt}from"./dom-b6dedd88-O1nYpK45.js";import{d as Gt}from"./debounce-6e4946fd-CA9eFM3j.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const kt=["top","right","bottom","left"],vt=["start","end"],bt=kt.reduce((t,e)=>t.concat(e,e+"-"+vt[0],e+"-"+vt[1]),[]),X=Math.min,U=Math.max,et=Math.round,tt=Math.floor,V=t=>({x:t,y:t}),Kt={left:"right",right:"left",bottom:"top",top:"bottom"},Jt={start:"end",end:"start"};function mt(t,e,n){return U(t,X(e,n))}function j(t,e){return typeof t=="function"?t(e):t}function W(t){return t.split("-")[0]}function B(t){return t.split("-")[1]}function Bt(t){return t==="x"?"y":"x"}function pt(t){return t==="y"?"height":"width"}function st(t){return["top","bottom"].includes(W(t))?"y":"x"}function ht(t){return Bt(st(t))}function Nt(t,e,n){n===void 0&&(n=!1);const o=B(t),i=ht(t),s=pt(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=ot(r)),[r,ot(r)]}function Qt(t){const e=ot(t);return[nt(t),e,nt(e)]}function nt(t){return t.replace(/start|end/g,e=>Jt[e])}function Zt(t,e,n){const o=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?s:r;default:return[]}}function te(t,e,n,o){const i=B(t);let s=Zt(W(t),n==="start",o);return i&&(s=s.map(r=>r+"-"+i),e&&(s=s.concat(s.map(nt)))),s}function ot(t){return t.replace(/left|right|bottom|top/g,e=>Kt[e])}function ee(t){return{top:0,right:0,bottom:0,left:0,...t}}function $t(t){return typeof t!="number"?ee(t):{top:t,right:t,bottom:t,left:t}}function it(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function Ot(t,e,n){let{reference:o,floating:i}=t;const s=st(e),r=ht(e),c=pt(r),l=W(e),a=s==="y",d=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,g=o[c]/2-i[c]/2;let f;switch(l){case"top":f={x:d,y:o.y-i.height};break;case"bottom":f={x:d,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:u};break;case"left":f={x:o.x-i.width,y:u};break;default:f={x:o.x,y:o.y}}switch(B(e)){case"start":f[r]-=g*(n&&a?-1:1);break;case"end":f[r]+=g*(n&&a?-1:1);break}return f}const ne=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,c=s.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(e));let a=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:u}=Ot(a,o,l),g=o,f={},m=0;for(let p=0;p<c.length;p++){const{name:w,fn:h}=c[p],{x:y,y:x,data:b,reset:v}=await h({x:d,y:u,initialPlacement:o,placement:g,strategy:i,middlewareData:f,rects:a,platform:r,elements:{reference:t,floating:e}});d=y??d,u=x??u,f={...f,[w]:{...f[w],...b}},v&&m<=50&&(m++,typeof v=="object"&&(v.placement&&(g=v.placement),v.rects&&(a=v.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):v.rects),{x:d,y:u}=Ot(a,g,l)),p=-1)}return{x:d,y:u,placement:g,strategy:i,middlewareData:f}};async function K(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:r,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:g=!1,padding:f=0}=j(e,t),m=$t(f),w=c[g?u==="floating"?"reference":"floating":u],h=it(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(w)))==null||n?w:w.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:a,rootBoundary:d,strategy:l})),y=u==="floating"?{x:o,y:i,width:r.floating.width,height:r.floating.height}:r.reference,x=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),b=await(s.isElement==null?void 0:s.isElement(x))?await(s.getScale==null?void 0:s.getScale(x))||{x:1,y:1}:{x:1,y:1},v=it(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:y,offsetParent:x,strategy:l}):y);return{top:(h.top-v.top+m.top)/b.y,bottom:(v.bottom-h.bottom+m.bottom)/b.y,left:(h.left-v.left+m.left)/b.x,right:(v.right-h.right+m.right)/b.x}}const oe=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:s,platform:r,elements:c,middlewareData:l}=e,{element:a,padding:d=0}=j(t,e)||{};if(a==null)return{};const u=$t(d),g={x:n,y:o},f=ht(i),m=pt(f),p=await r.getDimensions(a),w=f==="y",h=w?"top":"left",y=w?"bottom":"right",x=w?"clientHeight":"clientWidth",b=s.reference[m]+s.reference[f]-g[f]-s.floating[m],v=g[f]-s.reference[f],O=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a));let R=O?O[x]:0;(!R||!await(r.isElement==null?void 0:r.isElement(O)))&&(R=c.floating[x]||s.floating[m]);const C=b/2-v/2,L=R/2-p[m]/2-1,A=X(u[h],L),S=X(u[y],L),P=A,I=R-p[m]-S,T=R/2-p[m]/2+C,M=mt(P,T,I),k=!l.arrow&&B(i)!=null&&T!==M&&s.reference[m]/2-(T<P?A:S)-p[m]/2<0,$=k?T<P?T-P:T-I:0;return{[f]:g[f]+$,data:{[f]:M,centerOffset:T-M-$,...k&&{alignmentOffset:$}},reset:k}}});function ie(t,e,n){return(t?[...n.filter(i=>B(i)===t),...n.filter(i=>B(i)!==t)]:n.filter(i=>W(i)===i)).filter(i=>t?B(i)===t||(e?nt(i)!==i:!1):!0)}const re=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i;const{rects:s,middlewareData:r,placement:c,platform:l,elements:a}=e,{crossAxis:d=!1,alignment:u,allowedPlacements:g=bt,autoAlignment:f=!0,...m}=j(t,e),p=u!==void 0||g===bt?ie(u||null,f,g):g,w=await K(e,m),h=((n=r.autoPlacement)==null?void 0:n.index)||0,y=p[h];if(y==null)return{};const x=Nt(y,s,await(l.isRTL==null?void 0:l.isRTL(a.floating)));if(c!==y)return{reset:{placement:p[0]}};const b=[w[W(y)],w[x[0]],w[x[1]]],v=[...((o=r.autoPlacement)==null?void 0:o.overflows)||[],{placement:y,overflows:b}],O=p[h+1];if(O)return{data:{index:h+1,overflows:v},reset:{placement:O}};const R=v.map(A=>{const S=B(A.placement);return[A.placement,S&&d?A.overflows.slice(0,2).reduce((P,I)=>P+I,0):A.overflows[0],A.overflows]}).sort((A,S)=>A[1]-S[1]),L=((i=R.filter(A=>A[2].slice(0,B(A[0])?2:3).every(S=>S<=0))[0])==null?void 0:i[0])||R[0][0];return L!==c?{data:{index:h+1,overflows:v},reset:{placement:L}}:{}}}},se=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:s,rects:r,initialPlacement:c,platform:l,elements:a}=e,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:g,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:p=!0,...w}=j(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const h=W(i),y=W(c)===c,x=await(l.isRTL==null?void 0:l.isRTL(a.floating)),b=g||(y||!p?[ot(c)]:Qt(c));!g&&m!=="none"&&b.push(...te(c,p,m,x));const v=[c,...b],O=await K(e,w),R=[];let C=((o=s.flip)==null?void 0:o.overflows)||[];if(d&&R.push(O[h]),u){const P=Nt(i,r,x);R.push(O[P[0]],O[P[1]])}if(C=[...C,{placement:i,overflows:R}],!R.every(P=>P<=0)){var L,A;const P=(((L=s.flip)==null?void 0:L.index)||0)+1,I=v[P];if(I)return{data:{index:P,overflows:C},reset:{placement:I}};let T=(A=C.filter(M=>M.overflows[0]<=0).sort((M,k)=>M.overflows[1]-k.overflows[1])[0])==null?void 0:A.placement;if(!T)switch(f){case"bestFit":{var S;const M=(S=C.map(k=>[k.placement,k.overflows.filter($=>$>0).reduce(($,Xt)=>$+Xt,0)]).sort((k,$)=>k[1]-$[1])[0])==null?void 0:S[0];M&&(T=M);break}case"initialPlacement":T=c;break}if(i!==T)return{reset:{placement:T}}}return{}}}};function At(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Rt(t){return kt.some(e=>t[e]>=0)}const ce=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=j(t,e);switch(o){case"referenceHidden":{const s=await K(e,{...i,elementContext:"reference"}),r=At(s,n.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:Rt(r)}}}case"escaped":{const s=await K(e,{...i,altBoundary:!0}),r=At(s,n.floating);return{data:{escapedOffsets:r,escaped:Rt(r)}}}default:return{}}}}};async function le(t,e){const{placement:n,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=W(n),c=B(n),l=st(n)==="y",a=["left","top"].includes(r)?-1:1,d=s&&l?-1:1,u=j(e,t);let{mainAxis:g,crossAxis:f,alignmentAxis:m}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return c&&typeof m=="number"&&(f=c==="end"?m*-1:m),l?{x:f*d,y:g*a}:{x:g*a,y:f*d}}const ae=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:s,placement:r,middlewareData:c}=e,l=await le(e,t);return r===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:i+l.x,y:s+l.y,data:{...l,placement:r}}}}},fe=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:c={fn:w=>{let{x:h,y}=w;return{x:h,y}}},...l}=j(t,e),a={x:n,y:o},d=await K(e,l),u=st(W(i)),g=Bt(u);let f=a[g],m=a[u];if(s){const w=g==="y"?"top":"left",h=g==="y"?"bottom":"right",y=f+d[w],x=f-d[h];f=mt(y,f,x)}if(r){const w=u==="y"?"top":"left",h=u==="y"?"bottom":"right",y=m+d[w],x=m-d[h];m=mt(y,m,x)}const p=c.fn({...e,[g]:f,[u]:m});return{...p,data:{x:p.x-n,y:p.y-o}}}}};function ct(){return typeof window<"u"}function G(t){return Wt(t)?(t.nodeName||"").toLowerCase():"#document"}function E(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function H(t){var e;return(e=(Wt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Wt(t){return ct()?t instanceof Node||t instanceof E(t).Node:!1}function D(t){return ct()?t instanceof Element||t instanceof E(t).Element:!1}function N(t){return ct()?t instanceof HTMLElement||t instanceof E(t).HTMLElement:!1}function Pt(t){return!ct()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof E(t).ShadowRoot}function Z(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=F(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function ue(t){return["table","td","th"].includes(G(t))}function lt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function at(t){const e=wt(),n=D(t)?F(t):t;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function de(t){let e=_(t);for(;N(e)&&!q(e);){if(at(e))return e;if(lt(e))return null;e=_(e)}return null}function wt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function q(t){return["html","body","#document"].includes(G(t))}function F(t){return E(t).getComputedStyle(t)}function ft(t){return D(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function _(t){if(G(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Pt(t)&&t.host||H(t);return Pt(e)?e.host:e}function Ht(t){const e=_(t);return q(e)?t.ownerDocument?t.ownerDocument.body:t.body:N(e)&&Z(e)?e:Ht(e)}function J(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Ht(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),r=E(i);if(s){const c=me(r);return e.concat(r,r.visualViewport||[],Z(i)?i:[],c&&n?J(c):[])}return e.concat(i,J(i,[],n))}function me(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Vt(t){const e=F(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=N(t),s=i?t.offsetWidth:n,r=i?t.offsetHeight:o,c=et(n)!==s||et(o)!==r;return c&&(n=s,o=r),{width:n,height:o,$:c}}function yt(t){return D(t)?t:t.contextElement}function Y(t){const e=yt(t);if(!N(e))return V(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=Vt(e);let r=(s?et(n.width):n.width)/o,c=(s?et(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!c||!Number.isFinite(c))&&(c=1),{x:r,y:c}}const ge=V(0);function _t(t){const e=E(t);return!wt()||!e.visualViewport?ge:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function pe(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==E(t)?!1:e}function z(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=yt(t);let r=V(1);e&&(o?D(o)&&(r=Y(o)):r=Y(t));const c=pe(s,n,o)?_t(s):V(0);let l=(i.left+c.x)/r.x,a=(i.top+c.y)/r.y,d=i.width/r.x,u=i.height/r.y;if(s){const g=E(s),f=o&&D(o)?E(o):o;let m=g,p=m.frameElement;for(;p&&o&&f!==m;){const w=Y(p),h=p.getBoundingClientRect(),y=F(p),x=h.left+(p.clientLeft+parseFloat(y.paddingLeft))*w.x,b=h.top+(p.clientTop+parseFloat(y.paddingTop))*w.y;l*=w.x,a*=w.y,d*=w.x,u*=w.y,l+=x,a+=b,m=E(p),p=m.frameElement}}return it({width:d,height:u,x:l,y:a})}function he(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const s=i==="fixed",r=H(o),c=e?lt(e.floating):!1;if(o===r||c&&s)return n;let l={scrollLeft:0,scrollTop:0},a=V(1);const d=V(0),u=N(o);if((u||!u&&!s)&&((G(o)!=="body"||Z(r))&&(l=ft(o)),N(o))){const g=z(o);a=Y(o),d.x=g.x+o.clientLeft,d.y=g.y+o.clientTop}return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-l.scrollLeft*a.x+d.x,y:n.y*a.y-l.scrollTop*a.y+d.y}}function we(t){return Array.from(t.getClientRects())}function It(t){return z(H(t)).left+ft(t).scrollLeft}function ye(t){const e=H(t),n=ft(t),o=t.ownerDocument.body,i=U(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=U(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+It(t);const c=-n.scrollTop;return F(o).direction==="rtl"&&(r+=U(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:c}}function xe(t,e){const n=E(t),o=H(t),i=n.visualViewport;let s=o.clientWidth,r=o.clientHeight,c=0,l=0;if(i){s=i.width,r=i.height;const a=wt();(!a||a&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:s,height:r,x:c,y:l}}function ve(t,e){const n=z(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=N(t)?Y(t):V(1),r=t.clientWidth*s.x,c=t.clientHeight*s.y,l=i*s.x,a=o*s.y;return{width:r,height:c,x:l,y:a}}function Ct(t,e,n){let o;if(e==="viewport")o=xe(t,n);else if(e==="document")o=ye(H(t));else if(D(e))o=ve(e,n);else{const i=_t(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return it(o)}function Ut(t,e){const n=_(t);return n===e||!D(n)||q(n)?!1:F(n).position==="fixed"||Ut(n,e)}function be(t,e){const n=e.get(t);if(n)return n;let o=J(t,[],!1).filter(c=>D(c)&&G(c)!=="body"),i=null;const s=F(t).position==="fixed";let r=s?_(t):t;for(;D(r)&&!q(r);){const c=F(r),l=at(r);!l&&c.position==="fixed"&&(i=null),(s?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Z(r)&&!l&&Ut(t,r))?o=o.filter(d=>d!==r):i=c,r=_(r)}return e.set(t,o),o}function Oe(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[...n==="clippingAncestors"?lt(e)?[]:be(e,this._c):[].concat(n),o],c=r[0],l=r.reduce((a,d)=>{const u=Ct(e,d,i);return a.top=U(u.top,a.top),a.right=X(u.right,a.right),a.bottom=X(u.bottom,a.bottom),a.left=U(u.left,a.left),a},Ct(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Ae(t){const{width:e,height:n}=Vt(t);return{width:e,height:n}}function Re(t,e,n){const o=N(e),i=H(e),s=n==="fixed",r=z(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const l=V(0);if(o||!o&&!s)if((G(e)!=="body"||Z(i))&&(c=ft(e)),o){const u=z(e,!0,s,e);l.x=u.x+e.clientLeft,l.y=u.y+e.clientTop}else i&&(l.x=It(i));const a=r.left+c.scrollLeft-l.x,d=r.top+c.scrollTop-l.y;return{x:a,y:d,width:r.width,height:r.height}}function ut(t){return F(t).position==="static"}function St(t,e){return!N(t)||F(t).position==="fixed"?null:e?e(t):t.offsetParent}function zt(t,e){const n=E(t);if(lt(t))return n;if(!N(t)){let i=_(t);for(;i&&!q(i);){if(D(i)&&!ut(i))return i;i=_(i)}return n}let o=St(t,e);for(;o&&ue(o)&&ut(o);)o=St(o,e);return o&&q(o)&&ut(o)&&!at(o)?n:o||de(t)||n}const Pe=async function(t){const e=this.getOffsetParent||zt,n=this.getDimensions,o=await n(t.floating);return{reference:Re(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Ce(t){return F(t).direction==="rtl"}const gt={convertOffsetParentRelativeRectToViewportRelativeRect:he,getDocumentElement:H,getClippingRect:Oe,getOffsetParent:zt,getElementRects:Pe,getClientRects:we,getDimensions:Ae,getScale:Y,isElement:D,isRTL:Ce};function Se(t,e){let n=null,o;const i=H(t);function s(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function r(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),s();const{left:a,top:d,width:u,height:g}=t.getBoundingClientRect();if(c||e(),!u||!g)return;const f=tt(d),m=tt(i.clientWidth-(a+u)),p=tt(i.clientHeight-(d+g)),w=tt(a),y={rootMargin:-f+"px "+-m+"px "+-p+"px "+-w+"px",threshold:U(0,X(1,l))||1};let x=!0;function b(v){const O=v[0].intersectionRatio;if(O!==l){if(!x)return r();O?r(!1,O):o=setTimeout(()=>{r(!1,1e-7)},1e3)}x=!1}try{n=new IntersectionObserver(b,{...y,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,y)}n.observe(t)}return r(!0),s}function Te(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,a=yt(t),d=i||s?[...a?J(a):[],...J(e)]:[];d.forEach(h=>{i&&h.addEventListener("scroll",n,{passive:!0}),s&&h.addEventListener("resize",n)});const u=a&&c?Se(a,n):null;let g=-1,f=null;r&&(f=new ResizeObserver(h=>{let[y]=h;y&&y.target===a&&f&&(f.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var x;(x=f)==null||x.observe(e)})),n()}),a&&!l&&f.observe(a),f.observe(e));let m,p=l?z(t):null;l&&w();function w(){const h=z(t);p&&(h.x!==p.x||h.y!==p.y||h.width!==p.width||h.height!==p.height)&&n(),p=h,m=requestAnimationFrame(w)}return n(),()=>{var h;d.forEach(y=>{i&&y.removeEventListener("scroll",n),s&&y.removeEventListener("resize",n)}),u==null||u(),(h=f)==null||h.disconnect(),f=null,l&&cancelAnimationFrame(m)}}const Ee=ae,Le=re,De=fe,Tt=se,Fe=ce,Me=oe,ke=(t,e,n)=>{const o=new Map,i={platform:gt,...n},s={...i.platform,_c:o};return ne(t,e,{...i,platform:s})};function Be(t){return Ne(t)}function dt(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function Ne(t){for(let e=t;e;e=dt(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=dt(t);e;e=dt(e)){if(!(e instanceof Element))continue;const n=getComputedStyle(e);if(n.display!=="contents"&&(n.position!=="static"||at(n)||e.tagName==="BODY"))return e}return null}(function(){if(Mt()){const e=gt.getOffsetParent;gt.getOffsetParent=n=>e(n,Be)}})();function Et(t){const e=window.devicePixelRatio||1;return Math.round(t*e)/e}const jt=async(t,{referenceEl:e,floatingEl:n,overlayPositioning:o="absolute",placement:i,flipDisabled:s,flipPlacements:r,offsetDistance:c,offsetSkidding:l,arrowEl:a,type:d})=>{var v;if(!e||!n)return null;const u=qt(n)==="rtl",{x:g,y:f,placement:m,strategy:p,middlewareData:w}=await ke(e,n,{strategy:o,placement:i==="auto"||i==="auto-start"||i==="auto-end"?void 0:Dt(i,u),middleware:We({placement:i,flipDisabled:s,flipPlacements:r==null?void 0:r.map(O=>Dt(O,u)),offsetDistance:c,offsetSkidding:l,arrowEl:a,type:d})});if(a&&w.arrow){const{x:O,y:R}=w.arrow,C=m.split("-")[0],L=O!=null?"left":"top",A=Ve[C],S={left:"",top:"",bottom:"",right:""};"floatingLayout"in t&&(t.floatingLayout=C==="left"||C==="right"?"horizontal":"vertical"),Object.assign(a.style,{...S,[L]:`${L=="left"?O:R}px`,[C]:"100%",transform:A})}const y=((v=w.hide)==null?void 0:v.referenceHidden)?"hidden":null,x=y?"none":null;n.setAttribute($e,m);const{open:b}=t;Object.assign(n.style,{visibility:y,pointerEvents:x,position:p,transform:b?`translate(${Et(g)}px,${Et(f)}px)`:"",top:0,left:0})},$e="data-placement",Lt=["top","bottom","right","left","top-start","top-end","bottom-start","bottom-end","right-start","right-end","left-start","left-end","leading","trailing","leading-start","leading-end","trailing-start","trailing-end"],je="bottom-start",Ye="bottom-end",Xe={animation:"calcite-floating-ui-anim",animationActive:"calcite-floating-ui-anim--active",arrow:"calcite-floating-ui-arrow",arrowStroke:"calcite-floating-ui-arrow__stroke"};function We({placement:t,flipDisabled:e,flipPlacements:n,offsetDistance:o,offsetSkidding:i,arrowEl:s,type:r}){const c=[De(),Fe()];if(r==="menu")return[...c,Tt({fallbackPlacements:n||["top-start","top","top-end","bottom-start","bottom","bottom-end"]})];if(r==="popover"||r==="tooltip"){const l=[...c,Ee({mainAxis:typeof o=="number"?o:0,crossAxis:typeof i=="number"?i:0})];return t==="auto"||t==="auto-start"||t==="auto-end"?l.push(Le({alignment:t==="auto-start"?"start":t==="auto-end"?"end":null})):e||l.push(Tt(n?{fallbackPlacements:n}:{})),s&&l.push(Me({element:s})),l}return[]}function qe(t,e){const n=t.filter(o=>Lt.includes(o));return n.length!==t.length&&console.warn(`${e.tagName}: Invalid value found in: flipPlacements. Try any of these: ${Lt.map(o=>`"${o}"`).join(", ").trim()}`,{el:e}),n}function Dt(t,e=!1){const n=["left","right"];return e&&n.reverse(),t.replace(/leading/gi,n[0]).replace(/trailing/gi,n[1])}async function Ge(t,e,n=!1){if(!t.open||!e.floatingEl||!e.referenceEl)return;if(!Q.get(t))return Yt(t,e.referenceEl,e.floatingEl);await(n?He(t):jt)(t,e)}function He(t){let e=rt.get(t);return e||(e=Gt(jt,xt.reposition,{leading:!0,maxWait:xt.reposition}),rt.set(t,e),e)}const Ve={top:"",left:"rotate(-90deg)",bottom:"rotate(180deg)",right:"rotate(90deg)"},Q=new WeakMap,rt=new WeakMap;async function Yt(t,e,n){if(!n.isConnected)return;const o=Mt()?Te:(r,c,l)=>(l(),()=>{});Q.set(t,{state:"pending"});let i;const s=o(e,n,()=>{const r=t.reposition();i||(i=r)});return Q.set(t,{state:"active",cleanUp:s}),i}async function Ke(t,e,n){if(!(!n||!e)&&(_e(t,e,n),Object.assign(n.style,{visibility:"hidden",pointerEvents:"none",position:t.overlayPositioning}),!!t.open))return Yt(t,e,n)}function _e(t,e,n){var i;if(!n||!e)return;const o=Q.get(t);(o==null?void 0:o.state)==="active"&&o.cleanUp(),Q.delete(t),(i=rt.get(t))==null||i.cancel(),rt.delete(t)}const Ft=4,Je=Math.ceil(Math.hypot(Ft,Ft));export{Xe as F,_e as a,Ye as b,Ke as c,je as d,Je as e,qe as f,Ge as r};
//# sourceMappingURL=floating-ui-382f6e89-CcZ-jZfq.js.map
