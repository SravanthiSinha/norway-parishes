import{j as e,m as o,k as p,P as S,O as z,k2 as ze,bb as Ie,o as l,u,mj as tt,Q as qe,mk as it,b5 as L,ml as ot,mf as Fe,jd as Ze,mm as Te,mn as Oe,mo as nt,eX as pe,mp as st,mq as rt,aX as pt,ae as Me,ag as Re,hy as lt,s as at,hz as ut}from"./index-BfLS464G.js";import{c as dt,a as yt,v as ct,j as mt,y as ht}from"./commonProperties-BYkEjETv.js";import{v as vt}from"./HeightModelInfo-DzK0H4Qy.js";import{g as ft,B as xt,X as Y,V as wt,D as gt,G as bt}from"./featureLayerUtils-Bgc5F16E.js";import{p as jt}from"./LayerFloorInfo-D1gNlHjm.js";import{p as $t}from"./Relationship-D4VApXlb.js";import{i as St}from"./serviceCapabilitiesUtils-C_-03Ql-.js";var le;let F=le=class extends S{constructor(t){super(t),this.expression=null,this.name=null,this.returnType="boolean",this.title=null}clone(){return new le({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}};e([o({type:String,json:{write:!0}})],F.prototype,"expression",void 0),e([o({type:String,json:{write:!0}})],F.prototype,"name",void 0),e([o({type:["boolean","date","number","string"],json:{write:!0}})],F.prototype,"returnType",void 0),e([o({type:String,json:{write:!0}})],F.prototype,"title",void 0),F=le=e([p("esri.form.ExpressionInfo")],F);const It=F;let T=class extends S{constructor(i){super(i),this.description=null,this.label=null,this.type=null,this.visibilityExpression=null}};e([o({type:String,json:{write:!0}})],T.prototype,"description",void 0),e([o({type:String,json:{write:!0}})],T.prototype,"label",void 0),e([o()],T.prototype,"type",void 0),e([o({type:String,json:{write:!0}})],T.prototype,"visibilityExpression",void 0),T=e([p("esri.form.elements.Element")],T);const O=T;let q=class extends z(S){constructor(i){super(i),this.type=null}};e([o()],q.prototype,"type",void 0),q=e([p("esri.form.elements.inputs.attachments.Input")],q);const E=q,_=["any","capture","upload"];let R=class extends E{constructor(i){super(i),this.type="audio",this.inputMethod="any",this.maxDuration=null}};e([o({type:["audio"],readOnly:!0,json:{write:!0}})],R.prototype,"type",void 0),e([o({type:_,json:{write:!0}})],R.prototype,"inputMethod",void 0),e([o({type:Number,json:{write:!0}})],R.prototype,"maxDuration",void 0),R=e([p("esri.form.elements.inputs.attachments.AudioInput")],R);const De=R;let G=class extends E{constructor(i){super(i),this.type="document",this.maxFileSize=null}};e([o({type:["document"],readOnly:!0,json:{write:!0}})],G.prototype,"type",void 0),e([o({type:Number,json:{write:!0}})],G.prototype,"maxFileSize",void 0),G=e([p("esri.form.elements.inputs.attachments.DocumentInput")],G);const Ve=G;let D=class extends E{constructor(i){super(i),this.type="image",this.inputMethod="any",this.maxImageSize=null}};e([o({type:["image"],readOnly:!0,json:{write:!0}})],D.prototype,"type",void 0),e([o({type:_,json:{write:!0}})],D.prototype,"inputMethod",void 0),e([o({type:Number,json:{write:!0}})],D.prototype,"maxImageSize",void 0),D=e([p("esri.form.elements.inputs.attachments.ImageInput")],D);const Ne=D;let Q=class extends E{constructor(i){super(i),this.type="signature",this.inputMethod="any"}};e([o({type:["signature"],readOnly:!0,json:{write:!0}})],Q.prototype,"type",void 0),e([o({type:_,json:{write:!0}})],Q.prototype,"inputMethod",void 0),Q=e([p("esri.form.elements.inputs.attachments.SignatureInput")],Q);const Be=Q;let V=class extends E{constructor(i){super(i),this.type="video",this.inputMethod="any",this.maxDuration=null}};e([o({type:["video"],readOnly:!0,json:{write:!0}})],V.prototype,"type",void 0),e([o({type:_,json:{write:!0}})],V.prototype,"inputMethod",void 0),e([o({type:Number,json:{write:!0}})],V.prototype,"maxDuration",void 0),V=e([p("esri.form.elements.inputs.attachments.VideoInput")],V);const ke=V;function He(t){return{nestableTypes:{base:E,key:"type",typeMap:{audio:De,document:Ve,image:Ne,signature:Be,video:ke}},allTypes:{base:E,key:"type",typeMap:{attachment:t,audio:De,document:Ve,image:Ne,signature:Be,video:ke}}}}function Et(t,i,s){return t?t.map(n=>ze(i.nestableTypes,n)):null}function Ft(t,i,s){if(!t)return null;const n=i.nestableTypes.typeMap;return t.filter(r=>n[r.type]).map(r=>n[r.type].fromJSON(r))}function Tt(t,i,s){if(!t)return null;const n=i.nestableTypes.typeMap;return t.filter(r=>n[r.type]).map(r=>r.toJSON())}let x=class extends E{constructor(i){super(i),this.type="attachment",this.attachmentAssociationType="exact",this.inputTypes=null}castInputs(i){return Et(i,ee)}readInputs(i,s){return Ft(s.inputTypes,ee)}writeInputs(i,s){s.inputTypes=Tt(i,ee)}};e([o({type:["attachment"],readOnly:!0,json:{write:!0}})],x.prototype,"type",void 0),e([o({type:["any","exact","exactOrNone"],json:{write:!0}})],x.prototype,"attachmentAssociationType",void 0),e([o({json:{write:{isRequired:!0}}})],x.prototype,"inputTypes",void 0),e([Ie("inputTypes")],x.prototype,"castInputs",null),e([l("inputTypes")],x.prototype,"readInputs",null),e([u("inputTypes")],x.prototype,"writeInputs",null),x=e([p("esri.form.elements.inputs.attachments.AttachmentInput")],x);const ee=He(x),Ot=x;var ae;const Mt=He(Ot);let y=ae=class extends O{constructor(t){super(t),this.allowUserRename=!0,this.attachmentKeyword=null,this.displayFilename=!1,this.editableExpression=null,this.filenameExpression="{attachmentKeyword}_{now}",this.input=null,this.maxAttachmentCount=null,this.minAttachmentCount=null,this.type="attachment",this.useOriginalFilename=!0}clone(){var t;return new ae({allowUserRename:this.allowUserRename,attachmentKeyword:this.attachmentKeyword,description:this.description,displayFilename:this.displayFilename,editableExpression:this.editableExpression,filenameExpression:this.filenameExpression,input:(t=this.input)==null?void 0:t.clone(),label:this.label,maxAttachmentCount:this.maxAttachmentCount,minAttachmentCount:this.minAttachmentCount,useOriginalFilename:this.useOriginalFilename,visibilityExpression:this.visibilityExpression})}};e([o({type:Boolean,json:{write:!0}})],y.prototype,"allowUserRename",void 0),e([o({type:String,json:{write:{isRequired:!0}}})],y.prototype,"attachmentKeyword",void 0),e([o({type:Boolean,json:{write:!0}})],y.prototype,"displayFilename",void 0),e([o({type:String,json:{write:!0}})],y.prototype,"editableExpression",void 0),e([o({type:String,json:{write:!0}})],y.prototype,"filenameExpression",void 0),e([o({types:Mt.allTypes,json:{read:{source:"inputType"},write:{target:"inputType",isRequired:!0}}})],y.prototype,"input",void 0),e([o({type:Number,json:{write:!0}})],y.prototype,"maxAttachmentCount",void 0),e([o({type:Number,json:{write:!0}})],y.prototype,"minAttachmentCount",void 0),e([o({type:["attachment"],readOnly:!0,json:{read:!1,write:!0}})],y.prototype,"type",void 0),e([o({type:Boolean,json:{write:!0}})],y.prototype,"useOriginalFilename",void 0),y=ae=e([p("esri.form.elements.AttachmentElement")],y);const Ue=y;let Z=class extends S{constructor(i){super(i),this.type=null}};e([o()],Z.prototype,"type",void 0),Z=e([p("esri.form.elements.inputs.Input")],Z);const I=Z;let P=class extends I{constructor(i){super(i),this.maxLength=null,this.minLength=0}};e([o({type:Number,json:{write:!0}})],P.prototype,"maxLength",void 0),e([o({type:Number,json:{write:!0}})],P.prototype,"minLength",void 0),P=e([p("esri.form.elements.inputs.TextInput")],P);const Ee=P;var ue;let H=ue=class extends Ee{constructor(t){super(t),this.type="barcode-scanner"}clone(){return new ue({maxLength:this.maxLength,minLength:this.minLength})}};e([o({type:["barcode-scanner"],json:{read:!1,write:!0}})],H.prototype,"type",void 0),H=ue=e([p("esri.form.elements.inputs.BarcodeScannerInput")],H);const Rt=H;var de;let N=de=class extends I{constructor(t){super(t),this.noValueOptionLabel=null,this.showNoValueOption=!0,this.type="combo-box"}clone(){return new de({showNoValueOption:this.showNoValueOption,noValueOptionLabel:this.noValueOptionLabel})}};e([o({type:String,json:{write:!0}})],N.prototype,"noValueOptionLabel",void 0),e([o({type:Boolean,json:{write:!0}})],N.prototype,"showNoValueOption",void 0),e([o({type:["combo-box"],json:{read:!1,write:!0}})],N.prototype,"type",void 0),N=de=e([p("esri.form.elements.inputs.ComboBoxInput")],N);const Dt=N;var ye;function Ae(t){return t??null}function Le(t){return t??null}let f=ye=class extends I{constructor(t){super(t),this.max=null,this.min=null,this.type="date-picker"}readMax(t,i){return Ae(i.max)}writeMax(t,i){i.max=Le(t)}readMin(t,i){return Ae(i.min)}writeMin(t,i){i.min=Le(t)}clone(){return new ye({max:this.max,min:this.min})}};e([o({type:String,json:{type:String,write:!0}})],f.prototype,"max",void 0),e([l("max")],f.prototype,"readMax",null),e([u("max")],f.prototype,"writeMax",null),e([o({type:String,json:{type:String,write:!0}})],f.prototype,"min",void 0),e([l("min")],f.prototype,"readMin",null),e([u("min")],f.prototype,"writeMin",null),e([o({type:["date-picker"],json:{read:!1,write:!0}})],f.prototype,"type",void 0),f=ye=e([p("esri.form.elements.inputs.DatePickerInput")],f);const Vt=f;var ce;function te(t){return t??null}function ie(t){return t??null}let d=ce=class extends I{constructor(t){super(t),this.includeTimeOffset=!0,this.max=null,this.min=null,this.timeResolution="minutes",this.type="datetimeoffset-picker"}readMax(t,i){return te(i.max)}writeMax(t,i){i.max=ie(t)}readMin(t,i){return te(i.min)}writeMin(t,i){i.min=ie(t)}readTimeResolution(t,i){return te(i.timeResolution)}writeTimeResolution(t,i){i.timeResolution=ie(t)}clone(){return new ce({includeTimeOffset:this.includeTimeOffset,max:this.max,min:this.min,timeResolution:this.timeResolution})}};e([o({type:Boolean,json:{write:!0}})],d.prototype,"includeTimeOffset",void 0),e([o({type:String,json:{type:String,write:!0}})],d.prototype,"max",void 0),e([l("max")],d.prototype,"readMax",null),e([u("max")],d.prototype,"writeMax",null),e([o({type:String,json:{type:String,write:!0}})],d.prototype,"min",void 0),e([l("min")],d.prototype,"readMin",null),e([u("min")],d.prototype,"writeMin",null),e([o({type:String,json:{type:String,write:!0}})],d.prototype,"timeResolution",void 0),e([l("timeResolution")],d.prototype,"readTimeResolution",null),e([u("timeResolution")],d.prototype,"writeTimeResolution",null),e([o({type:["datetimeoffset-picker"],json:{read:!1,write:!0}})],d.prototype,"type",void 0),d=ce=e([p("esri.form.elements.inputs.DateTimeOffsetPickerInput")],d);const Nt=d;var me;function Ce(t){return t!=null?new Date(t):null}function Ge(t){return t?t.getTime():null}let h=me=class extends I{constructor(t){super(t),this.includeTime=!1,this.max=null,this.min=null,this.type="datetime-picker"}readMax(t,i){return Ce(i.max)}writeMax(t,i){i.max=Ge(t)}readMin(t,i){return Ce(i.min)}writeMin(t,i){i.min=Ge(t)}clone(){return new me({includeTime:this.includeTime,max:this.max,min:this.min})}};e([o({type:Boolean,json:{write:!0}})],h.prototype,"includeTime",void 0),e([o({type:Date,json:{type:Number,write:!0}})],h.prototype,"max",void 0),e([l("max")],h.prototype,"readMax",null),e([u("max")],h.prototype,"writeMax",null),e([o({type:Date,json:{type:Number,write:!0}})],h.prototype,"min",void 0),e([l("min")],h.prototype,"readMin",null),e([u("min")],h.prototype,"writeMin",null),e([o({type:["datetime-picker"],json:{read:!1,write:!0}})],h.prototype,"type",void 0),h=me=e([p("esri.form.elements.inputs.DateTimePickerInput")],h);const Bt=h;var he;let B=he=class extends I{constructor(t){super(t),this.noValueOptionLabel=null,this.showNoValueOption=!0,this.type="radio-buttons"}clone(){return new he({noValueOptionLabel:this.noValueOptionLabel,showNoValueOption:this.showNoValueOption})}};e([o({type:String,json:{write:!0}})],B.prototype,"noValueOptionLabel",void 0),e([o({type:Boolean,json:{write:!0}})],B.prototype,"showNoValueOption",void 0),e([o({type:["radio-buttons"],json:{read:!1,write:!0}})],B.prototype,"type",void 0),B=he=e([p("esri.form.elements.inputs.RadioButtonsInput")],B);const kt=B;var ve;let k=ve=class extends I{constructor(t){super(t),this.offValue=null,this.onValue=null,this.type="switch"}clone(){return new ve({offValue:this.offValue,onValue:this.onValue})}};e([o({type:[String,Number],json:{write:!0}})],k.prototype,"offValue",void 0),e([o({type:[String,Number],json:{write:!0}})],k.prototype,"onValue",void 0),e([o({type:["switch"],json:{read:!1,write:!0}})],k.prototype,"type",void 0),k=ve=e([p("esri.form.elements.inputs.SwitchInput")],k);const Ut=k;var fe;let J=fe=class extends Ee{constructor(t){super(t),this.type="text-area"}clone(){return new fe({maxLength:this.maxLength,minLength:this.minLength})}};e([o({type:["text-area"],json:{read:!1,write:!0}})],J.prototype,"type",void 0),J=fe=e([p("esri.form.elements.inputs.TextAreaInput")],J);const At=J;var xe;let K=xe=class extends Ee{constructor(t){super(t),this.type="text-box"}clone(){return new xe({maxLength:this.maxLength,minLength:this.minLength})}};e([o({type:["text-box"],json:{read:!1,write:!0}})],K.prototype,"type",void 0),K=xe=e([p("esri.form.elements.inputs.TextBoxInput")],K);const Lt=K;var we;function oe(t){return t??null}function ne(t){return t??null}let c=we=class extends I{constructor(t){super(t),this.max=null,this.min=null,this.timeResolution="minutes",this.type="time-picker"}readMax(t,i){return oe(i.max)}writeMax(t,i){i.max=ne(t)}readMin(t,i){return oe(i.min)}writeMin(t,i){i.min=ne(t)}readTimeResolution(t,i){return oe(i.timeResolution)}writeTimeResolution(t,i){i.timeResolution=ne(t)}clone(){return new we({max:this.max,min:this.min,timeResolution:this.timeResolution})}};e([o({type:String,json:{type:String,write:!0}})],c.prototype,"max",void 0),e([l("max")],c.prototype,"readMax",null),e([u("max")],c.prototype,"writeMax",null),e([o({type:String,json:{type:String,write:!0}})],c.prototype,"min",void 0),e([l("min")],c.prototype,"readMin",null),e([u("min")],c.prototype,"writeMin",null),e([o({type:String,json:{type:String,write:!0}})],c.prototype,"timeResolution",void 0),e([l("timeResolution")],c.prototype,"readTimeResolution",null),e([u("timeResolution")],c.prototype,"writeTimeResolution",null),e([o({type:["time-picker"],json:{read:!1,write:!0}})],c.prototype,"type",void 0),c=we=e([p("esri.form.elements.inputs.TimePickerInput")],c);const Ct=c,Gt={base:I,key:"type",typeMap:{"barcode-scanner":Rt,"combo-box":Dt,"date-picker":Vt,"datetime-picker":Bt,"datetimeoffset-picker":Nt,"radio-buttons":kt,switch:Ut,"text-area":At,"text-box":Lt,"time-picker":Ct}};var ge;let m=ge=class extends O{constructor(t){super(t),this.domain=null,this.editable=null,this.editableExpression=null,this.fieldName=null,this.hint=null,this.input=null,this.requiredExpression=null,this.type="field",this.valueExpression=null}clone(){return new ge({description:this.description,domain:this.domain,editable:this.editable,editableExpression:this.editableExpression,fieldName:this.fieldName,hint:this.hint,input:this.input,label:this.label,requiredExpression:this.requiredExpression,valueExpression:this.valueExpression,visibilityExpression:this.visibilityExpression})}};e([o({types:tt,json:{read:{reader:qe},write:!0}})],m.prototype,"domain",void 0),e([o({type:Boolean,json:{write:!0}})],m.prototype,"editable",void 0),e([o({type:String,json:{write:!0}})],m.prototype,"editableExpression",void 0),e([o({type:String,json:{write:!0}})],m.prototype,"fieldName",void 0),e([o({type:String,json:{write:!0}})],m.prototype,"hint",void 0),e([o({types:Gt,json:{read:{source:"inputType"},write:{target:"inputType"}}})],m.prototype,"input",void 0),e([o({type:String,json:{write:!0}})],m.prototype,"requiredExpression",void 0),e([o({type:String,json:{read:!1,write:!0}})],m.prototype,"type",void 0),e([o({type:String,json:{write:!0}})],m.prototype,"valueExpression",void 0),m=ge=e([p("esri.form.elements.FieldElement")],m);const Qe=m;var be;let b=be=class extends O{constructor(t){super(t),this.displayCount=null,this.displayType="list",this.editableExpression=null,this.orderByFields=null,this.relationshipId=null,this.type="relationship"}clone(){return new be({description:this.description,displayCount:this.displayCount,displayType:this.displayType,editableExpression:this.editableExpression,label:this.label,orderByFields:L(this.orderByFields),relationshipId:this.relationshipId,visibilityExpression:this.visibilityExpression})}};e([o({type:Number,json:{write:!0}})],b.prototype,"displayCount",void 0),e([o({type:["list"],json:{write:!0}})],b.prototype,"displayType",void 0),e([o({type:String,json:{write:!0}})],b.prototype,"editableExpression",void 0),e([o({type:[it],json:{write:!0}})],b.prototype,"orderByFields",void 0),e([o({type:Number,json:{write:!0}})],b.prototype,"relationshipId",void 0),e([o({type:["relationship"],json:{read:!1,write:!0}})],b.prototype,"type",void 0),b=be=e([p("esri.form.elements.RelationshipElement")],b);const Pe=b;var je;let U=je=class extends O{constructor(t){super(t),this.text=null,this.textFormat="plain-text",this.type="text"}clone(){return new je({text:this.text,textFormat:this.textFormat,visibilityExpression:this.visibilityExpression})}};e([o({type:String,json:{write:!0}})],U.prototype,"text",void 0),e([o({type:String,json:{write:!0}})],U.prototype,"textFormat",void 0),e([o({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],U.prototype,"type",void 0),U=je=e([p("esri.form.elements.TextElement")],U);const We=U;function Je(t){return{typesWithGroup:{base:O,key:"type",typeMap:{attachment:Ue,field:Qe,group:t,relationship:Pe,text:We}},typesWithoutGroup:{base:O,key:"type",typeMap:{attachment:Ue,field:Qe,relationship:Pe,text:We}}}}function Ke(t,i,s=!0){if(!t)return null;const n=s?i.typesWithGroup.typeMap:i.typesWithoutGroup.typeMap;return t.filter(r=>n[r.type]).map(r=>n[r.type].fromJSON(r))}function _e(t,i,s=!0){if(!t)return null;const n=s?i.typesWithGroup.typeMap:i.typesWithoutGroup.typeMap;return t.filter(r=>n[r.type]).map(r=>r.toJSON())}function Xe(t,i,s=!0){return t?t.map(n=>ze(s?i.typesWithGroup:i.typesWithoutGroup,n)):null}var $e;let w=$e=class extends O{constructor(t){super(t),this.elements=null,this.initialState="expanded",this.type="group"}castElements(t){return Xe(t,se,!1)}readElements(t,i){return Ke(i.formElements,se,!1)}writeElements(t,i){i.formElements=_e(t,se,!1)}clone(){return new $e({description:this.description,elements:L(this.elements),initialState:this.initialState,label:this.label,visibilityExpression:this.visibilityExpression})}};e([o({json:{write:!0}})],w.prototype,"elements",void 0),e([Ie("elements")],w.prototype,"castElements",null),e([l("elements",["formElements"])],w.prototype,"readElements",null),e([u("elements")],w.prototype,"writeElements",null),e([o({type:["collapsed","expanded"],json:{write:!0}})],w.prototype,"initialState",void 0),e([o({type:String,json:{read:!1,write:!0}})],w.prototype,"type",void 0),w=$e=e([p("esri.form.elements.GroupElement")],w);const se=Je(w),Qt=w,Pt=t=>t.type==="field",Wt=t=>t.type==="group",zt=t=>t.type==="text";var Se;const re=Je(Qt);let v=Se=class extends S{constructor(t){super(t),this.description=null,this.elements=null,this.expressionInfos=null,this.preserveFieldValuesWhenHidden=!1,this.title=null}castElements(t){return Xe(t,re)}readElements(t,i){return Ke(i.formElements,re)}writeElements(t,i){i.formElements=_e(t,re)}clone(){return new Se({description:this.description,expressionInfos:L(this.expressionInfos),elements:L(this.elements),title:this.title,preserveFieldValuesWhenHidden:this.preserveFieldValuesWhenHidden})}async getFieldsUsed(t,i){const s=new Set,{description:n,elements:r,expressionInfos:a,title:C}=this;if(W(s,t,n),W(s,t,C),!r)return[];const M=qt(r,a).map(X=>ot(s,t,X));await Promise.all(M);for(const X of r)Ye(s,{fieldsIndex:t,relationships:i},X);return Array.from(s).sort()}};function Ye(t,i,s){var r;const{fieldsIndex:n}=i;if(!n||n.fields.length!==t.size)switch(W(t,n,s.label),W(t,n,s.description),s.type){case"field":Fe(t,n,s.fieldName);break;case"group":s.elements.forEach(a=>Ye(t,i,a));break;case"relationship":if(i.relationships){const a=i.relationships.find(C=>C.id===s.relationshipId);a&&Fe(t,n,a.keyField)}Ze(t,n,(r=s.orderByFields)==null?void 0:r.map(a=>a.field));break;case"text":W(t,n,s.text)}}function qt(t,i){if(!i||i.length===0)return[];const s=et(t),n=[];for(const r of i)s.has(r.name)&&n.push(r.expression);return n}function et(t){const i=new Set;for(const s of t)if(Te(i,s.visibilityExpression),!zt(s)){if(Wt(s))Oe(i,et(s.elements));else if(Te(i,s.editableExpression),Pt(s)){const{requiredExpression:n,valueExpression:r}=s;Oe(i,[n,r])}}return i}function W(t,i,s){Ze(t,i,nt(s))}e([o({type:String,json:{write:!0}})],v.prototype,"description",void 0),e([o({json:{write:!0}})],v.prototype,"elements",void 0),e([Ie("elements")],v.prototype,"castElements",null),e([l("elements",["formElements"])],v.prototype,"readElements",null),e([u("elements")],v.prototype,"writeElements",null),e([o({type:[It],json:{write:!0}})],v.prototype,"expressionInfos",void 0),e([o({type:Boolean,json:{default:!1,write:!0}})],v.prototype,"preserveFieldValuesWhenHidden",void 0),e([o({type:String,json:{write:!0}})],v.prototype,"title",void 0),v=Se=e([p("esri.form.FormTemplate")],v);const ci=v;let j=class extends z(S){constructor(t){super(t),this.creatorField=null,this.creationDateField=null,this.editorField=null,this.editDateField=null,this.realm=null,this.timeZone=null}};e([o()],j.prototype,"creatorField",void 0),e([o()],j.prototype,"creationDateField",void 0),e([o()],j.prototype,"editorField",void 0),e([o()],j.prototype,"editDateField",void 0),e([o()],j.prototype,"realm",void 0),e([o(pe("dateFieldsTimeReference",!0))],j.prototype,"timeZone",void 0),j=e([p("esri.layers.support.EditFieldsInfo")],j);const Zt=j;let g=class extends z(S){constructor(t){super(t)}};e([o({constructOnly:!0,json:{write:!0}})],g.prototype,"name",void 0),e([o({constructOnly:!0,json:{write:!0}})],g.prototype,"fields",void 0),e([o({constructOnly:!0,json:{write:!0}})],g.prototype,"isAscending",void 0),e([o({constructOnly:!0,json:{write:!0}})],g.prototype,"indexType",void 0),e([o({constructOnly:!0,json:{write:!0}})],g.prototype,"isUnique",void 0),e([o({constructOnly:!0,json:{write:!0}})],g.prototype,"description",void 0),g=e([p("esri.layers.support.FeatureIndex")],g);let A=class extends z(S){constructor(t){super(t),this.shapeAreaField=null,this.shapeLengthField=null,this.units=null}};e([o({type:String,json:{read:{source:"shapeAreaFieldName"}}})],A.prototype,"shapeAreaField",void 0),e([o({type:String,json:{read:{source:"shapeLengthFieldName"}}})],A.prototype,"shapeLengthField",void 0),e([o({type:String,json:{read:t=>st.read(t)||rt.read(t)}})],A.prototype,"units",void 0),A=e([p("esri.layers.support.GeometryFieldsInfo")],A);const Ht=A;let $=class extends z(S){constructor(t){super(t),this.code=null,this.defaultValues={},this.domains=null,this.name=null}readDomains(t){if(!t)return null;const i={};for(const s of Object.keys(t))i[s]=qe(t[s]);return i}writeDomains(t,i){var n;if(!t)return;const s={};for(const r of Object.keys(t))t[r]&&(s[r]=(n=t[r])==null?void 0:n.toJSON());i.domains=s}};e([o({type:Number,json:{write:!0}})],$.prototype,"code",void 0),e([o({type:Object,json:{write:!0}})],$.prototype,"defaultValues",void 0),e([o({json:{write:!0}})],$.prototype,"domains",void 0),e([l("domains")],$.prototype,"readDomains",null),e([u("domains")],$.prototype,"writeDomains",null),e([o({type:String,json:{write:!0}})],$.prototype,"name",void 0),$=e([p("esri.layers.support.Subtype")],$);const Jt=$,mi=t=>{let i=class extends t{constructor(){super(...arguments),this.copyright=null,this.capabilities=null,this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.definitionExpression=null,this.displayField=null,this.editFieldsInfo=null,this.editingInfo=null,this.elevationInfo=null,this.floorInfo=null,this.fullExtent=null,this.gdbVersion=null,this.geometryFieldsInfo=null,this.geometryType=null,this.globalIdField=null,this.hasM=void 0,this.hasZ=void 0,this.heightModelInfo=null,this.historicMoment=null,this.indexes=new(Me.ofType(g)),this.isTable=!1,this.layerId=void 0,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.preferredTimeZone=null,this.relationships=null,this.returnM=void 0,this.returnZ=void 0,this.serviceDefinitionExpression=null,this.serviceItemId=null,this.sourceJSON=null,this.spatialReference=Re.WGS84,this.subtypeField=null,this.subtypes=null,this.trackIdField=null,this.version=void 0}get authenticationTriggerEvent(){var r;if(!this.url)return null;const{capabilities:s}=this;if(s){const{query:a,operations:C,editing:M}=s;if(!a.supportsQueryByOthers||!a.supportsQueryByAnonymous||C.supportsEditing&&!(M.supportsUpdateByOthers&&M.supportsUpdateByAnonymous&&M.supportsDeleteByOthers&&M.supportsDeleteByAnonymous))return"load"}if((r=this.serviceDefinitionExpression)!=null&&r.toLowerCase().includes("current_user"))return"load";if(this.userHasUpdateItemPrivileges){if(xt(this))return"load";if(this.hasUpdateItemRestrictions)return s.operations.supportsQuery?"editing":"load"}if(this.userHasFullEditingPrivileges&&this.hasFullEditingRestrictions)return"editing";const n=this.editFieldsInfo;return(n!=null&&n.creatorField||n!=null&&n.editorField)&&(s!=null&&s.operations.supportsEditing)?"editing":null}readCapabilitiesFromService(s,n){return St(n,this.url)}readEditingInfo(s,n){const{editingInfo:r}=n;return r?{lastEditDate:r.lastEditDate!=null?new Date(r.lastEditDate):null}:null}get effectiveCapabilities(){const s=this.capabilities;if(!s)return null;const n=L(s),{operations:r,editing:a}=n;return Y(this)?(this.userHasUpdateItemPrivileges&&(r.supportsQuery=!0),n):this.userHasUpdateItemPrivileges?(r.supportsAdd=r.supportsDelete=r.supportsEditing=r.supportsQuery=r.supportsUpdate=a.supportsDeleteByOthers=a.supportsGeometryUpdate=a.supportsUpdateByOthers=!0,n):(this.userHasFullEditingPrivileges&&r.supportsEditing&&(r.supportsAdd=r.supportsDelete=r.supportsUpdate=a.supportsGeometryUpdate=!0),n)}readGlobalIdFieldFromService(s,n){return wt(n)}get hasFullEditingRestrictions(){const s=this.capabilities;if(!s||Y(this))return!1;const{operations:n,editing:r}=s;return n.supportsEditing&&!(n.supportsAdd&&n.supportsDelete&&n.supportsUpdate&&r.supportsGeometryUpdate)}get hasUpdateItemRestrictions(){const s=this.capabilities;if(!s)return!1;const{operations:n,editing:r}=s;return Y(this)?!n.supportsQuery:!(n.supportsAdd&&n.supportsDelete&&n.supportsEditing&&n.supportsQuery&&n.supportsUpdate&&r.supportsDeleteByOthers&&r.supportsGeometryUpdate&&r.supportsUpdateByOthers)}readIsTableFromService(s,n){return n.type==="Table"}readMaxScale(s,n){return n.effectiveMaxScale||s||0}readMinScale(s,n){return n.effectiveMinScale||s||0}readObjectIdFieldFromService(s,n){return gt(n)}readServiceDefinitionExpression(s,n){return n.definitionQuery||n.definitionExpression}set url(s){if(s==null)return void this._set("url",s);const n=lt({layer:this,url:s,nonStandardUrlAllowed:!0,logger:at.getLogger(this)});this._set("url",n.url),n.layerId!=null&&this._set("layerId",n.layerId)}writeUrl(s,n,r,a){ut(this,s,null,n,a)}readVersion(s,n){return bt(n)}};return e([o({readOnly:!0})],i.prototype,"authenticationTriggerEvent",null),e([o({type:String,json:{origins:{service:{read:{source:"copyrightText"}}}}})],i.prototype,"copyright",void 0),e([o({readOnly:!0,json:{read:!1,origins:{service:{read:{source:["advancedQueryCapabilities","allowGeometryUpdates","allowUpdateWithoutMValues","archivingInfo","capabilities","datesInUnknownTimezone","hasAttachments","hasM","hasZ","isDataBranchVersioned","isDataVersioned","maxRecordCount","maxRecordCountFactor","ownershipBasedAccessControlForFeatures","standardMaxRecordCount","supportedQueryFormats","supportsAdvancedQueries","supportsApplyEditsWithGlobalIds","supportsAttachmentsByUploadId","supportsAttachmentsResizing","supportsCalculate","supportsCoordinatesQuantization","supportsExceedsLimitStatistics","supportsFieldDescriptionProperty","supportsQuantizationEditMode","supportsRollbackOnFailureParameter","supportsStatistics","supportsTruncate","supportsValidateSql","tileMaxRecordCount","useStandardizedQueries"]}}}}})],i.prototype,"capabilities",void 0),e([l("service","capabilities")],i.prototype,"readCapabilitiesFromService",null),e([o(pe("dateFieldsTimeReference"))],i.prototype,"dateFieldsTimeZone",void 0),e([o({type:Boolean})],i.prototype,"datesInUnknownTimezone",void 0),e([o({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),e([o({type:String,json:{origins:{service:{read:{source:"displayField"}}}}})],i.prototype,"displayField",void 0),e([o({readOnly:!0,type:Zt})],i.prototype,"editFieldsInfo",void 0),e([o({readOnly:!0})],i.prototype,"editingInfo",void 0),e([l("editingInfo")],i.prototype,"readEditingInfo",null),e([o({readOnly:!0})],i.prototype,"effectiveCapabilities",null),e([o((()=>{const s=L(dt),n=s.json.origins;return n["web-map"]={read:!1,write:!1},n["portal-item"]={read:!1,write:!1},s})())],i.prototype,"elevationInfo",void 0),e([o({type:jt,json:{name:"layerDefinition.floorInfo",write:!0,origins:{"web-scene":{name:"layerDefinition.floorInfo",write:{enabled:!0,layerContainerTypes:yt}}}}})],i.prototype,"floorInfo",void 0),e([o({type:pt,json:{origins:{service:{read:{source:"extent"}}}}})],i.prototype,"fullExtent",void 0),e([o()],i.prototype,"gdbVersion",void 0),e([o({readOnly:!0,type:Ht,json:{read:{source:"geometryProperties"}}})],i.prototype,"geometryFieldsInfo",void 0),e([o({type:["point","polygon","polyline","multipoint","multipatch","mesh"],json:{origins:{service:{read:ft.read}}}})],i.prototype,"geometryType",void 0),e([o({type:String})],i.prototype,"globalIdField",void 0),e([l("service","globalIdField",["globalIdField","fields"])],i.prototype,"readGlobalIdFieldFromService",null),e([o({readOnly:!0})],i.prototype,"hasFullEditingRestrictions",null),e([o({type:Boolean,json:{origins:{service:{read:!0}}}})],i.prototype,"hasM",void 0),e([o({readOnly:!0})],i.prototype,"hasUpdateItemRestrictions",null),e([o({type:Boolean,json:{origins:{service:{read:!0}}}})],i.prototype,"hasZ",void 0),e([o({readOnly:!0,type:vt})],i.prototype,"heightModelInfo",void 0),e([o({type:Date})],i.prototype,"historicMoment",void 0),e([o({type:Me.ofType(g),readOnly:!0})],i.prototype,"indexes",void 0),e([o({readOnly:!0})],i.prototype,"isTable",void 0),e([l("service","isTable",["type"])],i.prototype,"readIsTableFromService",null),e([o({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{read:!1,write:{target:"id"}}},read:!1}})],i.prototype,"layerId",void 0),e([o(ct)],i.prototype,"maxScale",void 0),e([l("service","maxScale",["maxScale","effectiveMaxScale"])],i.prototype,"readMaxScale",null),e([o(mt)],i.prototype,"minScale",void 0),e([l("service","minScale",["minScale","effectiveMinScale"])],i.prototype,"readMinScale",null),e([o({type:String})],i.prototype,"objectIdField",void 0),e([l("service","objectIdField",["objectIdField","fields"])],i.prototype,"readObjectIdFieldFromService",null),e([o(pe("preferredTimeReference"))],i.prototype,"preferredTimeZone",void 0),e([o({type:[$t],readOnly:!0})],i.prototype,"relationships",void 0),e([o({type:Boolean})],i.prototype,"returnM",void 0),e([o({type:Boolean})],i.prototype,"returnZ",void 0),e([o({readOnly:!0,json:{write:!1}})],i.prototype,"serverGens",void 0),e([o({readOnly:!0})],i.prototype,"serviceDefinitionExpression",void 0),e([l("service","serviceDefinitionExpression",["definitionQuery","definitionExpression"])],i.prototype,"readServiceDefinitionExpression",null),e([o({type:String,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"serviceItemId",void 0),e([o()],i.prototype,"sourceJSON",void 0),e([o({type:Re,json:{origins:{service:{read:{source:"extent.spatialReference"}}}}})],i.prototype,"spatialReference",void 0),e([o({type:String,readOnly:!0,json:{origins:{service:{read:!0}}}})],i.prototype,"subtypeField",void 0),e([o({type:[Jt],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"subtypes",void 0),e([o({type:String,json:{read:{source:"timeInfo.trackIdField"}}})],i.prototype,"trackIdField",void 0),e([o(ht)],i.prototype,"url",null),e([u("url")],i.prototype,"writeUrl",null),e([o({json:{origins:{service:{read:!0}},read:!1}})],i.prototype,"version",void 0),e([l("service","version",["currentVersion","capabilities","drawingInfo","hasAttachments","htmlPopupType","relationships","timeInfo","typeIdField","types"])],i.prototype,"readVersion",null),i=e([p("esri.layers.mixins.FeatureLayerBase")],i),i};export{mi as B,ci as V};
//# sourceMappingURL=FeatureLayerBase-BGV1qseJ.js.map
