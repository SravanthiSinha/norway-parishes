import{d1 as O,hs as V,v as z}from"./index-DDxdo46s.js";import{i as D,r as I,n as $}from"./TechniqueInstance-Dkdr27-O.js";import{e as g,N as E}from"./MapView-BhiOeVuN.js";import{T as c}from"./FeatureCommandQueue-DsUtyNL6.js";import{o as w,i as C,M as L,f as N,h as T}from"./mat3-UjmFUe2z.js";import{t as k}from"./vec2f32-BbH2jxlN.js";import{r as F}from"./vec3f32-nZdmKIgz.js";import{e as P}from"./Container-BZIICsSn.js";import{b as U}from"./LabelMetric-HbuRe2_q.js";import{E as v}from"./BufferObject-BicU-B5X.js";import{R as b,E as H,C as S,F as x}from"./enums-Dk3osxpS.js";import{o as W}from"./VertexArrayObject-C80GYk2U.js";let q=0;function h(f,e){return new D(I(q++),f,e)}const d={visualVariableColor:null,visualVariableOpacity:null,visualVariableSizeMinMaxValue:null,visualVariableSizeScaleStops:null,visualVariableSizeStops:null,visualVariableSizeUnitValue:null,visualVariableRotation:null,visualVariableSizeOutlineScaleStops:null};class j{constructor(){this.instances={fill:h(c.fill,{uniforms:d,optionalAttributes:{zoomRange:!0}}),marker:h(c.marker,{uniforms:d,optionalAttributes:{zoomRange:!0}}),line:h(c.line,{uniforms:d,optionalAttributes:{zoomRange:!0}}),text:h(c.text,{uniforms:d,optionalAttributes:{zoomRange:!0,referenceSymbol:!1,clipAngle:!1}}),complexFill:h(c.complexFill,{uniforms:d,optionalAttributes:{zoomRange:!0}}),texturedLine:h(c.texturedLine,{uniforms:d,optionalAttributes:{zoomRange:!0}}),animatedMarker:h(c.animatedMarker,{uniforms:d,optionalAttributes:{zoomRange:!0}})},this._instancesById=Object.values(this.instances).reduce((e,t)=>(e.set(t.instanceId,t),e),new Map)}getInstance(e){return this._instancesById.get(e)}}const G=Math.PI/180,Y=4;class J extends P{constructor(e){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=g(),this._localOrigin={x:0,y:0},this._getBounds=e}destroy(){this._vao&&(this._vao.dispose(),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=O(this._program)}doRender(e){const{context:t}=e,r=this._getBounds();if(r.length<1)return;this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(e),this._updateBufferData(t,r),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(b.ONE,b.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0);const s=this._program;t.bindVAO(this._vao),t.useProgram(s),s.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(H.LINES,8*r.length,S.UNSIGNED_INT,0),t.bindVAO()}_createTransforms(){return{displayViewScreenMat3:g()}}_createShaderProgram(e){if(this._program)return;const t=`precision highp float;
        uniform mat3 u_dvsMat3;

        attribute vec2 a_position;

        void main() {
          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);
          gl_Position = vec4(pos.xy, 0.0, 1.0);
        }`,r=`precision mediump float;
      void main() {
        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);
      }`;this._program=e.programCache.acquire(t,r,M().attributes)}_updateMatricesAndLocalOrigin(e){const{state:t}=e,{displayMat3:r,size:s,resolution:m,pixelRatio:o,rotation:a,viewpoint:i}=t,l=G*a,{x:n,y}=i.targetGeometry,R=V(n,t.spatialReference);this._localOrigin.x=R,this._localOrigin.y=y;const p=o*s[0],_=o*s[1],A=m*p,B=m*_,u=w(this._dvsMat3);C(u,u,r),L(u,u,k(p/2,_/2)),N(u,u,F(s[0]/A,-_/B,1)),T(u,u,-l)}_updateBufferData(e,t){const{x:r,y:s}=this._localOrigin,m=2*Y*t.length,o=new Float32Array(m),a=new Uint32Array(8*t.length);let i=0,l=0;for(const n of t)n&&(o[2*i]=n[0]-r,o[2*i+1]=n[1]-s,o[2*i+2]=n[0]-r,o[2*i+3]=n[3]-s,o[2*i+4]=n[2]-r,o[2*i+5]=n[3]-s,o[2*i+6]=n[2]-r,o[2*i+7]=n[1]-s,a[l]=i+0,a[l+1]=i+3,a[l+2]=i+3,a[l+3]=i+2,a[l+4]=i+2,a[l+5]=i+1,a[l+6]=i+1,a[l+7]=i+0,i+=4,l+=8);if(this._vertexBuffer?this._vertexBuffer.setData(o.buffer):this._vertexBuffer=v.createVertex(e,x.DYNAMIC_DRAW,o.buffer),this._indexBuffer?this._indexBuffer.setData(a):this._indexBuffer=v.createIndex(e,x.DYNAMIC_DRAW,a),!this._vao){const n=M();this._vao=new W(e,n.attributes,n.bufferLayouts,new Map([["geometry",this._vertexBuffer]]),this._indexBuffer)}}}const M=()=>U("bounds",{geometry:[{location:0,name:"a_position",count:2,type:S.FLOAT}]});class le extends ${constructor(e){super(e),this._instanceStore=new j,this.checkHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=z(this._boundsRenderer)}get instanceStore(){return this._instanceStore}enableRenderingBounds(e){this._boundsRenderer=new J(e),this.requestRender()}get hasHighlight(){return this.checkHighlight()}onTileData(e,t){e.onMessage(t),this.contains(e)||this.addChild(e),this.requestRender()}_renderChildren(e,t){e.selection=t;for(const r of this.children){if(!r.visible)continue;const s=r.getDisplayList(this._instanceStore,E.STRICT_ORDER);s==null||s.render(e)}}}export{le as i};
//# sourceMappingURL=AGraphicContainer-C3XkWJUx.js.map