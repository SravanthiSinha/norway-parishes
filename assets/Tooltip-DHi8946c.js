import{n as M,ao as Y,ap as F,e as x,k as R,aa as S,a7 as j,o as B,aq as p,Y as N}from"./Theme-3j2Dy6ZC.js";class D extends N{_beforeChanged(){super._beforeChanged(),(this.isDirty("pointerBaseWidth")||this.isDirty("cornerRadius")||this.isDirty("pointerLength")||this.isDirty("pointerX")||this.isDirty("pointerY")||this.isDirty("width")||this.isDirty("height"))&&(this._clear=!0)}_changed(){if(super._changed(),this._clear){this.markDirtyBounds();let t=this.width(),i=this.height();if(t>0&&i>0){let e=this.get("cornerRadius",8);e=p(e,0,Math.min(t/2,i/2));let l=this.get("pointerX",0),r=this.get("pointerY",0),a=this.get("pointerBaseWidth",15)/2,T=0,_=0,f=0,b=(l-T)*(i-_)-(r-_)*(t-T),n=(l-f)*(0-i)-(r-i)*(t-f);const s=this._display;if(s.moveTo(e,0),b>0&&n>0){let o=Math.round(p(l,e+a,t-a-e));r=p(r,-1/0,0),s.lineTo(o-a,0),s.lineTo(l,r),s.lineTo(o+a,0)}if(s.lineTo(t-e,0),s.arcTo(t,0,t,e,e),b>0&&n<0){let o=Math.round(p(r,e+a,i-a-e));l=p(l,t,1/0),s.lineTo(t,e),s.lineTo(t,Math.max(o-a,e)),s.lineTo(l,r),s.lineTo(t,o+a)}if(s.lineTo(t,i-e),s.arcTo(t,i,t-e,i,e),b<0&&n<0){let o=Math.round(p(l,e+a,t-a-e));r=p(r,i,1/0),s.lineTo(t-e,i),s.lineTo(o+a,i),s.lineTo(l,r),s.lineTo(o-a,i)}if(s.lineTo(e,i),s.arcTo(0,i,0,i-e,e),b<0&&n>0){let o=Math.round(p(r,e+a,i-e-a));l=p(l,-1/0,0),s.lineTo(0,i-e),s.lineTo(0,o+a),s.lineTo(l,r),s.lineTo(0,Math.max(o-a,e))}s.lineTo(0,e),s.arcTo(0,0,e,0,e),s.closePath()}}}}Object.defineProperty(D,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PointedRectangle"}),Object.defineProperty(D,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:N.classNames.concat([D.className])});class P extends M{constructor(t,i,e,l=[]){super(t,i,e,l),Object.defineProperty(this,"_fx",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_fy",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_label",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_fillDp",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_strokeDp",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_labelDp",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_w",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_h",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_keepHoverDp",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_htmlContentHovered",{enumerable:!0,configurable:!0,writable:!0,value:!1})}_afterNew(){this._settings.themeTags=Y(this._settings.themeTags,["tooltip"]),super._afterNew(),this._setDefaultFn("background",()=>D.new(this._root,{})).set("themeTags",["tooltip","background"]),this._label=this.children.push(F.new(this._root,{})),this._disposers.push(this._label.events.on("boundschanged",()=>{this._updateBackground()})),this._disposers.push(this.on("bounds",()=>{this._updateBackground()})),this._updateTextColor(),this._root.tooltipContainer.children.push(this),this.hide(0),this._disposers.push(this.label.onPrivate("htmlElement",t=>{t&&(this._disposers.push(x(t,"pointerover",i=>{this._htmlContentHovered=!0})),this._disposers.push(x(t,"pointerout",i=>{this._htmlContentHovered=!1})))})),this.on("visible",t=>{this._handleReaderAnnouncement()}),this.label.events.on("dataitemchanged",t=>{this._handleReaderAnnouncement()}),this._root._tooltips.push(this)}_handleReaderAnnouncement(){this.get("readerAnnounce")&&this.isVisibleDeep()&&this._root.readerAlert(this.label.getAccessibleText())}get label(){return this._label}_dispose(){super._dispose(),R(this._root._tooltips,this)}_updateChildren(){super._updateChildren(),(this.isDirty("pointerOrientation")||this.isPrivateDirty("minWidth")||this.isPrivateDirty("minHeight"))&&this.get("background")._markDirtyKey("width"),this.get("labelText")!=null&&this.label.set("text",this.get("labelText")),this.get("labelHTML")!=null&&this.label.set("html",this.get("labelHTML")),this.get("labelAriaLabel")!=null&&this.label.set("ariaLabel",this.get("labelAriaLabel"))}_changed(){if(super._changed(),(this.isDirty("pointTo")||this.isDirty("pointerOrientation"))&&this._updateBackground(),this.isDirty("tooltipTarget")&&this.updateBackgroundColor(),this.isDirty("keepTargetHover"))if(this.get("keepTargetHover")){const t=this.get("background");this._keepHoverDp=new S([t.events.on("pointerover",i=>{let e=this.get("tooltipTarget");e&&(e.parent&&e.parent.getPrivate("tooltipTarget")==e&&(e=e.parent),e.hover())}),t.events.on("pointerout",i=>{let e=this.get("tooltipTarget");e&&(e.parent&&e.parent.getPrivate("tooltipTarget")==e&&(e=e.parent),this._htmlContentHovered||e.unhover())})]),this.label.onPrivate("htmlElement",i=>{this._keepHoverDp&&i&&this._keepHoverDp.disposers.push(x(i,"pointerleave",e=>{const l=this.root._renderer.getEvent(e);t.events.dispatch("pointerout",{type:"pointerout",originalEvent:l.event,point:l.point,simulated:!1,target:t})}))})}else this._keepHoverDp&&(this._keepHoverDp.dispose(),this._keepHoverDp=void 0)}_onShow(){super._onShow(),this.updateBackgroundColor()}updateBackgroundColor(){let t=this.get("tooltipTarget");const i=this.get("background");let e,l;t&&i&&(e=t.get("fill"),l=t.get("stroke"),e==null&&(e=l),this.get("getFillFromSprite")&&(this._fillDp&&this._fillDp.dispose(),e!=null&&i.set("fill",e),this._fillDp=t.on("fill",r=>{r!=null&&(i.set("fill",r),this._updateTextColor(r))}),this._disposers.push(this._fillDp)),this.get("getStrokeFromSprite")&&(this._strokeDp&&this._strokeDp.dispose(),e!=null&&i.set("stroke",e),this._strokeDp=t.on("fill",r=>{r!=null&&i.set("stroke",r)}),this._disposers.push(this._strokeDp)),this.get("getLabelFillFromSprite")&&(this._labelDp&&this._labelDp.dispose(),e!=null&&this.label.set("fill",e),this._labelDp=t.on("fill",r=>{r!=null&&this.label.set("fill",r)}),this._disposers.push(this._labelDp))),this._updateTextColor(e)}_updateTextColor(t){this.get("autoTextColor")&&(t==null&&(t=this.get("background").get("fill")),t==null&&(t=this._root.interfaceColors.get("background")),t instanceof j&&this.label.set("fill",j.alternative(t,this._root.interfaceColors.get("alternativeText"),this._root.interfaceColors.get("text"))))}_setDataItem(t){super._setDataItem(t),this.label._setDataItem(t)}_updateBackground(){super.updateBackground();const t=this._root.container;if(t){let i=.5,e=.5,l=this.get("centerX");l instanceof B&&(i=l.value);let r=this.get("centerY");r instanceof B&&(e=r.value);let a=t.width(),T=t.height(),_=this.parent,f=0,b=0;if(_){f=_.x(),b=_.y();const g=_.get("layerMargin");g&&(f+=g.left||0,b+=g.top||0,a+=(g.left||0)+(g.right||0),T+=(g.top||0)+(g.bottom||0))}const n=this.get("bounds",{left:-f,top:-b,right:a-f,bottom:T-b});this._updateBounds();let s=this.width(),o=this.height();s===0&&(s=this._w),o===0&&(o=this._h);let k=this.get("pointTo",{x:a/2,y:T/2}),h=k.x,u=k.y,m=this.get("pointerOrientation"),c=this.get("background"),d=0,v=0,y=0;c instanceof D&&(d=c.get("pointerLength",0),v=c.get("strokeWidth",0)/2,y=v,c.set("width",s),c.set("height",o));let C=0,O=0,H=n.right-n.left,L=n.bottom-n.top;m=="horizontal"||m=="left"||m=="right"?(v=0,m=="horizontal"?h>n.left+H/2?(h-=s*(1-i)+d,y*=-1):h+=s*i+d:m=="left"?h+=s*(1-i)+d:(h-=s*i+d,y*=-1)):(y=0,m=="vertical"?u>n.top+o/2+d?u-=o*(1-e)+d:(u+=o*e+d,v*=-1):m=="down"?u-=o*(1-e)+d:(u+=o*e+d,v*=-1)),h=p(h,n.left+s*i,n.left+H-s*(1-i))+y,u=p(u,n.top+o*e,n.top+L-o*(1-e))-v,C=k.x-h+s*i+y,O=k.y-u+o*e-v,this._fx=h,this._fy=u;const w=this.get("animationDuration",0);if(w>0&&this.get("visible")&&this.get("opacity")>.1){const g=this.get("animationEasing");this.animate({key:"x",to:h,duration:w,easing:g}),this.animate({key:"y",to:u,duration:w,easing:g})}else this.set("x",h),this.set("y",u);c instanceof D&&(c.set("pointerX",C),c.set("pointerY",O)),s>0&&(this._w=s),o>0&&(this._h=o)}}}Object.defineProperty(P,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Tooltip"}),Object.defineProperty(P,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:M.classNames.concat([P.className])});export{P as u};
//# sourceMappingURL=Tooltip-DHi8946c.js.map
