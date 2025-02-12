import{O as ie,P as V,j as n,m as o,k as w,b7 as d,be as k,$ as O,hT as J,gX as f,u as R,gB as U,o as S,t as D,gK as _,jk as re,dA as z,T as H,eE as se,jl as ne,I as oe,s as ae,ao as le,al as ue,jm as pe,jn as E}from"./index-j6yFHuRy.js";import{p as K,l as P,a as de}from"./commonProperties-B1Shr_B6.js";import{t as $,p as N}from"./FeatureReductionSelection-oIgsWcVf.js";import{z as X}from"./featureLayerUtils-CTzMywEW.js";import{C as Q}from"./labelingInfo-DqMJRRbk.js";import{x as W}from"./MD5-C9MwAd2G.js";let v=class extends ie(V){constructor(s){super(s),this.expression=null,this.title=null,this.returnType=null}};n([o({type:String,json:{write:!0}})],v.prototype,"expression",void 0),n([o({type:String,json:{write:!0}})],v.prototype,"title",void 0),n([o({type:String,json:{write:!0}})],v.prototype,"returnType",void 0),v=n([w("esri.layers.support.ExpressionInfo")],v);const C=v;var F;let c=F=class extends V{constructor(i){super(i),this.isAutoGenerated=!1,this.name=null,this.alias=null,this.onStatisticField=null,this.onStatisticExpression=null,this.statisticType=null}clone(){return new F({name:this.name,alias:this.alias,isAutoGenerated:this.isAutoGenerated,onStatisticExpression:d(this.onStatisticExpression),onStatisticField:this.onStatisticField,statisticType:this.statisticType})}};n([o({type:Boolean,json:{write:!0}})],c.prototype,"isAutoGenerated",void 0),n([o({type:String,json:{write:!0}})],c.prototype,"name",void 0),n([o({type:String,json:{write:!0}})],c.prototype,"alias",void 0),n([o({type:String,json:{write:!0}})],c.prototype,"onStatisticField",void 0),n([o({type:C,json:{write:!0}})],c.prototype,"onStatisticExpression",void 0),n([o({type:String,json:{write:!0}})],c.prototype,"statisticType",void 0),c=F=n([w("esri.layers.support.AggregateField")],c);const m=c;var j;let p=j=class extends ${constructor(i){super(i),this.type="binning",this.binType="geohash",this.fixedBinLevel=null,this.labelingInfo=null,this.labelsVisible=!0,this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.size=f("12px"),this.fields=[],this.renderer=null}writeFields(i,s,e){const t=i.filter(r=>r.statisticType!=="avg_angle").map(r=>r.toJSON());D(e,t,s)}readRenderer(i,s,e){var r;const t=(r=s.drawingInfo)==null?void 0:r.renderer;return t?_(t,s,e)??void 0:X(s,e)}clone(){return new j({fields:d(this.fields),fixedBinLevel:this.fixedBinLevel,labelingInfo:d(this.labelingInfo),labelsVisible:this.labelsVisible,maxScale:this.maxScale,popupEnabled:this.popupEnabled,popupTemplate:d(this.popupTemplate),renderer:d(this.renderer),binType:d(this.binType),size:this.size})}};n([k({binning:"binning"})],p.prototype,"type",void 0),n([k({geohash:"geohash",square:"square"}),o({type:["geohash","square"]})],p.prototype,"binType",void 0),n([o({type:Number,json:{write:!0}})],p.prototype,"fixedBinLevel",void 0),n([o({type:[Q],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],p.prototype,"labelingInfo",void 0),n([o(K)],p.prototype,"labelsVisible",void 0),n([o({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],p.prototype,"maxScale",void 0),n([o(P)],p.prototype,"popupEnabled",void 0),n([o({type:O,json:{name:"popupInfo",write:!0}})],p.prototype,"popupTemplate",void 0),n([o({cast:i=>i==="auto"?i:J(f(i))})],p.prototype,"size",void 0),n([o({type:[m],json:{write:!0}})],p.prototype,"fields",void 0),n([R("fields")],p.prototype,"writeFields",null),n([o({types:U,json:{write:{target:"drawingInfo.renderer"}}})],p.prototype,"renderer",void 0),n([S("renderer",["drawingInfo.renderer"])],p.prototype,"readRenderer",null),p=j=n([w("esri.layers.support.FeatureReductionBinning")],p);const Y=p;var T;function L(i){var s;return i.type==="simple"&&!((s=i.visualVariables)!=null&&s.length)}let l=T=class extends V{constructor(i){super(i),this.type="cluster",this.clusterRadius=f("80px"),this.clusterMinSize=f("12px"),this.clusterMaxSize=f("50px"),this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.renderer=null,this.symbol=null,this.labelingInfo=null,this.labelsVisible=!0,this.fields=[]}readRenderer(i,s,e){var r,a;const t=(r=s.drawingInfo)==null?void 0:r.renderer;return(a=t==null?void 0:t.authoringInfo)!=null&&a.isAutoGenerated?null:t?L(t)?null:_(t,s,e)??void 0:X(s,e)}readSymbol(i,s,e){var r,a;const t=(r=s.drawingInfo)==null?void 0:r.renderer;if((a=t==null?void 0:t.authoringInfo)!=null&&a.isAutoGenerated)return null;if(t&&L(t)){const u=_(t,s,e);return u==null?void 0:u.symbol}return null}writeSymbol(i,s,e,t){var a,u;const r=(u=(a=this.renderer)==null?void 0:a.authoringInfo)==null?void 0:u.isAutoGenerated;if(!this.renderer||r){const h=new z({symbol:i});s.drawingInfo={renderer:h.write({},t)}}}writeFields(i,s,e){const t=i.filter(r=>r.statisticType!=="avg_angle").map(r=>r.toJSON());D(e,t,s)}readFields(i,s,e){return i.filter(t=>!t.isAutoGenerated).map(t=>m.fromJSON(t))}clone(){return new T({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:d(this.labelingInfo),labelsVisible:this.labelsVisible,fields:d(this.fields),maxScale:this.maxScale,renderer:d(this.renderer),symbol:d(this.symbol),popupEnabled:this.popupEnabled,popupTemplate:d(this.popupTemplate)})}};n([o({type:["cluster"],readOnly:!0,json:{write:!0}})],l.prototype,"type",void 0),n([o({cast:i=>i==="auto"?i:J(f(i)),json:{write:!0}})],l.prototype,"clusterRadius",void 0),n([o({type:Number,cast:f,json:{write:!0}})],l.prototype,"clusterMinSize",void 0),n([o({type:Number,cast:f,json:{write:!0}})],l.prototype,"clusterMaxSize",void 0),n([o({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],l.prototype,"maxScale",void 0),n([o(P)],l.prototype,"popupEnabled",void 0),n([o({type:O,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],l.prototype,"popupTemplate",void 0),n([o({types:U,json:{write:{target:"drawingInfo.renderer"}}})],l.prototype,"renderer",void 0),n([S("renderer",["drawingInfo.renderer"])],l.prototype,"readRenderer",null),n([o({types:re})],l.prototype,"symbol",void 0),n([S("symbol",["drawingInfo.renderer"])],l.prototype,"readSymbol",null),n([R("symbol")],l.prototype,"writeSymbol",null),n([o({type:[Q],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],l.prototype,"labelingInfo",void 0),n([o(K)],l.prototype,"labelsVisible",void 0),n([o({type:[m],json:{write:!0}})],l.prototype,"fields",void 0),n([R("fields")],l.prototype,"writeFields",null),n([S("fields")],l.prototype,"readFields",null),l=T=n([w("esri.layers.support.FeatureReductionCluster")],l);const Z=l,q={key:"type",base:$,typeMap:{cluster:Z,binning:Y}},ce={types:{key:"type",base:$,typeMap:{selection:N,cluster:Z,binning:Y}},json:{name:"layerDefinition.featureReduction",write:{allowNull:!0},origins:{"web-map":{types:q},"portal-item":{types:q},"web-scene":{types:{key:"type",base:$,typeMap:{selection:N}},name:"layerDefinition.featureReduction",write:{layerContainerTypes:de}}}}},fe=()=>ae.getLogger("esri.views.2d.layers.support.clusterUtils");H.add("esri-cluster-arcade-enabled",!0);const ye=H("esri-cluster-arcade-enabled"),me=new Set(["simple-line","simple-fill","picture-fill"]);function B(i,s){let e=s.clone();if(!be(e))return e;if(s.getSymbols().some(t=>me.has(t.type))&&(e=new z({symbol:new se})),e.authoringInfo||(e.authoringInfo=new ne),e.authoringInfo.isAutoGenerated=!0,"visualVariables"in e){const t=(e.visualVariables||[]).filter(r=>r.valueExpression!=="$view.scale");t.forEach(r=>{r.type==="rotation"?r.field?r.field=y(i,r.field,"avg_angle","number"):r.valueExpression&&(r.field=g(i,r.valueExpression,"avg_angle","number"),r.valueExpression=null):r.normalizationField?(r.field=y(i,r.field,"avg_norm","number",r.normalizationField),r.normalizationField=null):r.field?r.field=y(i,r.field,"avg","number"):r.valueExpression&&(r.field=g(i,r.valueExpression,"avg","number"),r.valueExpression=null)}),e.visualVariables=t}switch(e.type){case"simple":break;case"pie-chart":for(const t of e.attributes)t.field?t.field=y(i,t.field,"sum","number"):t.valueExpression&&(t.field=g(i,t.valueExpression,"sum","number"),t.valueExpression=null);break;case"unique-value":e.field?e.field=y(i,e.field,"mode","string"):e.valueExpression&&(e.field=g(i,e.valueExpression,"mode","string"),e.valueExpression=null);break;case"class-breaks":e.normalizationField?(e.field=y(i,e.field,"avg_norm","number",e.normalizationField),e.normalizationField=null):e.field?e.field=y(i,e.field,"avg","number"):e.valueExpression&&(e.field=g(i,e.valueExpression,"avg","number"),e.valueExpression=null)}return e}const be=i=>{const s=e=>fe().error(new oe("Unsupported-renderer",e,{renderer:i}));if(!i)return!1;switch(i.type){case"unique-value":if(i.field2||i.field3)return s("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1;break;case"class-breaks":if(i.normalizationField){const e=i.normalizationType;if(e!=="field")return s(`FeatureReductionCluster does not support a normalizationType of ${e}`),!1}break;case"simple":case"pie-chart":break;default:return s(`FeatureReductionCluster does not support renderers of type ${i.type}`),!1}if(!ye){if("valueExpression"in i&&i.valueExpression)return s("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in i&&i.visualVariables||[]).some(e=>!(!("valueExpression"in e)||!e.valueExpression)))return s("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function ve(i,s,e){switch(i){case"sum":return`cluster_sum_${s}`;case"avg":case"avg_angle":return`cluster_avg_${s}`;case"mode":return`cluster_type_${s}`;case"avg_norm":{const t=e,r="field",a=s.toLowerCase()+",norm:"+r+","+t.toLowerCase();return"cluster_avg_"+W(a)}}}function g(i,s,e,t){const r=W(s),a=e==="mode"?`cluster_type_${r}`:e==="sum"?`cluster_sum_${r}`:`cluster_avg_${r}`;return i.some(u=>u.name===a)||i.push(new m({name:a,isAutoGenerated:!0,onStatisticExpression:new C({expression:s,returnType:t}),statisticType:e})),a}function y(i,s,e,t,r){if(s==="cluster_count"||i.some(u=>u.name===s))return s;const a=ve(e,s,r);return i.some(u=>u.name===a)||(e==="avg_norm"?i.push(new m({name:a,isAutoGenerated:!0,onStatisticExpression:new C({expression:`$feature.${s} / $feature.${r}`,returnType:t}),statisticType:"avg"})):i.push(new m({name:a,isAutoGenerated:!0,onStatisticField:s,statisticType:e}))),a}const Ee=i=>{let s=class extends i{constructor(...e){super(...e),this.addHandles(le(()=>this.renderer,()=>{if(this.featureReduction){const t=this._normalizeFeatureReduction(this.featureReduction);this._set("featureReduction",t)}},ue))}set featureReduction(e){const t=this._normalizeFeatureReduction(e);this._set("featureReduction",t)}set renderer(e){}_withClusterVariable(e,t,r){const a=e.clone();return"visualVariables"in a&&(a.visualVariables||(a.visualVariables=[]),a.visualVariables.some(u=>u.type==="size")||a.visualVariables.push(new pe({field:"cluster_count",stops:[new E({value:1}),new E({useMinValue:!0,size:t}),new E({useMaxValue:!0,size:r})]}))),a}_normalizeFeatureReduction(e){var G;if((e==null?void 0:e.type)!=="cluster")return e;const t=e.clone(),r=[new m({name:"cluster_count",alias:"cluster_count",isAutoGenerated:!0,statisticType:"count"})],a=(t.fields??[]).filter(b=>!b.isAutoGenerated),u=e.renderer&&!((G=e.renderer.authoringInfo)!=null&&G.isAutoGenerated),{clusterMinSize:h,clusterMaxSize:I}=t;if(u){t.fields=[...r,...a];const b=this._withClusterVariable(t.renderer,h,I);return t.effectiveFeatureRenderer=b,t.effectiveClusterRenderer=b,t}if(e.symbol){if(t.fields=[...r,...a],t.renderer=null,!this.renderer)return t.effectiveFeatureRenderer=null,t.effectiveClusterRenderer=null,t;const b=B(r,this.renderer),x=this._withClusterVariable(b,h,I),ee="visualVariables"in x&&x.visualVariables?x.visualVariables:[],te=new z({symbol:e.symbol,visualVariables:ee});return t.fields=[...r,...a],t.effectiveFeatureRenderer=x,t.effectiveClusterRenderer=te,t}if(!this.renderer)return e;const A=B(r,this.renderer);t.fields=[...r,...a],t.renderer=A;const M=this._withClusterVariable(A,h,I);return t.effectiveFeatureRenderer=M,t.effectiveClusterRenderer=M,t}};return n([o(ce)],s.prototype,"featureReduction",null),s=n([w("esri.layers.mixins.FeatureReductionLayer")],s),s};export{Ee as c,ce as p};
//# sourceMappingURL=FeatureReductionLayer-Cs0bsQhr.js.map
