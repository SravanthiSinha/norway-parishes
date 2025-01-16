import{o as D,c as ve,f as se,i as L,e as P}from"./UpdateTracking2D-CCrO4wMz.js";import{er as B,ka as Me,kb as ie,gm as k,kc as re,kd as N,ke as Pe,kf as ne,kg as be,bo as Z,go as A,aY as we,c4 as T,b5 as Ie,I as ke,s as Se}from"./index-BfLS464G.js";import{m as Q}from"./definitions-C0Jy3zs7.js";import{c as Ae,f as E,m as fe,N as me,P as q,g as $e,i as Le,l as ze,T as De,s as Ee,_ as Be,a as Re,b as Te,h as Fe,o as Ce,d as Ge,e as Oe,j as We}from"./PieChartMeshWriter-D2U8gsLW.js";import{C as S}from"./enums-Dk3osxpS.js";import{n as Y}from"./mat2df32-orApM5a3.js";import{t as ae}from"./vec2f32-BbH2jxlN.js";import{h as Ve,r as oe}from"./featureConversionUtils-BtnbM9Bl.js";import{a as je,c as Ne}from"./CIMSymbolHelper-CHz6TtxM.js";import{r as ce,t as Ze}from"./LabelMetric-BRJwH1IL.js";import{e as F}from"./constants-F8oTIn7N.js";import{o as pe,e as qe}from"./grouping-BOjV5tpK.js";import{c as Ye}from"./AttributeStore-BNkfUBe1.js";let Xe=class extends Ae{};function He(a){const{sprite:e,isMapAligned:s,colorLocked:i,scaleSymbolsProportionally:t,isStroke:n}=a;let r=0;return s&&(r|=E(D.bitset.isMapAligned)),i&&(r|=E(D.bitset.colorLocked)),e.sdf&&(r|=E(D.bitset.isSDF)),t&&(r|=E(D.bitset.scaleSymbolsProportionally)),n&&(r|=E(D.bitset.isStroke)),r}let Qe=class extends Xe{get vertexSpec(){return{createComputedParams:e=>{let{pixelDimensions:s,texelDimensions:i,baseSize:t,referenceSize:n,strokeWidth:r,sizeRatio:o}=e;s||(s=e.sprite.sdf?[0,0]:[e.sprite.width,e.sprite.height]),i||(i=e.sprite.sdf?[0,0]:s),t=B(t),n=B(n),r=B(r);const c=(e.sprite.sdfDecodeCoeff??1)*o;return{...e,pixelDimensions:s,texelDimensions:i,baseSize:t,referenceSize:n,strokeWidth:r,sdfDecodeCoeff:c}},optionalAttributes:{zoomRange:{type:S.SHORT,count:2,packPrecisionFactor:Q,pack:({scaleInfo:e},{tileInfo:s})=>fe(e,s)}},attributes:{id:{type:S.UNSIGNED_BYTE,count:3,pack:"id"},bitset:{type:S.UNSIGNED_BYTE,count:1,pack:He},pos:{type:S.SHORT,count:2,pack:"position",packPrecisionFactor:1},offset:{type:S.FLOAT,count:2,packAlternating:{count:4,pack:e=>{const s=e.texelDimensions;return[[-.5*s[0],-.5*s[1]],[.5*s[0],-.5*s[1]],[-.5*s[0],.5*s[1]],[.5*s[0],.5*s[1]]]}}},uv:{type:S.SHORT,count:2,packPrecisionFactor:1,packAlternating:{count:4,packTessellation:({texXmax:e,texXmin:s,texYmax:i,texYmin:t})=>[[s,t],[e,t],[s,i],[e,i]]}},animationPointerAndBaseSizeAndReferenceSize:{type:S.UNSIGNED_SHORT,count:4,packPrecisionFactor:1,pack:({animations:e,baseSize:s,referenceSize:i})=>[e.dataColumn,e.dataRow,s,i]},sizing:{type:S.UNSIGNED_SHORT,count:4,packPrecisionFactor:8,pack:({strokeWidth:e,pixelDimensions:s,baseSize:i,sprite:t,sizeRatio:n})=>{const r=Math.max(i*t.width/t.height,i),o=t.sdfDecodeCoeff*r*n;return[s[0],s[1],e,o]}},angle:{type:S.BYTE,count:1,packTessellation:({angle:e})=>e}}}}_write(e,s){const i=this.evaluatedMeshParams.sprite,{textureBinding:t}=i;e.recordStart(this.instanceId,this.attributeLayout,t);const n=s.getDisplayId();if(s.geometryType==="esriGeometryPolygon"){const r=s.readCentroidForDisplay();if(!r)return;const[o,c]=r.coords;this._writeQuad(e,n,o,c)}else if(s.geometryType==="esriGeometryPoint"){const r=s.readXForDisplay(),o=s.readYForDisplay();this._writeQuad(e,n,r,o)}else{const r=s.readGeometryForDisplay();if(r){const{angleToLine:o}=this.evaluatedMeshParams;if(o){let c=!0,d=null,u=null;r.forEachVertex((h,l)=>{if(d!=null&&u!=null){const m=Math.atan2(l-u,h-d)/ve;c&&(this._writeQuad(e,n,d,u,m),c=!1),this._writeQuad(e,n,h,l,m)}d=h,u=l})}else r.forEachVertex((c,d)=>{this._writeQuad(e,n,c,d)})}}e.recordEnd()}_writeQuad(e,s,i,t,n=0){const r=this.evaluatedMeshParams.sprite,{rect:o}=r,c=o.x+2,d=o.y+2,u=o.x+o.width-2,h=o.y+o.height-2,l=e.vertexCount();e.recordBounds(i,t,64,64);const m={texXmin:c,texYmin:d,texXmax:u,texYmax:h,angle:n};for(let g=0;g<4;g++)this._writeVertex(e,s,i,t,m);e.indexEnsureSize(6),e.indexWrite(l),e.indexWrite(l+1),e.indexWrite(l+2),e.indexWrite(l+1),e.indexWrite(l+3),e.indexWrite(l+2)}};function le(a,e,s){return a[0]=e[0]-s[0],a[1]=e[1]-s[1],a}function ge(a,e){return Math.sqrt(a*a+e*e)}function he(a){const e=ge(a[0],a[1]);a[0]/=e,a[1]/=e}function Ue(a,e){return ge(a[0]-e[0],a[1]-e[1])}function Je(a,e){return a[e+1]}function _e(a){return a.length-1}function Ke(a){let e=0;for(let s=0;s<_e(a);s++)e+=et(a,s);return e}function et(a,e,s=1){let[i,t]=Je(a,e);return[i,t]=[Math.round(i),Math.round(t)],Math.sqrt(i*i+t*t)*s}let tt=class U{constructor(e,s,i,t,n){this._segments=e,this._index=s,this._distance=i,this._xStart=t,this._yStart=n,this._done=!1}static create(e){return new U(e,0,0,e[0][0],e[0][1])}clone(){return new U(this._segments,this._index,this._distance,this.xStart,this.yStart)}equals(e){return this._index===e._index||e._index===this._index-1&&(this._distance===0||e._distance===1)||e._index===this._index+1&&(this._distance===1||e._distance===0)}leq(e){return this._index<e._index||this._index===e._index&&this._distance<=e._distance}geq(e){return this._index>e._index||this._index===e._index&&this._distance>=e._distance}get _segment(){return this._segments[this._index+1]}get angle(){const e=this.dy,s=(0*e+-1*-this.dx)/(1*this.length);let i=Math.acos(s);return e>0&&(i=2*Math.PI-i),i}get xStart(){return this._xStart}get yStart(){return this._yStart}get x(){return this.xStart+this.distance*this.dx}get y(){return this.yStart+this.distance*this.dy}get dx(){return this._segment[0]}get dy(){return this._segment[1]}get xMidpoint(){return this.xStart+.5*this.dx}get yMidpoint(){return this.yStart+.5*this.dy}get xEnd(){return this.xStart+this.dx}get yEnd(){return this.yStart+this.dy}get length(){const{dx:e,dy:s}=this;return Math.sqrt(e*e+s*s)}get remainingLength(){return this.length*(1-this._distance)}get backwardLength(){return this.length*this._distance}get distance(){return this._distance}get done(){return this._done}hasPrev(){return this._index-1>=0}hasNext(){return this._index+1<_e(this._segments)}next(){return this.hasNext()?(this._xStart+=this.dx,this._yStart+=this.dy,this._distance=0,this._index+=1,this):null}prev(){return this.hasPrev()?(this._index-=1,this._xStart-=this.dx,this._yStart-=this.dy,this._distance=1,this):(this._done=!0,null)}_seekBackwards(e,s){const i=this.backwardLength;if(e<=i)return this._distance=(i-e)/this.length,this;let t=this.backwardLength;for(;this.prev();){if(t+this.length>e)return this._seekBackwards(e-t);t+=this.length}return this._distance=0,s?this:null}seek(e,s=!1){if(e<0)return this._seekBackwards(Math.abs(e),s);if(e<=this.remainingLength)return this._distance=(this.backwardLength+e)/this.length,this;let i=this.remainingLength;for(;this.next();){if(i+this.length>e)return this.seek(e-i,s);i+=this.length}return this._distance=1,s?this:null}};function X(a,e,s,i=!0){const t=Ke(a),n=tt.create(a),r=t/2;if(!i)return n.seek(r),void(Math.abs(n.x)<F&&Math.abs(n.y)<F&&s(n.clone(),0,r+0*e,t));const o=Math.max((t-e)/2,0),c=Math.floor(o/e),d=r-c*e;n.seek(d);for(let u=-c;u<=c;u++)Math.abs(n.x)<F&&Math.abs(n.y)<F&&s(n.clone(),u,r+u*e,t),n.seek(e)}function H(a,e){const s=e;for(let i=0;i<a.length;i++){let t=a[i];st(t,s);const n=[];n.push(t[0]);for(let r=1;r<t.length;r++){const[o,c]=t[r-1],[d,u]=t[r],h=d-o,l=u-c;n.push([h,l])}a[i]=n,t=n}return a}function st(a,e){if(e<=0)return;const i=a.length;if(i<3)return;const t=[];let n=0;t.push(0);for(let h=1;h<i;h++)n+=Ue(a[h],a[h-1]),t.push(n);e=Math.min(e,.2*n);const r=[];r.push(a[0][0]),r.push(a[0][1]);const o=a[i-1][0],c=a[i-1][1],d=le([0,0],a[0],a[1]);he(d),a[0][0]+=e*d[0],a[0][1]+=e*d[1],le(d,a[i-1],a[i-2]),he(d),a[i-1][0]+=e*d[0],a[i-1][1]+=e*d[1];for(let h=1;h<i;h++)t[h]+=e;t[i-1]+=e;const u=.5*e;for(let h=1;h<i-1;h++){let l=0,m=0,g=0;for(let f=h-1;f>=0&&!(t[f+1]<t[h]-u);f--){const p=u+t[f+1]-t[h],_=t[f+1]-t[f],y=t[h]-t[f]<u?1:p/_;if(Math.abs(y)<1e-6)break;const x=y*y,b=y*p-.5*x*_,v=y*_/e,M=a[f+1],w=a[f][0]-M[0],z=a[f][1]-M[1];l+=v/b*(M[0]*y*p+.5*x*(p*w-_*M[0])-x*y*_*w/3),m+=v/b*(M[1]*y*p+.5*x*(p*z-_*M[1])-x*y*_*z/3),g+=v}for(let f=h+1;f<i&&!(t[f-1]>t[h]+u);f++){const p=u-t[f-1]+t[h],_=t[f]-t[f-1],y=t[f]-t[h]<u?1:p/_;if(Math.abs(y)<1e-6)break;const x=y*y,b=y*p-.5*x*_,v=y*_/e,M=a[f-1],w=a[f][0]-M[0],z=a[f][1]-M[1];l+=v/b*(M[0]*y*p+.5*x*(p*w-_*M[0])-x*y*_*w/3),m+=v/b*(M[1]*y*p+.5*x*(p*z-_*M[1])-x*y*_*z/3),g+=v}r.push(l/g),r.push(m/g)}r.push(o),r.push(c);for(let h=0,l=0;h<i;h++)a[h][0]=r[l++],a[h][1]=r[l++]}const C=1,$=0,it=128,rt=be(a=>{let e=0;if(a===0)return 1/0;for(;!(a%2);)e++,a/=2;return e});class nt extends me{constructor(){super(...arguments),this._zoomLevel=0}_write(e,s,i,t){if(this._zoomLevel=t||0,i!=null)throw new Error("InternalError: EffectGeometry not support for LabelMeshWriter");switch(s.geometryType){case"esriGeometryPoint":{const n=s.readXForDisplay(),r=s.readYForDisplay();this._writePoint(e,n,r,s);break}case"esriGeometryEnvelope":case"esriGeometryPolygon":case"esriGeometryMultipoint":{const n=s.readCentroidForDisplay();if(!n)return;const[r,o]=n.coords;this._writePoint(e,r,o,s);break}case"esriGeometryPolyline":this._writeLines(e,s)}}_createLineLabelMetric(e,s,i,t){var u,h;const n=se(e),r=this.evaluatedMeshParams.horizontalAlignment==="right"?-1:1,o=this.evaluatedMeshParams.verticalAlignment==="bottom"?-1:1,c=((u=this.evaluatedMeshParams.scaleInfo)==null?void 0:u.maxScale)??0,d=((h=this.evaluatedMeshParams.scaleInfo)==null?void 0:h.minScale)??0;return new ce(n,s,i,r,o,c,d,t??null)}_writePoint(e,s,i,t){var m,g;const n=this._getShaping();if(!n)return;const r=t.getDisplayId(),o=je(this.evaluatedMeshParams.horizontalAlignment),c=Ne(this.evaluatedMeshParams.verticalAlignment),d=((m=this.evaluatedMeshParams.scaleInfo)==null?void 0:m.maxScale)??0,u=((g=this.evaluatedMeshParams.scaleInfo)==null?void 0:g.minScale)??0,h=se(t.getDisplayId()),l=this._getPointReferenceBounds()||{offsetX:0,offsetY:0,size:0};e.metricStart(new ce(h,s,i,o,c,d,u,l)),this._writeGlyphs(e,r,s,i,n,0,l),e.metricBoxWrite(n.boundsT),e.metricEnd()}_getPointReferenceBounds(){if(!this._references)return null;for(const e of this._references){const s=e.getBoundsInfo();if(s)return s}return null}_writeLines(e,s){const{scaleInfo:i,verticalAlignment:t}=this.evaluatedMeshParams,n=this.evaluatedMeshParams.repeatLabelDistance||128,r=this._getShaping("middle");if(!r)return;const o=(d,u,h,l)=>this._placeSubdivGlyphs(d,u,h,l),c=(r.bounds.width+n)/(1<<C);this._current={out:e,id:s.getDisplayId(),shaping:r,zoomRange:fe(i,this.getTileInfo()),referenceBounds:this._getPointReferenceBounds()||{offsetX:0,offsetY:0,size:0},offsetDirection:null},this._verticalPlacement=t==="bottom"?"above":t==="top"?"below":null,this._verticalPlacement?this._writeAboveAndBelowAlong(s,o,c):this._writeCenterAlong(s,o,c)}_writeAboveAndBelowAlong(e,s,i){const{repeatLabel:t}=this.evaluatedMeshParams,{shaping:n}=this._current,r=n.bounds.halfHeight,o=e.readGeometryForDisplay();if(!o)return;const c=new Z;Ve(c,o,!1,!1,"esriGeometryPolyline",1);const d=ue(new Z,c,r),u=ue(new Z,c,-r),h=oe(u,"esriGeometryPolyline",!1,!1),l=oe(d,"esriGeometryPolyline",!1,!1),m=H(l.paths,n.bounds.width),g=H(h.paths,n.bounds.width);this._current.offsetDirection="above";for(const f of m)X(f,i,s,!!t);this._current.offsetDirection="below";for(const f of g)X(f,i,s,!!t)}_writeCenterAlong(e,s,i){const{repeatLabel:t}=this.evaluatedMeshParams,{shaping:n}=this._current,r=H(e.readLegacyGeometryForDisplay().paths,n.bounds.width);for(const o of r)X(o,i,s,!!t)}_placeSubdivGlyphs(e,s,i,t){const{allowOverrun:n,labelPosition:r,repeatLabelDistance:o}=this.evaluatedMeshParams,c=this._current.zoomRange[0],d=rt(s),u=this._current.shaping.bounds.width/(1<<C),h=Math.sqrt(o||it)/(1<<C),l=Math.min(i,t-i),m=this._current.shaping.isMultiline?q:Math.log2(l/(h+u/2)),g=s===0?m:Math.min(d,m),f=Math.max(c,this._zoomLevel+C-g),p=this._zoomLevel-f,_=this._current.shaping.bounds.width/2*2**p;this._current.shaping.isMultiline?s===0&&this._placeStraight(e,f):n&&p<0?this._placeStraightAlong(e,c):r==="parallel"?this._placeStraightAlong(e,f):r==="curved"&&this._placeCurved(e,f,_)}_placeStraight(e,s){const{out:i,id:t,shaping:n,referenceBounds:r}=this._current,{x:o,y:c}=e;i.metricStart(this._createLineLabelMetric(t,o,c)),i.metricBoxWrite(n.boundsT);const d=e.angle*(180/Math.PI)%360,u=(e.angle*(180/Math.PI)+180)%360;this._writeGlyphs(i,t,o,c,n,0,r,{clipAngle:d,mapAligned:!0,isLineLabel:!0,minZoom:s}),this._writeGlyphs(i,t,o,c,n,0,r,{clipAngle:u,mapAligned:!0,isLineLabel:!0,minZoom:s}),i.metricEnd()}_placeCurved(e,s,i){const{out:t,id:n}=this._current;t.metricStart(this._createLineLabelMetric(n,e.x,e.y));const r=e.clone(),o=e.angle*(180/Math.PI)%360,c=(e.angle*(180/Math.PI)+180)%360;this._verticalPlacement&&this._verticalPlacement!==this._current.offsetDirection||(this._placeFirst(r,s,1,o),this._placeBack(e,r,s,i,1,o),this._placeForward(e,r,s,i,1,o)),this._verticalPlacement&&this._verticalPlacement===this._current.offsetDirection||(this._placeFirst(r,s,0,c),this._placeBack(e,r,s,i,0,c),this._placeForward(e,r,s,i,0,c)),t.metricEnd()}_placeStraightAlong(e,s){const{out:i,id:t,shaping:n,zoomRange:r,referenceBounds:o}=this._current,{boxBorderLineColor:c,boxBackgroundColor:d}=this.evaluatedMeshParams,u=e.clone(),h=e.angle*(180/Math.PI)%360,l=(e.angle*(180/Math.PI)+180)%360,m=n.glyphs.length>0&&!(!c&&!d);if(i.metricStart(this._createLineLabelMetric(t,e.x,e.y)),m){const g=Math.max(s,r[0],0),f=Math.min(q,r[1]),p=Me(Y(),-e.angle),_={minZoom:g,maxZoom:f,clipAngle:h,mapAligned:!0,isLineLabel:!0},y=B(this.evaluatedMeshParams.offsetX),x=B(this.evaluatedMeshParams.offsetY);if(!this._verticalPlacement||this._verticalPlacement===this._current.offsetDirection){const b=ae(y,-1*x),[v,M]=n.shapeBackground(ie(Y(),p,b));i.recordStart(this.instanceId,this.attributeLayout,n.glyphs[0].textureBinding);const w=2*Math.max(v.width,v.height);i.recordBounds(e.x+v.x,e.y+v.y,w,w),this._writeTextBox(i,t,e.x,e.y,M,o,_),i.recordEnd()}if(!this._verticalPlacement||this._verticalPlacement!==this._current.offsetDirection){const b=ae(y,x),[v,M]=n.shapeBackground(ie(Y(),p,b));_.clipAngle=l,i.recordStart(this.instanceId,this.attributeLayout,n.glyphs[0].textureBinding);const w=2*Math.max(v.width,v.height);i.recordBounds(e.x+v.x,e.y+v.y,w,w),this._writeTextBox(i,t,e.x,e.y,M,o,_),i.recordEnd()}}this._verticalPlacement&&this._verticalPlacement!==this._current.offsetDirection||this._placeFirst(u,s,1,h,!0),this._verticalPlacement&&this._verticalPlacement===this._current.offsetDirection||this._placeFirst(u,s,0,l,!0),i.metricEnd()}_placeBack(e,s,i,t,n,r){const o=e.clone();let c=e.backwardLength+$;for(;o.prev()&&!(c>=t);)this._placeOnSegment(o,s,c,i,-1,n,r),c+=o.length+$}_placeForward(e,s,i,t,n,r){const o=e.clone();let c=e.remainingLength+$;for(;o.next()&&!(c>=t);)this._placeOnSegment(o,s,c,i,1,n,r),c+=o.length+$}_placeFirst(e,s,i,t,n=!1){const{out:r,id:o,shaping:c,zoomRange:d,referenceBounds:u}=this._current,h=c.glyphs;for(const l of h){const m=l.x>c.bounds.x?i:1-i,g=m*e.remainingLength+(1-m)*e.backwardLength,f=Math.abs(l.x+l.width/2-c.bounds.x),p=Math.max(0,this._zoomLevel+Math.log2(f/(g+$))),_=Math.max(s,n?0:p);l.maxZoom=Math.min(d[1],q),l.angle=e.angle+(1-i)*Math.PI,l.minZoom=Math.max(d[0],_),this._writeLineGlyph(r,o,e.x,e.y,c.bounds,l,t,u,!0),(i||this._current.offsetDirection)&&this._isVisible(l.minZoom,l.maxZoom)&&r.metricBoxWrite(l.bounds)}}_placeOnSegment(e,s,i,t,n,r,o){const{out:c,id:d,shaping:u,referenceBounds:h}=this._current,l=u.glyphs,m=e.dx/e.length,g=e.dy/e.length,f={x:e.x+i*-n*m,y:e.y+i*-n*g};for(const p of l){const _=p.x>u.bounds.x?r:1-r;if(!(_&&n===1||!_&&n===-1))continue;const y=Math.abs(p.x+p.width/2-u.bounds.x),x=Math.max(0,this._zoomLevel+Math.log2(y/i)-.1),b=Math.max(t,this._zoomLevel+Math.log2(y/(i+e.length+$)));x!==0&&(p.angle=e.angle+(1-r)*Math.PI,p.minZoom=b,p.maxZoom=x,this._writeLineGlyph(c,d,f.x,f.y,u.bounds,p,o,h,!0),(r||this._current.offsetDirection)&&this._isVisible(p.minZoom,p.maxZoom)&&c.metricBoxWrite(p.bounds))}}_writeLineGlyph(e,s,i,t,n,r,o,c,d){const u=i+n.x,h=t+n.y,l=2*(this.evaluatedMeshParams.minPixelBuffer?this.evaluatedMeshParams.minPixelBuffer/this._textMeshTransformProps.fontSize:1),m=Math.max(n.width,n.height)*l;e.recordStart(this.instanceId,this.attributeLayout,r.textureBinding),e.recordBounds(u,h,m,m);const{texcoords:g,offsets:f}=r,{fontSize:p,haloSize:_,outlineSize:y}=this._textMeshTransformProps;this._writeQuad(e,s,i,t,{texcoords:g,offsets:f,fontSize:p,haloSize:_,outlineSize:y,color:$e(this.evaluatedMeshParams.color),isBackground:!1,referenceBounds:c,minZoom:Math.max(this._current.zoomRange[0],r.minZoom),maxZoom:Math.min(this._current.zoomRange[1],r.maxZoom),clipAngle:o,mapAligned:d,isLineLabel:!0}),e.recordEnd()}_isVisible(e,s){const i=Math.floor(this._zoomLevel*Q)/Q;return e<=i&&i<=s}}function ue(a,e,s){const{coords:i,lengths:t}=e,n=A(),r=A(),o=A(),c=A(),d=A(),u=A(),h=2;let l=0;for(let m=0;m<t.length;m++){const g=t[m];for(let f=0;f<g;f++){const p=h*(f+l-1),_=h*(f+l),y=h*(f+l+1);f>0?k(n,i[p],i[p+1]):k(n,0,0),k(r,i[_],i[_+1]),f<g-1?k(o,i[y],i[y+1]):k(o,0,0),f===0?k(c,0,0):(re(c,r,n),N(c,c),k(c,c[1],-c[0])),f===g-1?k(d,0,0):(re(d,o,r),N(d,d),k(d,d[1],-d[0])),Pe(u,c,d),N(u,u);const x=u[0]*d[0]+u[1]*d[1];x!==0&&ne(u,u,x),ne(u,u,s),a.coords.push(r[0]+u[0],r[1]+u[1])}a.lengths.push(g),l+=g}return a}function V(a){return a instanceof j?a:typeof a=="object"&&"type"in a?ct[a.type].hydrate(a):new R(a)}class j{constructor(e){this.inputs=e}encode(){const e=[];for(const s of this.inputs)e.push(...s.encode());return e.push(...this.instructions),e}}let R=class extends j{constructor(e){super([]),this.value=e}simplify(){return this}get instructions(){if(Array.isArray(this.value)){const[e,s,i,t]=this.value;return t!=null?L.vector4.encode([e,s||0,i||0,t]):L.vector3.encode([e,s||0,i||0])}return L.scalar.encode(this.value)}},at=class J extends j{constructor(e,s){super([s]),this._config=e,this._parent=s}static hydrate(e){return new J(e,V(e.parent))}simplify(){if(this._config.relativeTranslation||this._config.absoluteScale)return this;const e=this._parent.simplify();if(!(e instanceof R))return this;const[s,i,t,n]=e.value,r=this._config.translation.from[0],o=this._config.translation.from[1],c=this._config.rotation.from,d=this._config.scale.from;if(r===this._config.translation.to[0]&&o===this._config.translation.to[1]&&c===this._config.rotation.to&&d===this._config.scale.to){const u=t+c,h=n*d,l=Math.sin(t),m=Math.cos(t);return new R([m*n*r-l*n*o+s,l*n*r+m*n*o+i,u,h])}return new J(this._config,e)}get instructions(){return L.animatedTransform.encode(this._config)}},ot=class K extends j{constructor(e,s){super([s]),this._config=e,this._parent=s}static hydrate(e){return new K(e,V(e.parent))}simplify(){const e=this._parent.simplify();if(!(e instanceof R))return this;const[s,i,t,n]=e.value,r=this._config.color.from[0],o=this._config.color.from[1],c=this._config.color.from[2];let d=this._config.color.from[3];const u=this._config.opacity.from;return r===this._config.color.to[0]&&o===this._config.color.to[1]&&c===this._config.color.to[2]&&d===this._config.color.to[3]&&u===this._config.opacity.to?(d*=u,new R([s*r,i*o,t*c,n*d])):new K(this._config,e)}get instructions(){return L.animatedColor.encode(this._config)}};const ct={AnimatedTransform:at,AnimatedColor:ot};function lt(a){return ye(a.map(e=>I(e)).map(e=>V(e).simplify()))}function ht(a){const e=[];return e.push(a.transform),e.push(a.fromColor),e.push(a.toColor),e.push(a.colorMix),e.push(a.toOpacity),e.push(a.opacityMix),e}function ye(a){const e=[],s=[];let i=0;for(const t of a){const n=[...t.encode(),...L.ret.encode()];e.push([i+a.length,0,0,0]),s.push(...n),i+=n.length}return[...e,...s]}async function ee(a,e){const s=a;let i;if(typeof s=="number"||typeof s=="string"||typeof s=="boolean")i=s;else if(Array.isArray(s))i=await Promise.all(s.map(t=>ee(t,e)));else if(typeof s=="object")if("valueExpressionInfo"in s){const{valueExpressionInfo:t}=s,{expression:n}=t;i={...s,computed:await e.createComputedField({expression:n})}}else{i={};for(const t in s)i[t]=await ee(s[t],e)}return i}function I(a,e,s){function i(r){if(!("computed"in r))return r;let o=r.computed.readWithDefault(e,s,[255*r.defaultValue[0],255*r.defaultValue[1],255*r.defaultValue[2],r.defaultValue[3]]);if(typeof o=="string"){const c=we.fromString(o);c&&(o=[c.r,c.g,c.b,c.a])}return o}const t=a;let n;if(typeof t=="number"||typeof t=="string"||typeof t=="boolean")n=t;else if(Array.isArray(t))n=t.map(r=>I(r,e,s));else if(typeof t=="object")if("type"in t&&t.type!=null&&t.type==="Process")switch(t.op){case"ArcadeColor":{const r=I(t.value,e,s);G(Array.isArray(r)&&r.length===4),n=[r[0]/255,r[1]/255,r[2]/255,r[3]]}break;case"Transparency":{const r=I(t.value,e,s);G(typeof r=="number"),n=1-r/100}break;case"Divide":{const r=I(t.left,e,s);G(typeof r=="number");const o=I(t.right,e,s);G(typeof o=="number"),n=r/o}break;case"Random":{const r=I(t.seed,e,s),o=I(t.min,e,s),c=I(t.max,e,s),d=e.getObjectId(),u=pe(d||0);n=o+qe(u,r)*(c-o)}}else if("computed"in t)n=i(t);else{n={};for(const r in t)n[r]=I(t[r],e,s)}return n}function G(a){if(!a)throw new Error("Assertion failed.")}class ut extends Ye{constructor(e){super(),this._value=e}resize(e){}read(e,s){return this._value}readWithDefault(e,s,i){return this._value}referencesScale(){return!1}referencesGeometry(){return!1}}const dt=()=>Se.getLogger("esri.views.2d.engine.webgl.shaderGraph.techniques.mesh.MeshWriterInputEvaluator");async function O(a,e,s=!1){const{defaultValue:i,valueExpressionInfo:t,value:n}=e;if(t){const{expression:r}=t,o=await a.createComputedField({expression:r},s);return o?{...e,computed:o,defaultValue:i}:null}return{...e,computed:new ut(n),defaultValue:i}}async function de(a,e){const{valueExpressionInfo:s}=e,{expression:i}=s,t=await a.createComputedField({expression:i});return t?{...e,computed:t}:null}function xe(a){return typeof a=="object"&&a!=null&&(!(!("valueExpressionInfo"in a)||!a.valueExpressionInfo)||"type"in a&&a.type==="Process"&&"op"in a&&a.op==="Random")}function W(a){if(Array.isArray(a)){for(const e of a)if(W(e))return!0}if(typeof a=="object"){if(xe(a))return!0;for(const e in a)if(W(a[e]))return!0}return!1}class te{static async create(e,s,i){const t={},n=new Map,r=new Map,o=new Map,c=new Map,d=new Map,u=new Map;for(const h in i){const l=i[h];if(l!=null&&typeof l=="object")if(Array.isArray(l)){if(typeof l[0]=="object")throw new Error(`InternalError: Cannot handle ${h}. Nested array params are not supported`);t[h]=l}else if("valueExpressionInfo"in l){if(l.value){t[h]=l.value;continue}const m=await de(e,l);if(!m){t[h]=l.defaultValue;continue}n.set(h,m),t[h]=null}else switch(l.type){case"cim-effect-infos":if(l.effectInfos.some(m=>m.overrides.length)){r.set(h,{effects:await Promise.all(l.effectInfos.map(async m=>{const g=m.overrides.map(f=>O(e,f));return{effect:m.effect,compiledOverrides:(await Promise.all(g)).filter(T)}}))});break}t[h]=l.effectInfos.map(m=>m.effect);break;case"cim-marker-placement-param":l.overrides.length&&o.set(h,{placementInfo:l,compiledOverrides:(await Promise.all(l.overrides.map(m=>O(e,m)))).filter(T)}),t[h]=l.placement;break;case"text-rasterization-param":{if(l.overrides.length){const g=l.overrides.map(f=>O(e,f,l.useLegacyLabelEvaluationRules));c.set(h,{compiledOverrides:(await Promise.all(g)).filter(T),rasterizationParam:l,objectIdToResourceId:new Map});continue}const m={type:"cim-rasterization-info",resource:l.resource};t[h]=await s.fetchResourceImmediate(m)??null;break}case"sprite-rasterization-param":{if(l.overrides.length){const g=l.overrides.map(f=>O(e,f));c.set(h,{compiledOverrides:(await Promise.all(g)).filter(T),rasterizationParam:l,objectIdToResourceId:new Map});continue}if(l.resource.type==="animated"){c.set(h,{compiledOverrides:[],rasterizationParam:l,objectIdToResourceId:new Map});continue}const m={type:"cim-rasterization-info",resource:l.resource};t[h]=await s.fetchResourceImmediate(m)??null;break}case"cim-marker-transform-param":{const{params:m}=l;if(W(m)){const g={compiledMarkerInfos:[]};await Promise.all(m.map(async f=>{const p={props:{}};for(const _ in f)if(xe(f[_])){const y=await de(e,f[_]);p.compiledExpressionMap||(p.compiledExpressionMap=new Map);const x=p.compiledExpressionMap;y&&x.set(_,y)}else p.props[_]=f[_];g.compiledMarkerInfos.push(p)})),d.set(h,g)}else t[h]={type:"cim-marker-transform-info",infos:m};break}case"animation-params":{const{params:m}=l,g=ht(m);if(W(g)){const f=await Promise.all(g.map(p=>ee(p,e)));u.set(h,{params:f,propertyIdToResourceId:new Map,key:h})}else{const f=lt(g),p=await s.fetchResourceImmediate({type:"animation-info",resource:f});p!=null&&p.type==="sprite"&&(t[h]={dataRow:p.rect.y,dataColumn:p.rect.x})}break}default:t[h]=l}else t[h]=l}return new te(i,t,n,r,o,c,d,u)}constructor(e,s,i,t,n,r,o,c){this.inputMeshParams=e,this._resolvedMeshParams=s,this._dynamicProperties=i,this._dynamicEffectProperties=t,this._dynamicPlacementProperties=n,this._dynamicAsyncProperties=r,this._dynamicTransformProperties=o,this._dynamicAsyncAnimations=c,this.evaluator=d=>d}get hasDynamicProperties(){return!!(this._dynamicProperties.size||this._dynamicAsyncProperties.size||this._dynamicEffectProperties.size||this._dynamicTransformProperties.size||this._dynamicPlacementProperties.size||this._dynamicAsyncAnimations.size)}get evaluatedMeshParams(){return this._evaluatedMeshParams||(this._evaluatedMeshParams=this.evaluator(this._resolvedMeshParams)),this._evaluatedMeshParams}enqueueRequest(e,s,i){for(const t of this._dynamicAsyncProperties.values()){const n=Ie(t.rasterizationParam.resource);t.rasterizationParam.resource.type==="animated"&&t.rasterizationParam.resource.randomizeStartTime&&(n.primitiveName="__RESERVED__PRIMITIVE__NAME__",n.startGroup=pe(s.getObjectId()||0));for(const{primitiveName:o,propertyName:c,computed:d,defaultValue:u,valueExpressionInfo:h}of t.compiledOverrides)try{const l=t.rasterizationParam.resource.type==="animated"?n.primitiveName:o;Ze(n,l,c,d,s,i,u)}catch(l){dt().errorOnce(new ke("invalid-arcade-expression",`Encountered an error when evaluating the arcade expression '${h==null?void 0:h.expression}' (primitive: '${o}', property: '${c}')`,l))}const r=e.enqueueRequest({type:"cim-rasterization-info",resource:n});t.objectIdToResourceId.set(s.getObjectId(),r)}for(const t of this._dynamicAsyncAnimations.values()){const n=t.params.map(c=>I(c,s,i)).map(V).map(c=>c.simplify()),r=ye(n),o=e.enqueueRequest({type:"animation-info",resource:r});t.propertyIdToResourceId.set(s.getObjectId()+"."+t.key,o)}}evaluateMeshParams(e,s,i){for(const[t,n]of this._dynamicProperties.entries())this._resolvedMeshParams[t]=n.computed.readWithDefault(s,i,n.defaultValue);for(const[t,n]of this._dynamicPlacementProperties.entries())for(const{computed:r,defaultValue:o,propertyName:c}of n.compiledOverrides){const d=r.readWithDefault(s,i,o);n.placementInfo.placement[c]=d,this._resolvedMeshParams[t]=n.placementInfo.placement}for(const[t,n]of this._dynamicEffectProperties.entries())for(const r of n.effects){for(const{computed:o,defaultValue:c,propertyName:d}of r.compiledOverrides){const u=o.readWithDefault(s,i,c);r.effect[d]=u}this._resolvedMeshParams[t]=n.effects.map(o=>o.effect)}for(const[t,n]of this._dynamicTransformProperties.entries()){const r={type:"cim-marker-transform-info",infos:[]};for(const o of n.compiledMarkerInfos){const c={...o.props};if(o.compiledExpressionMap)for(const[d,u]of o.compiledExpressionMap){const h=u.computed.readWithDefault(s,i,u.defaultValue);c[d]=typeof h=="number"||typeof h=="boolean"?h:u.defaultValue}r.infos.push(c)}this._resolvedMeshParams[t]=r}for(const[t,n]of this._dynamicAsyncProperties.entries()){const r=n.objectIdToResourceId.get(s.getObjectId());if(r==null)continue;const o=e.getResource(r);this._resolvedMeshParams[t]=o}for(const[t,n]of this._dynamicAsyncAnimations.entries()){const r=n.propertyIdToResourceId.get(s.getObjectId()+"."+t);if(r==null)continue;const o=e.getResource(r);this._resolvedMeshParams[t]={dataRow:o.rect.y,dataColumn:o.rect.x}}return this._evaluatedMeshParams=this.evaluator(this._resolvedMeshParams),this.evaluatedMeshParams}}class $t{async createMeshWriter(e,s,i,t){const n=this._getMeshWriter(t.techniqueType),r=await te.create(e,s,t.inputParams),o=new n(t.id,r,t.optionalAttributes,i);return await o.loadDependencies(),o}_getMeshWriter(e){switch(e){case P.Fill:return We;case P.DotDensity:return Oe;case P.ComplexFill:return Ge;case P.PatternFill:return Ce;case P.OutlineFill:return Fe;case P.PatternOutlineFill:return Te;case P.ComplexOutlineFill:return Re;case P.Marker:return Be;case P.PieChart:return Ee;case P.Text:return me;case P.Line:return De;case P.TexturedLine:return ze;case P.Heatmap:return Le;case P.Label:return nt;case P.AnimatedMarker:return Qe;default:throw new Error("Internal Error: Mesh writer not in the registry")}}}export{$t as j,ut as r};
//# sourceMappingURL=MeshWriterRegistry-BbL9Moob.js.map
