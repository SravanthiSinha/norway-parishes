import{j as e,m as r,k as p,O as S,M as q,k3 as qe,bd as Ie,o as l,u,Q as ze,mj as tt,mk as it,b7 as L,ml as rt,je as Ze,mm as ot,mf as Fe,mn as Te,mo as Oe,eY as pe,mp as st,mq as nt,aX as pt,ae as Me,ag as Re,gB as lt,s as at,gC as ut}from"./index-5zHX_dwk.js";import{c as dt,a as yt,v as ct,j as mt,y as ht}from"./commonProperties-6NkVIVhw.js";import{v as ft}from"./HeightModelInfo-gBdUFXlb.js";import{g as vt,B as xt,X as Y,V as wt,D as gt,G as bt}from"./featureLayerUtils-CyGTKntI.js";import{p as jt}from"./LayerFloorInfo-CrJ36PLO.js";import{p as $t}from"./Relationship-x8w_H1S5.js";import{i as St}from"./serviceCapabilitiesUtils-eujp3Yem.js";var le;let F=le=class extends S{constructor(t){super(t),this.expression=null,this.name=null,this.returnType="boolean",this.title=null}clone(){return new le({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}};e([r({type:String,json:{write:!0}})],F.prototype,"expression",void 0),e([r({type:String,json:{write:!0}})],F.prototype,"name",void 0),e([r({type:["boolean","date","number","string"],json:{write:!0}})],F.prototype,"returnType",void 0),e([r({type:String,json:{write:!0}})],F.prototype,"title",void 0),F=le=e([p("esri.form.ExpressionInfo")],F);const It=F;let T=class extends S{constructor(i){super(i),this.description=null,this.label=null,this.type=null,this.visibilityExpression=null}};e([r({type:String,json:{write:!0}})],T.prototype,"description",void 0),e([r({type:String,json:{write:!0}})],T.prototype,"label",void 0),e([r()],T.prototype,"type",void 0),e([r({type:String,json:{write:!0}})],T.prototype,"visibilityExpression",void 0),T=e([p("esri.form.elements.Element")],T);const O=T;let z=class extends q(S){constructor(i){super(i),this.type=null}};e([r()],z.prototype,"type",void 0),z=e([p("esri.form.elements.inputs.attachments.Input")],z);const E=z,_=["any","capture","upload"];let R=class extends E{constructor(i){super(i),this.type="audio",this.inputMethod="any",this.maxDuration=null}};e([r({type:["audio"],readOnly:!0,json:{write:!0}})],R.prototype,"type",void 0),e([r({type:_,json:{write:!0}})],R.prototype,"inputMethod",void 0),e([r({type:Number,json:{write:!0}})],R.prototype,"maxDuration",void 0),R=e([p("esri.form.elements.inputs.attachments.AudioInput")],R);const De=R;let G=class extends E{constructor(i){super(i),this.type="document",this.maxFileSize=null}};e([r({type:["document"],readOnly:!0,json:{write:!0}})],G.prototype,"type",void 0),e([r({type:Number,json:{write:!0}})],G.prototype,"maxFileSize",void 0),G=e([p("esri.form.elements.inputs.attachments.DocumentInput")],G);const Ve=G;let D=class extends E{constructor(i){super(i),this.type="image",this.inputMethod="any",this.maxImageSize=null}};e([r({type:["image"],readOnly:!0,json:{write:!0}})],D.prototype,"type",void 0),e([r({type:_,json:{write:!0}})],D.prototype,"inputMethod",void 0),e([r({type:Number,json:{write:!0}})],D.prototype,"maxImageSize",void 0),D=e([p("esri.form.elements.inputs.attachments.ImageInput")],D);const Be=D;let Q=class extends E{constructor(i){super(i),this.type="signature",this.inputMethod="any"}};e([r({type:["signature"],readOnly:!0,json:{write:!0}})],Q.prototype,"type",void 0),e([r({type:_,json:{write:!0}})],Q.prototype,"inputMethod",void 0),Q=e([p("esri.form.elements.inputs.attachments.SignatureInput")],Q);const Ne=Q;let V=class extends E{constructor(i){super(i),this.type="video",this.inputMethod="any",this.maxDuration=null}};e([r({type:["video"],readOnly:!0,json:{write:!0}})],V.prototype,"type",void 0),e([r({type:_,json:{write:!0}})],V.prototype,"inputMethod",void 0),e([r({type:Number,json:{write:!0}})],V.prototype,"maxDuration",void 0),V=e([p("esri.form.elements.inputs.attachments.VideoInput")],V);const ke=V;function He(t){return{nestableTypes:{base:E,key:"type",typeMap:{audio:De,document:Ve,image:Be,signature:Ne,video:ke}},allTypes:{base:E,key:"type",typeMap:{attachment:t,audio:De,document:Ve,image:Be,signature:Ne,video:ke}}}}function Et(t,i,s){return t?t.map(o=>qe(i.nestableTypes,o)):null}function Ft(t,i,s){if(!t)return null;const o=i.nestableTypes.typeMap;return t.filter(n=>o[n.type]).map(n=>o[n.type].fromJSON(n))}function Tt(t,i,s){if(!t)return null;const o=i.nestableTypes.typeMap;return t.filter(n=>o[n.type]).map(n=>n.toJSON())}let x=class extends E{constructor(i){super(i),this.type="attachment",this.attachmentAssociationType="exact",this.inputTypes=null}castInputs(i){return Et(i,ee)}readInputs(i,s){return Ft(s.inputTypes,ee)}writeInputs(i,s){s.inputTypes=Tt(i,ee)}};e([r({type:["attachment"],readOnly:!0,json:{write:!0}})],x.prototype,"type",void 0),e([r({type:["any","exact","exactOrNone"],json:{write:!0}})],x.prototype,"attachmentAssociationType",void 0),e([r({json:{write:{isRequired:!0}}})],x.prototype,"inputTypes",void 0),e([Ie("inputTypes")],x.prototype,"castInputs",null),e([l("inputTypes")],x.prototype,"readInputs",null),e([u("inputTypes")],x.prototype,"writeInputs",null),x=e([p("esri.form.elements.inputs.attachments.AttachmentInput")],x);const ee=He(x),Ot=x;var ae;const Mt=He(Ot);let y=ae=class extends O{constructor(t){super(t),this.allowUserRename=!0,this.attachmentKeyword=null,this.displayFilename=!1,this.editableExpression=null,this.filenameExpression="{attachmentKeyword}_{now}",this.input=null,this.maxAttachmentCount=null,this.minAttachmentCount=null,this.type="attachment",this.useOriginalFilename=!0}clone(){var t;return new ae({allowUserRename:this.allowUserRename,attachmentKeyword:this.attachmentKeyword,description:this.description,displayFilename:this.displayFilename,editableExpression:this.editableExpression,filenameExpression:this.filenameExpression,input:(t=this.input)==null?void 0:t.clone(),label:this.label,maxAttachmentCount:this.maxAttachmentCount,minAttachmentCount:this.minAttachmentCount,useOriginalFilename:this.useOriginalFilename,visibilityExpression:this.visibilityExpression})}};e([r({type:Boolean,json:{write:!0}})],y.prototype,"allowUserRename",void 0),e([r({type:String,json:{write:{isRequired:!0}}})],y.prototype,"attachmentKeyword",void 0),e([r({type:Boolean,json:{write:!0}})],y.prototype,"displayFilename",void 0),e([r({type:String,json:{write:!0}})],y.prototype,"editableExpression",void 0),e([r({type:String,json:{write:!0}})],y.prototype,"filenameExpression",void 0),e([r({types:Mt.allTypes,json:{read:{source:"inputType"},write:{target:"inputType",isRequired:!0}}})],y.prototype,"input",void 0),e([r({type:Number,json:{write:!0}})],y.prototype,"maxAttachmentCount",void 0),e([r({type:Number,json:{write:!0}})],y.prototype,"minAttachmentCount",void 0),e([r({type:["attachment"],readOnly:!0,json:{read:!1,write:!0}})],y.prototype,"type",void 0),e([r({type:Boolean,json:{write:!0}})],y.prototype,"useOriginalFilename",void 0),y=ae=e([p("esri.form.elements.AttachmentElement")],y);const Ue=y;let Z=class extends S{constructor(i){super(i),this.type=null}};e([r()],Z.prototype,"type",void 0),Z=e([p("esri.form.elements.inputs.Input")],Z);const I=Z;let W=class extends I{constructor(i){super(i),this.maxLength=null,this.minLength=0}};e([r({type:Number,json:{write:!0}})],W.prototype,"maxLength",void 0),e([r({type:Number,json:{write:!0}})],W.prototype,"minLength",void 0),W=e([p("esri.form.elements.inputs.TextInput")],W);const Ee=W;var ue;let H=ue=class extends Ee{constructor(t){super(t),this.type="barcode-scanner"}clone(){return new ue({maxLength:this.maxLength,minLength:this.minLength})}};e([r({type:["barcode-scanner"],json:{read:!1,write:!0}})],H.prototype,"type",void 0),H=ue=e([p("esri.form.elements.inputs.BarcodeScannerInput")],H);const Rt=H;var de;let B=de=class extends I{constructor(t){super(t),this.noValueOptionLabel=null,this.showNoValueOption=!0,this.type="combo-box"}clone(){return new de({showNoValueOption:this.showNoValueOption,noValueOptionLabel:this.noValueOptionLabel})}};e([r({type:String,json:{write:!0}})],B.prototype,"noValueOptionLabel",void 0),e([r({type:Boolean,json:{write:!0}})],B.prototype,"showNoValueOption",void 0),e([r({type:["combo-box"],json:{read:!1,write:!0}})],B.prototype,"type",void 0),B=de=e([p("esri.form.elements.inputs.ComboBoxInput")],B);const Dt=B;var ye;function Ae(t){return t??null}function Le(t){return t??null}let v=ye=class extends I{constructor(t){super(t),this.max=null,this.min=null,this.type="date-picker"}readMax(t,i){return Ae(i.max)}writeMax(t,i){i.max=Le(t)}readMin(t,i){return Ae(i.min)}writeMin(t,i){i.min=Le(t)}clone(){return new ye({max:this.max,min:this.min})}};e([r({type:String,json:{type:String,write:!0}})],v.prototype,"max",void 0),e([l("max")],v.prototype,"readMax",null),e([u("max")],v.prototype,"writeMax",null),e([r({type:String,json:{type:String,write:!0}})],v.prototype,"min",void 0),e([l("min")],v.prototype,"readMin",null),e([u("min")],v.prototype,"writeMin",null),e([r({type:["date-picker"],json:{read:!1,write:!0}})],v.prototype,"type",void 0),v=ye=e([p("esri.form.elements.inputs.DatePickerInput")],v);const Vt=v;var ce;function te(t){return t??null}function ie(t){return t??null}let d=ce=class extends I{constructor(t){super(t),this.includeTimeOffset=!0,this.max=null,this.min=null,this.timeResolution="minutes",this.type="datetimeoffset-picker"}readMax(t,i){return te(i.max)}writeMax(t,i){i.max=ie(t)}readMin(t,i){return te(i.min)}writeMin(t,i){i.min=ie(t)}readTimeResolution(t,i){return te(i.timeResolution)}writeTimeResolution(t,i){i.timeResolution=ie(t)}clone(){return new ce({includeTimeOffset:this.includeTimeOffset,max:this.max,min:this.min,timeResolution:this.timeResolution})}};e([r({type:Boolean,json:{write:!0}})],d.prototype,"includeTimeOffset",void 0),e([r({type:String,json:{type:String,write:!0}})],d.prototype,"max",void 0),e([l("max")],d.prototype,"readMax",null),e([u("max")],d.prototype,"writeMax",null),e([r({type:String,json:{type:String,write:!0}})],d.prototype,"min",void 0),e([l("min")],d.prototype,"readMin",null),e([u("min")],d.prototype,"writeMin",null),e([r({type:String,json:{type:String,write:!0}})],d.prototype,"timeResolution",void 0),e([l("timeResolution")],d.prototype,"readTimeResolution",null),e([u("timeResolution")],d.prototype,"writeTimeResolution",null),e([r({type:["datetimeoffset-picker"],json:{read:!1,write:!0}})],d.prototype,"type",void 0),d=ce=e([p("esri.form.elements.inputs.DateTimeOffsetPickerInput")],d);const Bt=d;var me;function Ce(t){return t!=null?new Date(t):null}function Ge(t){return t?t.getTime():null}let h=me=class extends I{constructor(t){super(t),this.includeTime=!1,this.max=null,this.min=null,this.type="datetime-picker"}readMax(t,i){return Ce(i.max)}writeMax(t,i){i.max=Ge(t)}readMin(t,i){return Ce(i.min)}writeMin(t,i){i.min=Ge(t)}clone(){return new me({includeTime:this.includeTime,max:this.max,min:this.min})}};e([r({type:Boolean,json:{write:!0}})],h.prototype,"includeTime",void 0),e([r({type:Date,json:{type:Number,write:!0}})],h.prototype,"max",void 0),e([l("max")],h.prototype,"readMax",null),e([u("max")],h.prototype,"writeMax",null),e([r({type:Date,json:{type:Number,write:!0}})],h.prototype,"min",void 0),e([l("min")],h.prototype,"readMin",null),e([u("min")],h.prototype,"writeMin",null),e([r({type:["datetime-picker"],json:{read:!1,write:!0}})],h.prototype,"type",void 0),h=me=e([p("esri.form.elements.inputs.DateTimePickerInput")],h);const Nt=h;var he;let N=he=class extends I{constructor(t){super(t),this.noValueOptionLabel=null,this.showNoValueOption=!0,this.type="radio-buttons"}clone(){return new he({noValueOptionLabel:this.noValueOptionLabel,showNoValueOption:this.showNoValueOption})}};e([r({type:String,json:{write:!0}})],N.prototype,"noValueOptionLabel",void 0),e([r({type:Boolean,json:{write:!0}})],N.prototype,"showNoValueOption",void 0),e([r({type:["radio-buttons"],json:{read:!1,write:!0}})],N.prototype,"type",void 0),N=he=e([p("esri.form.elements.inputs.RadioButtonsInput")],N);const kt=N;var fe;let k=fe=class extends I{constructor(t){super(t),this.offValue=null,this.onValue=null,this.type="switch"}clone(){return new fe({offValue:this.offValue,onValue:this.onValue})}};e([r({type:[String,Number],json:{write:!0}})],k.prototype,"offValue",void 0),e([r({type:[String,Number],json:{write:!0}})],k.prototype,"onValue",void 0),e([r({type:["switch"],json:{read:!1,write:!0}})],k.prototype,"type",void 0),k=fe=e([p("esri.form.elements.inputs.SwitchInput")],k);const Ut=k;var ve;let J=ve=class extends Ee{constructor(t){super(t),this.type="text-area"}clone(){return new ve({maxLength:this.maxLength,minLength:this.minLength})}};e([r({type:["text-area"],json:{read:!1,write:!0}})],J.prototype,"type",void 0),J=ve=e([p("esri.form.elements.inputs.TextAreaInput")],J);const At=J;var xe;let K=xe=class extends Ee{constructor(t){super(t),this.type="text-box"}clone(){return new xe({maxLength:this.maxLength,minLength:this.minLength})}};e([r({type:["text-box"],json:{read:!1,write:!0}})],K.prototype,"type",void 0),K=xe=e([p("esri.form.elements.inputs.TextBoxInput")],K);const Lt=K;var we;function re(t){return t??null}function oe(t){return t??null}let c=we=class extends I{constructor(t){super(t),this.max=null,this.min=null,this.timeResolution="minutes",this.type="time-picker"}readMax(t,i){return re(i.max)}writeMax(t,i){i.max=oe(t)}readMin(t,i){return re(i.min)}writeMin(t,i){i.min=oe(t)}readTimeResolution(t,i){return re(i.timeResolution)}writeTimeResolution(t,i){i.timeResolution=oe(t)}clone(){return new we({max:this.max,min:this.min,timeResolution:this.timeResolution})}};e([r({type:String,json:{type:String,write:!0}})],c.prototype,"max",void 0),e([l("max")],c.prototype,"readMax",null),e([u("max")],c.prototype,"writeMax",null),e([r({type:String,json:{type:String,write:!0}})],c.prototype,"min",void 0),e([l("min")],c.prototype,"readMin",null),e([u("min")],c.prototype,"writeMin",null),e([r({type:String,json:{type:String,write:!0}})],c.prototype,"timeResolution",void 0),e([l("timeResolution")],c.prototype,"readTimeResolution",null),e([u("timeResolution")],c.prototype,"writeTimeResolution",null),e([r({type:["time-picker"],json:{read:!1,write:!0}})],c.prototype,"type",void 0),c=we=e([p("esri.form.elements.inputs.TimePickerInput")],c);const Ct=c,Gt={base:I,key:"type",typeMap:{"barcode-scanner":Rt,"combo-box":Dt,"date-picker":Vt,"datetime-picker":Nt,"datetimeoffset-picker":Bt,"radio-buttons":kt,switch:Ut,"text-area":At,"text-box":Lt,"time-picker":Ct}};var ge;let m=ge=class extends O{constructor(t){super(t),this.domain=null,this.editable=null,this.editableExpression=null,this.fieldName=null,this.hint=null,this.input=null,this.requiredExpression=null,this.type="field",this.valueExpression=null}clone(){return new ge({description:this.description,domain:this.domain,editable:this.editable,editableExpression:this.editableExpression,fieldName:this.fieldName,hint:this.hint,input:this.input,label:this.label,requiredExpression:this.requiredExpression,valueExpression:this.valueExpression,visibilityExpression:this.visibilityExpression})}};e([r({types:tt,json:{read:{reader:ze},write:!0}})],m.prototype,"domain",void 0),e([r({type:Boolean,json:{write:!0}})],m.prototype,"editable",void 0),e([r({type:String,json:{write:!0}})],m.prototype,"editableExpression",void 0),e([r({type:String,json:{write:!0}})],m.prototype,"fieldName",void 0),e([r({type:String,json:{write:!0}})],m.prototype,"hint",void 0),e([r({types:Gt,json:{read:{source:"inputType"},write:{target:"inputType"}}})],m.prototype,"input",void 0),e([r({type:String,json:{write:!0}})],m.prototype,"requiredExpression",void 0),e([r({type:String,json:{read:!1,write:!0}})],m.prototype,"type",void 0),e([r({type:String,json:{write:!0}})],m.prototype,"valueExpression",void 0),m=ge=e([p("esri.form.elements.FieldElement")],m);const Qe=m;var be;let b=be=class extends O{constructor(t){super(t),this.displayCount=null,this.displayType="list",this.editableExpression=null,this.orderByFields=null,this.relationshipId=null,this.type="relationship"}clone(){return new be({description:this.description,displayCount:this.displayCount,displayType:this.displayType,editableExpression:this.editableExpression,label:this.label,orderByFields:L(this.orderByFields),relationshipId:this.relationshipId,visibilityExpression:this.visibilityExpression})}};e([r({type:Number,json:{write:!0}})],b.prototype,"displayCount",void 0),e([r({type:["list"],json:{write:!0}})],b.prototype,"displayType",void 0),e([r({type:String,json:{write:!0}})],b.prototype,"editableExpression",void 0),e([r({type:[it],json:{write:!0}})],b.prototype,"orderByFields",void 0),e([r({type:Number,json:{write:!0}})],b.prototype,"relationshipId",void 0),e([r({type:["relationship"],json:{read:!1,write:!0}})],b.prototype,"type",void 0),b=be=e([p("esri.form.elements.RelationshipElement")],b);const We=b;var je;let U=je=class extends O{constructor(t){super(t),this.text=null,this.textFormat="plain-text",this.type="text"}clone(){return new je({text:this.text,textFormat:this.textFormat,visibilityExpression:this.visibilityExpression})}};e([r({type:String,json:{write:!0}})],U.prototype,"text",void 0),e([r({type:String,json:{write:!0}})],U.prototype,"textFormat",void 0),e([r({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],U.prototype,"type",void 0),U=je=e([p("esri.form.elements.TextElement")],U);const Pe=U;function Je(t){return{typesWithGroup:{base:O,key:"type",typeMap:{attachment:Ue,field:Qe,group:t,relationship:We,text:Pe}},typesWithoutGroup:{base:O,key:"type",typeMap:{attachment:Ue,field:Qe,relationship:We,text:Pe}}}}function Ke(t,i,s=!0){if(!t)return null;const o=s?i.typesWithGroup.typeMap:i.typesWithoutGroup.typeMap;return t.filter(n=>o[n.type]).map(n=>o[n.type].fromJSON(n))}function _e(t,i,s=!0){if(!t)return null;const o=s?i.typesWithGroup.typeMap:i.typesWithoutGroup.typeMap;return t.filter(n=>o[n.type]).map(n=>n.toJSON())}function Xe(t,i,s=!0){return t?t.map(o=>qe(s?i.typesWithGroup:i.typesWithoutGroup,o)):null}var $e;let w=$e=class extends O{constructor(t){super(t),this.elements=null,this.initialState="expanded",this.type="group"}castElements(t){return Xe(t,se,!1)}readElements(t,i){return Ke(i.formElements,se,!1)}writeElements(t,i){i.formElements=_e(t,se,!1)}clone(){return new $e({description:this.description,elements:L(this.elements),initialState:this.initialState,label:this.label,visibilityExpression:this.visibilityExpression})}};e([r({json:{write:!0}})],w.prototype,"elements",void 0),e([Ie("elements")],w.prototype,"castElements",null),e([l("elements",["formElements"])],w.prototype,"readElements",null),e([u("elements")],w.prototype,"writeElements",null),e([r({type:["collapsed","expanded"],json:{write:!0}})],w.prototype,"initialState",void 0),e([r({type:String,json:{read:!1,write:!0}})],w.prototype,"type",void 0),w=$e=e([p("esri.form.elements.GroupElement")],w);const se=Je(w),Qt=w,Wt=t=>t.type==="field",Pt=t=>t.type==="group",qt=t=>t.type==="text";var Se;const ne=Je(Qt);let f=Se=class extends S{constructor(t){super(t),this.description=null,this.elements=null,this.expressionInfos=null,this.preserveFieldValuesWhenHidden=!1,this.title=null}castElements(t){return Xe(t,ne)}readElements(t,i){return Ke(i.formElements,ne)}writeElements(t,i){i.formElements=_e(t,ne)}clone(){return new Se({description:this.description,expressionInfos:L(this.expressionInfos),elements:L(this.elements),title:this.title,preserveFieldValuesWhenHidden:this.preserveFieldValuesWhenHidden})}async getFieldsUsed(t,i){const s=new Set,{description:o,elements:n,expressionInfos:a,title:C}=this;if(P(s,t,o),P(s,t,C),!n)return[];const M=zt(n,a).map(X=>rt(s,t,X));await Promise.all(M);for(const X of n)Ye(s,{fieldsIndex:t,relationships:i},X);return Array.from(s).sort()}};function Ye(t,i,s){var n;const{fieldsIndex:o}=i;if(!o||o.fields.length!==t.size)switch(P(t,o,s.label),P(t,o,s.description),s.type){case"field":Fe(t,o,s.fieldName);break;case"group":s.elements.forEach(a=>Ye(t,i,a));break;case"relationship":if(i.relationships){const a=i.relationships.find(C=>C.id===s.relationshipId);a&&Fe(t,o,a.keyField)}Ze(t,o,(n=s.orderByFields)==null?void 0:n.map(a=>a.field));break;case"text":P(t,o,s.text)}}function zt(t,i){if(!i||i.length===0)return[];const s=et(t),o=[];for(const n of i)s.has(n.name)&&o.push(n.expression);return o}function et(t){const i=new Set;for(const s of t)if(Te(i,s.visibilityExpression),!qt(s)){if(Pt(s))Oe(i,et(s.elements));else if(Te(i,s.editableExpression),Wt(s)){const{requiredExpression:o,valueExpression:n}=s;Oe(i,[o,n])}}return i}function P(t,i,s){Ze(t,i,ot(s))}e([r({type:String,json:{write:!0}})],f.prototype,"description",void 0),e([r({json:{write:!0}})],f.prototype,"elements",void 0),e([Ie("elements")],f.prototype,"castElements",null),e([l("elements",["formElements"])],f.prototype,"readElements",null),e([u("elements")],f.prototype,"writeElements",null),e([r({type:[It],json:{write:!0}})],f.prototype,"expressionInfos",void 0),e([r({type:Boolean,json:{default:!1,write:!0}})],f.prototype,"preserveFieldValuesWhenHidden",void 0),e([r({type:String,json:{write:!0}})],f.prototype,"title",void 0),f=Se=e([p("esri.form.FormTemplate")],f);const ci=f;let j=class extends q(S){constructor(t){super(t),this.creatorField=null,this.creationDateField=null,this.editorField=null,this.editDateField=null,this.realm=null,this.timeZone=null}};e([r()],j.prototype,"creatorField",void 0),e([r()],j.prototype,"creationDateField",void 0),e([r()],j.prototype,"editorField",void 0),e([r()],j.prototype,"editDateField",void 0),e([r()],j.prototype,"realm",void 0),e([r(pe("dateFieldsTimeReference",!0))],j.prototype,"timeZone",void 0),j=e([p("esri.layers.support.EditFieldsInfo")],j);const Zt=j;let g=class extends q(S){constructor(t){super(t)}};e([r({constructOnly:!0,json:{write:!0}})],g.prototype,"name",void 0),e([r({constructOnly:!0,json:{write:!0}})],g.prototype,"fields",void 0),e([r({constructOnly:!0,json:{write:!0}})],g.prototype,"isAscending",void 0),e([r({constructOnly:!0,json:{write:!0}})],g.prototype,"indexType",void 0),e([r({constructOnly:!0,json:{write:!0}})],g.prototype,"isUnique",void 0),e([r({constructOnly:!0,json:{write:!0}})],g.prototype,"description",void 0),g=e([p("esri.layers.support.FeatureIndex")],g);let A=class extends q(S){constructor(t){super(t),this.shapeAreaField=null,this.shapeLengthField=null,this.units=null}};e([r({type:String,json:{read:{source:"shapeAreaFieldName"}}})],A.prototype,"shapeAreaField",void 0),e([r({type:String,json:{read:{source:"shapeLengthFieldName"}}})],A.prototype,"shapeLengthField",void 0),e([r({type:String,json:{read:t=>st.read(t)||nt.read(t)}})],A.prototype,"units",void 0),A=e([p("esri.layers.support.GeometryFieldsInfo")],A);const Ht=A;let $=class extends q(S){constructor(t){super(t),this.code=null,this.defaultValues={},this.domains=null,this.name=null}readDomains(t){if(!t)return null;const i={};for(const s of Object.keys(t))i[s]=ze(t[s]);return i}writeDomains(t,i){var o;if(!t)return;const s={};for(const n of Object.keys(t))t[n]&&(s[n]=(o=t[n])==null?void 0:o.toJSON());i.domains=s}};e([r({type:Number,json:{write:!0}})],$.prototype,"code",void 0),e([r({type:Object,json:{write:!0}})],$.prototype,"defaultValues",void 0),e([r({json:{write:!0}})],$.prototype,"domains",void 0),e([l("domains")],$.prototype,"readDomains",null),e([u("domains")],$.prototype,"writeDomains",null),e([r({type:String,json:{write:!0}})],$.prototype,"name",void 0),$=e([p("esri.layers.support.Subtype")],$);const Jt=$,mi=t=>{let i=class extends t{constructor(){super(...arguments),this.copyright=null,this.capabilities=null,this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.definitionExpression=null,this.displayField=null,this.editFieldsInfo=null,this.editingInfo=null,this.elevationInfo=null,this.floorInfo=null,this.fullExtent=null,this.gdbVersion=null,this.geometryFieldsInfo=null,this.geometryType=null,this.globalIdField=null,this.hasM=void 0,this.hasZ=void 0,this.heightModelInfo=null,this.historicMoment=null,this.indexes=new(Me.ofType(g)),this.isTable=!1,this.layerId=void 0,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.preferredTimeZone=null,this.relationships=null,this.returnM=void 0,this.returnZ=void 0,this.serviceDefinitionExpression=null,this.serviceItemId=null,this.sourceJSON=null,this.spatialReference=Re.WGS84,this.subtypeField=null,this.subtypes=null,this.trackIdField=null,this.version=void 0}get authenticationTriggerEvent(){var n;if(!this.url)return null;const{capabilities:s}=this;if(s){const{query:a,operations:C,editing:M}=s;if(!a.supportsQueryByOthers||!a.supportsQueryByAnonymous||C.supportsEditing&&!(M.supportsUpdateByOthers&&M.supportsUpdateByAnonymous&&M.supportsDeleteByOthers&&M.supportsDeleteByAnonymous))return"load"}if((n=this.serviceDefinitionExpression)!=null&&n.toLowerCase().includes("current_user"))return"load";if(this.userHasUpdateItemPrivileges){if(xt(this))return"load";if(this.hasUpdateItemRestrictions)return s.operations.supportsQuery?"editing":"load"}if(this.userHasFullEditingPrivileges&&this.hasFullEditingRestrictions)return"editing";const o=this.editFieldsInfo;return(o!=null&&o.creatorField||o!=null&&o.editorField)&&(s!=null&&s.operations.supportsEditing)?"editing":null}readCapabilitiesFromService(s,o){return St(o,this.url)}readEditingInfo(s,o){const{editingInfo:n}=o;return n?{lastEditDate:n.lastEditDate!=null?new Date(n.lastEditDate):null}:null}get effectiveCapabilities(){const s=this.capabilities;if(!s)return null;const o=L(s),{operations:n,editing:a}=o;return Y(this)?(this.userHasUpdateItemPrivileges&&(n.supportsQuery=!0),o):this.userHasUpdateItemPrivileges?(n.supportsAdd=n.supportsDelete=n.supportsEditing=n.supportsQuery=n.supportsUpdate=a.supportsDeleteByOthers=a.supportsGeometryUpdate=a.supportsUpdateByOthers=!0,o):(this.userHasFullEditingPrivileges&&n.supportsEditing&&(n.supportsAdd=n.supportsDelete=n.supportsUpdate=a.supportsGeometryUpdate=!0),o)}readGlobalIdFieldFromService(s,o){return wt(o)}get hasFullEditingRestrictions(){const s=this.capabilities;if(!s||Y(this))return!1;const{operations:o,editing:n}=s;return o.supportsEditing&&!(o.supportsAdd&&o.supportsDelete&&o.supportsUpdate&&n.supportsGeometryUpdate)}get hasUpdateItemRestrictions(){const s=this.capabilities;if(!s)return!1;const{operations:o,editing:n}=s;return Y(this)?!o.supportsQuery:!(o.supportsAdd&&o.supportsDelete&&o.supportsEditing&&o.supportsQuery&&o.supportsUpdate&&n.supportsDeleteByOthers&&n.supportsGeometryUpdate&&n.supportsUpdateByOthers)}readIsTableFromService(s,o){return o.type==="Table"}readMaxScale(s,o){return o.effectiveMaxScale||s||0}readMinScale(s,o){return o.effectiveMinScale||s||0}readObjectIdFieldFromService(s,o){return gt(o)}readServiceDefinitionExpression(s,o){return o.definitionQuery||o.definitionExpression}set url(s){if(s==null)return void this._set("url",s);const o=lt({layer:this,url:s,nonStandardUrlAllowed:!0,logger:at.getLogger(this)});this._set("url",o.url),o.layerId!=null&&this._set("layerId",o.layerId)}writeUrl(s,o,n,a){ut(this,s,null,o,a)}readVersion(s,o){return bt(o)}};return e([r({readOnly:!0})],i.prototype,"authenticationTriggerEvent",null),e([r({type:String,json:{origins:{service:{read:{source:"copyrightText"}}}}})],i.prototype,"copyright",void 0),e([r({readOnly:!0,json:{read:!1,origins:{service:{read:{source:["advancedQueryCapabilities","allowGeometryUpdates","allowUpdateWithoutMValues","archivingInfo","capabilities","datesInUnknownTimezone","hasAttachments","hasM","hasZ","isDataBranchVersioned","isDataVersioned","maxRecordCount","maxRecordCountFactor","ownershipBasedAccessControlForFeatures","standardMaxRecordCount","supportedQueryFormats","supportsAdvancedQueries","supportsApplyEditsWithGlobalIds","supportsAttachmentsByUploadId","supportsAttachmentsResizing","supportsCalculate","supportsCoordinatesQuantization","supportsExceedsLimitStatistics","supportsFieldDescriptionProperty","supportsQuantizationEditMode","supportsRollbackOnFailureParameter","supportsStatistics","supportsTruncate","supportsValidateSql","tileMaxRecordCount","useStandardizedQueries"]}}}}})],i.prototype,"capabilities",void 0),e([l("service","capabilities")],i.prototype,"readCapabilitiesFromService",null),e([r(pe("dateFieldsTimeReference"))],i.prototype,"dateFieldsTimeZone",void 0),e([r({type:Boolean})],i.prototype,"datesInUnknownTimezone",void 0),e([r({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),e([r({type:String,json:{origins:{service:{read:{source:"displayField"}}}}})],i.prototype,"displayField",void 0),e([r({readOnly:!0,type:Zt})],i.prototype,"editFieldsInfo",void 0),e([r({readOnly:!0})],i.prototype,"editingInfo",void 0),e([l("editingInfo")],i.prototype,"readEditingInfo",null),e([r({readOnly:!0})],i.prototype,"effectiveCapabilities",null),e([r((()=>{const s=L(dt),o=s.json.origins;return o["web-map"]={read:!1,write:!1},o["portal-item"]={read:!1,write:!1},s})())],i.prototype,"elevationInfo",void 0),e([r({type:jt,json:{name:"layerDefinition.floorInfo",write:!0,origins:{"web-scene":{name:"layerDefinition.floorInfo",write:{enabled:!0,layerContainerTypes:yt}}}}})],i.prototype,"floorInfo",void 0),e([r({type:pt,json:{origins:{service:{read:{source:"extent"}}}}})],i.prototype,"fullExtent",void 0),e([r()],i.prototype,"gdbVersion",void 0),e([r({readOnly:!0,type:Ht,json:{read:{source:"geometryProperties"}}})],i.prototype,"geometryFieldsInfo",void 0),e([r({type:["point","polygon","polyline","multipoint","multipatch","mesh"],json:{origins:{service:{read:vt.read}}}})],i.prototype,"geometryType",void 0),e([r({type:String})],i.prototype,"globalIdField",void 0),e([l("service","globalIdField",["globalIdField","fields"])],i.prototype,"readGlobalIdFieldFromService",null),e([r({readOnly:!0})],i.prototype,"hasFullEditingRestrictions",null),e([r({type:Boolean,json:{origins:{service:{read:!0}}}})],i.prototype,"hasM",void 0),e([r({readOnly:!0})],i.prototype,"hasUpdateItemRestrictions",null),e([r({type:Boolean,json:{origins:{service:{read:!0}}}})],i.prototype,"hasZ",void 0),e([r({readOnly:!0,type:ft})],i.prototype,"heightModelInfo",void 0),e([r({type:Date})],i.prototype,"historicMoment",void 0),e([r({type:Me.ofType(g),readOnly:!0})],i.prototype,"indexes",void 0),e([r({readOnly:!0})],i.prototype,"isTable",void 0),e([l("service","isTable",["type"])],i.prototype,"readIsTableFromService",null),e([r({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{read:!1,write:{target:"id"}}},read:!1}})],i.prototype,"layerId",void 0),e([r(ct)],i.prototype,"maxScale",void 0),e([l("service","maxScale",["maxScale","effectiveMaxScale"])],i.prototype,"readMaxScale",null),e([r(mt)],i.prototype,"minScale",void 0),e([l("service","minScale",["minScale","effectiveMinScale"])],i.prototype,"readMinScale",null),e([r({type:String})],i.prototype,"objectIdField",void 0),e([l("service","objectIdField",["objectIdField","fields"])],i.prototype,"readObjectIdFieldFromService",null),e([r(pe("preferredTimeReference"))],i.prototype,"preferredTimeZone",void 0),e([r({type:[$t],readOnly:!0})],i.prototype,"relationships",void 0),e([r({type:Boolean})],i.prototype,"returnM",void 0),e([r({type:Boolean})],i.prototype,"returnZ",void 0),e([r({readOnly:!0,json:{write:!1}})],i.prototype,"serverGens",void 0),e([r({readOnly:!0})],i.prototype,"serviceDefinitionExpression",void 0),e([l("service","serviceDefinitionExpression",["definitionQuery","definitionExpression"])],i.prototype,"readServiceDefinitionExpression",null),e([r({type:String,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"serviceItemId",void 0),e([r()],i.prototype,"sourceJSON",void 0),e([r({type:Re,json:{origins:{service:{read:{source:"extent.spatialReference"}}}}})],i.prototype,"spatialReference",void 0),e([r({type:String,readOnly:!0,json:{origins:{service:{read:!0}}}})],i.prototype,"subtypeField",void 0),e([r({type:[Jt],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"subtypes",void 0),e([r({type:String,json:{read:{source:"timeInfo.trackIdField"}}})],i.prototype,"trackIdField",void 0),e([r(ht)],i.prototype,"url",null),e([u("url")],i.prototype,"writeUrl",null),e([r({json:{origins:{service:{read:!0}},read:!1}})],i.prototype,"version",void 0),e([l("service","version",["currentVersion","capabilities","drawingInfo","hasAttachments","htmlPopupType","relationships","timeInfo","typeIdField","types"])],i.prototype,"readVersion",null),i=e([p("esri.layers.mixins.FeatureLayerBase")],i),i};export{mi as B,ci as V};
//# sourceMappingURL=FeatureLayerBase-Co5fADdm.js.map
