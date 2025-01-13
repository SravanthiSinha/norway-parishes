import{T as Y,I as E,s as z}from"./index-CRM8otC0.js";import{C as M,A as k,c as R,P as i,B as x,G as h,M as f,U as G,L as T,D as K,V as F}from"./enums-Dk3osxpS.js";const q=()=>z.getLogger("esri.views.webgl.checkWebGLError");function j(t,e){switch(e){case t.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case t.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case t.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case t.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case t.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case t.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}const X=!!Y("enable-feature:webgl-debug");function H(){return X}function le(){return X}function N(t){if(H()){const e=t.getError();if(e){const r=j(t,e),a=new Error().stack;q().error(new E("webgl-error","WebGL error occurred",{message:r,stack:a}))}}}var O;(function(t){t[t.Texture=0]="Texture",t[t.RenderBuffer=1]="RenderBuffer"})(O||(O={}));function Z(t){switch(t){case M.BYTE:case M.UNSIGNED_BYTE:return 1;case M.SHORT:case M.UNSIGNED_SHORT:case M.HALF_FLOAT:return 2;case M.FLOAT:case M.INT:case M.UNSIGNED_INT:return 4}}function J(t){const e=t.gl;switch(e.getError()){case e.NO_ERROR:return null;case e.INVALID_ENUM:return"An unacceptable value has been specified for an enumerated argument";case e.INVALID_VALUE:return"An unacceptable value has been specified for an argument";case e.INVALID_OPERATION:return"The specified command is not allowed for the current state";case e.INVALID_FRAMEBUFFER_OPERATION:return"The currently bound framebuffer is not framebuffer complete";case e.OUT_OF_MEMORY:return"Not enough memory is left to execute the command";case e.CONTEXT_LOST_WEBGL:return"WebGL context is lost"}return"Unknown error"}function _e(t,e,r,a,s=0){var _;const c=t.gl;t.bindBuffer(r);for(const n of a){const o=e.get(n.name);if(o==null){console.warn(`There is no location for vertex attribute '${n.name}' defined.`);continue}const u=s*n.stride;if(n.count<=4)c.vertexAttribPointer(o,n.count,n.type,n.normalized,n.stride,n.offset+u),c.enableVertexAttribArray(o),n.divisor>0&&t.gl.vertexAttribDivisor(o,n.divisor);else if(n.count===9)for(let l=0;l<3;l++)c.vertexAttribPointer(o+l,3,n.type,n.normalized,n.stride,n.offset+12*l+u),c.enableVertexAttribArray(o+l),n.divisor>0&&t.gl.vertexAttribDivisor(o+l,n.divisor);else if(n.count===16)for(let l=0;l<4;l++)c.vertexAttribPointer(o+l,4,n.type,n.normalized,n.stride,n.offset+16*l+u),c.enableVertexAttribArray(o+l),n.divisor>0&&((_=t.gl)==null||_.vertexAttribDivisor(o+l,n.divisor));else console.error("Unsupported vertex attribute element count: "+n.count);if(H()){const l=J(t),d=Z(n.type),p=n.offset,m=Math.round(d/p)!==d/p?`. Offset not a multiple of stride. DataType requires ${d} bytes, but descriptor has an offset of ${p}`:"";l&&console.error(`Unable to bind vertex attribute "${n.name}" with baseInstanceOffset ${u}${m}:`,l,n)}}}function ue(t,e,r,a){var c,_,n;const s=t.gl;t.bindBuffer(r);for(const o of a){const u=e.get(o.name);if(o.count<=4)s.disableVertexAttribArray(u),o.divisor&&o.divisor>0&&((c=t.gl)==null||c.vertexAttribDivisor(u,0));else if(o.count===9)for(let l=0;l<3;l++)s.disableVertexAttribArray(u+l),o.divisor&&o.divisor>0&&((_=t.gl)==null||_.vertexAttribDivisor(u+l,0));else if(o.count===16)for(let l=0;l<4;l++)s.disableVertexAttribArray(u+l),o.divisor&&o.divisor>0&&((n=t.gl)==null||n.vertexAttribDivisor(u+l,0));else console.error("Unsupported vertex attribute element count: "+o.count)}t.unbindBuffer(k.ARRAY_BUFFER)}function Q(t){switch(t){case h.ALPHA:case h.LUMINANCE:case h.RED:case h.RED_INTEGER:case i.R8:case i.R8I:case i.R8UI:case i.R8_SNORM:case x.STENCIL_INDEX8:return 1;case h.LUMINANCE_ALPHA:case h.RG:case h.RG_INTEGER:case i.RGBA4:case i.R16F:case i.R16I:case i.R16UI:case i.RG8:case i.RG8I:case i.RG8UI:case i.RG8_SNORM:case i.RGB565:case i.RGB5_A1:case x.DEPTH_COMPONENT16:return 2;case h.DEPTH_COMPONENT:case h.RGB:case h.RGB_INTEGER:case i.RGB8:case i.RGB8I:case i.RGB8UI:case i.RGB8_SNORM:case i.SRGB8:case x.DEPTH_COMPONENT24:return 3;case h.DEPTH_STENCIL:case h.DEPTH24_STENCIL8:case h.RGBA:case h.RGBA_INTEGER:case i.RGBA8:case i.R32F:case i.R11F_G11F_B10F:case i.RG16F:case i.R32I:case i.R32UI:case i.RG16I:case i.RG16UI:case i.RGBA8I:case i.RGBA8UI:case i.RGBA8_SNORM:case i.SRGB8_ALPHA8:case i.RGB9_E5:case i.RGB10_A2UI:case i.RGB10_A2:case x.DEPTH_STENCIL:case x.DEPTH_COMPONENT32F:case x.DEPTH24_STENCIL8:return 4;case x.DEPTH32F_STENCIL8:return 5;case i.RGB16F:case i.RGB16I:case i.RGB16UI:return 6;case i.RG32F:case i.RG32I:case i.RG32UI:case i.RGBA16F:case i.RGBA16I:case i.RGBA16UI:return 8;case i.RGB32F:case i.RGB32I:case i.RGB32UI:return 12;case i.RGBA32F:case i.RGBA32I:case i.RGBA32UI:return 16;case R.COMPRESSED_RGB_S3TC_DXT1_EXT:case R.COMPRESSED_RGBA_S3TC_DXT1_EXT:return .5;case R.COMPRESSED_RGBA_S3TC_DXT3_EXT:case R.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case R.COMPRESSED_R11_EAC:case R.COMPRESSED_SIGNED_R11_EAC:case R.COMPRESSED_RGB8_ETC2:case R.COMPRESSED_SRGB8_ETC2:case R.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case R.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return .5;case R.COMPRESSED_RG11_EAC:case R.COMPRESSED_SIGNED_RG11_EAC:case R.COMPRESSED_RGBA8_ETC2_EAC:case R.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}let ee=class{constructor(e=0,r=e){this.width=e,this.height=r,this.target=f.TEXTURE_2D,this.pixelFormat=h.RGBA,this.dataType=G.UNSIGNED_BYTE,this.samplingMode=T.LINEAR,this.wrapMode=K.REPEAT,this.maxAnisotropy=1,this.flipped=!1,this.hasMipmap=!1,this.isOpaque=!1,this.unpackAlignment=4,this.preMultiplyAlpha=!1,this.depth=1,this.isImmutable=!1}};function te(t){return t.width<=0||t.height<=0?0:Math.round(t.width*t.height*(t.hasMipmap?4/3:1)*(t.internalFormat==null?4:Q(t.internalFormat))*(t.target===f.TEXTURE_CUBE_MAP?6:1))}class B extends ee{constructor(e,r){switch(super(),this.context=e,Object.assign(this,r),this.internalFormat){case i.R16F:case i.R16I:case i.R16UI:case i.R32F:case i.R32I:case i.R32UI:case i.R8_SNORM:case i.R8:case i.R8I:case i.R8UI:this.pixelFormat=h.RED}}static validate(e,r){return new B(e,r)}}let re=class g{constructor(e,r=null,a=null){if(this.type=O.Texture,this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,"context"in e)this._descriptor=e,a=r;else{const s=B.validate(e,r);if(!s)throw new E("Texture descriptor invalid");this._descriptor=s}this._descriptor.target===f.TEXTURE_CUBE_MAP?this._setDataCubeMap(a):this.setData(a)}get glName(){return this._glName}get descriptor(){return this._descriptor}get usedMemory(){return te(this._descriptor)}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._glName&&this._descriptor.context.instanceCounter.decrement(F.Texture,this),this._descriptor.context.gl&&this._glName&&(this._descriptor.context.unbindTexture(this),this._descriptor.context.gl.deleteTexture(this._glName),this._glName=null)}release(){this.dispose()}resize(e,r){const a=this._descriptor;if(a.width!==e||a.height!==r){if(this._wasImmutablyAllocated)throw new E("Immutable textures can't be resized!");a.width=e,a.height=r,this._descriptor.target===f.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(e=null){for(let r=f.TEXTURE_CUBE_MAP_POSITIVE_X;r<=f.TEXTURE_CUBE_MAP_NEGATIVE_Z;r++)this._setData(e,r)}setData(e){this._setData(e)}_setData(e,r){var u;const a=(u=this._descriptor.context)==null?void 0:u.gl;if(!a)return;N(a),this._glName||(this._glName=a.createTexture(),this._glName&&this._descriptor.context.instanceCounter.increment(F.Texture,this));const s=this._descriptor,c=r??s.target,_=b(c),n=this._descriptor.context.bindTexture(this,g.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(g.TEXTURE_UNIT_FOR_UPDATES),P(s),this._configurePixelStorage(),N(a);const o=this._deriveInternalFormat();if(v(e)){let l="width"in e?e.width:e.codedWidth,d="height"in e?e.height:e.codedHeight;const p=1;e instanceof HTMLVideoElement&&(l=e.videoWidth,d=e.videoHeight),s.width&&s.height,_&&s.depth,s.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(c,o,s.hasMipmap,l,d,p),this._texImage(c,0,o,l,d,p,e),N(a),s.hasMipmap&&(this.generateMipmap(),N(a)),s.width||(s.width=l),s.height||(s.height=d),_&&!s.depth&&(s.depth=p)}else{const{width:l,height:d,depth:p}=s;if(l==null||d==null)throw new E("Width and height must be specified!");if(_&&p==null)throw new E("Depth must be specified!");if(s.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(c,o,s.hasMipmap,l,d,p),U(e)){const m=e.levels,D=y(c,l,d,p),I=Math.min(D-1,m.length-1);a.texParameteri(s.target,this._descriptor.context.gl.TEXTURE_MAX_LEVEL,I);const A=o;if(!ae(A))throw new E("Attempting to use compressed data with an uncompressed format!");this._forEachMipmapLevel((S,w,V,$)=>{const W=m[Math.min(S,m.length-1)];this._compressedTexImage(c,S,A,w,V,$,W)},I)}else this._texImage(c,0,o,l,d,p,e),N(a),s.hasMipmap&&this.generateMipmap()}C(a,this._descriptor),L(a,this._descriptor),se(this._descriptor.context,this._descriptor),N(a),this._descriptor.context.bindTexture(n,g.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,r,a,s,c,_,n=0){_||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const o=this._descriptor,u=this._deriveInternalFormat(),{context:l,pixelFormat:d,dataType:p,target:m,isImmutable:D}=o;if(D&&!this._wasImmutablyAllocated)throw new E("Cannot update immutable texture before allocation!");const I=l.bindTexture(this,g.TEXTURE_UNIT_FOR_UPDATES,!0);(r<0||a<0||r+s>o.width||a+c>o.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:A}=l;n&&A.pixelStorei(A.UNPACK_SKIP_ROWS,n),v(_)?A.texSubImage2D(m,e,r,a,s,c,d,p,_):U(_)?A.compressedTexSubImage2D(m,e,r,a,s,c,u,_.levels[e]):A.texSubImage2D(m,e,r,a,s,c,d,p,_),n&&A.pixelStorei(A.UNPACK_SKIP_ROWS,0),l.bindTexture(I,g.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(e,r,a,s,c,_,n,o){o||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const u=this._descriptor,l=this._deriveInternalFormat(),{context:d,pixelFormat:p,dataType:m,isImmutable:D,target:I}=u;if(D&&!this._wasImmutablyAllocated)throw new E("Cannot update immutable texture before allocation!");b(I)||console.warn("Attempting to set 3D texture data on a non-3D texture");const A=d.bindTexture(this,g.TEXTURE_UNIT_FOR_UPDATES);d.setActiveTexture(g.TEXTURE_UNIT_FOR_UPDATES),(r<0||a<0||s<0||r+c>u.width||a+_>u.height||s+n>u.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:S}=d;if(U(o))o=o.levels[e],S.compressedTexSubImage3D(I,e,r,a,s,c,_,n,l,o);else{const w=o;S.texSubImage3D(I,e,r,a,s,c,_,n,p,m,w)}d.bindTexture(A,g.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;if(!e.hasMipmap){if(this._wasImmutablyAllocated)throw new E("Cannot add mipmaps to immutable texture after allocation");e.hasMipmap=!0,this._samplingModeDirty=!0,P(e)}e.samplingMode===T.LINEAR?(this._samplingModeDirty=!0,e.samplingMode=T.LINEAR_MIPMAP_NEAREST):e.samplingMode===T.NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=T.NEAREST_MIPMAP_NEAREST);const r=this._descriptor.context.bindTexture(this,g.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(g.TEXTURE_UNIT_FOR_UPDATES),this._descriptor.context.gl.generateMipmap(e.target),this._descriptor.context.bindTexture(r,g.TEXTURE_UNIT_FOR_UPDATES)}clearMipmap(){const e=this._descriptor;if(e.hasMipmap){if(this._wasImmutablyAllocated)throw new E("Cannot delete mipmaps to immutable texture after allocation");e.hasMipmap=!1,this._samplingModeDirty=!0,P(e)}e.samplingMode===T.LINEAR_MIPMAP_NEAREST?(this._samplingModeDirty=!0,e.samplingMode=T.LINEAR):e.samplingMode===T.NEAREST_MIPMAP_NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=T.NEAREST)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,P(this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._descriptor,r=e.context.gl;this._samplingModeDirty&&(C(r,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(L(r,e),this._wrapModeDirty=!1)}_deriveInternalFormat(){if(this._descriptor.internalFormat!=null)return this._descriptor.internalFormat===h.DEPTH_STENCIL&&(this._descriptor.internalFormat=h.DEPTH24_STENCIL8),this._descriptor.internalFormat;switch(this._descriptor.dataType){case G.FLOAT:switch(this._descriptor.pixelFormat){case h.RGBA:return this._descriptor.internalFormat=i.RGBA32F;case h.RGB:return this._descriptor.internalFormat=i.RGB32F;default:throw new E("Unable to derive format")}case G.UNSIGNED_BYTE:switch(this._descriptor.pixelFormat){case h.RGBA:return this._descriptor.internalFormat=i.RGBA8;case h.RGB:return this._descriptor.internalFormat=i.RGB8}}return this._descriptor.internalFormat=this._descriptor.pixelFormat===h.DEPTH_STENCIL?h.DEPTH24_STENCIL8:this._descriptor.pixelFormat}_configurePixelStorage(){const e=this._descriptor.context.gl,{unpackAlignment:r,flipped:a,preMultiplyAlpha:s}=this._descriptor;e.pixelStorei(e.UNPACK_ALIGNMENT,r),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s?1:0)}_texStorage(e,r,a,s,c,_){const{gl:n}=this._descriptor.context;if(!ie(r))throw new E("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const o=a?y(e,s,c,_):1;if(b(e)){if(_==null)throw new E("Missing depth dimension for 3D texture upload");n.texStorage3D(e,o,r,s,c,_)}else n.texStorage2D(e,o,r,s,c);this._wasImmutablyAllocated=!0}_texImage(e,r,a,s,c,_,n){const o=this._descriptor.context.gl,u=b(e),{isImmutable:l,pixelFormat:d,dataType:p}=this._descriptor;if(l){if(n!=null){const m=n;if(u){if(_==null)throw new E("Missing depth dimension for 3D texture upload");o.texSubImage3D(e,r,0,0,0,s,c,_,d,p,m)}else o.texSubImage2D(e,r,0,0,s,c,d,p,m)}}else{const m=n;if(u){if(_==null)throw new E("Missing depth dimension for 3D texture upload");o.texImage3D(e,r,a,s,c,_,0,d,p,m)}else o.texImage2D(e,r,a,s,c,0,d,p,m)}}_compressedTexImage(e,r,a,s,c,_,n){const o=this._descriptor.context.gl,u=b(e);if(this._descriptor.isImmutable){if(n!=null)if(u){if(_==null)throw new E("Missing depth dimension for 3D texture upload");o.compressedTexSubImage3D(e,r,0,0,0,s,c,_,a,n)}else o.compressedTexSubImage2D(e,r,0,0,s,c,a,n)}else if(u){if(_==null)throw new E("Missing depth dimension for 3D texture upload");o.compressedTexImage3D(e,r,a,s,c,_,0,n)}else o.compressedTexImage2D(e,r,a,s,c,0,n)}_forEachMipmapLevel(e,r=1/0){let{width:a,height:s,depth:c,hasMipmap:_,target:n}=this._descriptor;const o=n===f.TEXTURE_3D;if(a==null||s==null||o&&c==null)throw new E("Missing texture dimensions for mipmap calculation");for(let u=0;e(u,a,s,c),_&&(a!==1||s!==1||o&&c!==1)&&!(u>=r);++u)a=Math.max(1,a>>1),s=Math.max(1,s>>1),o&&(c=Math.max(1,c>>1))}};function P(t){(t.width!=null&&t.width<0||t.height!=null&&t.height<0||t.depth!=null&&t.depth<0)&&console.error("Negative dimension parameters are not allowed!")}function C(t,e){let r=e.samplingMode,a=e.samplingMode;r===T.LINEAR_MIPMAP_NEAREST||r===T.LINEAR_MIPMAP_LINEAR?(r=T.LINEAR,e.hasMipmap||(a=T.LINEAR)):r!==T.NEAREST_MIPMAP_NEAREST&&r!==T.NEAREST_MIPMAP_LINEAR||(r=T.NEAREST,e.hasMipmap||(a=T.NEAREST)),t.texParameteri(e.target,t.TEXTURE_MAG_FILTER,r),t.texParameteri(e.target,t.TEXTURE_MIN_FILTER,a)}function L(t,e){typeof e.wrapMode=="number"?(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode.t))}function se(t,e){const r=t.capabilities.textureFilterAnisotropic;r&&t.gl.texParameterf(e.target,r.TEXTURE_MAX_ANISOTROPY,e.maxAnisotropy??1)}function ie(t){return t in i}function ae(t){return t in R}function U(t){return t!=null&&"type"in t&&t.type==="compressed"}function ne(t){return t!=null&&"byteLength"in t}function v(t){return t!=null&&!U(t)&&!ne(t)}function b(t){return t===f.TEXTURE_3D||t===f.TEXTURE_2D_ARRAY}function y(t,e,r,a=1){let s=Math.max(e,r);return t===f.TEXTURE_3D&&(s=Math.max(s,a)),Math.round(Math.log(s)/Math.LN2)+1}re.TEXTURE_UNIT_FOR_UPDATES=0;export{_e as E,ue as _,Q as a,H as b,le as c,B as d,O as e,re as m,J as o,ee as p,Z as s,N as u};
//# sourceMappingURL=Texture-ByNBwYCf.js.map
