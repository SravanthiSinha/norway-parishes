import{j as n,m as s,o as x,u,k as S,O as P,P as C,g$ as j,h0 as m,h1 as I,h2 as B,h3 as N,b7 as d,h4 as O,s as D,I as M}from"./index-U3f91iFJ.js";import{E as g,u as G,_ as V,x as z,f as F,g as R}from"./labelUtils-CN6gVbmf.js";var y;let p=y=class extends P{constructor(){super(...arguments),this.expression=null,this.title=null,this.value=null}readExpression(e,r){return r.value?g(r.value):e}writeExpression(e,r,l){this.value!=null&&(e=g(this.value)),e!=null&&(r[l]=e)}clone(){return new y({expression:this.expression,title:this.title,value:this.value})}};n([s({type:String,json:{write:{writerEnsuresNonNull:!0}}})],p.prototype,"expression",void 0),n([x("expression",["expression","value"])],p.prototype,"readExpression",null),n([u("expression")],p.prototype,"writeExpression",null),n([s({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],p.prototype,"title",void 0),n([s({json:{read:!1,write:!1}})],p.prototype,"value",void 0),p=y=n([S("esri.layers.support.LabelExpressionInfo")],p);const L=p;var h;const b=new C({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function f(e,r,l){return{enabled:!O(l==null?void 0:l.layer)}}function E(e){var r;return!e||e.origin!=="service"&&((r=e.layer)==null?void 0:r.type)!=="map-image"}function k(e){return(e==null?void 0:e.type)==="map-image"}function $(e){var r,l;return!!k(e)&&!!((l=(r=e.capabilities)==null?void 0:r.exportMap)!=null&&l.supportsArcadeExpressionForLabeling)}function J(e){return E(e)||$(e==null?void 0:e.layer)}let i=h=class extends P{static evaluateWhere(e,r){const l=(t,o,a)=>{switch(o){case"=":return t==a;case"<>":return t!=a;case">":return t>a;case">=":return t>=a;case"<":return t<a;case"<=":return t<=a}return!1};try{if(e==null)return!0;const t=e.split(" ");if(t.length===3)return l(r[t[0]],t[1],t[2]);if(t.length===7){const o=l(r[t[0]],t[1],t[2]),a=t[3],c=l(r[t[4]],t[5],t[6]);switch(a){case"AND":return o&&c;case"OR":return o||c}}return!1}catch{}}constructor(e){super(e),this.type="label",this.name=null,this.allowOverrun=!1,this.deconflictionStrategy="static",this.labelExpression=null,this.labelExpressionInfo=null,this.labelPlacement=null,this.labelPosition="curved",this.maxScale=0,this.minScale=0,this.repeatLabel=!0,this.repeatLabelDistance=null,this.symbol=N,this.useCodedValues=void 0,this.where=null}readLabelExpression(e,r){const l=r.labelExpressionInfo;if(!l||!l.value&&!l.expression)return e}writeLabelExpression(e,r,l){if(this.labelExpressionInfo){if(this.labelExpressionInfo.value!=null)e=G(this.labelExpressionInfo.value);else if(this.labelExpressionInfo.expression!=null){const t=V(this.labelExpressionInfo.expression);t&&(e="["+t+"]")}}e!=null&&(r[l]=e)}writeLabelExpressionInfo(e,r,l,t){if(e==null&&this.labelExpression!=null&&E(t))e=new L({expression:this.getLabelExpressionArcade()});else if(!e)return;const o=e.toJSON(t);o.expression&&(r[l]=o)}writeMaxScale(e,r){(e||this.minScale)&&(r.maxScale=e)}writeMinScale(e,r){(e||this.maxScale)&&(r.minScale=e)}getLabelExpression(){return z(this)}getLabelExpressionArcade(){return F(this)}getLabelExpressionSingleField(){return R(this)}hash(){return JSON.stringify(this)}clone(){return new h({allowOverrun:this.allowOverrun,deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:d(this.labelExpressionInfo),labelPosition:this.labelPosition,labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,repeatLabel:this.repeatLabel,repeatLabelDistance:this.repeatLabelDistance,symbol:d(this.symbol),where:this.where,useCodedValues:this.useCodedValues})}};n([s({type:String,json:{write:!0}})],i.prototype,"name",void 0),n([s({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1},"portal-item":{default:!1,write:{overridePolicy:f}}}}})],i.prototype,"allowOverrun",void 0),n([s({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1},"portal-item":{default:"static",write:{overridePolicy:f}}}}})],i.prototype,"deconflictionStrategy",void 0),n([s({type:String,json:{write:{overridePolicy(e,r,l){return this.labelExpressionInfo&&(l==null?void 0:l.origin)==="service"&&$(l.layer)?{enabled:!1}:{allowNull:!0}}}}})],i.prototype,"labelExpression",void 0),n([x("labelExpression")],i.prototype,"readLabelExpression",null),n([u("labelExpression")],i.prototype,"writeLabelExpression",null),n([s({type:L,json:{write:{overridePolicy:(e,r,l)=>J(l)?{allowNull:!0}:{enabled:!1}}}})],i.prototype,"labelExpressionInfo",void 0),n([u("labelExpressionInfo")],i.prototype,"writeLabelExpressionInfo",null),n([s({type:b.apiValues,json:{type:b.jsonValues,read:b.read,write:b.write}})],i.prototype,"labelPlacement",void 0),n([s({type:["curved","parallel"],json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],i.prototype,"labelPosition",void 0),n([s({type:Number})],i.prototype,"maxScale",void 0),n([u("maxScale")],i.prototype,"writeMaxScale",null),n([s({type:Number})],i.prototype,"minScale",void 0),n([u("minScale")],i.prototype,"writeMinScale",null),n([s({type:Boolean,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:f}}}}})],i.prototype,"repeatLabel",void 0),n([s({type:Number,cast:j,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:f}}}}})],i.prototype,"repeatLabelDistance",void 0),n([s({types:B,json:{origins:{"web-scene":{types:I,write:m,default:null}},write:m,default:null}})],i.prototype,"symbol",void 0),n([s({type:Boolean,json:{write:!0}})],i.prototype,"useCodedValues",void 0),n([s({type:String,json:{write:!0}})],i.prototype,"where",void 0),i=h=n([S("esri.layers.support.LabelClass")],i);const U=i,v=()=>D.getLogger("esri.layers.support.labelingInfo"),H=/\[([^[\]]+)\]/gi;function Q(e,r,l){return e?e.map(t=>{var a;const o=new U;if(o.read(t,l),o.labelExpression){const c=r.fields||((a=r.layerDefinition)==null?void 0:a.fields)||this.fields;o.labelExpression=o.labelExpression.replaceAll(H,(w,A)=>`[${W(A,c)}]`)}return o}):null}function W(e,r){if(!r)return e;const l=e.toLowerCase();for(let t=0;t<r.length;t++){const o=r[t].name;if(o.toLowerCase()===l)return o}return e}const _={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryMultiPatch:["always-horizontal"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along","above-along","below-along"],esriGeometryMultipoint:null,esriGeometryEnvelope:null};function T(e,r){const l=[];for(const t of e){const o=t.labelPlacement,a=_[r];if(!t.symbol)return v().warn("No ILabelClass symbol specified."),[];if(!a)return v().error(new M("labeling:unsupported-geometry-type",`Unable to create labels for layer, geometry type '${r}' is not supported`)),[];if(a.includes(o))l.push(t);else{const c=a[0];o&&v().warn(`Found invalid label placement type ${o} for ${r}. Defaulting to ${c}`);const w=t.clone();w.labelPlacement=c,l.push(w)}}return l}export{U as C,T as a,Q as n};
//# sourceMappingURL=labelingInfo-CqSOJnwT.js.map
