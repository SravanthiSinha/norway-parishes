import{gW as n,cW as a,gX as f,fn as y,gY as M}from"./index-XUmwAfbD.js";const m=(e,t)=>{const s=n(e,t,0,0,0,0,t,0,0,0,0,t,0,0,0,0,1);return a(s,s)},x=(e,t)=>{const s=n(e,t,0,0,.5-.5*t,0,t,0,.5-.5*t,0,0,t,.5-.5*t,0,0,0,1);return a(s,s)},b=(e,t)=>{const s=1-t,r=n(e,.2126+.7874*s,.7152-.7152*s,.0722-.0722*s,0,.2126-.2126*s,.7152+.2848*s,.0722-.0722*s,0,.2126-.2126*s,.7152-.7152*s,.0722+.9278*s,0,0,0,0,1);return a(r,r)},w=(e,t)=>{const s=Math.sin(t*Math.PI/180),r=Math.cos(t*Math.PI/180),i=n(e,.213+.787*r-.213*s,.715-.715*r-.715*s,.072-.072*r+.928*s,0,.213-.213*r+.143*s,.715+.285*r+.14*s,.072-.072*r-.283*s,0,.213-.213*r-.787*s,.715-.715*r+.715*s,.072+.928*r+.072*s,0,0,0,0,1);return a(i,i)},_=(e,t)=>{const s=1-2*t,r=n(e,s,0,0,t,0,s,0,t,0,0,s,t,0,0,0,1);return a(r,r)},J=(e,t)=>{const s=n(e,.213+.787*t,.715-.715*t,.072-.072*t,0,.213-.213*t,.715+.285*t,.072-.072*t,0,.213-.213*t,.715-.715*t,.072+.928*t,0,0,0,0,1);return a(s,s)},N=(e,t)=>{const s=1-t,r=n(e,.393+.607*s,.769-.769*s,.189-.189*s,0,.349-.349*s,.686+.314*s,.168-.168*s,0,.272-.272*s,.534-.534*s,.131+.869*s,0,0,0,0,1);return a(r,r)};class c{constructor(t,s,r){this.strength=t,this.radius=s,this.threshold=r,this.type="bloom"}interpolate(t,s,r){this.strength=o(t.strength,s.strength,r),this.radius=o(t.radius,s.radius,r),this.threshold=o(t.threshold,s.threshold,r)}clone(){return new c(this.strength,this.radius,this.threshold)}toJSON(){return{type:"bloom",radius:h(this.radius),strength:this.strength,threshold:this.threshold}}}let O=class g{constructor(t){this.radius=t,this.type="blur"}interpolate(t,s,r){this.radius=Math.round(o(t.radius,s.radius,r))}clone(){return new g(this.radius)}toJSON(){return{type:"blur",radius:h(this.radius)}}};class u{constructor(t,s){this.type=t,this.amount=s,this.type!=="invert"&&this.type!=="grayscale"&&this.type!=="sepia"||(this.amount=Math.min(this.amount,1))}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(t,s,r){this.amount=o(t.amount,s.amount,r),this._updateMatrix()}clone(){return new u(this.type,this.amount)}toJSON(){return{type:this.type,amount:this.amount}}_updateMatrix(){const t=this._colorMatrix||f();switch(this.type){case"brightness":this._colorMatrix=m(t,this.amount);break;case"contrast":this._colorMatrix=x(t,this.amount);break;case"grayscale":this._colorMatrix=b(t,this.amount);break;case"invert":this._colorMatrix=_(t,this.amount);break;case"saturate":this._colorMatrix=J(t,this.amount);break;case"sepia":this._colorMatrix=N(t,this.amount)}}}class l{constructor(t,s,r,i){this.offsetX=t,this.offsetY=s,this.blurRadius=r,this.color=i,this.type="drop-shadow"}interpolate(t,s,r){this.offsetX=o(t.offsetX,s.offsetX,r),this.offsetY=o(t.offsetY,s.offsetY,r),this.blurRadius=o(t.blurRadius,s.blurRadius,r),this.color[0]=Math.round(o(t.color[0],s.color[0],r)),this.color[1]=Math.round(o(t.color[1],s.color[1],r)),this.color[2]=Math.round(o(t.color[2],s.color[2],r)),this.color[3]=o(t.color[3],s.color[3],r)}clone(){return new l(this.offsetX,this.offsetY,this.blurRadius,[...this.color])}toJSON(){const t=[...this.color];return t[3]*=255,{type:"drop-shadow",xoffset:h(this.offsetX),yoffset:h(this.offsetY),blurRadius:h(this.blurRadius),color:t}}}class p{constructor(t){this.angle=t,this.type="hue-rotate"}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(t,s,r){this.angle=o(t.angle,s.angle,r),this._updateMatrix()}clone(){return new p(this.angle)}toJSON(){return{type:"hue-rotate",angle:this.angle}}_updateMatrix(){const t=this._colorMatrix||f();this._colorMatrix=w(t,this.angle)}}class d{constructor(t){this.amount=t,this.type="opacity",this.amount=Math.min(this.amount,1)}interpolate(t,s,r){this.amount=o(t.amount,s.amount,r)}clone(){return new d(this.amount)}toJSON(){return{type:"opacity",amount:this.amount}}}function o(e,t,s){return e+(t-e)*s}function h(e){return Math.round(1e3*y(e))/1e3}function S(e){switch(e.type){case"grayscale":case"sepia":case"invert":return new u(e.type,0);case"saturate":case"brightness":case"contrast":return new u(e.type,1);case"opacity":return new d(1);case"hue-rotate":return new p(0);case"blur":return new O(0);case"drop-shadow":return new l(0,0,0,[...M("transparent")]);case"bloom":return new c(0,0,1)}}function R(e,t){const s=e.length>t.length?e:t;return(e.length>t.length?t:e).every((r,i)=>r.type===s[i].type)}function X(e,t){const s=e.length>t.length?e:t,r=e.length>t.length?t:e;for(let i=r.length;i<s.length;i++)r.push(S(s[i]))}function Y(e){const t=e[0];return!!t&&"type"in t}function k(e,t){return JSON.stringify(e??null)===JSON.stringify(t??null)}export{O as a,c,l as d,X as e,d as f,Y as l,p as m,u as p,k as r,R as t};
//# sourceMappingURL=utils-CXJkEfDz.js.map
