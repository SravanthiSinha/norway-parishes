import{j as s,m as r,P as l,gT as c,k as d,g0 as y,gU as x,aa as E,M as v,o as I,u as w,gV as g}from"./index-Vdm0PCas.js";var u;let n=u=class extends l{constructor(e){super(e)}async collectRequiredFields(e,t){return c(e,t,this.expression)}clone(){return new u({expression:this.expression,title:this.title})}equals(e){return this.expression===e.expression&&this.title===e.title}};s([r({type:String,json:{write:!0}})],n.prototype,"expression",void 0),s([r({type:String,json:{write:!0}})],n.prototype,"title",void 0),n=u=s([d("esri.symbols.support.FeatureExpressionInfo")],n);const p=n;function F(e){return 1/(x[e]||1)}function $(){const e=Object.keys(x);return y(e,"decimal-degrees"),e.sort(),e}const j=$();var a;const i=E()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),f=new v({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let o=a=class extends l{constructor(e){super(e),this.offset=null}readFeatureExpressionInfo(e,t){return e??(t.featureExpression&&t.featureExpression.value===0?{expression:"0"}:void 0)}writeFeatureExpressionInfo(e,t,h,m){t[h]=e.write({},m),e.expression==="0"&&(t.featureExpression={value:0})}get mode(){const{offset:e,featureExpressionInfo:t}=this;return this._isOverridden("mode")?this._get("mode"):e!=null||t?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,t){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,t):null}clone(){return new a({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}equals(e){return this.mode===e.mode&&this.offset===e.offset&&this.unit===e.unit&&g(this.featureExpressionInfo,e.featureExpressionInfo)}};s([r({type:p,json:{write:!0}})],o.prototype,"featureExpressionInfo",void 0),s([I("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],o.prototype,"readFeatureExpressionInfo",null),s([w("featureExpressionInfo",{featureExpressionInfo:{type:p},"featureExpression.value":{type:[0]}})],o.prototype,"writeFeatureExpressionInfo",null),s([r({type:i.apiValues,nonNullable:!0,json:{type:i.jsonValues,read:i.read,write:{writer:i.write,isRequired:!0}}})],o.prototype,"mode",null),s([r({type:Number,json:{write:!0}})],o.prototype,"offset",void 0),s([r({type:j,json:{type:String,read:f.read,write:f.write}})],o.prototype,"unit",null),o=a=s([d("esri.symbols.support.ElevationInfo")],o);const k=o;export{k as h,F as n};
//# sourceMappingURL=ElevationInfo-8bL8CsLE.js.map
