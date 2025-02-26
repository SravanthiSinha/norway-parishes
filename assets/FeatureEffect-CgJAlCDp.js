import{P as j,j as i,m as l,fk as N,p as L,k as S,O as g,fl as U,b7 as d,I as b,t as v,fm as c,fn as p}from"./index-U3f91iFJ.js";var y;const w=new j({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),h=new j({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let n=y=class extends g{constructor(e){super(e),this.where=null,this.geometry=null,this.spatialRelationship="intersects",this.distance=void 0,this.objectIds=null,this.units=null,this.timeExtent=null}createQuery(e={}){const{where:t,geometry:r,spatialRelationship:a,timeExtent:s,objectIds:u,units:f,distance:I}=this;return new U({geometry:d(r),objectIds:d(u),spatialRelationship:a,timeExtent:d(s),where:t,units:f,distance:I,...e})}clone(){const{where:e,geometry:t,spatialRelationship:r,timeExtent:a,objectIds:s,units:u,distance:f}=this;return new y({geometry:d(t),objectIds:d(s),spatialRelationship:r,timeExtent:d(a),where:e,units:u,distance:f})}};i([l({type:String,json:{write:!0}})],n.prototype,"where",void 0),i([l({types:N,json:{write:!0}})],n.prototype,"geometry",void 0),i([l({type:w.apiValues,json:{name:"spatialRel",read:{reader:w.read},write:{allowNull:!1,writer:w.write,overridePolicy(){return{enabled:this.geometry!=null}}}}})],n.prototype,"spatialRelationship",void 0),i([l({type:Number,json:{write:{overridePolicy(e){return{enabled:e!=null&&this.geometry!=null}}}}})],n.prototype,"distance",void 0),i([l({type:[Number],json:{write:!0}})],n.prototype,"objectIds",void 0),i([l({type:h.apiValues,json:{read:h.read,write:{writer:h.write,overridePolicy(e){return{enabled:e!=null&&this.geometry!=null}}}}})],n.prototype,"units",void 0),i([l({type:L,json:{write:!0}})],n.prototype,"timeExtent",void 0),n=y=i([S("esri.layers.support.FeatureFilter")],n);const V=n;var m;const R={read:{reader:p},write:{writer:c,overridePolicy(){return{allowNull:this.excludedEffect!=null,isRequired:this.excludedEffect==null}}}},x={read:{reader:p},write:{writer:c,overridePolicy(){return{allowNull:this.includedEffect!=null,isRequired:this.includedEffect==null}}}},E={name:"showExcludedLabels",default:!0};let o=m=class extends g{constructor(e){super(e),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1}write(e,t){var a,s;const r=super.write(e,t);if(t!=null&&t.origin){if(r.filter){const u=Object.keys(r.filter);if(u.length>1||u[0]!=="where")return(a=t.messages)==null||a.push(new b("web-document-write:unsupported-feature-effect","Invalid feature effect 'filter'. A filter can only contain a 'where' property",{layer:t.layer,effect:this})),null}if("showExcludedLabels"in r)return(s=t.messages)==null||s.push(new b("web-document-write:unsupported-feature-effect","Invalid value for property 'excludedLabelsVisible' which should always be 'true'",{layer:t.layer,effect:this})),null}return r}clone(){return new m({filter:this.filter!=null?this.filter.clone():null,includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};i([l({type:V,json:{write:{allowNull:!0,writer(e,t,r,a){const s=e==null?void 0:e.write({},a);s&&Object.keys(s).length!==0?v(r,s,t):v(r,null,t)}}}})],o.prototype,"filter",void 0),i([l({json:{read:p,write:{writer:c,allowNull:!0},origins:{"web-map":R,"portal-item":R}}})],o.prototype,"includedEffect",void 0),i([l({json:{read:p,write:{writer:c,allowNull:!0},origins:{"web-map":x,"portal-item":x}}})],o.prototype,"excludedEffect",void 0),i([l({type:Boolean,json:{write:!0,name:"showExcludedLabels",origins:{"web-map":E,"portal-item":E}}})],o.prototype,"excludedLabelsVisible",void 0),o=m=i([S("esri.layers.support.FeatureEffect")],o);const P=o;export{V as d,P as w};
//# sourceMappingURL=FeatureEffect-CgJAlCDp.js.map
