import{r as c}from"./Program-DkLj5irp.js";let u=class{constructor(e){this._readFile=e}resolveIncludes(e){return this._resolve(e)}_resolve(e,r=new Map){if(r.has(e))return r.get(e);const t=this._read(e);if(!t)throw new Error(`cannot find shader file ${e}`);const i=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let s=i.exec(t);const o=[];for(;s!=null;)o.push({path:s[1],start:s.index,length:s[0].length}),s=i.exec(t);let h=0,n="";return o.forEach(a=>{n+=t.slice(h,a.start),n+=r.has(a.path)?"":this._resolve(a.path,r),h=a.start+a.length}),n+=t.slice(h),r.set(e,n),n}_read(e){return this._readFile(e)}};function p(l,e,r=""){return new c(l,r+e.shaders.vertexShader,r+e.shaders.fragmentShader,e.attributes)}export{p as a,u as e};
//# sourceMappingURL=ProgramTemplate-Chv6vz2f.js.map
