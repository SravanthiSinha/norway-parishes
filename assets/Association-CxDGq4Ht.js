import{O as p,j as o,m as l,o as m,u as d,aV as s,k as a}from"./index-U3f91iFJ.js";import{p as i,i as n}from"./NetworkElement-DCVwPC6d.js";let e=class extends p{constructor(r){super(r),this.globalId=null,this.associationType=null,this.fromNetworkElement=null,this.toNetworkElement=null,this.geometry=null,this.errorMessage=null,this.percentAlong=null,this.errorCode=null,this.isContentVisible=null,this.status=null}readFromNetworkElement(r,t){return new i({globalId:t.fromGlobalId,networkSourceId:t.fromNetworkSourceId,terminalId:t.fromTerminalId})}writeFromNetworkElement(r,t){r&&(t.fromGlobalId=r.globalId,t.fromNetworkSourceId=r.networkSourceId,t.fromTerminalId=r.terminalId)}readToNetworkElement(r,t){return new i({globalId:t.toGlobalId,networkSourceId:t.toNetworkSourceId,terminalId:t.toTerminalId})}writeToNetworkElement(r,t){r&&(t.toGlobalId=r.globalId,t.toNetworkSourceId=r.networkSourceId,t.toTerminalId=r.terminalId)}};o([l({type:String,json:{write:!0}})],e.prototype,"globalId",void 0),o([l({type:n.apiValues,json:{type:n.jsonValues,read:n.read,write:n.write}})],e.prototype,"associationType",void 0),o([l({type:i,json:{write:{target:{fromGlobalId:{type:String},fromNetworkSourceId:{type:Number},fromTerminalId:{type:Number}}},read:{source:["fromGlobalId","fromNetworkSourceId","fromTerminalId"]}}})],e.prototype,"fromNetworkElement",void 0),o([m("fromNetworkElement")],e.prototype,"readFromNetworkElement",null),o([d("fromNetworkElement")],e.prototype,"writeFromNetworkElement",null),o([l({type:i,json:{write:{target:{toGlobalId:{type:String},toNetworkSourceId:{type:Number},toTerminalId:{type:Number}}},read:{source:["toGlobalId","toNetworkSourceId","toTerminalId"]}}})],e.prototype,"toNetworkElement",void 0),o([m("toNetworkElement")],e.prototype,"readToNetworkElement",null),o([d("toNetworkElement")],e.prototype,"writeToNetworkElement",null),o([l({type:s,json:{write:!0}})],e.prototype,"geometry",void 0),o([l({type:String,json:{write:!0}})],e.prototype,"errorMessage",void 0),o([l({type:Number,json:{write:!0}})],e.prototype,"percentAlong",void 0),o([l({type:Number,json:{write:!0}})],e.prototype,"errorCode",void 0),o([l({type:Boolean,json:{write:!0}})],e.prototype,"isContentVisible",void 0),o([l({type:Number,json:{write:!0}})],e.prototype,"status",void 0),e=o([a("esri.rest.networks.support.Association")],e);const I=e;export{I as d};
//# sourceMappingURL=Association-CxDGq4Ht.js.map
