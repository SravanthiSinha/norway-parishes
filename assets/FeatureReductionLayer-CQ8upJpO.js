import{M as re,O as z,j as n,m as o,k as w,b7 as d,g$ as f,t as O,gO as R,be as k,$ as U,hU as J,u as _,gG as D,o as S,dA as T,jk as ie,eE as se,jl as ne,s as oe,I as ae,V as H,ao as le,al as ue,jm as pe,jn as E}from"./index-5zHX_dwk.js";import{p as K,l as P,a as de}from"./commonProperties-6NkVIVhw.js";import{t as $,p as N}from"./FeatureReductionSelection-CSC7OKga.js";import{z as Q}from"./featureLayerUtils-CyGTKntI.js";import{C as W}from"./labelingInfo-DZyrwEmI.js";import{x as X}from"./MD5-C9MwAd2G.js";let v=class extends re(z){constructor(s){super(s),this.expression=null,this.title=null,this.returnType=null}};n([o({type:String,json:{write:!0}})],v.prototype,"expression",void 0),n([o({type:String,json:{write:!0}})],v.prototype,"title",void 0),n([o({type:String,json:{write:!0}})],v.prototype,"returnType",void 0),v=n([w("esri.layers.support.ExpressionInfo")],v);const C=v;var F;let c=F=class extends z{constructor(r){super(r),this.isAutoGenerated=!1,this.name=null,this.alias=null,this.onStatisticField=null,this.onStatisticExpression=null,this.statisticType=null}clone(){return new F({name:this.name,alias:this.alias,isAutoGenerated:this.isAutoGenerated,onStatisticExpression:d(this.onStatisticExpression),onStatisticField:this.onStatisticField,statisticType:this.statisticType})}};n([o({type:Boolean,json:{write:!0}})],c.prototype,"isAutoGenerated",void 0),n([o({type:String,json:{write:!0}})],c.prototype,"name",void 0),n([o({type:String,json:{write:!0}})],c.prototype,"alias",void 0),n([o({type:String,json:{write:!0}})],c.prototype,"onStatisticField",void 0),n([o({type:C,json:{write:!0}})],c.prototype,"onStatisticExpression",void 0),n([o({type:String,json:{write:!0}})],c.prototype,"statisticType",void 0),c=F=n([w("esri.layers.support.AggregateField")],c);const m=c;var V;let p=V=class extends ${constructor(r){super(r),this.type="binning",this.binType="geohash",this.fixedBinLevel=null,this.labelingInfo=null,this.labelsVisible=!0,this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.size=f("12px"),this.fields=[],this.renderer=null}writeFields(r,s,e){const t=r.filter(i=>i.statisticType!=="avg_angle").map(i=>i.toJSON());O(e,t,s)}readRenderer(r,s,e){var i;const t=(i=s.drawingInfo)==null?void 0:i.renderer;return t?R(t,s,e)??void 0:Q(s,e)}clone(){return new V({fields:d(this.fields),fixedBinLevel:this.fixedBinLevel,labelingInfo:d(this.labelingInfo),labelsVisible:this.labelsVisible,maxScale:this.maxScale,popupEnabled:this.popupEnabled,popupTemplate:d(this.popupTemplate),renderer:d(this.renderer),binType:d(this.binType),size:this.size})}};n([k({binning:"binning"})],p.prototype,"type",void 0),n([k({geohash:"geohash",square:"square"}),o({type:["geohash","square"]})],p.prototype,"binType",void 0),n([o({type:Number,json:{write:!0}})],p.prototype,"fixedBinLevel",void 0),n([o({type:[W],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],p.prototype,"labelingInfo",void 0),n([o(K)],p.prototype,"labelsVisible",void 0),n([o({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],p.prototype,"maxScale",void 0),n([o(P)],p.prototype,"popupEnabled",void 0),n([o({type:U,json:{name:"popupInfo",write:!0}})],p.prototype,"popupTemplate",void 0),n([o({cast:r=>r==="auto"?r:J(f(r))})],p.prototype,"size",void 0),n([o({type:[m],json:{write:!0}})],p.prototype,"fields",void 0),n([_("fields")],p.prototype,"writeFields",null),n([o({types:D,json:{write:{target:"drawingInfo.renderer"}}})],p.prototype,"renderer",void 0),n([S("renderer",["drawingInfo.renderer"])],p.prototype,"readRenderer",null),p=V=n([w("esri.layers.support.FeatureReductionBinning")],p);const Y=p;var j;function L(r){var s;return r.type==="simple"&&!((s=r.visualVariables)!=null&&s.length)}let l=j=class extends z{constructor(r){super(r),this.type="cluster",this.clusterRadius=f("80px"),this.clusterMinSize=f("12px"),this.clusterMaxSize=f("50px"),this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.renderer=null,this.symbol=null,this.labelingInfo=null,this.labelsVisible=!0,this.fields=[]}readRenderer(r,s,e){var i,a;const t=(i=s.drawingInfo)==null?void 0:i.renderer;return(a=t==null?void 0:t.authoringInfo)!=null&&a.isAutoGenerated?null:t?L(t)?null:R(t,s,e)??void 0:Q(s,e)}readSymbol(r,s,e){var i,a;const t=(i=s.drawingInfo)==null?void 0:i.renderer;if((a=t==null?void 0:t.authoringInfo)!=null&&a.isAutoGenerated)return null;if(t&&L(t)){const u=R(t,s,e);return u==null?void 0:u.symbol}return null}writeSymbol(r,s,e,t){var a,u;const i=(u=(a=this.renderer)==null?void 0:a.authoringInfo)==null?void 0:u.isAutoGenerated;if(!this.renderer||i){const h=new T({symbol:r});s.drawingInfo={renderer:h.write({},t)}}}writeFields(r,s,e){const t=r.filter(i=>i.statisticType!=="avg_angle").map(i=>i.toJSON());O(e,t,s)}readFields(r,s,e){return r.filter(t=>!t.isAutoGenerated).map(t=>m.fromJSON(t))}clone(){return new j({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:d(this.labelingInfo),labelsVisible:this.labelsVisible,fields:d(this.fields),maxScale:this.maxScale,renderer:d(this.renderer),symbol:d(this.symbol),popupEnabled:this.popupEnabled,popupTemplate:d(this.popupTemplate)})}};n([o({type:["cluster"],readOnly:!0,json:{write:!0}})],l.prototype,"type",void 0),n([o({cast:r=>r==="auto"?r:J(f(r)),json:{write:!0}})],l.prototype,"clusterRadius",void 0),n([o({type:Number,cast:f,json:{write:!0}})],l.prototype,"clusterMinSize",void 0),n([o({type:Number,cast:f,json:{write:!0}})],l.prototype,"clusterMaxSize",void 0),n([o({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],l.prototype,"maxScale",void 0),n([o(P)],l.prototype,"popupEnabled",void 0),n([o({type:U,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],l.prototype,"popupTemplate",void 0),n([o({types:D,json:{write:{target:"drawingInfo.renderer"}}})],l.prototype,"renderer",void 0),n([S("renderer",["drawingInfo.renderer"])],l.prototype,"readRenderer",null),n([o({types:ie})],l.prototype,"symbol",void 0),n([S("symbol",["drawingInfo.renderer"])],l.prototype,"readSymbol",null),n([_("symbol")],l.prototype,"writeSymbol",null),n([o({type:[W],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],l.prototype,"labelingInfo",void 0),n([o(K)],l.prototype,"labelsVisible",void 0),n([o({type:[m],json:{write:!0}})],l.prototype,"fields",void 0),n([_("fields")],l.prototype,"writeFields",null),n([S("fields")],l.prototype,"readFields",null),l=j=n([w("esri.layers.support.FeatureReductionCluster")],l);const Z=l,q={key:"type",base:$,typeMap:{cluster:Z,binning:Y}},ce={types:{key:"type",base:$,typeMap:{selection:N,cluster:Z,binning:Y}},json:{name:"layerDefinition.featureReduction",write:{allowNull:!0},origins:{"web-map":{types:q},"portal-item":{types:q},"web-scene":{types:{key:"type",base:$,typeMap:{selection:N}},name:"layerDefinition.featureReduction",write:{layerContainerTypes:de}}}}},fe=()=>oe.getLogger("esri.views.2d.layers.support.clusterUtils");H.add("esri-cluster-arcade-enabled",!0);const ye=H("esri-cluster-arcade-enabled"),me=new Set(["simple-line","simple-fill","picture-fill"]);function B(r,s){let e=s.clone();if(!be(e))return e;if(s.getSymbols().some(t=>me.has(t.type))&&(e=new T({symbol:new se})),e.authoringInfo||(e.authoringInfo=new ne),e.authoringInfo.isAutoGenerated=!0,"visualVariables"in e){const t=(e.visualVariables||[]).filter(i=>i.valueExpression!=="$view.scale");t.forEach(i=>{i.type==="rotation"?i.field?i.field=y(r,i.field,"avg_angle","number"):i.valueExpression&&(i.field=g(r,i.valueExpression,"avg_angle","number"),i.valueExpression=null):i.normalizationField?(i.field=y(r,i.field,"avg_norm","number",i.normalizationField),i.normalizationField=null):i.field?i.field=y(r,i.field,"avg","number"):i.valueExpression&&(i.field=g(r,i.valueExpression,"avg","number"),i.valueExpression=null)}),e.visualVariables=t}switch(e.type){case"simple":break;case"pie-chart":for(const t of e.attributes)t.field?t.field=y(r,t.field,"sum","number"):t.valueExpression&&(t.field=g(r,t.valueExpression,"sum","number"),t.valueExpression=null);break;case"unique-value":e.field?e.field=y(r,e.field,"mode","string"):e.valueExpression&&(e.field=g(r,e.valueExpression,"mode","string"),e.valueExpression=null);break;case"class-breaks":e.normalizationField?(e.field=y(r,e.field,"avg_norm","number",e.normalizationField),e.normalizationField=null):e.field?e.field=y(r,e.field,"avg","number"):e.valueExpression&&(e.field=g(r,e.valueExpression,"avg","number"),e.valueExpression=null)}return e}const be=r=>{const s=e=>fe().error(new ae("Unsupported-renderer",e,{renderer:r}));if(!r)return!1;switch(r.type){case"unique-value":if(r.field2||r.field3)return s("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1;break;case"class-breaks":if(r.normalizationField){const e=r.normalizationType;if(e!=="field")return s(`FeatureReductionCluster does not support a normalizationType of ${e}`),!1}break;case"simple":case"pie-chart":break;default:return s(`FeatureReductionCluster does not support renderers of type ${r.type}`),!1}if(!ye){if("valueExpression"in r&&r.valueExpression)return s("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in r&&r.visualVariables||[]).some(e=>!(!("valueExpression"in e)||!e.valueExpression)))return s("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function ve(r,s,e){switch(r){case"sum":return`cluster_sum_${s}`;case"avg":case"avg_angle":return`cluster_avg_${s}`;case"mode":return`cluster_type_${s}`;case"avg_norm":{const t=e,i="field",a=s.toLowerCase()+",norm:"+i+","+t.toLowerCase();return"cluster_avg_"+X(a)}}}function g(r,s,e,t){const i=X(s),a=e==="mode"?`cluster_type_${i}`:e==="sum"?`cluster_sum_${i}`:`cluster_avg_${i}`;return r.some(u=>u.name===a)||r.push(new m({name:a,isAutoGenerated:!0,onStatisticExpression:new C({expression:s,returnType:t}),statisticType:e})),a}function y(r,s,e,t,i){if(s==="cluster_count"||r.some(u=>u.name===s))return s;const a=ve(e,s,i);return r.some(u=>u.name===a)||(e==="avg_norm"?r.push(new m({name:a,isAutoGenerated:!0,onStatisticExpression:new C({expression:`$feature.${s} / $feature.${i}`,returnType:t}),statisticType:"avg"})):r.push(new m({name:a,isAutoGenerated:!0,onStatisticField:s,statisticType:e}))),a}const Ee=r=>{let s=class extends r{constructor(...e){super(...e),this.addHandles(le(()=>this.renderer,()=>{if(this.featureReduction){const t=this._normalizeFeatureReduction(this.featureReduction);this._set("featureReduction",t)}},ue))}set featureReduction(e){const t=this._normalizeFeatureReduction(e);this._set("featureReduction",t)}set renderer(e){}_withClusterVariable(e,t,i){const a=e.clone();return"visualVariables"in a&&(a.visualVariables||(a.visualVariables=[]),a.visualVariables.some(u=>u.type==="size")||a.visualVariables.push(new pe({field:"cluster_count",stops:[new E({value:1}),new E({useMinValue:!0,size:t}),new E({useMaxValue:!0,size:i})]}))),a}_normalizeFeatureReduction(e){var G;if((e==null?void 0:e.type)!=="cluster")return e;const t=e.clone(),i=[new m({name:"cluster_count",alias:"cluster_count",isAutoGenerated:!0,statisticType:"count"})],a=(t.fields??[]).filter(b=>!b.isAutoGenerated),u=e.renderer&&!((G=e.renderer.authoringInfo)!=null&&G.isAutoGenerated),{clusterMinSize:h,clusterMaxSize:I}=t;if(u){t.fields=[...i,...a];const b=this._withClusterVariable(t.renderer,h,I);return t.effectiveFeatureRenderer=b,t.effectiveClusterRenderer=b,t}if(e.symbol){if(t.fields=[...i,...a],t.renderer=null,!this.renderer)return t.effectiveFeatureRenderer=null,t.effectiveClusterRenderer=null,t;const b=B(i,this.renderer),x=this._withClusterVariable(b,h,I),ee="visualVariables"in x&&x.visualVariables?x.visualVariables:[],te=new T({symbol:e.symbol,visualVariables:ee});return t.fields=[...i,...a],t.effectiveFeatureRenderer=x,t.effectiveClusterRenderer=te,t}if(!this.renderer)return e;const A=B(i,this.renderer);t.fields=[...i,...a],t.renderer=A;const M=this._withClusterVariable(A,h,I);return t.effectiveFeatureRenderer=M,t.effectiveClusterRenderer=M,t}};return n([o(ce)],s.prototype,"featureReduction",null),s=n([w("esri.layers.mixins.FeatureReductionLayer")],s),s};export{Ee as c,ce as p};
//# sourceMappingURL=FeatureReductionLayer-CQ8upJpO.js.map
