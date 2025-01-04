import{aa as g,ab as y,j as r,m as h,u as v,o as a,P as m,ac as f,ad as w,Y as u,k as S}from"./index-CJT1kG3U.js";var o;const l=g()({orthometric:"gravity-related-height",gravity_related_height:"gravity-related-height",ellipsoidal:"ellipsoidal"}),p=l.jsonValues.slice();y(p,"orthometric");const n=g()({meter:"meters",foot:"feet","us-foot":"us-feet","clarke-foot":"clarke-feet","clarke-yard":"clarke-yards","clarke-link":"clarke-links","sears-yard":"sears-yards","sears-foot":"sears-feet","sears-chain":"sears-chains","benoit-1895-b-chain":"benoit-1895-b-chains","indian-yard":"indian-yards","indian-1937-yard":"indian-1937-yards","gold-coast-foot":"gold-coast-feet","sears-1922-truncated-chain":"sears-1922-truncated-chains","50-kilometers":"50-kilometers","150-kilometers":"150-kilometers"});let s=o=class extends m{constructor(e){super(e),this.heightModel="gravity-related-height",this.heightUnit="meters",this.vertCRS=null}writeHeightModel(e,t,i){return l.write(e,t,i)}readHeightModel(e,t,i){return l.read(e)||(i!=null&&i.messages&&i.messages.push(M(e,{context:i})),null)}readHeightUnit(e,t,i){return n.read(e)||(i!=null&&i.messages&&i.messages.push(c(e,{context:i})),null)}readHeightUnitService(e,t,i){return f(e)||n.read(e)||(i!=null&&i.messages&&i.messages.push(c(e,{context:i})),null)}readVertCRS(e,t){return t.vertCRS||t.ellipsoid||t.geoid}clone(){return new o({heightModel:this.heightModel,heightUnit:this.heightUnit,vertCRS:this.vertCRS})}equals(e){return!!e&&(this===e||this.heightModel===e.heightModel&&this.heightUnit===e.heightUnit&&this.vertCRS===e.vertCRS)}static deriveUnitFromSR(e,t){const i=w(t);return new o({heightModel:e.heightModel,heightUnit:i??void 0,vertCRS:e.vertCRS})}write(e,t){return t={origin:"web-scene",...t},super.write(e,t)}static fromJSON(e){if(!e)return null;const t=new o;return t.read(e,{origin:"web-scene"}),t}};function c(e,t){return new u("height-unit:unsupported",`Height unit of value '${e}' is not supported`,t)}function M(e,t){return new u("height-model:unsupported",`Height model of value '${e}' is not supported`,t)}r([h({type:l.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:p,default:"ellipsoidal"}}}})],s.prototype,"heightModel",void 0),r([v("web-scene","heightModel")],s.prototype,"writeHeightModel",null),r([a(["web-scene","service"],"heightModel")],s.prototype,"readHeightModel",null),r([h({type:n.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:n.jsonValues,write:n.write}}}})],s.prototype,"heightUnit",void 0),r([a("web-scene","heightUnit")],s.prototype,"readHeightUnit",null),r([a("service","heightUnit")],s.prototype,"readHeightUnitService",null),r([h({type:String,constructOnly:!0,json:{origins:{"web-scene":{write:!0}}}})],s.prototype,"vertCRS",void 0),r([a("service","vertCRS",["vertCRS","ellipsoid","geoid"])],s.prototype,"readVertCRS",null),s=o=r([S("esri.geometry.HeightModelInfo")],s);const R=s;export{R as v};
//# sourceMappingURL=HeightModelInfo-BsdLH3Iz.js.map
