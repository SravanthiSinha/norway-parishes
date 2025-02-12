import{s as re,a as pe,e as y,N as A,D as ne,p as Y,C as we,X as de,M as he,L as ge,f as me,m as ye,b as ve}from"./arcadeUtils-JXwku4_P.js";import{A as be,w as v,x as W,M as p,v as S,a as l,r as s,O as I,R as E,e as _,H as Se,u as oe,P as g,L as R,h as f,d as $,c as xe,m as D,I as Ie,U as O,E as B,z as C,X as L,s as Fe,b as P,K as Re,f as Ae,n as J,i as Q}from"./languageUtils-D7UWyaHA.js";import{registerFunctions as Me}from"./geomasync-VR4Mq9oR.js";import{ag as ae,f7 as ee}from"./index-BvuY3ppR.js";import"./TimeOnly-TYFhU_ZG.js";import"./ImmutableArray-BPVd6ESQ.js";import"./featureConversionUtils-CNl7iXsn.js";import"./number-B9BZ8mLi.js";import"./shared-kAbP0gxa.js";import"./uuid-Cl5lrJ4c.js";import"./portalUtils-DEv8rXi3.js";import"./geometryEngineAsync-ChSVPLFI.js";const K=100;async function z(t,e){const r=[];for(let n=0;n<e.arguments.length;n++)r.push(await u(t,e.arguments[n]));return r}async function F(t,e,r){return e.preparsed===!0?r(t,null,e.arguments):r(t,e,await z(t,e))}class Ce extends Ae{constructor(e,r){super(),this.definition=null,this.context=null,this.definition=e,this.context=r}createFunction(e){return(...r)=>{const n={spatialReference:this.context.spatialReference,console:this.context.console,lrucache:this.context.lrucache,timeZone:this.context.timeZone??null,exports:this.context.exports,libraryResolver:this.context.libraryResolver,interceptor:this.context.interceptor,localScope:{},depthCounter:{depth:e.depthCounter+1},globalScope:this.context.globalScope};if(n.depthCounter.depth>64)throw new l(e,s.MaximumCallDepth,null);return U(this.definition,n,r,null)}}call(e,r){return k(e,r,(n,o,a)=>{const i={spatialReference:e.spatialReference,services:e.services,console:e.console,libraryResolver:e.libraryResolver,exports:e.exports,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:{depth:e.depthCounter.depth+1}};if(i.depthCounter.depth>64)throw new l(e,s.MaximumCallDepth,r);return U(this.definition,i,a,r)})}marshalledCall(e,r,n,o){return o(e,r,async(a,i,c)=>{const w={spatialReference:e.spatialReference,globalScope:n.globalScope,depthCounter:{depth:e.depthCounter.depth+1},libraryResolver:e.libraryResolver,exports:e.exports,console:e.console,abortSignal:e.abortSignal,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:{}};return c=c.map(d=>!S(d)||d instanceof P?d:J(d,e,o)),J(await U(this.definition,w,c,r),n,o)})}}class M extends Fe{constructor(e){super(),this.source=e}async global(e){const r=this.executingContext.globalScope[e.toLowerCase()];if(r.valueset||(r.value=await u(this.executingContext,r.node),r.valueset=!0),S(r.value)&&!(r.value instanceof P)){const n=new P;n.fn=r.value,n.parameterEvaluator=k,n.context=this.executingContext,r.value=n}return r.value}setGlobal(e,r){if(S(r))throw new l(null,s.AssignModuleFunction,null);this.executingContext.globalScope[e.toLowerCase()]={value:r,valueset:!0,node:null}}hasGlobal(e){return this.executingContext.exports[e]===void 0&&(e=e.toLowerCase()),this.executingContext.exports[e]!==void 0}async loadModule(e){let r=e.spatialReference;r==null&&(r=new ae({wkid:102100})),this.moduleScope=ue({},e.customfunctions,e.timeZone),this.executingContext={spatialReference:r,services:e.services,libraryResolver:new re(e.libraryResolver._moduleSingletons,this.source.syntax.loadedModules),exports:{},abortSignal:e.abortSignal===void 0||e.abortSignal===null?{aborted:!1}:e.abortSignal,globalScope:this.moduleScope,console:e.console??fe,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}},await X(this.executingContext,this.source.syntax)}}async function k(t,e,r){return e.preparsed===!0?r(t,null,e.arguments):r(t,e,await z(t,e))}async function u(t,e){e.breakpoint&&await e.breakpoint();try{switch(e.type){case"UpdateExpression":return await Ke(t,e);case"AssignmentExpression":return await je(t,e);case"TemplateLiteral":return await Ye(t,e);case"Identifier":return await H(t,e);case"MemberExpression":return await Ve(t,e);case"Literal":return e.value;case"CallExpression":return await He(t,e);case"UnaryExpression":return await We(t,e);case"BinaryExpression":return await ze(t,e);case"LogicalExpression":return await Xe(t,e);case"ArrayExpression":return await _e(t,e);case"ObjectExpression":return await Ne(t,e);default:throw new l(t,s.Unrecognized,e)}}catch(r){throw oe(t,e,r)}}async function b(t,e){e.breakpoint&&await e.breakpoint();try{switch(e.type){case"ImportDeclaration":return await Ge(t,e);case"ExportNamedDeclaration":return await qe(t,e);case"VariableDeclaration":return await le(t,e,0);case"BlockStatement":return await X(t,e);case"FunctionDeclaration":return await Ze(t,e);case"ReturnStatement":return await Pe(t,e);case"IfStatement":return await De(t,e);case"ExpressionStatement":return await Ue(t,e);case"ForStatement":return await ke(t,e);case"WhileStatement":return await $e(t,e);case"ForInStatement":return await Le(t,e);case"BreakStatement":return I;case"EmptyStatement":return p;case"ContinueStatement":return E;default:throw new l(t,s.Unrecognized,e)}}catch(r){throw oe(t,e,r)}}async function Ne(t,e){const r=[];for(let i=0;i<e.properties.length;i++){const c=e.properties[i],w=await u(t,c.value),d=c.key.type==="Identifier"?c.key.name:await u(t,c.key);r[i]={key:d,value:w}}const n={},o=new Map;for(let i=0;i<r.length;i++){const c=r[i];if(S(c.value))throw new l(t,s.NoFunctionInDictionary,e);if(g(c.key)===!1)throw new l(t,s.KeyMustBeString,e);let w=c.key.toString();const d=w.toLowerCase();o.has(d)?w=o.get(d):o.set(d,w),c.value===p?n[w]=null:n[w]=c.value}const a=new A(n);return a.immutable=!1,a}async function $e(t,e){const r={testResult:!0,lastAction:p};if(r.testResult=await u(t,e.test),r.testResult===!1)return p;if(r.testResult!==!0)throw new l(t,s.BooleanConditionRequired,e);for(;r.testResult===!0&&(r.lastAction=await b(t,e.body),r.lastAction!==I)&&!(r.lastAction instanceof v);)if(r.testResult=await u(t,e.test),r.testResult!==!0&&r.testResult!==!1)throw new l(t,s.BooleanConditionRequired,e);return r.lastAction instanceof v?r.lastAction:p}async function te(t,e,r){const n=await b(t,e.body);return r.lastAction=n,r.lastAction===I||r.lastAction instanceof v?(r.testResult=!1,r):(e.update!==null&&await u(t,e.update),r)}async function Oe(t,e,r){var n;if(e.test!==null){const o=await u(t,e.test);if(((n=t.abortSignal)==null?void 0:n.aborted)===!0)throw new l(t,s.Cancelled,e);if(r.testResult=o,r.testResult===!1)return r;if(r.testResult!==!0)throw new l(t,s.BooleanConditionRequired,e);return te(t,e,r)}return te(t,e,r)}function Z(t,e,r,n,o,a){try{Oe(t,e,r).then(()=>{try{r.testResult===!0?++a>K?(a=0,setTimeout(()=>{Z(t,e,r,n,o,a)},0)):Z(t,e,r,n,o,a):r.lastAction instanceof v?n(r.lastAction):n(p)}catch(i){o(i)}},i=>{o(i)})}catch(i){o(i)}}async function ke(t,e){try{return e.init!==null&&(e.init.type==="VariableDeclaration"?await b(t,e.init):await u(t,e.init)),await new Promise((r,n)=>{Z(t,e,{testResult:!0,lastAction:p},o=>{r(o)},o=>{n(o)},0)})}catch(r){throw r}}function G(t,e,r,n,o,a,i,c,w,d){try{if(n<=a)return void c(p);o.value=i==="k"?r[a]:a,b(t,e.body).then(m=>{try{m instanceof v?c(m):m===I?c(p):++d>K?(d=0,setTimeout(()=>{G(t,e,r,n,o,a+1,i,c,w,d)},0)):G(t,e,r,n,o,a+1,i,c,w,d)}catch(j){w(j)}},m=>{w(m)})}catch(m){w(m)}}function q(t,e,r,n,o,a,i,c,w){try{if(r.length()<=o)return void i(p);n.value=a==="k"?r.get(o):o,b(t,e.body).then(d=>{d instanceof v?i(d):d===I?i(p):++w>K?(w=0,setTimeout(()=>{q(t,e,r,n,o+1,a,i,c,w)},0)):q(t,e,r,n,o+1,a,i,c,w)},d=>{c(d)})}catch(d){c(d)}}function T(t,e,r,n,o,a){try{if(a===void 0&&(a="i"),r.length===0)return void n.resolve(p);G(t,e,r,r.length,o,0,a,i=>{n.resolve(i)},i=>{n.reject(i)},0)}catch(i){n.reject(i)}}function Ee(t,e,r,n,o,a){try{if(a===void 0&&(a="i"),r.length()===0)return void n.resolve(p);q(t,e,r,o,0,a,i=>{n.resolve(i)},i=>{n.reject(i)},0)}catch(i){n.reject(i)}}function Be(t,e,r,n,o){try{T(t,e,r.keys(),n,o,"k")}catch(a){n.reject(a)}}function V(t,e,r,n,o,a,i,c){try{t.next().then(w=>{try{if(w===null)a(p);else{const d=ne.createFromGraphicLikeObject(w.geometry,w.attributes,n,e.timeZone);d._underlyingGraphic=w,o.value=d,b(e,r.body).then(m=>{try{m===I?a(p):m instanceof v?a(m):++c>K?(c=0,setTimeout(()=>{V(t,e,r,n,o,a,i,c)},0)):V(t,e,r,n,o,a,i,c)}catch(j){i(j)}},m=>{i(m)})}}catch(d){i(d)}},w=>{i(w)})}catch(w){i(w)}}async function Le(t,e){return new Promise((r,n)=>{u(t,e.right).then(o=>{try{let a;a=e.left.type==="VariableDeclaration"?b(t,e.left):Promise.resolve(),a.then(()=>{try{const i=y(e.left.type==="VariableDeclaration"?e.left.declarations[0].id:e.left);let c=null;if(t.localScope!=null&&t.localScope[i]!==void 0&&(c=t.localScope[i]),c===null&&t.globalScope[i]!==void 0&&(c=t.globalScope[i]),c===null)return void n(new l(t,s.InvalidIdentifier,e));B(o)||g(o)?T(t,e,o,{reject:n,resolve:r},c):L(o)?Ee(t,e,o,{reject:n,resolve:r},c):o instanceof A||O(o)?Be(t,e,o,{reject:n,resolve:r},c):Re(o)?V(o.iterator(t.abortSignal),t,e,o,c,w=>{r(w)},w=>{n(w)},0):T(t,e,[],{reject:n,resolve:r},c)}catch(i){n(i)}},n)}catch(a){n(a)}},n)})}async function Ke(t,e){const r=e.argument;if(r.type==="CallExpression")throw new l(t,s.NeverReach,e);if(r.type==="MemberExpression"){const a=await u(t,r.object);let i,c;if(r.computed===!0)i=await u(t,r.property);else{if(r.property.type!=="Identifier")throw new l(t,s.Unrecognized,e);i=r.property.name}if(B(a)){if(!C(i))throw new l(t,s.ArrayAccessorMustBeNumber,e);if(i<0&&(i=a.length+i),i<0||i>=a.length)throw new l(t,s.OutOfBounds,e);c=f(a[i]),a[i]=e.operator==="++"?c+1:c-1}else if(a instanceof A){if(g(i)===!1)throw new l(t,s.KeyAccessorMustBeString,e);if(a.hasField(i)!==!0)throw new l(t,s.FieldNotFound,e,{key:i});c=f(a.field(i)),a.setField(i,e.operator==="++"?c+1:c-1)}else if(a instanceof M){if(g(i)===!1)throw new l(t,s.ModuleAccessorMustBeString,e);if(a.hasGlobal(i)!==!0)throw new l(t,s.ModuleExportNotFound,e);c=f(await a.global(i)),a.setGlobal(i,e.operator==="++"?c+1:c-1)}else{if(!O(a))throw L(a)?new l(t,s.Immutable,e):new l(t,s.InvalidParameter,e);if(g(i)===!1)throw new l(t,s.KeyAccessorMustBeString,e);if(a.hasField(i)!==!0)throw new l(t,s.FieldNotFound,e,{key:i});c=f(a.field(i)),a.setField(i,e.operator==="++"?c+1:c-1)}return e.prefix===!1?c:e.operator==="++"?c+1:c-1}const n=y(r);let o;if(t.localScope!=null&&t.localScope[n]!==void 0)return o=f(t.localScope[n].value),t.localScope[n]={value:e.operator==="++"?o+1:o-1,valueset:!0,node:e},e.prefix===!1?o:e.operator==="++"?o+1:o-1;if(t.globalScope[n]!==void 0)return o=f(t.globalScope[n].value),t.globalScope[n]={value:e.operator==="++"?o+1:o-1,valueset:!0,node:e},e.prefix===!1?o:e.operator==="++"?o+1:o-1;throw new l(t,s.InvalidIdentifier,e)}function x(t,e,r,n,o){switch(e){case"=":return t===p?null:t;case"/=":return f(r)/f(t);case"*=":return f(r)*f(t);case"-=":return f(r)-f(t);case"+=":return g(r)||g(t)?$(r)+$(t):f(r)+f(t);case"%=":return f(r)%f(t);default:throw new l(o,s.UnsupportedOperator,n)}}async function je(t,e){const r=e.left;if(r.type==="MemberExpression"){const o=await u(t,r.object);let a;if(r.computed===!0)a=await u(t,r.property);else{if(r.property.type!=="Identifier")throw new l(t,s.InvalidIdentifier,e);a=r.property.name}const i=await u(t,e.right);if(B(o)){if(!C(a))throw new l(t,s.ArrayAccessorMustBeNumber,e);if(a<0&&(a=o.length+a),a<0||a>o.length)throw new l(t,s.OutOfBounds,e);if(a===o.length){if(e.operator!=="=")throw new l(t,s.OutOfBounds,e);o[a]=x(i,e.operator,o[a],e,t)}else o[a]=x(i,e.operator,o[a],e,t)}else if(o instanceof A){if(g(a)===!1)throw new l(t,s.KeyAccessorMustBeString,e);if(o.hasField(a)===!0)o.setField(a,x(i,e.operator,o.field(a),e,t));else{if(e.operator!=="=")throw new l(t,s.FieldNotFound,e,{key:a});o.setField(a,x(i,e.operator,null,e,t))}}else if(o instanceof M){if(g(a)===!1)throw new l(t,s.KeyAccessorMustBeString,e);if(o.hasGlobal(a)!==!0)throw new l(t,s.ModuleExportNotFound,e);o.setGlobal(a,x(i,e.operator,await o.global(a),e,t))}else{if(!O(o))throw L(o)?new l(t,s.Immutable,e):new l(t,s.InvalidParameter,e);if(g(a)===!1)throw new l(t,s.KeyAccessorMustBeString,e);if(o.hasField(a)===!0)o.setField(a,x(i,e.operator,o.field(a),e,t));else{if(e.operator!=="=")throw new l(t,s.FieldNotFound,e,{key:a});o.setField(a,x(i,e.operator,null,e,t))}}return p}const n=y(r);if(t.localScope!=null&&t.localScope[n]!==void 0){const o=await u(t,e.right);return t.localScope[n]={value:x(o,e.operator,t.localScope[n].value,e,t),valueset:!0,node:e.right},p}if(t.globalScope[n]!==void 0){const o=await u(t,e.right);return t.globalScope[n]={value:x(o,e.operator,t.globalScope[n].value,e,t),valueset:!0,node:e.right},p}throw new l(t,s.InvalidIdentifier,e)}async function Ue(t,e){const r=await u(t,e.expression);return r===p?p:new W(r)}async function De(t,e){const r=await u(t,e.test);if(r===!0)return b(t,e.consequent);if(r===!1)return e.alternate!==null?b(t,e.alternate):p;throw new l(t,s.BooleanConditionRequired,e)}async function X(t,e){return ie(t,e,0)}async function ie(t,e,r){if(r>=e.body.length)return p;const n=await b(t,e.body[r]);return n instanceof v||n===I||n===E||r===e.body.length-1?n:ie(t,e,r+1)}async function Pe(t,e){if(e.argument===null)return new v(p);const r=await u(t,e.argument);return new v(r)}async function Ze(t,e){const r=y(e.id);return t.globalScope[r]={valueset:!0,node:null,value:new Ce(e,t)},p}async function Ge(t,e){var a,i;const r=y(e.specifiers[0].local),n=t.libraryResolver.loadLibrary(r);let o;return(a=t.libraryResolver._moduleSingletons)!=null&&a.has(n.uri)?o=t.libraryResolver._moduleSingletons.get(n.uri):(o=new M(n),await o.loadModule(t),(i=t.libraryResolver._moduleSingletons)==null||i.set(n.uri,o)),t.globalScope[r]={value:o,valueset:!0,node:e},p}async function qe(t,e){if(await b(t,e.declaration),e.declaration.type==="FunctionDeclaration")t.exports[y(e.declaration.id)]="function";else if(e.declaration.type==="VariableDeclaration")for(const r of e.declaration.declarations)t.exports[y(r.id)]="variable";return p}async function le(t,e,r){return r>=e.declarations.length?p:(await Te(t,e.declarations[r]),r===e.declarations.length-1||await le(t,e,r+1),p)}async function Te(t,e){let r=null;if(r=e.init===null?null:await u(t,e.init),t.localScope!==null){if(r===p&&(r=null),e.id.type!=="Identifier")throw new l(t,s.InvalidIdentifier,e);const o=y(e.id);return void(t.localScope!=null&&(t.localScope[o]={value:r,valueset:!0,node:e.init}))}if(e.id.type!=="Identifier")throw new l(t,s.InvalidIdentifier,e);const n=y(e.id);r===p&&(r=null),t.globalScope[n]={value:r,valueset:!0,node:e.init}}async function Ve(t,e){const r=await u(t,e.object);if(r===null)throw new l(t,s.MemberOfNull,e);if(e.computed===!1){if(e.property.type==="Identifier"){if(r instanceof A||O(r))return r.field(e.property.name);if(r instanceof ee)return Y(r,e.property.name,t,e);if(r instanceof M){if(!r.hasGlobal(e.property.name))throw new l(t,s.InvalidIdentifier,e);return r.global(e.property.name)}throw new l(t,s.InvalidMemberAccessKey,e)}throw new l(t,s.InvalidMemberAccessKey,e)}let n=await u(t,e.property);if(r instanceof A||O(r)){if(g(n))return r.field(n);throw new l(t,s.InvalidMemberAccessKey,e)}if(r instanceof M){if(g(n))return r.global(n);throw new l(t,s.InvalidMemberAccessKey,e)}if(r instanceof ee){if(g(n))return Y(r,n,t,e);throw new l(t,s.InvalidMemberAccessKey,e)}if(B(r)){if(C(n)&&isFinite(n)&&Math.floor(n)===n){if(n<0&&(n=r.length+n),n>=r.length||n<0)throw new l(t,s.OutOfBounds,e);return r[n]}throw new l(t,s.InvalidMemberAccessKey,e)}if(L(r)){if(C(n)&&isFinite(n)&&Math.floor(n)===n){if(n<0&&(n=r.length()+n),n>=r.length()||n<0)throw new l(t,s.OutOfBounds,e);return r.get(n)}throw new l(t,s.InvalidMemberAccessKey,e)}if(g(r)){if(C(n)&&isFinite(n)&&Math.floor(n)===n){if(n<0&&(n=r.length+n),n>=r.length||n<0)throw new l(t,s.OutOfBounds,e);return r[n]}throw new l(t,s.InvalidMemberAccessKey,e)}throw new l(t,s.InvalidMemberAccessKey,e)}async function We(t,e){const r=await u(t,e.argument);if(R(r)){if(e.operator==="!")return!r;if(e.operator==="-")return-1*f(r);if(e.operator==="+")return 1*f(r);if(e.operator==="~")return~f(r);throw new l(t,s.UnsupportedUnaryOperator,e)}if(e.operator==="-")return-1*f(r);if(e.operator==="+")return 1*f(r);if(e.operator==="~")return~f(r);throw new l(t,s.UnsupportedUnaryOperator,e)}async function _e(t,e){const r=[];for(let n=0;n<e.elements.length;n++)r.push(await u(t,e.elements[n]));for(let n=0;n<r.length;n++){if(S(r[n]))throw new l(t,s.NoFunctionInArray,e);r[n]===p&&(r[n]=null)}return r}async function ze(t,e){const r=await u(t,e.left),n=await u(t,e.right);switch(e.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":return Ie(f(r),f(n),e.operator);case"==":return D(r,n);case"!=":return!D(r,n);case"<":case">":case"<=":case">=":return xe(r,n,e.operator);case"+":return g(r)||g(n)?$(r)+$(n):f(r)+f(n);case"-":return f(r)-f(n);case"*":return f(r)*f(n);case"/":return f(r)/f(n);case"%":return f(r)%f(n);default:throw new l(t,s.UnsupportedOperator,e)}}async function Xe(t,e){const r=await u(t,e.left);if(!R(r))throw new l(t,s.LogicalExpressionOnlyBoolean,e);switch(e.operator){case"||":{if(r===!0)return r;const n=await u(t,e.right);if(R(n))return n;throw new l(t,s.LogicExpressionOrAnd,e)}case"&&":{if(r===!1)return r;const n=await u(t,e.right);if(R(n))return n;throw new l(t,s.LogicExpressionOrAnd,e)}default:throw new l(t,s.LogicExpressionOrAnd,e)}}async function H(t,e){const r=y(e);if(t.localScope!=null&&t.localScope[r]!==void 0){const n=t.localScope[r];if(n.valueset===!0)return n.value;if(n.d!==null)return n.d;n.d=u(t,n.node);const o=await n.d;return n.value=o,n.valueset=!0,o}if(t.globalScope[r]!==void 0){const n=t.globalScope[r];if(n.valueset===!0)return n.value;if(n.d!==null)return n.d;n.d=u(t,n.node);const o=await n.d;return n.value=o,n.valueset=!0,o}throw new l(t,s.InvalidIdentifier,e)}async function He(t,e){if(e.callee.type==="MemberExpression"){const n=await u(t,e.callee.object);if(!(n instanceof M))throw new l(t,s.FunctionNotFound,e);const o=e.callee.computed===!1?e.callee.property.name:await u(t,e.callee.property);if(!n.hasGlobal(o))throw new l(t,s.FunctionNotFound,e);const a=await n.global(o);if(!S(a))throw new l(t,s.CallNonFunction,e);return a.call(t,e)}if(e.callee.type!=="Identifier")throw new l(t,s.FunctionNotFound,e);const r=y(e.callee);if(t.localScope!=null&&t.localScope[r]!==void 0){const n=t.localScope[r];if(S(n.value))return n.value.call(t,e);throw new l(t,s.CallNonFunction,e)}if(t.globalScope[r]!==void 0){const n=t.globalScope[r];if(S(n.value))return n.value.call(t,e);throw new l(t,s.CallNonFunction,e)}throw new l(t,s.FunctionNotFound,e)}async function Ye(t,e){let r="",n=0;for(const o of e.quasis)if(r+=o.value?o.value.cooked:"",o.tail===!1){if(e.expressions[n]){const a=await u(t,e.expressions[n]);if(S(a))throw new l(t,s.NoFunctionInTemplateLiteral,e);r+=$(a)}n++}return r}const h={};async function se(t,e,r,n){const o=await u(t,e.arguments[r]);if(D(o,n))return u(t,e.arguments[r+1]);const a=e.arguments.length-r;return a===1?u(t,e.arguments[r]):a===2?null:a===3?u(t,e.arguments[r+2]):se(t,e,r+2,n)}async function ce(t,e,r,n){if(n===!0)return u(t,e.arguments[r+1]);if(e.arguments.length-r===3)return u(t,e.arguments[r+2]);const o=await u(t,e.arguments[r+2]);if(R(o)===!1)throw new l(t,s.ModuleExportNotFound,e.arguments[r+2]);return ce(t,e,r+2,o)}async function U(t,e,r,n){const o=t.body;if(r.length!==t.params.length)throw new l(e,s.WrongNumberOfParameters,null);for(let i=0;i<r.length;i++){const c=t.params[i];c.type==="Identifier"&&e.localScope!=null&&(e.localScope[y(c)]={d:null,value:r[i],valueset:!0,node:null})}const a=await b(e,o);if(a instanceof v)return a.value;if(a===I)throw new l(e,s.UnexpectedToken,n);if(a===E)throw new l(e,s.UnexpectedToken,n);return a instanceof W?a.value:a}we(h,F),de(h,F),he(h,F),ge(h,F),me(h,F),Me({functions:h,compiled:!1,signatures:null,evaluateIdentifier:null,mode:"async",standardFunction:F,standardFunctionAsync:k}),h.iif=async function(t,e){Q(e.arguments===null?[]:e.arguments,3,3,t,e);const r=await u(t,e.arguments[0]);if(R(r)===!1)throw new l(t,s.BooleanConditionRequired,e);return u(t,r?e.arguments[1]:e.arguments[2])},h.defaultvalue=async function(t,e){Q(e.arguments===null?[]:e.arguments,2,3,t,e);const r=await u(t,e.arguments[0]);if(e.arguments.length===3){const n=await u(t,e.arguments[1]),o=ye(r,n);return o!=null&&o!==""?o:u(t,e.arguments[2])}return r==null||r===""?u(t,e.arguments[1]):r},h.decode=async function(t,e){if(e.arguments.length<2)throw new l(t,s.WrongNumberOfParameters,e);if(e.arguments.length===2)return u(t,e.arguments[1]);if((e.arguments.length-1)%2==0)throw new l(t,s.WrongNumberOfParameters,e);return se(t,e,1,await u(t,e.arguments[0]))},h.when=async function(t,e){if(e.arguments.length<3)throw new l(t,s.WrongNumberOfParameters,e);if(e.arguments.length%2==0)throw new l(t,s.WrongNumberOfParameters,e);const r=await u(t,e.arguments[0]);if(R(r)===!1)throw new l(t,s.BooleanConditionRequired,e.arguments[0]);return ce(t,e,0,r)};const Je={fixSpatialReference:be,parseArguments:z,standardFunction:F,standardFunctionAsync:k,evaluateIdentifier:H};for(const t in h)h[t]={value:new _(h[t]),valueset:!0,node:null};const N=function(){};function ue(t,e,r){const n=new N;t==null&&(t={}),e==null&&(e={});const o=new A({newline:`
`,tab:"	",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});o.immutable=!1,n.textformatting={value:o,valueset:!0,node:null};for(const a in e)n[a]={value:new _(e[a]),native:!0,valueset:!0,node:null};for(const a in t)n[a]={value:Se(t[a])?ne.createFromGraphic(t[a],r):t[a],valueset:!0,node:null};return n}function fe(t){console.log(t)}N.prototype=h,N.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},N.prototype.pi={value:Math.PI,valueset:!0,node:null};const pt=Je;function Qe(t){const e={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:F,standardFunctionAsync:k,evaluateIdentifier:H};for(let r=0;r<t.length;r++)t[r].registerFunctions(e);for(const r in e.functions)h[r]={value:new _(e.functions[r]),valueset:!0,node:null},N.prototype[r]=h[r];for(let r=0;r<e.signatures.length;r++)pe(e.signatures[r],"async")}async function wt(t,e){let r=e.spatialReference;r==null&&(r=new ae({wkid:102100}));let n=null;t.usesModules&&(n=new re(new Map,t.loadedModules));const o=ue(e.vars,e.customfunctions,e.timeZone),a={spatialReference:r,services:e.services,exports:{},libraryResolver:n,abortSignal:e.abortSignal===void 0||e.abortSignal===null?{aborted:!1}:e.abortSignal,globalScope:o,console:e.console??fe,timeZone:e.timeZone??null,lrucache:e.lrucache,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}},i=await X(a,t);if(i instanceof v||i instanceof W){const c=i.value;if(c===p)return null;if(S(c))throw new l(a,s.IllegalResult,null);return c}if(i===p)return null;throw i===I?new l(a,s.IllegalResult,null):i===E?new l(a,s.IllegalResult,null):new l(a,s.NeverReach,null)}Qe([ve]);export{wt as executeScript,Qe as extend,pt as functionHelper};
//# sourceMappingURL=arcadeAsyncRuntime-DnzZeUAP.js.map
