import{aa as y,O as u,P as m,gS as T,j as i,bc as c,m as n,k as d,p,o as r,u as o,eU as I}from"./index-Vdm0PCas.js";const h=y()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:void 0});let s=class extends u(m){constructor(t){super(t),this.unit="milliseconds",this.value=0}toMilliseconds(){return T(this.value,this.unit,"milliseconds")}};i([c(h,{nonNullable:!0})],s.prototype,"unit",void 0),i([n({type:Number,json:{write:!0},nonNullable:!0})],s.prototype,"value",void 0),s=i([d("esri.time.TimeInterval")],s);const v=s;function a(t,e){return v.fromJSON({value:t,unit:e})}let l=class extends u(m){constructor(t){super(t),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeZone=null,this.trackIdField=null,this.useTime=!0,this.stops=null}readFullTimeExtent(t,e){return e.timeExtent&&Array.isArray(e.timeExtent)&&e.timeExtent.length===2?p.fromArray(e.timeExtent):null}writeFullTimeExtent(t,e){(t==null?void 0:t.start)!=null&&t.end!=null?e.timeExtent=t.toArray():e.timeExtent=null}readInterval(t,e){return e.timeInterval&&e.timeIntervalUnits?a(e.timeInterval,e.timeIntervalUnits):e.defaultTimeInterval&&e.defaultTimeIntervalUnits?a(e.defaultTimeInterval,e.defaultTimeIntervalUnits):null}writeInterval(t,e){e.timeInterval=(t==null?void 0:t.toJSON().value)??null,e.timeIntervalUnits=(t==null?void 0:t.toJSON().unit)??null}};i([n({type:Boolean,json:{name:"exportOptions.timeDataCumulative",write:!0}})],l.prototype,"cumulative",void 0),i([n({type:String,json:{name:"endTimeField",write:{enabled:!0,allowNull:!0}}})],l.prototype,"endField",void 0),i([n({type:p,json:{write:{enabled:!0,allowNull:!0}}})],l.prototype,"fullTimeExtent",void 0),i([r("fullTimeExtent",["timeExtent"])],l.prototype,"readFullTimeExtent",null),i([o("fullTimeExtent")],l.prototype,"writeFullTimeExtent",null),i([n({type:Boolean,json:{write:!0}})],l.prototype,"hasLiveData",void 0),i([n({type:v,json:{write:{enabled:!0,allowNull:!0}}})],l.prototype,"interval",void 0),i([r("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],l.prototype,"readInterval",null),i([o("interval")],l.prototype,"writeInterval",null),i([n({type:String,json:{name:"startTimeField",write:{enabled:!0,allowNull:!0}}})],l.prototype,"startField",void 0),i([n(I("timeReference",!0))],l.prototype,"timeZone",void 0),i([n({type:String,json:{write:{enabled:!0,allowNull:!0}}})],l.prototype,"trackIdField",void 0),i([n({type:Boolean,json:{name:"exportOptions.useTime",write:!0}})],l.prototype,"useTime",void 0),i([n({type:[Date],json:{read:!1}})],l.prototype,"stops",void 0),l=i([d("esri.layers.support.TimeInfo")],l);const x=l;export{x as d,h as e,v as l};
//# sourceMappingURL=TimeInfo-CK9nEbRo.js.map
