const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/RealisticTree.glsl-DCHnsZ_x.js","assets/index-BB6xpuj5.js","assets/index-D3OSfFaz.css","assets/QueryEngine-_uWxmpRG.js","assets/featureConversionUtils-L6p5wBVT.js","assets/WhereClause-BELPuWA8.js","assets/TimeOnly-DIyoNsbt.js","assets/timeSupport-DrDUNSUJ.js","assets/QueryEngineCapabilities-DjYb9CEb.js","assets/Scheduler-CoC6AtxP.js","assets/signal-JD86_R7M.js","assets/ReactiveMap-C5xyLUPa.js","assets/PooledRBush-kATYYaNn.js","assets/quickselect-QQC62dOK.js","assets/ViewingMode-dBUh39ak.js","assets/Indices-D2iwPoeq.js","assets/glUtil-CFv2RXTA.js","assets/enums-Dk3osxpS.js","assets/VertexElementDescriptor-BOD-G50G.js","assets/NormalAttribute.glsl-B0eN6qkC.js","assets/interfaces-DDtDqZYj.js","assets/VertexAttribute-BdZWZuT1.js","assets/basicInterfaces-CZwQPxTp.js","assets/NestedMap-GuqgquCN.js","assets/mat4f64-CSKppSlJ.js","assets/Util-CB3Gd6Qy.js","assets/vec32-Dn1yeTzb.js","assets/InterleavedLayout-BIrKQMTv.js","assets/BufferView-BiJ9Khrs.js","assets/types-D0PSWh4d.js","assets/Octree-DWzY0tqN.js","assets/sphere-DiRzKUD3.js","assets/mat3-DJqSU6w-.js","assets/mat3f64-q3fE-ZOt.js","assets/plane-Bcjb4N5A.js","assets/quatf64-aQ5IuZRd.js","assets/IntersectorInterfaces-dI_rFEZm.js","assets/BufferObject-C7inN83X.js","assets/Texture-BzN5lHkh.js","assets/boundedPlane-CmrOoBBp.js","assets/lineSegment-DSzSUP05.js","assets/VertexArrayObject-C34nLg7v.js","assets/doublePrecisionUtils-B0owpBza.js","assets/floatRGBA-DhSBilR8.js","assets/AlphaCutoff-UcccL64p.js","assets/renderState-BqKKaxGi.js","assets/projectVectorToVector-LoPIDbhf.js","assets/projectPointToVector-DRvknz1p.js","assets/computeTranslationToOriginAndRotation-o2bO_U7P.js","assets/MeshLocalVertexSpace-Cjwo5wmK.js","assets/vec3f32-nZdmKIgz.js","assets/orientedBoundingBox-BNHg6ay3.js","assets/quat-BDKHeQj0.js","assets/spatialReferenceEllipsoidUtils-B44YZ9ue.js","assets/triangle-MmZhuKhV.js","assets/BindType-BmZEZMMh.js"])))=>i.map(i=>d[i]);
import{aQ as $,bz as si,I as Te,s as li,c8 as ci,c_ as Rt,j as m,m as z,k as ur,ar as di,as as ui,dv as go,lA as xo,aU as hr,hf as Je,jW as Qt,bC as oe,hj as Dt,T as To,i2 as ye,aD as _o,hd as bo,bM as It,nD as hi,nE as mi,gd as Le,gf as Ft,hc as zt,bO as fi,bN as Eo,cw as So,cK as Co,hl as ut,b$ as Ao,nF as wo,nG as Mo,jk as yo,_ as Tt,dt as St,hn as Oo,fh as Ro,c0 as Io,eL as Ir,j9 as $o,cv as rt,fY as it,w as $r,nH as No,az as Lo,aC as Po,ay as Do}from"./index-BB6xpuj5.js";import{r as ve,o as X,q as Ge,E as ht,u as Fo,c as nt,I as Nr,v as zo,H as pi,R as ke,s as Ot,_ as vi,A as mr,g as Lr,P as Bo,N as Go}from"./vec32-Dn1yeTzb.js";import{s as U}from"./Util-CB3Gd6Qy.js";import{l as er}from"./ViewingMode-dBUh39ak.js";import{H as Vo}from"./InterleavedLayout-BIrKQMTv.js";import{n as D,S as gi,u as mt,b as fe,a as Q,t as Bt,c as Pr,o as kt,r as Ho}from"./NormalAttribute.glsl-B0eN6qkC.js";import{t as Qe,o as s,r as R}from"./interfaces-DDtDqZYj.js";import{e as p}from"./VertexAttribute-BdZWZuT1.js";import{a as I}from"./BindType-BmZEZMMh.js";import{a as tr,O as rr,s as be,i as ge,e as _t,n as Gt,u as Ve}from"./basicInterfaces-CZwQPxTp.js";import{o as _e}from"./AlphaCutoff-UcccL64p.js";import"./boundedPlane-CmrOoBBp.js";import{E as xi,U as xe}from"./sphere-DiRzKUD3.js";import{E as Uo,R as Ct,O as de,X as Oe,I as ae,D as ft,G as Ie,t as jo,_ as Wo,f as qo,c as pe,L as Ze}from"./enums-Dk3osxpS.js";import{B as Vt,o as ko,g as Ht,r as Yo,c as Xo,p as Zo,f as Ko}from"./renderState-BqKKaxGi.js";import{j as Jo}from"./mat3-DJqSU6w-.js";import{e as bt,o as et}from"./mat3f64-q3fE-ZOt.js";import{e as fr,o as Dr}from"./mat4f64-CSKppSlJ.js";import{I as Qo,L as ea}from"./orientedBoundingBox-BNHg6ay3.js";import{x as Ti,c as Fr,y as ta,u as ra,q as ia,i as zr}from"./BufferView-BiJ9Khrs.js";import{b as oa,p as _i,m as Ye,a as aa}from"./Texture-BzN5lHkh.js";import{o as na,r as sa}from"./doublePrecisionUtils-B0owpBza.js";import{t as la}from"./requestImageUtils-BlrMzvd8.js";let ca=class{constructor(e=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=$(),this._tmpMbs=xi(),this._tmpObb=new Qo,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=ve(e)}applyToVertex(e,r,i){const o=X(bi,e,r,i),a=X(ha,e,r,i+this.componentLocalOriginLength),n=this._totalOffset/ve(a);return Ge(this._tmpVertex,o,a,n),this._tmpVertex}applyToAabb(e){const r=this.componentLocalOriginLength,i=e[0],o=e[1],a=e[2]+r,n=e[3],l=e[4],c=e[5]+r,u=Math.abs(i),d=Math.abs(o),h=Math.abs(a),v=Math.abs(n),f=Math.abs(l),T=Math.abs(c),_=.5*(1+Math.sign(i*n))*Math.min(u,v),g=.5*(1+Math.sign(o*l))*Math.min(d,f),G=.5*(1+Math.sign(a*c))*Math.min(h,T),P=Math.max(u,v),F=Math.max(d,f),L=Math.max(h,T),B=Math.sqrt(_*_+g*g+G*G),M=Math.sign(u+i),S=Math.sign(d+o),E=Math.sign(h+a),y=Math.sign(v+n),O=Math.sign(f+l),x=Math.sign(T+c),C=this._totalOffset;if(B<C)return e[0]-=(1-M)*C,e[1]-=(1-S)*C,e[2]-=(1-E)*C,e[3]+=y*C,e[4]+=O*C,e[5]+=x*C,e;const w=C/Math.sqrt(P*P+F*F+L*L),V=C/B,j=V-w,q=-j;return e[0]+=i*(M*q+V),e[1]+=o*(S*q+V),e[2]+=a*(E*q+V),e[3]+=n*(y*j+w),e[4]+=l*(O*j+w),e[5]+=c*(x*j+w),e}applyToMbs(e){const r=ve(xe(e)),i=this._totalOffset/r;return Ge(xe(this._tmpMbs),xe(e),xe(e),i),this._tmpMbs[3]=e[3]+e[3]*this._totalOffset/r,this._tmpMbs}applyToObb(e){return ea(e,this._totalOffset,this._totalOffset,er.Global,this._tmpObb),this._tmpObb}},da=class{constructor(e=0){this.offset=e,this.sphere=xi(),this.tmpVertex=$()}applyToVertex(e,r,i){const o=this.objectTransform.transform,a=X(bi,e,r,i),n=ht(a,a,o),l=this.offset/ve(n);Ge(n,n,n,l);const c=this.objectTransform.inverse;return ht(this.tmpVertex,n,c),this.tmpVertex}applyToMinMax(e,r){const i=this.offset/ve(e);Ge(e,e,e,i);const o=this.offset/ve(r);Ge(r,r,r,o)}applyToAabb(e){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*i,e[4]+=e[4]*i,e[5]+=e[5]*i,e}applyToBoundingSphere(e){const r=ve(xe(e)),i=this.offset/r;return Ge(xe(this.sphere),xe(e),xe(e),i),this.sphere[3]=e[3]+e[3]*this.offset/r,this.sphere}};const Br=new da;function ua(t){return t!=null?(Br.offset=t,Br):null}new ca;const bi=$(),ha=$();let ma=class{constructor(e){this._bits=[...e]}equals(e){return si(this._bits,e.bits)}get code(){return this._code??(this._code=String.fromCharCode(...this._bits)),this._code}get bits(){return this._bits}},fa=class extends Qe{constructor(){var e;super(),this._parameterBits=((e=this._parameterBits)==null?void 0:e.map(()=>0))??[],this._parameterNames??(this._parameterNames=[])}get key(){return this._key??(this._key=new ma(this._parameterBits)),this._key}decode(e=this.key){const r=this._parameterBits;this._parameterBits=[...e.bits];const i=this._parameterNames.map(o=>`    ${o}: ${this[o]}`).join(`
`);return this._parameterBits=r,i}};function b(t={}){return(e,r)=>{var u,d;e.hasOwnProperty("_parameterNames")||Object.defineProperty(e,"_parameterNames",{value:((u=e._parameterNames)==null?void 0:u.slice())??[],configurable:!0,writable:!0}),e.hasOwnProperty("_parameterBits")||Object.defineProperty(e,"_parameterBits",{value:((d=e._parameterBits)==null?void 0:d.slice())??[0],configurable:!0,writable:!0}),e._parameterNames.push(r);const i=t.count||2,o=Math.ceil(Math.log2(i)),a=e._parameterBits;let n=0;for(;a[n]+o>16;)n++,n>=a.length&&a.push(0);const l=a[n],c=(1<<o)-1<<l;a[n]+=o,t.count?Object.defineProperty(e,r,{get(){return(this._parameterBits[n]&c)>>l},set(h){if(this[r]!==h){if(this._key=null,this._parameterBits[n]=this._parameterBits[n]&~c|+h<<l&c,typeof h!="number")throw new Te(`Configuration value for ${r} must be a number, got ${typeof h}`);if(t.count==null)throw new Te(`Configuration value for ${r} must provide a count option`)}}}):Object.defineProperty(e,r,{get(){return!!((this._parameterBits[n]&c)>>l)},set(h){if(this[r]!==h&&(this._key=null,this._parameterBits[n]=this._parameterBits[n]&~c|+h<<l&c,typeof h!="boolean"))throw new Te(`Configuration value for ${r} must be boolean, got ${typeof h}`)}})}}function Ei(t,e=!0){t.attributes.add(p.POSITION,"vec2"),e&&t.varyings.add("uv","vec2"),t.vertex.main.add(s`
      gl_Position = vec4(position, 0.0, 1.0);
      ${e?s`uv = position * 0.5 + vec2(0.5);`:""}
  `)}let K=class{constructor(e,r,i,o,a=null){if(this.name=e,this.type=r,this.arraySize=a,this.bind={[I.Pass]:null,[I.Draw]:null},o)switch(i){case I.Pass:this.bind[I.Pass]=o;break;case I.Draw:this.bind[I.Draw]=o}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}},Ke=class extends K{constructor(e,r){super(e,"vec2",I.Pass,(i,o,a)=>i.setUniform2fv(e,r(o,a)))}},ie=class extends K{constructor(e,r){super(e,"float",I.Pass,(i,o,a)=>i.setUniform1f(e,r(o,a)))}},ue=class extends K{constructor(e,r){super(e,"mat3",I.Pass,(i,o,a)=>i.setUniformMatrix3fv(e,r(o,a)))}};const pa=()=>li.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let Si=class{constructor(){this._includedModules=new Map}include(e,r){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,r),e(this.builder,r))}},Ut=class extends Si{constructor(){super(...arguments),this.vertex=new Gr,this.fragment=new Gr,this.attributes=new Ta,this.varyings=new _a,this.extensions=new ir,this.outputs=new ar}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const r=this.extensions.generateSource(e),i=this.attributes.generateSource(e),o=this.varyings.generateSource(e),a=e==="vertex"?this.vertex:this.fragment,n=a.uniforms.generateSource(),l=a.code.generateSource(),c=a.main.generateSource(),u=e==="vertex"?Sa:Ea,d=a.constants.generateSource(),h=this.outputs.generateSource(e);return`#version 300 es
${r.join(`
`)}

${u}

${d.join(`
`)}

${n.join(`
`)}

${i.join(`
`)}

${o.join(`
`)}

${h.join(`
`)}

${l.join(`
`)}

${c.join(`
`)}`}generateBindPass(e){const r=new Map;this.vertex.uniforms.entries.forEach(a=>{const n=a.bind[I.Pass];n&&r.set(a.name,n)}),this.fragment.uniforms.entries.forEach(a=>{const n=a.bind[I.Pass];n&&r.set(a.name,n)});const i=Array.from(r.values()),o=i.length;return(a,n)=>{for(let l=0;l<o;++l)i[l](e,a,n)}}generateBindDraw(e){const r=new Map;this.vertex.uniforms.entries.forEach(a=>{const n=a.bind[I.Draw];n&&r.set(a.name,n)}),this.fragment.uniforms.entries.forEach(a=>{const n=a.bind[I.Draw];n&&r.set(a.name,n)});const i=Array.from(r.values()),o=i.length;return(a,n,l)=>{for(let c=0;c<o;++c)i[c](e,l,a,n)}}},va=class{constructor(e){this._stage=e,this._entries=new Map}add(...e){for(const r of e)this._add(r);return this._stage}get(e){return this._entries.get(e)}_add(e){if(e!=null){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new Te(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else pa().error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(e=>e.arraySize!=null?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`)}get entries(){return Array.from(this._entries.values())}},ga=class{constructor(e){this._stage=e,this._bodies=new Array}add(e){return this._bodies.push(e),this._stage}generateSource(){if(this._bodies.length>0)return[`void main() {
 ${this._bodies.join(`
`)||""} 
}`];throw new Te("Shader does not contain main function body.")}},xa=class{constructor(e){this._stage=e,this._entries=new Array}add(e){return this._entries.push(e),this._stage}generateSource(){return this._entries}},Gr=class extends Si{constructor(){super(...arguments),this.uniforms=new va(this),this.main=new ga(this),this.code=new xa(this),this.constants=new ba(this)}get builder(){return this}},Ta=class{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(e){return e==="fragment"?[]:this._entries.map(r=>`in ${r[1]} ${r[0]};`)}},_a=class{constructor(){this._entries=new Map}add(e,r){this._entries.has(e)&&U(this._entries.get(e)===r),this._entries.set(e,r)}generateSource(e){const r=new Array;return this._entries.forEach((i,o)=>r.push(e==="vertex"?`out ${i} ${o};`:`in ${i} ${o};`)),r}},ir=class or{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const r=e==="vertex"?or.ALLOWLIST_VERTEX:or.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(i=>r.includes(i)).map(i=>`#extension ${i} : enable`)}};ir.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],ir.ALLOWLIST_VERTEX=[];let ar=class nr{constructor(){this._entries=new Map}add(e,r,i=0){const o=this._entries.get(i);o?U(o.name===e&&o.type===r,`Fragment shader output location ${i} occupied`):this._entries.set(i,{name:e,type:r})}generateSource(e){if(e==="vertex")return[];this._entries.size===0&&this._entries.set(0,{name:nr.DEFAULT_NAME,type:nr.DEFAULT_TYPE});const r=new Array;return this._entries.forEach((i,o)=>r.push(`layout(location = ${o}) out ${i.type} ${i.name};`)),r}};ar.DEFAULT_TYPE="vec4",ar.DEFAULT_NAME="fragColor";let ba=class W{constructor(e){this._stage=e,this._entries=new Set}add(e,r,i){let o="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":o=W._numberToFloatStr(i);break;case"int":o=W._numberToIntStr(i);break;case"bool":o=i.toString();break;case"vec2":o=`vec2(${W._numberToFloatStr(i[0])},                            ${W._numberToFloatStr(i[1])})`;break;case"vec3":o=`vec3(${W._numberToFloatStr(i[0])},                            ${W._numberToFloatStr(i[1])},                            ${W._numberToFloatStr(i[2])})`;break;case"vec4":o=`vec4(${W._numberToFloatStr(i[0])},                            ${W._numberToFloatStr(i[1])},                            ${W._numberToFloatStr(i[2])},                            ${W._numberToFloatStr(i[3])})`;break;case"ivec2":o=`ivec2(${W._numberToIntStr(i[0])},                             ${W._numberToIntStr(i[1])})`;break;case"ivec3":o=`ivec3(${W._numberToIntStr(i[0])},                             ${W._numberToIntStr(i[1])},                             ${W._numberToIntStr(i[2])})`;break;case"ivec4":o=`ivec4(${W._numberToIntStr(i[0])},                             ${W._numberToIntStr(i[1])},                             ${W._numberToIntStr(i[2])},                             ${W._numberToIntStr(i[3])})`;break;case"mat2":case"mat3":case"mat4":o=`${r}(${Array.prototype.map.call(i,a=>W._numberToFloatStr(a)).join(", ")})`}return this._entries.add(`const ${r} ${e} = ${o};`),this._stage}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}};const Ea=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,Sa=`precision highp float;
precision highp sampler2D;`;let Z=class extends K{constructor(e,r){super(e,"sampler2D",I.Pass,(i,o,a)=>i.bindTexture(e,r(o,a)))}},jt=class{constructor(e,r){this._module=e,this._load=r}get(){return this._module}async reload(){return this._module=await this._load(),this._module}};const Ci=new Map([[p.POSITION,0],[p.NORMAL,1],[p.NORMALCOMPRESSED,1],[p.UV0,2],[p.COLOR,3],[p.COLORFEATUREATTRIBUTE,3],[p.SIZE,4],[p.TANGENT,4],[p.CENTEROFFSETANDDISTANCE,5],[p.SYMBOLCOLOR,5],[p.FEATUREATTRIBUTE,6],[p.INSTANCEFEATUREATTRIBUTE,6],[p.INSTANCECOLOR,7],[p.OBJECTANDLAYERIDCOLOR,7],[p.INSTANCEOBJECTANDLAYERIDCOLOR,7],[p.ROTATION,8],[p.INSTANCEMODEL,8],[p.INSTANCEMODELNORMAL,12],[p.INSTANCEMODELORIGINHI,11],[p.INSTANCEMODELORIGINLO,15]]);let Vr=class{constructor(e,r,i){this._context=e,this._locations=i,this._textures=new Map,this._freeTextureUnits=new ci({deallocator:null}),this._glProgram=e.programCache.acquire(r.generate("vertex"),r.generate("fragment"),i),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=r.generateBindPass(this),this.bindDraw=r.generateBindDraw(this),this._fragmentUniforms=oa()?r.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(e,r){this._glProgram.setUniform1i(e,r?1:0)}setUniform1i(e,r){this._glProgram.setUniform1i(e,r)}setUniform1f(e,r){this._glProgram.setUniform1f(e,r)}setUniform2fv(e,r){this._glProgram.setUniform2fv(e,r)}setUniform3fv(e,r){this._glProgram.setUniform3fv(e,r)}setUniform4fv(e,r){this._glProgram.setUniform4fv(e,r)}setUniformMatrix3fv(e,r){this._glProgram.setUniformMatrix3fv(e,r)}setUniformMatrix4fv(e,r){this._glProgram.setUniformMatrix4fv(e,r)}setUniform1fv(e,r){this._glProgram.setUniform1fv(e,r)}setUniform1iv(e,r){this._glProgram.setUniform1iv(e,r)}setUniform2iv(e,r){this._glProgram.setUniform2iv(e,r)}setUniform3iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform4iv(e,r){this._glProgram.setUniform4iv(e,r)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,r){if((r==null?void 0:r.glName)==null){const o=this._textures.get(e);return o&&(this._context.bindTexture(null,o.unit),this._freeTextureUnit(o),this._textures.delete(e)),null}let i=this._textures.get(e);return i==null?(i=this._allocTextureUnit(r),this._textures.set(e,i)):i.texture=r,this._context.useProgram(this),this.setUniform1i(e,i.unit),this._context.bindTexture(r,i.unit),i.unit}rebindTextures(){var e;this._context.useProgram(this),this._textures.forEach((r,i)=>{this._context.bindTexture(r.texture,r.unit),this.setUniform1i(i,r.unit)}),(e=this._fragmentUniforms)==null||e.forEach(r=>{r.type!=="sampler2D"&&r.type!=="samplerCube"||this._textures.has(r.name)||console.error(`Texture sampler ${r.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}},pr=class{constructor(e,r,i,o,a=Ci){this.release=o,this.locations=a,this.primitiveType=Uo.TRIANGLES,this.key=r.key,this._program=new Vr(e.rctx,i.get().build(r),a),this._pipeline=this.initializePipeline(r),this.reload=async n=>{if(n&&await i.reload(),!this.key.equals(r.key))throw new Error("Configuration was changed after construction, cannot reload shader");Rt(this._program),this._program=new Vr(e.rctx,i.get().build(r),a),this._pipeline=this.initializePipeline(r)}}destroy(){this._program=Rt(this._program),this._pipeline=null}get program(){return this._program}get compiled(){return this.program.compiled}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}getPipeline(e,r){return this._pipeline}initializePipeline(e){return Vt({blending:ko,colorWrite:Ht})}};var sr,st;(function(t){t.OPAQUE="opaque-color",t.TRANSPARENT="transparent-color",t.COMPOSITE="composite-color",t.FINAL="final-color"})(sr||(sr={})),function(t){t.SSAO="ssao",t.LASERLINES="laserline-color",t.ANTIALIASING="aa-color",t.HIGHLIGHTS="highlight-color",t.MAGNIFIER="magnifier-color",t.OCCLUDED="occluded-color",t.VIEWSHED="viewshed-color",t.OPAQUE_ENVIRONMENT="opaque-environment-color",t.TRANSPARENT_ENVIRONMENT="transparent-environment-color"}(st||(st={}));let k=class extends K{constructor(e,r){super(e,"vec3",I.Pass,(i,o,a)=>i.setUniform3fv(e,r(o,a)))}},Xe=class extends K{constructor(e,r){super(e,"mat4",I.Pass,(i,o,a)=>i.setUniformMatrix4fv(e,r(o,a)))}},Be=class extends di{constructor(e){super(e),this.view=null,this.consumes={required:[]},this.produces=sr.COMPOSITE,this.requireGeometryDepth=!1,this._dirty=!0}initialize(){this.addHandles([ui(()=>this.view.ready,e=>{var r;e&&((r=this.view._stage)==null||r.renderer.addRenderNode(this))},go)])}destroy(){var e,r;(r=(e=this.view._stage)==null?void 0:e.renderer)==null||r.removeRenderNode(this)}precompile(){}render(){throw new Te("RenderNode:render-function-not-implemented","render() is not implemented.")}get camera(){return this.view.state.camera.clone()}get sunLight(){return this.bindParameters.lighting.legacy}get gl(){return this.view._stage.renderView.renderingContext.gl}acquireOutputFramebuffer(){var i,o,a;const e=(o=(i=this._frameBuffer)==null?void 0:i.getTexture())==null?void 0:o.descriptor,r=this.view._stage.renderer.fboCache.acquire((e==null?void 0:e.width)??640,(e==null?void 0:e.height)??480,this.produces);return(a=r.fbo)==null||a.initializeAndBind(),r}bindRenderTarget(){var e,r;return(r=(e=this._frameBuffer)==null?void 0:e.fbo)==null||r.initializeAndBind(),this._frameBuffer}requestRender(e){var r;e===tr.UPDATE&&((r=this.view._stage)==null||r.renderView.requestRender(e)),this._dirty=!0}resetWebGLState(){var e;this.renderingContext.resetState(),this.renderingContext.bindFramebuffer((e=this._frameBuffer)==null?void 0:e.fbo)}get fboCache(){return this.view._stage.renderer.fboCache}get bindParameters(){return this.renderContext.bind}get renderingContext(){return this.view._stage.renderView.renderingContext}get renderContext(){var e;return(e=this.view._stage)==null?void 0:e.renderer.renderContext}updateAnimation(e){return!!this._dirty&&(this._dirty=!1,!0)}doRender(e){this._frameBuffer=e.find(({name:r})=>r===this.produces);try{return this.render(e)}finally{this._frameBuffer=null}}};m([z({constructOnly:!0})],Be.prototype,"view",void 0),m([z({constructOnly:!0})],Be.prototype,"consumes",void 0),m([z()],Be.prototype,"produces",void 0),Be=m([ur("esri.views.3d.webgl.RenderNode")],Be);const Ca=Be;let H=class extends di{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};m([z()],H.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),m([z()],H.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),m([z()],H.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),m([z()],H.prototype,"DECONFLICTOR_SHOW_GRID",void 0),m([z()],H.prototype,"LABELS_SHOW_BORDER",void 0),m([z()],H.prototype,"TEXT_SHOW_BASELINE",void 0),m([z()],H.prototype,"TEXT_SHOW_BORDER",void 0),m([z()],H.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),m([z()],H.prototype,"OVERLAY_SHOW_CENTER",void 0),m([z()],H.prototype,"SHOW_POI",void 0),m([z()],H.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),m([z()],H.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),m([z()],H.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),m([z()],H.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),m([z()],H.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),m([z()],H.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),m([z()],H.prototype,"I3S_TREE_SHOW_TILES",void 0),m([z()],H.prototype,"I3S_SHOW_MODIFICATIONS",void 0),m([z()],H.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),m([z()],H.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),m([z()],H.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),m([z()],H.prototype,"LINE_WIREFRAMES",void 0),H=m([ur("esri.views.3d.support.debugFlags")],H);const oc=new H;function Aa(t){return Math.abs(t*t*t)}function Ai(t,e,r){const i=r.parameters;return Yt.scale=Math.min(i.divisor/(e-i.offset),1),Yt.factor=Aa(t),Yt}function wi(t,e){return xo(t*Math.max(e.scale,e.minScaleFactor),t,e.factor)}function wa(t,e,r){const i=Ai(t,e,r);return i.minScaleFactor=0,wi(1,i)}function ac(t,e,r,i){i.scale=wa(t,e,r),i.factor=0,i.minScaleFactor=r.minScaleFactor}function nc(t,e,r=[0,0]){const i=Math.min(Math.max(e.scale,e.minScaleFactor),1);return r[0]=t[0]*i,r[1]=t[1]*i,r}function Ma(t,e,r,i){return wi(t,Ai(e,r,i))}const Yt={scale:0,factor:0,minScaleFactor:0};var Hr,Ur;(function(t){t[t.Undefined=0]="Undefined",t[t.DefinedSize=1]="DefinedSize",t[t.DefinedScale=2]="DefinedScale"})(Hr||(Hr={})),function(t){t[t.Undefined=0]="Undefined",t[t.DefinedAngle=1]="DefinedAngle"}(Ur||(Ur={}));function sc(t,e,r){if(!e.vvSize)return X(t,1,1,1),t;for(let i=0;i<3;++i){const o=e.vvSize.offset[i]+r[0]*e.vvSize.factor[i];t[i]=hr(o,e.vvSize.minSize[i],e.vvSize.maxSize[i])}return t}function ya(t){t.vertex.code.add(s`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(s`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),t.vertex.code.add(s`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),t.vertex.code.add(s`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(s`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),t.vertex.code.add(s`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function lc(t){t.uniforms.add(new k("screenSizePerspective",e=>Mi(e.screenSizePerspective)))}function Oa(t){t.uniforms.add(new k("screenSizePerspectiveAlignment",e=>Mi(e.screenSizePerspectiveAlignment||e.screenSizePerspective)))}function Mi(t){return X(Ra,t.parameters.divisor,t.parameters.offset,t.minScaleFactor)}const Ra=$();let le=class extends K{constructor(e,r){super(e,"vec3",I.Draw,(i,o,a,n)=>i.setUniform3fv(e,r(o,a,n)))}},Ia=class extends K{constructor(e,r){super(e,"mat4",I.Draw,(i,o,a)=>i.setUniformMatrix4fv(e,r(o,a)))}};function pt(t,e){e.instancedDoublePrecision?t.constants.add("cameraPosition","vec3",Je):t.uniforms.add(new le("cameraPosition",(r,i)=>X(yi,i.camera.viewInverseTransposeMatrix[3]-r.origin[0],i.camera.viewInverseTransposeMatrix[7]-r.origin[1],i.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function He(t,e){if(!e.instancedDoublePrecision)return void t.uniforms.add(new Xe("proj",(i,o)=>o.camera.projectionMatrix),new Ia("view",(i,o)=>Qt(jr,o.camera.viewMatrix,i.origin)),new le("localOrigin",i=>i.origin));const r=i=>X(yi,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]);t.uniforms.add(new Xe("proj",(i,o)=>o.camera.projectionMatrix),new Xe("view",(i,o)=>Qt(jr,o.camera.viewMatrix,r(o))),new k("localOrigin",(i,o)=>r(o)))}const jr=fr(),yi=$();function $a(t){t.uniforms.add(new Xe("viewNormal",(e,r)=>r.camera.viewInverseTransposeMatrix))}function uc(t){t.uniforms.add(new ie("pixelRatio",(e,r)=>r.camera.pixelRatio/r.overlayStretch))}let te=class extends K{constructor(e,r){super(e,"vec4",I.Pass,(i,o,a)=>i.setUniform4fv(e,r(o,a)))}};function Oi(t,e){const r=t.vertex;e.hasVerticalOffset?(La(r),e.hasScreenSizePerspective&&(t.include(ya),Oa(r),pt(t.vertex,e)),r.code.add(s`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${e.spherical?s`vec3 worldNormal = normalize(worldPos + localOrigin);`:s`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${e.hasScreenSizePerspective?s`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:s`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(s`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const Na=Dt();function La(t){t.uniforms.add(new te("verticalOffset",(e,r)=>{const{minWorldLength:i,maxWorldLength:o,screenLength:a}=e.verticalOffset,n=Math.tan(.5*r.camera.fovY)/(.5*r.camera.fullViewport[3]),l=r.camera.pixelRatio||1;return oe(Na,a*l,n,i,o)}))}function Pa(){return!!To("enable-feature:objectAndLayerId-rendering")}let Da=class{constructor(e){this._material=e.material,this._techniques=e.techniques,this._output=e.output}dispose(){}get _stippleTextures(){return this._techniques.context.stippleTextures}get _markerTextures(){return this._techniques.context.markerTextures}acquireTechnique(e,r){return this._techniques.acquire(e,this._material.getConfiguration(this._output,r))}ensureResources(e){return rr.LOADED}},Fa=class extends Da{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textures=e.textures,this._textureId=e.textureId,this._acquire(e.textureId,r=>this._texture=r),this._acquire(e.normalTextureId,r=>this._textureNormal=r),this._acquire(e.emissiveTextureId,r=>this._textureEmissive=r),this._acquire(e.occlusionTextureId,r=>this._textureOcclusion=r),this._acquire(e.metallicRoughnessTextureId,r=>this._textureMetallicRoughness=r)}dispose(){super.dispose(),this._texture=ye(this._texture),this._textureNormal=ye(this._textureNormal),this._textureEmissive=ye(this._textureEmissive),this._textureOcclusion=ye(this._textureOcclusion),this._textureMetallicRoughness=ye(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?rr.LOADED:rr.LOADING}get textureBindParameters(){return new Ba(this._texture!=null?this._texture.glTexture:null,this._textureNormal!=null?this._textureNormal.glTexture:null,this._textureEmissive!=null?this._textureEmissive.glTexture:null,this._textureOcclusion!=null?this._textureOcclusion.glTexture:null,this._textureMetallicRoughness!=null?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){this._texture!=null&&e===this._texture.id||(this._texture=ye(this._texture),this._textureId=e,this._acquire(this._textureId,r=>this._texture=r))}_acquire(e,r){if(e==null)return void r(null);const i=this._textures.acquire(e);if(_o(i))return++this._numLoading,void i.then(o=>{if(this._disposed)return ye(o),void r(null);r(o)}).finally(()=>--this._numLoading);r(i)}},za=class extends Qe{constructor(e=null){super(),this.textureEmissive=e}},Ba=class extends za{constructor(e=null,r=null,i=null,o=null,a=null,n,l){super(i),this.texture=e,this.textureNormal=r,this.textureOcclusion=o,this.textureMetallicRoughness=a,this.scale=n,this.normalTextureTransformMatrix=l}},Ri=class{constructor(){this.id=bo()}};var vt;(function(t){t[t.Layer=0]="Layer",t[t.Object=1]="Object",t[t.Mesh=2]="Mesh",t[t.Line=3]="Line",t[t.Point=4]="Point",t[t.Material=5]="Material",t[t.Texture=6]="Texture",t[t.COUNT=7]="COUNT"})(vt||(vt={}));function Ga(t,e,r,i,o){let a=(r.screenLength||0)*t.pixelRatio;o!=null&&(a=Ma(a,i,e,o));const n=a*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return hr(n*e,r.minWorldLength||0,r.maxWorldLength!=null?r.maxWorldLength:1/0)}function Wr(t,e){let r=!1;for(const i in e){const o=e[i];o!==void 0&&(Array.isArray(o)?Array.isArray(t[i])&&si(o,t[i])||(t[i]=o.slice(),r=!0):t[i]!==o&&(r=!0,t[i]=o))}return r}const Va={multiply:1,ignore:2,replace:3,tint:4};let Ha=class extends Ri{constructor(e,r){super(),this.type=vt.Material,this.supportsEdges=!1,this._renderPriority=0,this.vertexAttributeLocations=Ci,this._pp0=It(0,0,1),this._pp1=It(0,0,0),this._parameters=new r,Wr(this._parameters,e),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e,r=!0){Wr(this._parameters,e)&&(this.validateParameters(this._parameters),r&&this._parametersChanged())}validateParameters(e){}shouldRender(e){return this.visible&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bind.decorations)&&!!(this.parameters.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this._parametersChanged())}_parametersChanged(){var e;(e=this.repository)==null||e.materialChanged(this)}queryRenderOccludedState(e){return this.visible&&this.parameters.renderOccluded===e}get hasEmissions(){return!1}intersectDraped(e,r,i,o,a,n){return this._pp0[0]=this._pp1[0]=o[0],this._pp0[1]=this._pp1[1]=o[1],this.intersect(e,r,i,this._pp0,this._pp1,a)}};var lr;(function(t){t[t.None=0]="None",t[t.Occlude=1]="Occlude",t[t.Transparent=2]="Transparent",t[t.OccludeAndTransparent=4]="OccludeAndTransparent",t[t.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",t[t.Opaque=16]="Opaque"})(lr||(lr={}));var lt;(function(t){t[t.INTEGRATED_MESH=0]="INTEGRATED_MESH",t[t.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",t[t.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",t[t.OPAQUE_MATERIAL_WITHOUT_NORMALS=3]="OPAQUE_MATERIAL_WITHOUT_NORMALS",t[t.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",t[t.TRANSPARENT_MATERIAL_WITHOUT_NORMALS=5]="TRANSPARENT_MATERIAL_WITHOUT_NORMALS",t[t.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",t[t.TRANSPARENT_MATERIAL_WITHOUT_DEPTH=7]="TRANSPARENT_MATERIAL_WITHOUT_DEPTH",t[t.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",t[t.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",t[t.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",t[t.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",t[t.HUD_MATERIAL=12]="HUD_MATERIAL",t[t.LABEL_MATERIAL=13]="LABEL_MATERIAL",t[t.LINE_CALLOUTS=14]="LINE_CALLOUTS",t[t.LINE_CALLOUTS_HUD_DEPTH=15]="LINE_CALLOUTS_HUD_DEPTH",t[t.DRAPED_MATERIAL=16]="DRAPED_MATERIAL",t[t.DRAPED_WATER=17]="DRAPED_WATER",t[t.VOXEL=18]="VOXEL",t[t.MAX_SLOTS=19]="MAX_SLOTS"})(lt||(lt={}));function Tc(t,e,r,i=1){const{data:o,indices:a}=t,n=e.typedBuffer,l=e.typedBufferStride,c=a.length;if(r*=l,i===1)for(let u=0;u<c;++u)n[r]=o[a[u]],r+=l;else for(let u=0;u<c;++u){const d=o[a[u]];for(let h=0;h<i;h++)n[r]=d,r+=l}}function qr(t,e,r){const{data:i,indices:o}=t,a=e.typedBuffer,n=e.typedBufferStride,l=o.length;r*=n;for(let c=0;c<l;++c){const u=2*o[c];a[r]=i[u],a[r+1]=i[u+1],r+=n}}function Ii(t,e,r,i){const{data:o,indices:a}=t,n=e.typedBuffer,l=e.typedBufferStride,c=a.length;if(r*=l,i==null||i===1)for(let u=0;u<c;++u){const d=3*a[u];n[r]=o[d],n[r+1]=o[d+1],n[r+2]=o[d+2],r+=l}else for(let u=0;u<c;++u){const d=3*a[u];for(let h=0;h<i;++h)n[r]=o[d],n[r+1]=o[d+1],n[r+2]=o[d+2],r+=l}}function $i(t,e,r,i=1){const{data:o,indices:a}=t,n=e.typedBuffer,l=e.typedBufferStride,c=a.length;if(r*=l,i===1)for(let u=0;u<c;++u){const d=4*a[u];n[r]=o[d],n[r+1]=o[d+1],n[r+2]=o[d+2],n[r+3]=o[d+3],r+=l}else for(let u=0;u<c;++u){const d=4*a[u];for(let h=0;h<i;++h)n[r]=o[d],n[r+1]=o[d+1],n[r+2]=o[d+2],n[r+3]=o[d+3],r+=l}}function _c(t,e,r){const i=t.typedBuffer,o=t.typedBufferStride;e*=o;for(let a=0;a<r;++a)i[e]=0,i[e+1]=0,i[e+2]=0,i[e+3]=0,e+=o}function Ua(t,e,r,i,o=1){if(!e)return void Ii(t,r,i,o);const{data:a,indices:n}=t,l=r.typedBuffer,c=r.typedBufferStride,u=n.length,d=e[0],h=e[1],v=e[2],f=e[4],T=e[5],_=e[6],g=e[8],G=e[9],P=e[10],F=e[12],L=e[13],B=e[14];i*=c;let M=0,S=0,E=0;const y=hi(e)?O=>{M=a[O]+F,S=a[O+1]+L,E=a[O+2]+B}:O=>{const x=a[O],C=a[O+1],w=a[O+2];M=d*x+f*C+g*w+F,S=h*x+T*C+G*w+L,E=v*x+_*C+P*w+B};if(o===1)for(let O=0;O<u;++O)y(3*n[O]),l[i]=M,l[i+1]=S,l[i+2]=E,i+=c;else for(let O=0;O<u;++O){y(3*n[O]);for(let x=0;x<o;++x)l[i]=M,l[i+1]=S,l[i+2]=E,i+=c}}function ja(t,e,r,i,o=1){if(!e)return void Ii(t,r,i,o);const{data:a,indices:n}=t,l=e,c=r.typedBuffer,u=r.typedBufferStride,d=n.length,h=l[0],v=l[1],f=l[2],T=l[4],_=l[5],g=l[6],G=l[8],P=l[9],F=l[10],L=!mi(l),B=1e-6,M=1-B;i*=u;let S=0,E=0,y=0;const O=hi(l)?x=>{S=a[x],E=a[x+1],y=a[x+2]}:x=>{const C=a[x],w=a[x+1],V=a[x+2];S=h*C+T*w+G*V,E=v*C+_*w+P*V,y=f*C+g*w+F*V};if(o===1)if(L)for(let x=0;x<d;++x){O(3*n[x]);const C=S*S+E*E+y*y;if(C<M&&C>B){const w=1/Math.sqrt(C);c[i]=S*w,c[i+1]=E*w,c[i+2]=y*w}else c[i]=S,c[i+1]=E,c[i+2]=y;i+=u}else for(let x=0;x<d;++x)O(3*n[x]),c[i]=S,c[i+1]=E,c[i+2]=y,i+=u;else for(let x=0;x<d;++x){if(O(3*n[x]),L){const C=S*S+E*E+y*y;if(C<M&&C>B){const w=1/Math.sqrt(C);S*=w,E*=w,y*=w}}for(let C=0;C<o;++C)c[i]=S,c[i+1]=E,c[i+2]=y,i+=u}}function Wa(t,e,r,i,o=1){if(!e)return void $i(t,r,i,o);const{data:a,indices:n}=t,l=e,c=r.typedBuffer,u=r.typedBufferStride,d=n.length,h=l[0],v=l[1],f=l[2],T=l[4],_=l[5],g=l[6],G=l[8],P=l[9],F=l[10],L=!mi(l),B=1e-6,M=1-B;if(i*=u,o===1)for(let S=0;S<d;++S){const E=4*n[S],y=a[E],O=a[E+1],x=a[E+2],C=a[E+3];let w=h*y+T*O+G*x,V=v*y+_*O+P*x,j=f*y+g*O+F*x;if(L){const q=w*w+V*V+j*j;if(q<M&&q>B){const ee=1/Math.sqrt(q);w*=ee,V*=ee,j*=ee}}c[i]=w,c[i+1]=V,c[i+2]=j,c[i+3]=C,i+=u}else for(let S=0;S<d;++S){const E=4*n[S],y=a[E],O=a[E+1],x=a[E+2],C=a[E+3];let w=h*y+T*O+G*x,V=v*y+_*O+P*x,j=f*y+g*O+F*x;if(L){const q=w*w+V*V+j*j;if(q<M&&q>B){const ee=1/Math.sqrt(q);w*=ee,V*=ee,j*=ee}}for(let q=0;q<o;++q)c[i]=w,c[i+1]=V,c[i+2]=j,c[i+3]=C,i+=u}}function qa(t,e,r,i,o=1){const{data:a,indices:n}=t,l=r.typedBuffer,c=r.typedBufferStride,u=n.length;if(i*=c,e!==a.length||e!==4)if(o!==1)if(e!==4)for(let d=0;d<u;++d){const h=3*n[d];for(let v=0;v<o;++v)l[i]=a[h],l[i+1]=a[h+1],l[i+2]=a[h+2],l[i+3]=255,i+=c}else for(let d=0;d<u;++d){const h=4*n[d];for(let v=0;v<o;++v)l[i]=a[h],l[i+1]=a[h+1],l[i+2]=a[h+2],l[i+3]=a[h+3],i+=c}else{if(e===4){for(let d=0;d<u;++d){const h=4*n[d];l[i]=a[h],l[i+1]=a[h+1],l[i+2]=a[h+2],l[i+3]=a[h+3],i+=c}return}for(let d=0;d<u;++d){const h=3*n[d];l[i]=a[h],l[i+1]=a[h+1],l[i+2]=a[h+2],l[i+3]=255,i+=c}}else{l[i]=a[0],l[i+1]=a[1],l[i+2]=a[2],l[i+3]=a[3];const d=new Uint32Array(r.typedBuffer.buffer,r.start),h=c/4,v=d[i/=4];i+=h;const f=u*o;for(let T=1;T<f;++T)d[i]=v,i+=h}}function ka(t,e,r){const{data:i,indices:o}=t,a=e.typedBuffer,n=e.typedBufferStride,l=o.length,c=i[0];r*=n;for(let u=0;u<l;++u)a[r]=c,r+=n}function Ya(t,e,r,i,o=1){const a=e.typedBuffer,n=e.typedBufferStride;if(i*=n,o===1)for(let l=0;l<r;++l)a[i]=t[0],a[i+1]=t[1],a[i+2]=t[2],a[i+3]=t[3],i+=n;else for(let l=0;l<r;++l)for(let c=0;c<o;++c)a[i]=t[0],a[i+1]=t[1],a[i+2]=t[2],a[i+3]=t[3],i+=n}function Xa(t,e,r,i,o,a,n){var l;for(const c of r.fields.keys()){const u=t.get(c),d=u==null?void 0:u.indices;if(u&&d)Za(c,u,i,o,a,n);else if(c===p.OBJECTANDLAYERIDCOLOR&&e!=null){const h=(l=t.get(p.POSITION))==null?void 0:l.indices;if(h){const v=h.length;Ya(e,a.getField(c,Ti),v,n)}}}}function Za(t,e,r,i,o,a){switch(t){case p.POSITION:{U(e.size===3);const n=o.getField(t,zr);U(!!n,`No buffer view for ${t}`),n&&Ua(e,r,n,a);break}case p.NORMAL:{U(e.size===3);const n=o.getField(t,zr);U(!!n,`No buffer view for ${t}`),n&&ja(e,i,n,a);break}case p.NORMALCOMPRESSED:{U(e.size===2);const n=o.getField(t,ia);U(!!n,`No buffer view for ${t}`),n&&qr(e,n,a);break}case p.UV0:{U(e.size===2);const n=o.getField(t,ra);U(!!n,`No buffer view for ${t}`),n&&qr(e,n,a);break}case p.COLOR:case p.SYMBOLCOLOR:{const n=o.getField(t,Ti);U(!!n,`No buffer view for ${t}`),U(e.size===3||e.size===4),!n||e.size!==3&&e.size!==4||qa(e,e.size,n,a);break}case p.COLORFEATUREATTRIBUTE:{const n=o.getField(t,ta);U(!!n,`No buffer view for ${t}`),U(e.size===1),n&&e.size===1&&ka(e,n,a);break}case p.TANGENT:{U(e.size===4);const n=o.getField(t,Fr);U(!!n,`No buffer view for ${t}`),n&&Wa(e,r,n,a);break}case p.PROFILERIGHT:case p.PROFILEUP:case p.PROFILEVERTEXANDNORMAL:case p.FEATUREVALUE:{U(e.size===4);const n=o.getField(t,Fr);U(!!n,`No buffer view for ${t}`),n&&$i(e,n,a)}}}function Ue(t,e){Ka(t,e,new le("slicePlaneOrigin",(r,i)=>Ja(e,r,i)),new le("slicePlaneBasis1",(r,i)=>{var o;return kr(e,r,i,(o=i.slicePlane)==null?void 0:o.basis1)}),new le("slicePlaneBasis2",(r,i)=>{var o;return kr(e,r,i,(o=i.slicePlane)==null?void 0:o.basis2)}))}function Ka(t,e,...r){if(!e.hasSlicePlane){const n=s`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return e.hasSliceInVertexProgram&&t.vertex.code.add(n),void t.fragment.code.add(n)}const i=s`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,o=s`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,a=e.hasSliceHighlight?s`
        ${o}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:s`#define highlightSlice(_color_, _pos_) (_color_)`;e.hasSliceInVertexProgram&&t.vertex.uniforms.add(...r).code.add(i),t.fragment.uniforms.add(...r).code.add(i),t.fragment.code.add(a)}function Ni(t,e,r){return t.instancedDoublePrecision?X(Qa,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):e.slicePlaneLocalOrigin}function Li(t,e){return t!=null?nt($t,e.origin,t):e.origin}function Pi(t,e,r){return t.hasSliceTranslatedView?e!=null?Qt(en,r.camera.viewMatrix,e):r.camera.viewMatrix:null}function Ja(t,e,r){if(r.slicePlane==null)return Je;const i=Ni(t,e,r),o=Li(i,r.slicePlane),a=Pi(t,i,r);return a!=null?ht($t,o,a):o}function kr(t,e,r,i){if(i==null||r.slicePlane==null)return Je;const o=Ni(t,e,r),a=Li(o,r.slicePlane),n=Pi(t,o,r);return n!=null?(Fo(tt,i,a),ht($t,a,n),ht(tt,tt,n),nt(tt,tt,$t)):i}const Qa=$(),$t=$(),tt=$(),en=fr();function tn(t,e){if(e.output!==D.ObjectAndLayerIdColor)return t.vertex.code.add(s`void forwardObjectAndLayerIdColor() {}`),void t.fragment.code.add(s`void outputObjectAndLayerIdColor() {}`);const r=e.objectAndLayerIdColorInstanced;t.varyings.add("objectAndLayerIdColorVarying","vec4"),t.attributes.add(r?p.INSTANCEOBJECTANDLAYERIDCOLOR:p.OBJECTANDLAYERIDCOLOR,"vec4"),t.vertex.code.add(s`
    void forwardObjectAndLayerIdColor() {
      objectAndLayerIdColorVarying = ${r?"instanceObjectAndLayerIdColor":"objectAndLayerIdColor"} * 0.003921568627451;
    }`),t.fragment.code.add(s`void outputObjectAndLayerIdColor() {
fragColor = objectAndLayerIdColorVarying;
}`)}let rn=class extends K{constructor(e,r){super(e,"bool",I.Pass,(i,o,a)=>i.setUniform1b(e,r(o,a)))}};function vr(t){t.uniforms.add(new Ke("zProjectionMap",(e,r)=>on(r.camera))),t.code.add(s`float linearizeDepth(float depth) {
float depthNdc = depth * 2.0 - 1.0;
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
return -(c1 / (depthNdc + c2 + 1e-7));
}`),t.code.add(s`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return depth;
}`),t.code.add(s`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}function on(t){const e=t.projectionMatrix;return Le(an,e[14],e[10])}const an=Ft();function Di(t,{occlusionPass:e,terrainDepthTest:r,cullAboveTerrain:i}){r?(t.fragment.include(vr),t.fragment.uniforms.add(new Z("terrainDepthTexture",(o,a)=>{var n;return(n=a.terrainDepth)==null?void 0:n.attachment})).code.add(s`
   ${e?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${e?s`return fragmentDepth < linearDepth && depth < 1.0;`:s`if(fragmentDepth ${i?">":"<="} linearDepth) discard;`}
    }`)):e?t.fragment.code.add(s`#define terrainDepthTest(fragmentDepth) false`):t.fragment.code.add(s`#define terrainDepthTest(fragmentDepth) {}`)}let nn=class extends K{constructor(e,r){super(e,"ivec2",I.Pass,(i,o,a)=>i.setUniform2iv(e,r(o,a)))}},gr=class extends K{constructor(e,r){super(e,"int",I.Pass,(i,o,a)=>i.setUniform1i(e,r(o,a)))}};function Fi(t,e){const{fragment:r}=t;e.output===D.Highlight?(r.uniforms.add(new Z("depthTexture",(i,o)=>o.mainDepth),new Z("highlightTexture",(i,o)=>o.highlightMixTexture),new gr("highlightLevel",(i,o)=>o.highlightLevel),new nn("highlightMixOrigin",(i,o)=>o.highlightMixOrigin)),t.outputs.add("fragHighlight","vec2",0),r.code.add(s`vec2 getAccumulatedHighlight() {
return texelFetch(highlightTexture, ivec2(gl_FragCoord.xy) - highlightMixOrigin, 0).rg;
}
void outputHighlight(bool occluded) {
if (highlightLevel == 0) {
uint bits = occluded ? 3u : 1u;
fragHighlight = vec2(float(bits) / 255.0, 0.0);
} else {
int ll = (highlightLevel & 3) << 1;
int li = (highlightLevel >> 2) & 3;
uint bits;
if (occluded) {
bits = 3u << ll;
} else {
bits = 1u << ll;
}
vec2 combinedHighlight = getAccumulatedHighlight();
uint accumulatedI = uint(combinedHighlight[li] * 255.0);
combinedHighlight[li] = float(bits | accumulatedI) / 255.0;
fragHighlight = combinedHighlight;
}
}
bool isHighlightOccluded() {
float sceneDepth = texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x;
return gl_FragCoord.z > sceneDepth + 5e-7;
}
void calculateOcclusionAndOutputHighlight() {
outputHighlight(isHighlightOccluded());
}`),e.canHaveOverlay&&(r.constants.add("occlusionAndMask","int",85),r.code.add(s`void outputAllHighlights(vec2 highlightToAdd) {
if (highlightToAdd == vec2(0.0)) { discard; }
int occludedOrMask = isHighlightOccluded() ? 0xaa : 0;
ivec2 added = ivec2(highlightToAdd * 255.0);
ivec2 masked = (added & ivec2(occlusionAndMask)) | (ivec2(occludedOrMask) & (added<<1));
fragHighlight = vec2(masked) / 255.0;
}`))):r.code.add(s`void calculateOcclusionAndOutputHighlight() {}`)}let sn=class extends K{constructor(e,r,i){super(e,"vec4",I.Pass,(o,a,n)=>o.setUniform4fv(e,r(a,n)),i)}},ln=class extends K{constructor(e,r,i){super(e,"float",I.Pass,(o,a,n)=>o.setUniform1fv(e,r(a,n)),i)}};const Xt=8;function ct(t,e){const{vertex:r,attributes:i}=t;e.hasVvInstancing&&(e.vvSize||e.vvColor)&&i.add(p.INSTANCEFEATUREATTRIBUTE,"vec4"),e.vvSize?(r.uniforms.add(new k("vvSizeMinSize",o=>o.vvSize.minSize)),r.uniforms.add(new k("vvSizeMaxSize",o=>o.vvSize.maxSize)),r.uniforms.add(new k("vvSizeOffset",o=>o.vvSize.offset)),r.uniforms.add(new k("vvSizeFactor",o=>o.vvSize.factor)),r.uniforms.add(new ue("vvSymbolRotationMatrix",o=>o.vvSymbolRotationMatrix)),r.uniforms.add(new k("vvSymbolAnchor",o=>o.vvSymbolAnchor)),r.code.add(s`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(s`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.hasVvInstancing?s`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(s`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(r.constants.add("vvColorNumber","int",Xt),r.uniforms.add(new ln("vvColorValues",o=>o.vvColor.values,Xt),new sn("vvColorColors",o=>o.vvColor.colors,Xt)),r.code.add(s`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${e.hasVvInstancing?s`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(s`vec4 vvColor() { return vec4(1.0); }`)}function zi(t){t.code.add(s`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}var Y;(function(t){t[t.NONE=0]="NONE",t[t.ColorAlpha=1]="ColorAlpha",t[t.FrontFace=2]="FrontFace",t[t.COUNT=3]="COUNT"})(Y||(Y={}));const Bi=Yo(Ct.ONE,Ct.ZERO,Ct.ONE,Ct.ONE_MINUS_SRC_ALPHA);function wc(t){return t===Y.FrontFace?null:Bi}function cn(t){switch(t){case Y.NONE:return Xo;case Y.ColorAlpha:return Bi;case Y.FrontFace:case Y.COUNT:return null}}function dn(t){if(t.draped)return null;switch(t.oitPass){case Y.NONE:case Y.FrontFace:return t.writeDepth?Zo:null;case Y.ColorAlpha:case Y.COUNT:return null}}const un=5e5,hn={factor:-1,units:-2};function mn(t){return t?hn:null}function fn(t,e=de.LESS){return t===Y.NONE||t===Y.FrontFace?e:de.LEQUAL}function pn(t,e){const r=gi(e);return t===Y.ColorAlpha?r?{buffers:[Oe.COLOR_ATTACHMENT0,Oe.COLOR_ATTACHMENT1,Oe.COLOR_ATTACHMENT2]}:{buffers:[Oe.COLOR_ATTACHMENT0,Oe.COLOR_ATTACHMENT1]}:r?{buffers:[Oe.COLOR_ATTACHMENT0,Oe.COLOR_ATTACHMENT1]}:null}var J;function Ne(t,e){switch(e.textureCoordinateType){case J.Default:return t.attributes.add(p.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case J.Compressed:return t.attributes.add(p.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(s`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case J.Atlas:return t.attributes.add(p.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add(p.UVREGION,"vec4"),t.varyings.add("vuvRegion","vec4"),void t.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:zt(e.textureCoordinateType);case J.None:return void t.vertex.code.add(s`void forwardTextureCoordinates() {}`);case J.COUNT:return}}(function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Atlas=2]="Atlas",t[t.Compressed=3]="Compressed",t[t.COUNT=4]="COUNT"})(J||(J={}));function vn(t){t.fragment.code.add(s`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function xr(t,e){const{textureCoordinateType:r}=e;if(r===J.None||r===J.COUNT)return;t.include(Ne,e);const i=r===J.Atlas;i&&t.include(vn),t.fragment.code.add(s`
    vec4 textureLookup(sampler2D tex, vec2 uv) {
      return ${i?"textureAtlasLookup(tex, uv, vuvRegion)":"texture(tex, uv)"};
    }
  `)}let gt=class extends K{constructor(e,r){super(e,"sampler2D",I.Draw,(i,o,a)=>i.bindTexture(e,r(o,a)))}};var se;(function(t){t[t.None=0]="None",t[t.Value=1]="Value",t[t.Texture=2]="Texture",t[t.COUNT=3]="COUNT"})(se||(se={}));function gn(t,e){if(!mt(e.output))return;const{emissionSource:r,hasEmissiveTextureTransform:i,bindType:o}=e,a=r===se.Texture;a&&(t.include(xr,e),t.fragment.uniforms.add(o===I.Pass?new Z("texEmission",l=>l.textureEmissive):new gt("texEmission",l=>l.textureEmissive)));const n=r===se.Value||a;n&&t.fragment.uniforms.add(o===I.Pass?new k("emissionFactor",l=>l.emissiveFactor):new le("emissionFactor",l=>l.emissiveFactor)),t.fragment.code.add(s`
    vec4 getEmissions() {
      vec4 emissions = ${n?"vec4(emissionFactor, 1.0)":"vec4(0.0)"};
      ${R(a,`emissions *= textureLookup(texEmission, ${i?"emissiveUV":"vuv0"});
         emissions.w = emissions.rgb == vec3(0.0) ? 0.0: emissions.w;`)};
      return emissions;
    }
  `)}let cr=class extends fa{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}};m([b()],cr.prototype,"instancedDoublePrecision",void 0),m([b()],cr.prototype,"hasModelTransformation",void 0);let dr=class extends cr{constructor(){super(...arguments),this.output=D.Color,this.oitPass=Y.NONE,this.hasSliceHighlight=!0,this.hasSliceInVertexProgram=!1,this.bindType=I.Pass,this.writeDepth=!0}};m([b({count:D.COUNT})],dr.prototype,"output",void 0),m([b({count:Y.COUNT})],dr.prototype,"oitPass",void 0);function Rc(t){if(t.length<fi)return Array.from(t);if(Eo(t))return Float64Array.from(t);if(!("BYTES_PER_ELEMENT"in t))return Array.from(t);switch(t.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(t);case 2:return So(t)?Uint16Array.from(t):Int16Array.from(t);case 4:return Float32Array.from(t);default:return Float64Array.from(t)}}let Ic=class Gi{constructor(e,r,i){this.primitiveIndices=e,this._numIndexPerPrimitive=r,this.position=i,this._children=void 0,U(e.length>=1),U(i.size===3||i.size===4);const{data:o,size:a,indices:n}=i;U(n.length%this._numIndexPerPrimitive==0),U(n.length>=e.length*this._numIndexPerPrimitive);const l=e.length;let c=a*n[this._numIndexPerPrimitive*e[0]];Re.clear(),Re.push(c);const u=It(o[c],o[c+1],o[c+2]),d=Co(u);for(let f=0;f<l;++f){const T=this._numIndexPerPrimitive*e[f];for(let _=0;_<this._numIndexPerPrimitive;++_){c=a*n[T+_],Re.push(c);let g=o[c];u[0]=Math.min(g,u[0]),d[0]=Math.max(g,d[0]),g=o[c+1],u[1]=Math.min(g,u[1]),d[1]=Math.max(g,d[1]),g=o[c+2],u[2]=Math.min(g,u[2]),d[2]=Math.max(g,d[2])}}this.bbMin=u,this.bbMax=d;const h=Nr($(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(d[0]-u[0],d[1]-u[1]),d[2]-u[2]);let v=this.radius*this.radius;for(let f=0;f<Re.length;++f){c=Re.at(f);const T=o[c]-h[0],_=o[c+1]-h[1],g=o[c+2]-h[2],G=T*T+_*_+g*g;if(G<=v)continue;const P=Math.sqrt(G),F=.5*(P-this.radius);this.radius=this.radius+F,v=this.radius*this.radius;const L=F/P;h[0]+=T*L,h[1]+=_*L,h[2]+=g*L}this.center=h,Re.clear()}getChildren(){if(this._children||zo(this.bbMin,this.bbMax)<=1)return this._children;const e=Nr($(),this.bbMin,this.bbMax,.5),r=this.primitiveIndices.length,i=new Uint8Array(r),o=new Array(8);for(let d=0;d<8;++d)o[d]=0;const{data:a,size:n,indices:l}=this.position;for(let d=0;d<r;++d){let h=0;const v=this._numIndexPerPrimitive*this.primitiveIndices[d];let f=n*l[v],T=a[f],_=a[f+1],g=a[f+2];for(let G=1;G<this._numIndexPerPrimitive;++G){f=n*l[v+G];const P=a[f],F=a[f+1],L=a[f+2];P<T&&(T=P),F<_&&(_=F),L<g&&(g=L)}T<e[0]&&(h|=1),_<e[1]&&(h|=2),g<e[2]&&(h|=4),i[d]=h,++o[h]}let c=0;for(let d=0;d<8;++d)o[d]>0&&++c;if(c<2)return;const u=new Array(8);for(let d=0;d<8;++d)u[d]=o[d]>0?new Uint32Array(o[d]):void 0;for(let d=0;d<8;++d)o[d]=0;for(let d=0;d<r;++d){const h=i[d];u[h][o[h]++]=this.primitiveIndices[d]}this._children=new Array;for(let d=0;d<8;++d)u[d]!==void 0&&this._children.push(new Gi(u[d],this._numIndexPerPrimitive,this.position));return this._children}static prune(){Re.prune()}};const Re=new ci({deallocator:null});function $c(t,e=!1){return t<=fi?e?new Array(t).fill(0):new Array(t):new Float32Array(t)}function xn(t){t.vertex.code.add(s`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${s.int(fe.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${s.int(fe.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${s.int(fe.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${s.int(fe.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function Vi({code:t},e){e.doublePrecisionRequiresObfuscation?t.add(s`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):t.add(s`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}let Hi=class extends K{constructor(e,r){super(e,"mat3",I.Draw,(i,o,a)=>i.setUniformMatrix3fv(e,r(o,a)))}};function Tn(t,e){const r=t.fragment;switch(r.code.add(s`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case re.None:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case re.View:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case re.WindingOrder:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:zt(e.doubleSidedMode);case re.COUNT:}}var re;(function(t){t[t.None=0]="None",t[t.View=1]="View",t[t.WindingOrder=2]="WindingOrder",t[t.COUNT=3]="COUNT"})(re||(re={}));function Lc({normalTexture:t,metallicRoughnessTexture:e,metallicFactor:r,roughnessFactor:i,emissiveTexture:o,emissiveFactor:a,occlusionTexture:n}){return t==null&&e==null&&o==null&&(a==null||pi(a,Je))&&n==null&&(i==null||i===1)&&(r==null||r===1)}const _n=ut(1,1,.5),Pc=ut(0,.6,.2),Dc=ut(0,1,.2);var N;(function(t){t[t.Disabled=0]="Disabled",t[t.Normal=1]="Normal",t[t.Schematic=2]="Schematic",t[t.Water=3]="Water",t[t.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",t[t.Simplified=5]="Simplified",t[t.TerrainWithWater=6]="TerrainWithWater",t[t.COUNT=7]="COUNT"})(N||(N={}));function Ui(t,e){const r=e.pbrMode,i=t.fragment;if(r!==N.Schematic&&r!==N.Disabled&&r!==N.Normal)return void i.code.add(s`void applyPBRFactors() {}`);if(r===N.Disabled)return void i.code.add(s`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(r===N.Schematic)return void i.code.add(s`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);const{hasMetallicRoughnessTexture:o,hasMetallicRoughnessTextureTransform:a,hasOcclusionTexture:n,hasOcclusionTextureTransform:l,bindType:c}=e;(o||n)&&t.include(xr,e),i.code.add(s`vec3 mrr;
float occlusion;`),o&&i.uniforms.add(c===I.Pass?new Z("texMetallicRoughness",u=>u.textureMetallicRoughness):new gt("texMetallicRoughness",u=>u.textureMetallicRoughness)),n&&i.uniforms.add(c===I.Pass?new Z("texOcclusion",u=>u.textureOcclusion):new gt("texOcclusion",u=>u.textureOcclusion)),i.uniforms.add(c===I.Pass?new k("mrrFactors",u=>u.mrrFactors):new le("mrrFactors",u=>u.mrrFactors)),i.code.add(s`
    ${R(o,s`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${R(n,"void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
      return ${n?"occlusion":"1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${R(o,`applyMetallicRoughness(${a?"metallicRoughnessUV":"vuv0"});`)}
      ${R(n,`applyOcclusion(${l?"occlusionUV":"vuv0"});`)}
    }
  `)}let bn=class{constructor(e=!1,r=!0){this.isVerticalRay=e,this.normalRequired=r}};const At=Ao();function En(t,e,r,i,o,a){if(!t.visible)return;const n=ke(Dn,i,r),l=(u,d,h)=>{a(u,h,d,!1)},c=new bn(!1,e.options.normalRequired);if(t.boundingInfo){U(t.type===vt.Mesh);const u=e.tolerance;ji(t.boundingInfo,r,n,u,o,c,l)}else{const u=t.attributes.get(p.POSITION),d=u.indices;An(r,n,0,d.length/3,d,u.data,u.stride,o,c,l)}}const Sn=$();function ji(t,e,r,i,o,a,n){if(t==null)return;const l=In(r,Sn);if(wo(At,t.bbMin),Mo(At,t.bbMax),o!=null&&o.applyToAabb(At),$n(At,e,l,i)){const{primitiveIndices:c,position:u}=t,d=c?c.length:u.indices.length/3;if(d>Ln){const h=t.getChildren();if(h!==void 0){for(const v of h)ji(v,e,r,i,o,a,n);return}}Cn(e,r,0,d,u.indices,u.data,u.stride,c,o,a,n)}}const ot=$();function Cn(t,e,r,i,o,a,n,l,c,u,d){const h=t[0],v=t[1],f=t[2],T=e[0],_=e[1],g=e[2],{normalRequired:G}=u;for(let P=r;P<i;++P){const F=l[P],L=3*F,B=n*o[L];let M=a[B],S=a[B+1],E=a[B+2];const y=n*o[L+1];let O=a[y],x=a[y+1],C=a[y+2];const w=n*o[L+2];let V=a[w],j=a[w+1],q=a[w+2];c!=null&&([M,S,E]=c.applyToVertex(M,S,E,P),[O,x,C]=c.applyToVertex(O,x,C,P),[V,j,q]=c.applyToVertex(V,j,q,P));const ee=O-M,Ee=x-S,Se=C-E,Ce=V-M,Ae=j-S,he=q-E,we=_*he-Ae*g,Me=g*Ce-he*T,Pe=T*Ae-Ce*_,ne=ee*we+Ee*Me+Se*Pe;if(Math.abs(ne)<=Pn)continue;const De=h-M,Wt=v-S,qt=f-E,Fe=De*we+Wt*Me+qt*Pe;if(ne>0){if(Fe<0||Fe>ne)continue}else if(Fe>0||Fe<ne)continue;const Mr=Wt*Se-Ee*qt,yr=qt*ee-Se*De,Or=De*Ee-ee*Wt,Et=T*Mr+_*yr+g*Or;if(ne>0){if(Et<0||Fe+Et>ne)continue}else if(Et>0||Fe+Et<ne)continue;const Rr=(Ce*Mr+Ae*yr+he*Or)/ne;Rr>=0&&d(Rr,F,G?On(ee,Ee,Se,Ce,Ae,he,ot):null)}}function An(t,e,r,i,o,a,n,l,c,u){const d=e,h=Fn,v=Math.abs(d[0]),f=Math.abs(d[1]),T=Math.abs(d[2]),_=v>=f?v>=T?0:2:f>=T?1:2,g=_,G=d[g]<0?2:1,P=(_+G)%3,F=(_+(3-G))%3,L=d[P]/d[g],B=d[F]/d[g],M=1/d[g],S=wn,E=Mn,y=yn,{normalRequired:O}=c;for(let x=r;x<i;++x){const C=3*x,w=n*o[C];X(h[0],a[w+0],a[w+1],a[w+2]);const V=n*o[C+1];X(h[1],a[V+0],a[V+1],a[V+2]);const j=n*o[C+2];X(h[2],a[j+0],a[j+1],a[j+2]),l&&(Ot(h[0],l.applyToVertex(h[0][0],h[0][1],h[0][2],x)),Ot(h[1],l.applyToVertex(h[1][0],h[1][1],h[1][2],x)),Ot(h[2],l.applyToVertex(h[2][0],h[2][1],h[2][2],x))),ke(S,h[0],t),ke(E,h[1],t),ke(y,h[2],t);const q=S[P]-L*S[g],ee=S[F]-B*S[g],Ee=E[P]-L*E[g],Se=E[F]-B*E[g],Ce=y[P]-L*y[g],Ae=y[F]-B*y[g],he=Ce*Se-Ae*Ee,we=q*Ae-ee*Ce,Me=Ee*ee-Se*q;if((he<0||we<0||Me<0)&&(he>0||we>0||Me>0))continue;const Pe=he+we+Me;if(Pe===0)continue;const ne=he*(M*S[g])+we*(M*E[g])+Me*(M*y[g]);if(ne*Math.sign(Pe)<0)continue;const De=ne/Pe;De>=0&&u(De,x,O?Rn(h):null)}}const wn=$(),Mn=$(),yn=$();function On(t,e,r,i,o,a,n){return X(Nt,t,e,r),X(Lt,i,o,a),vi(n,Nt,Lt),mr(n,n),n}function Rn(t){return ke(Nt,t[1],t[0]),ke(Lt,t[2],t[0]),vi(ot,Nt,Lt),mr(ot,ot),ot}const Nt=$(),Lt=$();function In(t,e){return X(e,1/t[0],1/t[1],1/t[2])}function $n(t,e,r,i){return Nn(t,e,r,i,1/0)}function Nn(t,e,r,i,o){const a=(t[0]-i-e[0])*r[0],n=(t[3]+i-e[0])*r[0];let l=Math.min(a,n),c=Math.max(a,n);const u=(t[1]-i-e[1])*r[1],d=(t[4]+i-e[1])*r[1];if(c=Math.min(c,Math.max(u,d)),c<0||(l=Math.max(l,Math.min(u,d)),l>c))return!1;const h=(t[2]-i-e[2])*r[2],v=(t[5]+i-e[2])*r[2];return c=Math.min(c,Math.max(h,v)),!(c<0)&&(l=Math.max(l,Math.min(h,v)),!(l>c)&&l<o)}const Ln=1e3,Pn=1e-7,Dn=$(),Fn=[$(),$(),$()];let zn=class{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.get(p.POSITION).indices.length}write(e,r,i,o,a,n){Xa(i,o,this.vertexBufferLayout,e,r,a,n)}};function Tr(t){t.attributes.add(p.POSITION,"vec3"),t.vertex.code.add(s`vec3 positionModel() { return position; }`)}function Bn(t,e){t.include(Tr);const r=t.vertex;r.include(Vi,e),t.varyings.add("vPositionWorldCameraRelative","vec3"),t.varyings.add("vPosition_view","vec3"),r.uniforms.add(new k("transformWorldFromViewTH",i=>i.transformWorldFromViewTH),new k("transformWorldFromViewTL",i=>i.transformWorldFromViewTL),new ue("transformViewFromCameraRelativeRS",i=>i.transformViewFromCameraRelativeRS),new Xe("transformProjFromView",i=>i.transformProjFromView),new Hi("transformWorldFromModelRS",i=>i.transformWorldFromModelRS),new le("transformWorldFromModelTH",i=>i.transformWorldFromModelTH),new le("transformWorldFromModelTL",i=>i.transformWorldFromModelTL)),r.code.add(s`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(s`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${e.spherical?s`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:s`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),t.fragment.uniforms.add(new k("transformWorldFromViewTL",i=>i.transformWorldFromViewTL)),r.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),t.fragment.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}let Gn=class extends Qe{constructor(){super(...arguments),this.transformWorldFromViewTH=$(),this.transformWorldFromViewTL=$(),this.transformViewFromCameraRelativeRS=bt(),this.transformProjFromView=fr()}},Vn=class extends Qe{constructor(){super(...arguments),this.transformWorldFromModelRS=bt(),this.transformWorldFromModelTH=$(),this.transformWorldFromModelTL=$()}};function Wi(t,e){switch(e.normalType){case Q.Attribute:case Q.Compressed:t.include(Bt,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add(new Hi("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new ue("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)),t.vertex.code.add(s`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case Q.ScreenDerivative:t.vertex.code.add(s`void forwardNormal() {}`);break;default:zt(e.normalType);case Q.COUNT:}}let Hn=class extends Gn{constructor(){super(...arguments),this.transformNormalViewFromGlobal=bt()}},Un=class extends Vn{constructor(){super(...arguments),this.transformNormalGlobalFromModel=bt(),this.toMapSpace=Dt()}};de.LESS;de.ALWAYS;const jn={mask:255},Wn={function:{func:de.ALWAYS,ref:be.OutlineVisualElementMask,mask:be.OutlineVisualElementMask},operation:{fail:ae.KEEP,zFail:ae.KEEP,zPass:ae.ZERO}},qn={function:{func:de.ALWAYS,ref:be.OutlineVisualElementMask,mask:be.OutlineVisualElementMask},operation:{fail:ae.KEEP,zFail:ae.KEEP,zPass:ae.REPLACE}};de.EQUAL,be.OutlineVisualElementMask,be.OutlineVisualElementMask,ae.KEEP,ae.KEEP,ae.KEEP;de.NOTEQUAL,be.OutlineVisualElementMask,be.OutlineVisualElementMask,ae.KEEP,ae.KEEP,ae.KEEP;function Yr(t){t.varyings.add("linearDepth","float")}function qi(t){t.vertex.uniforms.add(new Ke("nearFar",(e,r)=>r.camera.nearFar))}function ki(t){t.vertex.code.add(s`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function Yi(t,e){const{vertex:r}=t;switch(e.output){case D.Color:case D.ColorEmission:if(e.receiveShadows)return Yr(t),void r.code.add(s`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case D.Shadow:case D.ShadowHighlight:case D.ShadowExcludeHighlight:case D.ViewshedShadow:return t.include(Bn,e),Yr(t),qi(t),ki(t),void r.code.add(s`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(s`void forwardLinearDepth() {}`)}function Xi(t){t.vertex.code.add(s`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function je(t){ki(t),t.vertex.code.add(s`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),t.vertex.code.add(s`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}const Xr=bt();function Zi(t,e){const r=e.hasModelTransformation,i=e.instancedDoublePrecision;r&&(t.vertex.uniforms.add(new Xe("model",a=>a.modelTransformation??Dr)),t.vertex.uniforms.add(new ue("normalLocalOriginFromModel",a=>(Jo(Xr,a.modelTransformation??Dr),Xr)))),e.instanced&&i&&(t.attributes.add(p.INSTANCEMODELORIGINHI,"vec3"),t.attributes.add(p.INSTANCEMODELORIGINLO,"vec3"),t.attributes.add(p.INSTANCEMODEL,"mat3"),t.attributes.add(p.INSTANCEMODELNORMAL,"mat3"));const o=t.vertex;i&&(o.include(Vi,e),o.uniforms.add(new le("viewOriginHi",(a,n)=>na(X(wt,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),wt)),new le("viewOriginLo",(a,n)=>sa(X(wt,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),wt)))),o.code.add(s`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?i?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":i?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${i?s`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),o.code.add(s`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?i?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":i?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),e.output===D.Normal&&($a(o),o.code.add(s`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?i?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":i?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),e.hasVertexTangents&&o.code.add(s`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?i?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":i?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const wt=$();function Ki(t,e){e.hasSymbolColors?(t.include(xn),t.attributes.add(p.SYMBOLCOLOR,"vec4"),t.varyings.add("colorMixMode","mediump float"),t.vertex.code.add(s`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(t.fragment.uniforms.add(new gr("colorMixMode",r=>Va[r.colorMixMode])),t.vertex.code.add(s`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function Ji(t,e){e.hasVertexColors?(t.attributes.add(p.COLOR,"vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(s`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(s`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(s`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function Qi(t){t.code.add(s`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}function kn(t,e){switch(e.output){case D.Shadow:case D.ShadowHighlight:case D.ShadowExcludeHighlight:case D.ViewshedShadow:t.fragment.include(Qi),t.fragment.code.add(s`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}function We(t,e){Yn(t,e,new ie("textureAlphaCutoff",r=>r.textureAlphaCutoff))}function Yn(t,e,r){const i=t.fragment;switch(e.alphaDiscardMode){case ge.Blend:t.fragment.code.add(s`
        #define discardOrAdjustAlpha(color) { if (color.a < ${s.float(_e)}) { discard; } }
      `);break;case ge.Opaque:i.code.add(s`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case ge.Mask:i.uniforms.add(r).code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case ge.MaskBlend:i.uniforms.add(r).code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function eo(t,e){const{vertex:r,fragment:i}=t,o=e.hasColorTexture&&e.alphaDiscardMode!==ge.Opaque,{output:a,normalType:n,hasColorTextureTransform:l}=e;switch(a){case D.Depth:He(r,e),t.include(je,e),t.include(Ue,e),t.include(Ne,e),o&&i.uniforms.add(new Z("tex",c=>c.texture)),r.main.add(s`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),t.include(We,e),i.main.add(s`
          discardBySlice(vpos);
          ${R(o,s`vec4 texColor = texture(tex, ${l?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}`);break;case D.Shadow:case D.ShadowHighlight:case D.ShadowExcludeHighlight:case D.ViewshedShadow:case D.ObjectAndLayerIdColor:He(r,e),t.include(je,e),t.include(Ne,e),t.include(ct,e),t.include(kn,e),t.include(Ue,e),t.include(tn,e),qi(t),t.varyings.add("depth","float"),o&&i.uniforms.add(new Z("tex",c=>c.texture)),r.main.add(s`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),t.include(We,e),i.main.add(s`
          discardBySlice(vpos);
          ${R(o,s`vec4 texColor = texture(tex, ${l?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          ${a===D.ObjectAndLayerIdColor?s`outputObjectAndLayerIdColor();`:s`outputDepth(depth);`}`);break;case D.Normal:{He(r,e),t.include(je,e),t.include(Bt,e),t.include(Wi,e),t.include(Ne,e),t.include(ct,e),o&&i.uniforms.add(new Z("tex",u=>u.texture)),n===Q.ScreenDerivative&&t.varyings.add("vPositionView","vec3");const c=n===Q.Attribute||n===Q.Compressed;r.main.add(s`
          vpos = getVertexInLocalOriginSpace();
          ${c?s`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:s`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
          vpos = subtractOrigin(vpos);
          vpos = addVerticalOffset(vpos, localOrigin);
          gl_Position = transformPosition(proj, view, vpos);
          forwardTextureCoordinates();`),t.include(Ue,e),t.include(We,e),i.main.add(s`
          discardBySlice(vpos);
          ${R(o,s`vec4 texColor = texture(tex, ${l?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}

          ${n===Q.ScreenDerivative?s`vec3 normal = screenDerivativeNormal(vPositionView);`:s`vec3 normal = normalize(vNormalWorld);
                     if (gl_FrontFacing == false){
                       normal = -normal;
                     }`}
          fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case D.Highlight:He(r,e),t.include(je,e),t.include(Ne,e),t.include(ct,e),o&&i.uniforms.add(new Z("tex",c=>c.texture)),r.main.add(s`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),t.include(Ue,e),t.include(We,e),t.include(Fi,e),i.main.add(s`
          discardBySlice(vpos);
          ${R(o,s`vec4 texColor = texture(tex, ${l?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          calculateOcclusionAndOutputHighlight();`)}}function Xn(t,e){const r=t.fragment;e.hasVertexTangents?(t.attributes.add(p.TANGENT,"vec4"),t.varyings.add("vTangent","vec4"),e.doubleSidedMode===re.WindingOrder?r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(s`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),e.textureCoordinateType!==J.None&&(t.include(xr,e),r.uniforms.add(e.bindType===I.Pass?new Z("normalTexture",i=>i.textureNormal):new gt("normalTexture",i=>i.textureNormal)),e.hasNormalTextureTransform&&(r.uniforms.add(new Ke("scale",i=>i.scale??yo)),r.uniforms.add(new ue("normalTextureTransformMatrix",i=>i.normalTextureTransformMatrix??et))),r.code.add(s`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),e.hasNormalTextureTransform&&r.code.add(s`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),r.code.add(s`return tangentSpace * rawNormal;
}`))}var qe,Zr;(function(t){t[t.RED=0]="RED",t[t.RG=1]="RG",t[t.RGBA4=2]="RGBA4",t[t.RGBA=3]="RGBA",t[t.RGBA_MIPMAP=4]="RGBA_MIPMAP",t[t.R16F=5]="R16F",t[t.RGBA16F=6]="RGBA16F"})(qe||(qe={})),function(t){t[t.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",t[t.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(Zr||(Zr={}));const Zn=3e5,Kr=5e5;let Kn=class extends K{constructor(e,r){super(e,"vec2",I.Draw,(i,o,a,n)=>i.setUniform2fv(e,r(o,a,n)))}};const Zt=4;function Jn(){const t=new Ut,e=t.fragment;t.include(Ei);const r=(Zt+1)/2,i=1/(2*r*r);return e.include(vr),e.uniforms.add(new Z("depthMap",o=>o.depthTexture),new gt("tex",o=>o.colorTexture),new Kn("blurSize",o=>o.blurSize),new ie("projScale",(o,a)=>{const n=a.camera.distance;return n>5e4?Math.max(0,o.projScale-(n-5e4)):o.projScale})),e.code.add(s`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${s.float(i)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),t.outputs.add("fragBlur","float"),e.main.add(s`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${s.int(Zt)}; r <= ${s.int(Zt)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),t}const Qn=Object.freeze(Object.defineProperty({__proto__:null,build:Jn},Symbol.toStringTag,{value:"Module"}));let Jr=class extends pr{constructor(e,r,i){super(e,r,new jt(Qn,()=>Tt(()=>import("./RealisticTree.glsl-DCHnsZ_x.js").then(o=>o.S),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55]))),i)}initializePipeline(){return Vt({colorWrite:Ht})}};const es="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";let ts=class extends Qe{constructor(){super(...arguments),this.projScale=1}},rs=class extends ts{constructor(){super(...arguments),this.intensity=1}},is=class extends Qe{},os=class extends is{constructor(){super(...arguments),this.blurSize=Ft()}};function as(t){t.fragment.uniforms.add(new te("projInfo",(e,r)=>ns(r.camera))),t.fragment.uniforms.add(new Ke("zScale",(e,r)=>ss(r.camera))),t.fragment.code.add(s`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function ns(t){const e=t.projectionMatrix;return e[11]===0?oe(Qr,2/(t.fullWidth*e[0]),2/(t.fullHeight*e[5]),(1+e[12])/e[0],(1+e[13])/e[5]):oe(Qr,-2/(t.fullWidth*e[0]),-2/(t.fullHeight*e[5]),(1-e[8])/e[0],(1-e[9])/e[5])}const Qr=Dt();function ss(t){return t.projectionMatrix[11]===0?Le(ei,0,1):Le(ei,1,0)}const ei=Ft(),ti=16;function ls(){const t=new Ut,e=t.fragment;return t.include(Ei),t.include(as),e.include(vr),e.uniforms.add(new ie("radius",(r,i)=>_r(i.camera))).code.add(s`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),e.code.add(s`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.uniforms.add(new Z("normalMap",r=>r.normalTexture),new Z("depthMap",r=>r.depthTexture),new ie("projScale",r=>r.projScale),new Z("rnm",r=>r.noiseTexture),new Ke("rnmScale",(r,i)=>Le(ri,i.camera.fullWidth/r.noiseTexture.descriptor.width,i.camera.fullHeight/r.noiseTexture.descriptor.height)),new ie("intensity",r=>r.intensity),new Ke("screenSize",(r,i)=>Le(ri,i.camera.fullWidth,i.camera.fullHeight))),t.outputs.add("fragOcclusion","float"),e.main.add(s`
      float depth = depthFromTexture(depthMap, uv);

      // Early out if depth is out of range, such as in the sky
      if (depth >= 1.0 || depth <= 0.0) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      float currentPixelDepth = linearizeDepth(depth);
      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${s.int(ti)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${s.int(ti)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

      fragOcclusion = A;`),t}function _r(t){return Math.max(10,20*t.computeScreenPixelSizeAtDist(Math.abs(4*t.relativeElevation)))}const ri=Ft(),cs=Object.freeze(Object.defineProperty({__proto__:null,build:ls,getRadius:_r},Symbol.toStringTag,{value:"Module"}));let ii=class extends pr{constructor(e,r,i){super(e,r,new jt(cs,()=>Tt(()=>import("./RealisticTree.glsl-DCHnsZ_x.js").then(o=>o.a),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55]))),i)}initializePipeline(){return Vt({colorWrite:Ht})}};const at=2;let ze=class extends Ca{constructor(t){super(t),this.consumes={required:["normals"]},this.produces=st.SSAO,this.isEnabled=()=>!1,this._enableTime=St(0),this._passParameters=new rs,this._drawParameters=new os}initialize(){const t=Uint8Array.from(atob(es),r=>r.charCodeAt(0)),e=new _i;e.wrapMode=ft.CLAMP_TO_EDGE,e.pixelFormat=Ie.RGB,e.wrapMode=ft.REPEAT,e.hasMipmap=!0,e.width=32,e.height=32,this._passParameters.noiseTexture=new Ye(this.renderingContext,e,t),this.techniques.precompile(ii),this.techniques.precompile(Jr),this.addHandles(ui(()=>this.isEnabled(),()=>this._enableTime=St(0)))}destroy(){this._passParameters.noiseTexture=Rt(this._passParameters.noiseTexture)}render(t){const e=this.bindParameters,r=t.find(({name:M})=>M==="normals"),i=r==null?void 0:r.getTexture(),o=r==null?void 0:r.getTexture(jo),a=this.fboCache,n=e.camera,l=n.fullViewport[2],c=n.fullViewport[3],u=Math.round(l/at),d=Math.round(c/at),h=this.techniques.acquire(ii),v=this.techniques.acquire(Jr);if(!h.compiled||!v.compiled)return this._enableTime=St(performance.now()),this.requestRender(tr.UPDATE),h.release(),v.release(),a.acquire(u,d,st.SSAO,qe.RED);this._enableTime===0&&(this._enableTime=St(performance.now()));const f=this.renderingContext,T=this.view.qualitySettings.fadeDuration,_=n.relativeElevation,g=hr((Kr-_)/(Kr-Zn),0,1),G=T>0?Math.min(T,performance.now()-this._enableTime)/T:1,P=G*g;this._passParameters.normalTexture=i,this._passParameters.depthTexture=o,this._passParameters.projScale=1/n.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*ds/_r(n)**6*P;const F=a.acquire(l,c,"ssao input",qe.RG);f.bindFramebuffer(F.fbo),f.setViewport(0,0,l,c),f.bindTechnique(h,e,this._passParameters,this._drawParameters),f.screen.draw(),h.release();const L=a.acquire(u,d,"ssao blur",qe.RED);f.bindFramebuffer(L.fbo),this._drawParameters.colorTexture=F.getTexture(),Le(this._drawParameters.blurSize,0,at/c),f.bindTechnique(v,e,this._passParameters,this._drawParameters),f.setViewport(0,0,u,d),f.screen.draw(),F.release();const B=a.acquire(u,d,st.SSAO,qe.RED);return f.bindFramebuffer(B.fbo),f.setViewport(0,0,l,c),f.setClearColor(1,1,1,0),f.clear(Wo.COLOR),this._drawParameters.colorTexture=L.getTexture(),Le(this._drawParameters.blurSize,at/l,0),f.bindTechnique(v,e,this._passParameters,this._drawParameters),f.setViewport(0,0,u,d),f.screen.draw(),v.release(),f.setViewport4fv(n.fullViewport),L.release(),G<1&&this.requestRender(tr.UPDATE),B}};m([z()],ze.prototype,"consumes",void 0),m([z()],ze.prototype,"produces",void 0),m([z({constructOnly:!0})],ze.prototype,"techniques",void 0),m([z({constructOnly:!0})],ze.prototype,"isEnabled",void 0),ze=m([ur("esri.views.3d.webgl-engine.effects.ssao.SSAO")],ze);const ds=.5;function br(t,e){const r=t.fragment;e.receiveAmbientOcclusion?(r.uniforms.add(new Z("ssaoTex",(i,o)=>{var a;return(a=o.ssao)==null?void 0:a.getTexture()})),r.constants.add("blurSizePixelsInverse","float",1/at),r.code.add(s`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(s`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function us(t,e){const r=t.fragment,i=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;i===0?(r.uniforms.add(new k("lightingAmbientSH0",(o,a)=>X(oi,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===1?(r.uniforms.add(new te("lightingAmbientSH_R",(o,a)=>oe(me,a.lighting.sh.r[0],a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3])),new te("lightingAmbientSH_G",(o,a)=>oe(me,a.lighting.sh.g[0],a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3])),new te("lightingAmbientSH_B",(o,a)=>oe(me,a.lighting.sh.b[0],a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===2&&(r.uniforms.add(new k("lightingAmbientSH0",(o,a)=>X(oi,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0])),new te("lightingAmbientSH_R1",(o,a)=>oe(me,a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3],a.lighting.sh.r[4])),new te("lightingAmbientSH_G1",(o,a)=>oe(me,a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3],a.lighting.sh.g[4])),new te("lightingAmbientSH_B1",(o,a)=>oe(me,a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3],a.lighting.sh.b[4])),new te("lightingAmbientSH_R2",(o,a)=>oe(me,a.lighting.sh.r[5],a.lighting.sh.r[6],a.lighting.sh.r[7],a.lighting.sh.r[8])),new te("lightingAmbientSH_G2",(o,a)=>oe(me,a.lighting.sh.g[5],a.lighting.sh.g[6],a.lighting.sh.g[7],a.lighting.sh.g[8])),new te("lightingAmbientSH_B2",(o,a)=>oe(me,a.lighting.sh.b[5],a.lighting.sh.b[6],a.lighting.sh.b[7],a.lighting.sh.b[8]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==N.Normal&&e.pbrMode!==N.Schematic||r.code.add(s`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const oi=$(),me=Dt();function Pt(t){t.uniforms.add(new k("mainLightDirection",(e,r)=>r.lighting.mainLight.direction))}function xt(t){t.uniforms.add(new k("mainLightIntensity",(e,r)=>r.lighting.mainLight.intensity))}function hs(t){Pt(t.fragment),xt(t.fragment),t.fragment.code.add(s`vec3 applyShading(vec3 shadingNormalWorld, float shadow) {
float dotVal = clamp(dot(shadingNormalWorld, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}function ms(t){const e=t.fragment.code;e.add(s`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(s`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(s`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function to(t){const e=3.141592653589793,r=.3183098861837907;t.vertex.constants.add("PI","float",e),t.fragment.constants.add("PI","float",e),t.fragment.constants.add("LIGHT_NORMALIZATION","float",r),t.fragment.constants.add("INV_PI","float",r),t.fragment.constants.add("HALF_PI","float",1.570796326794897),t.fragment.constants.add("TWO_PI","float",6.28318530717958)}function Er(t,e){const r=t.fragment.code;t.include(to),e.pbrMode!==N.Normal&&e.pbrMode!==N.Schematic&&e.pbrMode!==N.Simplified&&e.pbrMode!==N.TerrainWithWater||(r.add(s`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(s`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),e.pbrMode!==N.Normal&&e.pbrMode!==N.Schematic||(t.include(ms),r.add(s`struct PBRShadingInfo
{
float NdotV;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(s`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(s`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(s`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}const fs=.4;function Sr(t){t.constants.add("ambientBoostFactor","float",fs)}function Cr(t){t.uniforms.add(new ie("lightingGlobalFactor",(e,r)=>r.lighting.globalFactor))}function ro(t,e){const r=t.fragment;switch(t.include(br,e),e.pbrMode!==N.Disabled&&t.include(Er,e),t.include(us,e),t.include(to),r.code.add(s`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode===N.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),Sr(r),Cr(r),Pt(r),r.code.add(s`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.spherical?s`normalize(vPosWorld)`:s`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),xt(r),r.code.add(s`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),e.pbrMode){case N.Disabled:case N.WaterOnIntegratedMesh:case N.Water:t.include(hs),r.code.add(s`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case N.Normal:case N.Schematic:r.code.add(s`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec4 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(s`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),e.useFillLights?r.uniforms.add(new rn("hasFillLights",(i,o)=>o.enableFillLights)):r.constants.add("hasFillLights","bool",!1),r.code.add(s`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new ie("lightingSpecularStrength",(i,o)=>o.lighting.mainLight.specularStrength),new ie("lightingEnvironmentStrength",(i,o)=>o.lighting.mainLight.environmentStrength)).code.add(s`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(s`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : pow(_emission.rgb, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode!==N.Schematic||e.hasColorTexture?s`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:s`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case N.Simplified:case N.TerrainWithWater:Pt(r),xt(r),r.code.add(s`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:zt(e.pbrMode);case N.COUNT:}}let ps=class extends K{constructor(e,r,i){super(e,"mat4",I.Draw,(o,a,n,l)=>o.setUniformMatrix4fv(e,r(a,n,l)),i)}};class vs extends K{constructor(e,r,i){super(e,"mat4",I.Pass,(o,a,n)=>o.setUniformMatrix4fv(e,r(a,n)),i)}}function io(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new vs("shadowMapMatrix",(r,i)=>i.shadowMap.getShadowMapMatrices(r.origin),4)),ao(t))}function oo(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new ps("shadowMapMatrix",(r,i)=>i.shadowMap.getShadowMapMatrices(r.origin),4)),ao(t))}function ao(t){const e=t.fragment;e.include(Qi),e.uniforms.add(new Z("shadowMap",(r,i)=>i.shadowMap.depthTexture),new gr("numCascades",(r,i)=>i.shadowMap.numCascades),new te("cascadeDistances",(r,i)=>i.shadowMap.cascadeDistances)).code.add(s`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}function gs(t,e){e.hasColorTextureTransform?(t.varyings.add("colorUV","vec2"),t.vertex.uniforms.add(new ue("colorTextureTransformMatrix",r=>r.colorTextureTransformMatrix??et)).code.add(s`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(s`void forwardColorUV(){}`)}function xs(t,e){e.hasNormalTextureTransform&&e.textureCoordinateType!==J.None?(t.varyings.add("normalUV","vec2"),t.vertex.uniforms.add(new ue("normalTextureTransformMatrix",r=>r.normalTextureTransformMatrix??et)).code.add(s`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(s`void forwardNormalUV(){}`)}function Ts(t,e){e.hasEmissionTextureTransform&&e.textureCoordinateType!==J.None?(t.varyings.add("emissiveUV","vec2"),t.vertex.uniforms.add(new ue("emissiveTextureTransformMatrix",r=>r.emissiveTextureTransformMatrix??et)).code.add(s`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(s`void forwardEmissiveUV(){}`)}function _s(t,e){e.hasOcclusionTextureTransform&&e.textureCoordinateType!==J.None?(t.varyings.add("occlusionUV","vec2"),t.vertex.uniforms.add(new ue("occlusionTextureTransformMatrix",r=>r.occlusionTextureTransformMatrix??et)).code.add(s`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(s`void forwardOcclusionUV(){}`)}function bs(t,e){e.hasMetallicRoughnessTextureTransform&&e.textureCoordinateType!==J.None?(t.varyings.add("metallicRoughnessUV","vec2"),t.vertex.uniforms.add(new ue("metallicRoughnessTextureTransformMatrix",r=>r.metallicRoughnessTextureTransformMatrix??et)).code.add(s`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(s`void forwardMetallicRoughnessUV(){}`)}function no(t){t.include(zi),t.code.add(s`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${s.int(fe.Multiply)}) {
        return allMixed;
      }
      if (mode == ${s.int(fe.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(fe.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${s.int(fe.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(fe.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function so(t,e){t.include(Fi,e),t.include(gn,e),t.fragment.include(zi);const r=e.output===D.ObjectAndLayerIdColor,i=gi(e.output),o=mt(e.output)&&e.oitPass===Y.ColorAlpha,a=mt(e.output)&&e.oitPass!==Y.ColorAlpha,n=e.discardInvisibleFragments;let l=0;(a||i||o)&&t.outputs.add("fragColor","vec4",l++),i&&t.outputs.add("fragEmission","vec4",l++),o&&t.outputs.add("fragAlpha","float",l++),t.fragment.code.add(s`
    void outputColorHighlightOID(vec4 finalColor, const in vec3 vWorldPosition) {
      ${R(r,s`finalColor.a = 1.0;`)}

      ${R(n,s`if (finalColor.a < ${s.float(_e)}){
              discard;
              return;
            }`)}

      finalColor = highlightSlice(finalColor, vWorldPosition);
      ${R(o,s`fragColor = premultiplyAlpha(finalColor);
             fragAlpha = finalColor.a;`)}
      ${R(a,"fragColor = finalColor;")}
      ${R(i,"fragEmission = getEmissions();")}
      calculateOcclusionAndOutputHighlight();
      ${R(r,"outputObjectAndLayerIdColor();")}
    }
  `)}function Es(t){const e=new Ut,{vertex:r,fragment:i,varyings:o}=e,{output:a,normalType:n,offsetBackfaces:l,instancedColor:c,spherical:u,receiveShadows:d,snowCover:h,pbrMode:v,textureAlphaPremultiplied:f,instancedDoublePrecision:T,hasVertexColors:_,hasVertexTangents:g,hasColorTexture:G,hasNormalTexture:P,hasNormalTextureTransform:F,hasColorTextureTransform:L}=t;if(He(r,t),e.include(Tr),o.add("vpos","vec3"),e.include(ct,t),e.include(Zi,t),e.include(Oi,t),e.include(gs,t),!mt(a))return e.include(eo,t),e;e.include(xs,t),e.include(Ts,t),e.include(_s,t),e.include(bs,t),pt(r,t),e.include(Bt,t),e.include(je,t);const B=n===Q.Attribute||n===Q.Compressed;return B&&l&&e.include(Xi),e.include(Xn,t),e.include(Wi,t),c&&e.attributes.add(p.INSTANCECOLOR,"vec4"),o.add("vPositionLocal","vec3"),e.include(Ne,t),e.include(Yi,t),e.include(Ki,t),e.include(Ji,t),r.uniforms.add(new te("externalColor",M=>M.externalColor)),o.add("vcolorExt","vec4"),t.terrainDepthTest&&o.add("depth","float"),r.main.add(s`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${R(c,"vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    if (vcolorExt.a < ${s.float(_e)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    } else {
      vpos = getVertexInLocalOriginSpace();
      vPositionLocal = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      ${R(B,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
      vpos = addVerticalOffset(vpos, localOrigin);
      ${R(g,"vTangent = dpTransformVertexTangent(tangent);")}
      gl_Position = transformPosition(proj, view, vpos);
      ${R(B&&l,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
    }

    ${R(t.terrainDepthTest,"depth = (view * vec4(vpos, 1.0)).z;")}
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();
  `),e.include(ro,t),e.include(br,t),e.include(We,t),e.include(T?io:oo,t),e.include(Di,t),e.include(Ue,t),e.include(so,t),pt(i,t),i.uniforms.add(r.uniforms.get("localOrigin"),new k("ambient",M=>M.ambient),new k("diffuse",M=>M.diffuse),new ie("opacity",M=>M.opacity),new ie("layerOpacity",M=>M.layerOpacity)),G&&i.uniforms.add(new Z("tex",M=>M.texture)),e.include(Ui,t),e.include(Er,t),i.include(no),e.include(Tn,t),Sr(i),Cr(i),xt(i),i.main.add(s`
      discardBySlice(vpos);
      ${R(t.terrainDepthTest,"terrainDepthTest(depth);")}
      ${G?s`
              vec4 texColor = texture(tex, ${L?"colorUV":"vuv0"});
              ${R(f,"texColor.rgb /= texColor.a;")}
              discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
      shadingParams.viewDirection = normalize(vpos - cameraPosition);
      ${n===Q.ScreenDerivative?s`vec3 normal = screenDerivativeNormal(vPositionLocal);`:s`shadingParams.normalView = vNormalWorld;
                 vec3 normal = shadingNormal(shadingParams);`}
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

      vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${d?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":R(u,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

      vec3 matColor = max(ambient, diffuse);
      vec3 albedo = mixExternalColor(${R(_,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
      float opacity_ = layerOpacity * mixExternalOpacity(${R(_,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
      ${P?`mat3 tangentSpace = computeTangentSpace(${g?"normal":"normal, vpos, vuv0"});
             vec3 shadingNormal = computeTextureNormal(tangentSpace, ${F?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
      vec3 normalGround = ${u?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

      ${R(h,s`
            float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
            albedo = mix(albedo, vec3(1), snow);
            shadingNormal = mix(shadingNormal, normal, snow);
            ssao = mix(ssao, 1.0, snow);`)}

      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

      ${v===N.Normal||v===N.Schematic?s`
              float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
              ${R(h,s`mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);`)}
              vec4 emission = ${h?"mix(getEmissions(), vec4(0.0), snow)":"getEmissions()"};
              vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);
  `),e}const Ss=Object.freeze(Object.defineProperty({__proto__:null,build:Es},Symbol.toStringTag,{value:"Module"}));let Cs=class extends Hn{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=_n,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=_t.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=Je,this.instancedDoublePrecision=!1,this.normalType=Q.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=ut(.2,.2,.2),this.diffuse=ut(.8,.8,.8),this.externalColor=Oo(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=$(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=Gt.Less,this.textureAlphaMode=ge.Blend,this.textureAlphaCutoff=_e,this.textureAlphaPremultiplied=!1,this.renderOccluded=lr.Occlude,this.isDecoration=!1}};class Jc extends Un{constructor(){super(...arguments),this.origin=$(),this.slicePlaneLocalOrigin=this.origin}}let lo=class extends pr{constructor(e,r,i,o=new jt(Ss,()=>Tt(()=>import("./RealisticTree.glsl-DCHnsZ_x.js").then(a=>a.D),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55])))){super(e,r,o,i),this.type="DefaultMaterialTechnique"}_makePipeline(e,r){const{oitPass:i,output:o,transparent:a,cullFace:n,customDepthTest:l,hasOccludees:c,enableOffset:u}=e,d=i===Y.NONE,h=i===Y.FrontFace;return Vt({blending:mt(o)&&a?cn(i):null,culling:ws(e)?Ko(n):null,depthTest:{func:fn(i,As(l))},depthWrite:dn(e),drawBuffers:o===D.Depth?{buffers:[qo.NONE]}:pn(i,o),colorWrite:Ht,stencilWrite:c?jn:null,stencilTest:c?r?qn:Wn:null,polygonOffset:d||h?null:mn(u)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}};function As(t){return t===Gt.Lequal?de.LEQUAL:de.LESS}function ws(t){return t.cullFace!==_t.None||!t.hasSlicePlane&&!t.transparent&&!t.doubleSidedMode}let A=class extends dr{constructor(e,r){super(),this.spherical=e,this.doublePrecisionRequiresObfuscation=r,this.alphaDiscardMode=ge.Opaque,this.doubleSidedMode=re.None,this.pbrMode=N.Disabled,this.cullFace=_t.None,this.normalType=Q.Attribute,this.customDepthTest=Gt.Less,this.emissionSource=se.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===se.Texture||this.hasOcclusionTexture||this.hasNormalTexture?J.Default:J.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}};m([b({count:ge.COUNT})],A.prototype,"alphaDiscardMode",void 0),m([b({count:re.COUNT})],A.prototype,"doubleSidedMode",void 0),m([b({count:N.COUNT})],A.prototype,"pbrMode",void 0),m([b({count:_t.COUNT})],A.prototype,"cullFace",void 0),m([b({count:Q.COUNT})],A.prototype,"normalType",void 0),m([b({count:Gt.COUNT})],A.prototype,"customDepthTest",void 0),m([b({count:se.COUNT})],A.prototype,"emissionSource",void 0),m([b()],A.prototype,"hasVertexColors",void 0),m([b()],A.prototype,"hasSymbolColors",void 0),m([b()],A.prototype,"hasVerticalOffset",void 0),m([b()],A.prototype,"hasSlicePlane",void 0),m([b()],A.prototype,"hasSliceHighlight",void 0),m([b()],A.prototype,"hasColorTexture",void 0),m([b()],A.prototype,"hasMetallicRoughnessTexture",void 0),m([b()],A.prototype,"hasOcclusionTexture",void 0),m([b()],A.prototype,"hasNormalTexture",void 0),m([b()],A.prototype,"hasScreenSizePerspective",void 0),m([b()],A.prototype,"hasVertexTangents",void 0),m([b()],A.prototype,"hasOccludees",void 0),m([b()],A.prototype,"hasModelTransformation",void 0),m([b()],A.prototype,"offsetBackfaces",void 0),m([b()],A.prototype,"vvSize",void 0),m([b()],A.prototype,"vvColor",void 0),m([b()],A.prototype,"receiveShadows",void 0),m([b()],A.prototype,"receiveAmbientOcclusion",void 0),m([b()],A.prototype,"textureAlphaPremultiplied",void 0),m([b()],A.prototype,"instanced",void 0),m([b()],A.prototype,"instancedColor",void 0),m([b()],A.prototype,"writeDepth",void 0),m([b()],A.prototype,"transparent",void 0),m([b()],A.prototype,"enableOffset",void 0),m([b()],A.prototype,"terrainDepthTest",void 0),m([b()],A.prototype,"cullAboveTerrain",void 0),m([b()],A.prototype,"snowCover",void 0),m([b()],A.prototype,"hasColorTextureTransform",void 0),m([b()],A.prototype,"hasEmissionTextureTransform",void 0),m([b()],A.prototype,"hasNormalTextureTransform",void 0),m([b()],A.prototype,"hasOcclusionTextureTransform",void 0),m([b()],A.prototype,"hasMetallicRoughnessTextureTransform",void 0);function Ms(t){const e=new Ut,{vertex:r,fragment:i,varyings:o}=e,{output:a,offsetBackfaces:n,instancedColor:l,pbrMode:c,snowCover:u,spherical:d}=t,h=c===N.Normal||c===N.Schematic;if(He(r,t),e.include(Tr),o.add("vpos","vec3"),e.include(ct,t),e.include(Zi,t),e.include(Oi,t),a===D.Color&&(pt(e.vertex,t),e.include(Bt,t),e.include(je,t),n&&e.include(Xi),l&&e.attributes.add(p.INSTANCECOLOR,"vec4"),o.add("vNormalWorld","vec3"),o.add("localvpos","vec3"),t.terrainDepthTest&&o.add("depth","float"),e.include(Ne,t),e.include(Yi,t),e.include(Ki,t),e.include(Ji,t),r.uniforms.add(new te("externalColor",v=>v.externalColor)),o.add("vcolorExt","vec4"),r.main.add(s`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${R(l,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      if (vcolorExt.a < ${s.float(_e)}) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      } else {
        vpos = getVertexInLocalOriginSpace();
        localvpos = vpos - view[3].xyz;
        vpos = subtractOrigin(vpos);
        vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        ${R(n,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
      }
      ${R(t.terrainDepthTest,"depth = (view * vec4(vpos, 1.0)).z;")}
      forwardLinearDepth();
      forwardTextureCoordinates();`)),a===D.Color){const{hasColorTexture:v,hasColorTextureTransform:f,receiveShadows:T}=t;e.include(ro,t),e.include(br,t),e.include(We,t),e.include(t.instancedDoublePrecision?io:oo,t),e.include(Di,t),e.include(Ue,t),e.include(so,t),pt(e.fragment,t),Pt(i),Sr(i),Cr(i),i.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new k("ambient",_=>_.ambient),new k("diffuse",_=>_.diffuse),new ie("opacity",_=>_.opacity),new ie("layerOpacity",_=>_.layerOpacity)),v&&i.uniforms.add(new Z("tex",_=>_.texture)),e.include(Ui,t),e.include(Er,t),i.include(no),xt(i),i.main.add(s`
      discardBySlice(vpos);
      ${R(t.terrainDepthTest,"terrainDepthTest(depth);")}
      vec4 texColor = ${v?`texture(tex, ${f?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${R(v,`${R(t.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}
        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${T?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":d?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${t.hasVertexColors?s`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${R(u,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${s`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${R(h,`vec3 normalGround = ${d?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${h?s`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${R(u,s`mrr = vec3(0.0, 1.0, 0.04);`)}
            vec4 emission = ${u?"vec4(0.0)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);`)}return e.include(eo,t),e}const ys=Object.freeze(Object.defineProperty({__proto__:null,build:Ms},Symbol.toStringTag,{value:"Module"}));let Os=class extends lo{constructor(e,r,i){super(e,r,i,new jt(ys,()=>Tt(()=>import("./RealisticTree.glsl-DCHnsZ_x.js").then(o=>o.R),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55])))),this.type="RealisticTreeTechnique"}};class rd extends Ha{constructor(e,r){super(e,Is),this.materialType="default",this.supportsEdges=!0,this.produces=new Map([[lt.OPAQUE_MATERIAL,i=>(Pr(i)||kt(i))&&!this.parameters.transparent],[lt.TRANSPARENT_MATERIAL,i=>(Pr(i)||kt(i))&&this.parameters.transparent&&this.parameters.writeDepth],[lt.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,i=>(Ho(i)||kt(i))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=Ns(this.parameters),this._configuration=new A(r.spherical,r.doublePrecisionRequiresObfuscation)}isVisibleForOutput(e){return e!==D.Shadow&&e!==D.ShadowExcludeHighlight&&e!==D.ShadowHighlight||this.parameters.castShadows}get visible(){const e=this.parameters;if(e.layerOpacity<_e)return!1;const{hasInstancedColor:r,hasVertexColors:i,hasSymbolColors:o,vvColor:a}=e,n=r||a||o,l=e.colorMixMode==="replace",c=e.opacity>=_e;if(i&&n)return l||c;const u=e.externalColor&&e.externalColor[3]>=_e;return i?l?u:c:n?l||c:l?u:c}get hasEmissions(){return!!this.parameters.emissiveTextureId||!pi(this.parameters.emissiveFactor,Je)}getConfiguration(e,r){const i=this.parameters,{treeRendering:o,doubleSided:a,doubleSidedType:n}=i;return this._configuration.output=e,this._configuration.hasNormalTexture=!o&&!!i.normalTextureId,this._configuration.hasColorTexture=!!i.textureId,this._configuration.hasVertexTangents=!o&&i.hasVertexTangents,this._configuration.instanced=i.isInstanced,this._configuration.instancedDoublePrecision=i.instancedDoublePrecision,this._configuration.vvSize=!!i.vvSize,this._configuration.hasVerticalOffset=i.verticalOffset!=null,this._configuration.hasScreenSizePerspective=i.screenSizePerspective!=null,this._configuration.hasSlicePlane=i.hasSlicePlane,this._configuration.hasSliceHighlight=i.hasSliceHighlight,this._configuration.alphaDiscardMode=i.textureAlphaMode,this._configuration.normalType=o?Q.Attribute:i.normalType,this._configuration.transparent=i.transparent,this._configuration.writeDepth=i.writeDepth,i.customDepthTest!=null&&(this._configuration.customDepthTest=i.customDepthTest),this._configuration.hasOccludees=r.hasOccludees,this._configuration.cullFace=i.hasSlicePlane?_t.None:i.cullFace,this._configuration.terrainDepthTest=r.terrainDepthTest,this._configuration.cullAboveTerrain=r.cullAboveTerrain,this._configuration.hasModelTransformation=!o&&i.modelTransformation!=null,this._configuration.hasVertexColors=i.hasVertexColors,this._configuration.hasSymbolColors=i.hasSymbolColors,this._configuration.doubleSidedMode=o?re.WindingOrder:a&&n==="normal"?re.View:a&&n==="winding-order"?re.WindingOrder:re.None,this._configuration.instancedColor=i.hasInstancedColor,this._configuration.receiveShadows=i.receiveShadows&&i.receiveShadows,this._configuration.receiveAmbientOcclusion=i.receiveAmbientOcclusion&&r.ssao!=null,this._configuration.vvColor=!!i.vvColor,this._configuration.textureAlphaPremultiplied=!!i.textureAlphaPremultiplied,this._configuration.pbrMode=i.usePBR?i.isSchematic?N.Schematic:N.Normal:N.Disabled,this._configuration.hasMetallicRoughnessTexture=!o&&!!i.metallicRoughnessTextureId,this._configuration.emissionSource=o?se.None:i.emissiveTextureId!=null?se.Texture:i.usePBR?se.Value:se.None,this._configuration.hasOcclusionTexture=!o&&!!i.occlusionTextureId,this._configuration.offsetBackfaces=!(!i.transparent||!i.offsetTransparentBackfaces),this._configuration.oitPass=r.oitPass,this._configuration.enableOffset=r.camera.relativeElevation<un,this._configuration.snowCover=$s(r),this._configuration.hasColorTextureTransform=!!i.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!i.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!i.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!i.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!i.metallicRoughnessTextureTransformMatrix,this._configuration}intersect(e,r,i,o,a,n){if(this.parameters.verticalOffset!=null){const l=i.camera;X(Jt,r[12],r[13],r[14]);let c=null;switch(i.viewingMode){case er.Global:c=mr(ai,Jt);break;case er.Local:c=Ot(ai,Ds)}let u=0;const d=nt(Fs,Jt,l.eye),h=ve(d),v=Lr(d,d,1/h);let f=null;this.parameters.screenSizePerspective&&(f=Bo(c,v)),u+=Ga(l,h,this.parameters.verticalOffset,f??0,this.parameters.screenSizePerspective),Lr(c,c,u),Go(Kt,c,i.transform.inverseRotation),o=nt(Ls,o,Kt),a=nt(Ps,a,Kt)}En(e,i,o,a,ua(i.verticalOffset),n)}createGLMaterial(e){return new Rs(e)}createBufferWriter(){return new zn(this._vertexBufferLayout)}}class Rs extends Fa{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});const r=this._material.parameters;this.updateTexture(r.textureId);const i=e.camera.viewInverseTransposeMatrix;return X(r.origin,i[3],i[7],i[11]),this._material.setParameters(this.textureBindParameters),this.acquireTechnique(r.treeRendering?Os:lo,e)}}class Is extends Cs{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}function $s(t){return t.weather!=null&&t.weatherVisible&&t.weather.type==="snowy"&&t.weather.snowCover==="enabled"}function Ns(t){const e=Vo().vec3f(p.POSITION);return t.normalType===Q.Compressed?e.vec2i16(p.NORMALCOMPRESSED,{glNormalized:!0}):e.vec3f(p.NORMAL),t.hasVertexTangents&&e.vec4f(p.TANGENT),(t.textureId||t.normalTextureId||t.metallicRoughnessTextureId||t.emissiveTextureId||t.occlusionTextureId)&&e.vec2f(p.UV0),t.hasVertexColors&&e.vec4u8(p.COLOR),t.hasSymbolColors&&e.vec4u8(p.SYMBOLCOLOR),Pa()&&e.vec4u8(p.OBJECTANDLAYERIDCOLOR),e}const Ls=$(),Ps=$(),Ds=It(0,0,1),ai=$(),Kt=$(),Jt=$(),Fs=$();function zs(){return ni??(ni=(async()=>{const t=await Tt(()=>import("./basis_transcoder-B40h2JNH.js"),[]),e=await t.default({locateFile:r=>Ro(`esri/libs/basisu/${r}`)});return e.initializeBasis(),e})()),ni}let ni;var $e;(function(t){t[t.ETC1_RGB=0]="ETC1_RGB",t[t.ETC2_RGBA=1]="ETC2_RGBA",t[t.BC1_RGB=2]="BC1_RGB",t[t.BC3_RGBA=3]="BC3_RGBA",t[t.BC4_R=4]="BC4_R",t[t.BC5_RG=5]="BC5_RG",t[t.BC7_M6_RGB=6]="BC7_M6_RGB",t[t.BC7_M5_RGBA=7]="BC7_M5_RGBA",t[t.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",t[t.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",t[t.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",t[t.ATC_RGB=11]="ATC_RGB",t[t.ATC_RGBA=12]="ATC_RGBA",t[t.FXT1_RGB=17]="FXT1_RGB",t[t.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",t[t.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",t[t.ETC2_EAC_R11=20]="ETC2_EAC_R11",t[t.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",t[t.RGBA32=13]="RGBA32",t[t.RGB565=14]="RGB565",t[t.BGR565=15]="BGR565",t[t.RGBA4444=16]="RGBA4444"})($e||($e={}));let ce=null,Mt=null;async function co(){return Mt==null&&(Mt=zs(),ce=await Mt),Mt}function Bs(t,e){if(ce==null)return t.byteLength;const r=new ce.BasisFile(new Uint8Array(t)),i=ho(r)?uo(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),e):0;return r.close(),r.delete(),i}function Gs(t,e){if(ce==null)return t.byteLength;const r=new ce.KTX2File(new Uint8Array(t)),i=mo(r)?uo(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),e):0;return r.close(),r.delete(),i}function uo(t,e,r,i,o){const a=aa(e?pe.COMPRESSED_RGBA8_ETC2_EAC:pe.COMPRESSED_RGB8_ETC2),n=o&&t>1?(4**t-1)/(3*4**(t-1)):1;return Math.ceil(r*i*a*n)}function ho(t){return t.getNumImages()>=1&&!t.isUASTC()}function mo(t){return t.getFaces()>=1&&t.isETC1S()}async function Vs(t,e,r){ce==null&&(ce=await co());const i=new ce.BasisFile(new Uint8Array(r));if(!ho(i))return null;i.startTranscoding();const o=fo(t,e,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),(a,n)=>i.getImageTranscodedSizeInBytes(0,a,n),(a,n,l)=>i.transcodeImage(l,0,a,n,0,0));return i.close(),i.delete(),o}async function Hs(t,e,r){ce==null&&(ce=await co());const i=new ce.KTX2File(new Uint8Array(r));if(!mo(i))return null;i.startTranscoding();const o=fo(t,e,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),(a,n)=>i.getImageTranscodedSizeInBytes(a,0,0,n),(a,n,l)=>i.transcodeImage(l,a,0,0,n,0,-1,-1));return i.close(),i.delete(),o}function fo(t,e,r,i,o,a,n,l){const{compressedTextureETC:c,compressedTextureS3TC:u}=t.capabilities,[d,h]=c?i?[$e.ETC2_RGBA,pe.COMPRESSED_RGBA8_ETC2_EAC]:[$e.ETC1_RGB,pe.COMPRESSED_RGB8_ETC2]:u?i?[$e.BC3_RGBA,pe.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[$e.BC1_RGB,pe.COMPRESSED_RGB_S3TC_DXT1_EXT]:[$e.RGBA32,Ie.RGBA],v=e.hasMipmap?r:Math.min(1,r),f=[];for(let T=0;T<v;T++)f.push(new Uint8Array(n(T,d))),l(T,d,f[T]);return e.internalFormat=h,e.hasMipmap=f.length>1,e.samplingMode=e.hasMipmap?Ze.LINEAR_MIPMAP_LINEAR:Ze.LINEAR,e.width=o,e.height=a,new Ye(t,e,{type:"compressed",levels:f})}const yt=()=>li.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),Us=542327876,js=131072,Ws=4;function Ar(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function qs(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}const ks=Ar("DXT1"),Ys=Ar("DXT3"),Xs=Ar("DXT5"),Zs=31,Ks=0,Js=1,Qs=2,el=3,tl=4,rl=7,il=20,ol=21;function al(t,e,r){const i=nl(r,e.hasMipmap??!1);if(i==null)throw new Error("DDS texture data is null");const{textureData:o,internalFormat:a,width:n,height:l}=i;return e.samplingMode=o.levels.length>1?Ze.LINEAR_MIPMAP_LINEAR:Ze.LINEAR,e.hasMipmap=o.levels.length>1,e.internalFormat=a,e.width=n,e.height=l,new Ye(t,e,o)}function nl(t,e){const r=new Int32Array(t.buffer,t.byteOffset,Zs);if(r[Ks]!==Us)return yt().error("Invalid magic number in DDS header"),null;if(!(r[il]&Ws))return yt().error("Unsupported format, must contain a FourCC code"),null;const i=r[ol];let o,a;switch(i){case ks:o=8,a=pe.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Ys:o=16,a=pe.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Xs:o=16,a=pe.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return yt().error("Unsupported FourCC code:",qs(i)),null}let n=1,l=r[tl],c=r[el];(3&l||3&c)&&(yt().warn("Rounding up compressed texture size to nearest multiple of 4."),l=l+3&-4,c=c+3&-4);const u=l,d=c;let h,v;r[Qs]&js&&e!==!1&&(n=Math.max(1,r[rl]));let f=t.byteOffset+r[Js]+4;const T=[];for(let _=0;_<n;++_)v=(l+3>>2)*(c+3>>2)*o,h=new Uint8Array(t.buffer,f,v),T.push(h),f+=v,l=Math.max(1,l>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:T},internalFormat:a,width:u,height:d}}function sl(t,e){let a=t.width*t.height;if(a<4096)return t instanceof ImageData?po(t):t;let n=t.width,l=t.height;do n=Math.ceil(n/2),l=Math.ceil(l/2),a=n*l;while(a>1048576||e!=null&&(n>e||l>e));return wr(t,n,l)}function ll(t,e){const r=Math.max(t.width,t.height);if(r<=e)return t;const i=e/r;return wr(t,Math.round(t.width*i),Math.round(t.height*i))}function wr(t,e,r){if(t instanceof ImageData)return wr(po(t),e,r);const i=document.createElement("canvas");return i.width=e,i.height=r,i.getContext("2d").drawImage(t,0,0,i.width,i.height),i}function po(t){const e=document.createElement("canvas");e.width=t.width,e.height=t.height;const r=e.getContext("2d");if(r==null)throw new Te("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(t,0,0),e}class id extends Ri{get parameters(){return this._parameters}constructor(e,r){super(),this._data=e,this.type=vt.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new Io,this._parameters={...dl,...r},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){e!=null&&(e instanceof HTMLVideoElement?(this.frameUpdate=r=>this._frameUpdate(e,r),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!(Ir(e.src)||e.preload==="auto"&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const r=!e.paused;if(e.src=e.src,r&&e.autoplay){const i=()=>{e.removeEventListener("canplay",i),e.play()};e.addEventListener("canplay",i)}}}_startPreloadImageElement(e){$o(e.src)||Ir(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const r=new _i;return r.wrapMode=this._parameters.wrap??ft.REPEAT,r.flipped=!this._parameters.noUnpackFlip,r.samplingMode=this._parameters.mipmap?Ze.LINEAR_MIPMAP_LINEAR:Ze.LINEAR,r.hasMipmap=!!this._parameters.mipmap,r.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,r.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),r}get glTexture(){return this._glTexture}get memoryEstimate(){var e;return((e=this._glTexture)==null?void 0:e.usedMemory)||cl(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const r=this._data;return r==null?(this._glTexture=new Ye(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),typeof r=="string"?this._loadFromURL(e,r):r instanceof Image?this._loadFromImageElement(e,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(e,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(e,r):rt(r)&&this._parameters.encoding===Ve.DDS_ENCODING?this._loadFromDDSData(e,r):it(r)&&this._parameters.encoding===Ve.DDS_ENCODING?this._loadFromDDSData(e,new Uint8Array(r)):(it(r)||rt(r))&&this._parameters.encoding===Ve.KTX2_ENCODING?this._loadFromKTX2(e,r):(it(r)||rt(r))&&this._parameters.encoding===Ve.BASIS_ENCODING?this._loadFromBasis(e,r):rt(r)?this._loadFromPixelData(e,r):it(r)?this._loadFromPixelData(e,new Uint8Array(r)):null)}_frameUpdate(e,r){return this._glTexture==null||e.readyState<dt.HAVE_CURRENT_DATA||r===e.currentTime?r:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,r){return this._glTexture=al(e,this._createDescriptor(e),r),this._glTexture}_loadFromKTX2(e,r){return this._loadAsync(()=>Hs(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromBasis(e,r){return this._loadAsync(()=>Vs(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromPixelData(e,r){U(this._parameters.width>0&&this._parameters.height>0);const i=this._createDescriptor(e);return i.pixelFormat=this._parameters.components===1?Ie.LUMINANCE:this._parameters.components===3?Ie.RGB:Ie.RGBA,i.width=this._parameters.width??0,i.height=this._parameters.height??0,this._glTexture=new Ye(e,i,r),this._glTexture}_loadFromURL(e,r){return this._loadAsync(async i=>{const o=await la(r,{signal:i});return $r(i),this._loadFromImage(e,o)})}_loadFromImageElement(e,r){return r.complete?this._loadFromImage(e,r):this._loadAsync(async i=>{const o=await No(r,r.src,!1,i);return $r(i),this._loadFromImage(e,o)})}_loadFromVideoElement(e,r){return r.readyState>=dt.HAVE_CURRENT_DATA?this._loadFromImage(e,r):this._loadFromVideoElementAsync(e,r)}_loadFromVideoElementAsync(e,r){return this._loadAsync(i=>new Promise((o,a)=>{const n=()=>{r.removeEventListener("loadeddata",l),r.removeEventListener("error",c),Do(u)},l=()=>{r.readyState>=dt.HAVE_CURRENT_DATA&&(n(),o(this._loadFromImage(e,r)))},c=d=>{n(),a(d||new Te("Failed to load video"))};r.addEventListener("loadeddata",l),r.addEventListener("error",c);const u=Lo(i,()=>c(Po()))}))}_loadFromImage(e,r){let i=r;if(!(i instanceof HTMLVideoElement)){const{maxTextureSize:n}=e.parameters;i=this._parameters.downsampleUncompressed?sl(i,n):ll(i,n)}const o=vo(i);this._parameters.width=o.width,this._parameters.height=o.height;const a=this._createDescriptor(e);return a.pixelFormat=this._parameters.components===3?Ie.RGB:Ie.RGBA,a.width=o.width,a.height=o.height,this._glTexture=new Ye(e,a,i),this._glTexture}_loadAsync(e){const r=new AbortController;this._loadingController=r;const i=e(r.signal);this._loadingPromise=i;const o=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===i&&(this._loadingPromise=null)};return i.then(o,o),i}unload(){if(this._glTexture=Rt(this._glTexture),this._loadingController!=null){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}function cl(t,e){if(t==null)return 0;if(it(t)||rt(t))return e.encoding===Ve.KTX2_ENCODING?Gs(t,!!e.mipmap):e.encoding===Ve.BASIS_ENCODING?Bs(t,!!e.mipmap):t.byteLength;const{width:r,height:i}=t instanceof Image||t instanceof ImageData||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?vo(t):e;return(e.mipmap?4/3:1)*r*i*(e.components||4)||0}function vo(t){return t instanceof HTMLVideoElement?{width:t.videoWidth,height:t.videoHeight}:t}var dt;(function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"})(dt||(dt={}));const dl={wrap:{s:ft.REPEAT,t:ft.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};export{Ua as $,Ke as A,rd as B,id as C,lc as D,Fi as E,Y as F,pr as G,jt as H,pn as I,b as J,dr as K,J as L,se as M,Ha as N,lt as O,Ue as P,oc as Q,wi as R,nc as S,wc as T,ac as U,Ga as V,sc as W,Fa as X,Ba as Y,lr as Z,Pa as _,Ic as a,ja as a0,qa as a1,Tc as a2,$i as a3,_c as a4,Ya as a5,Un as a6,Ci as a7,Jc as a8,Va as a9,Jn as aa,ls as ab,_r as ac,Es as ad,Ms as ae,Pc as b,$c as c,ya as d,vt as e,He as f,pt as g,te as h,ie as i,La as j,Oa as k,rn as l,Di as m,Lc as n,Rc as o,$a as p,Z as q,Ri as r,Dc as s,_n as t,K as u,Ut as v,uc as w,ct as x,tn as y,zi as z};