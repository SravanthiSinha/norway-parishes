const L=9999999e31,S=2e-7,V={u1:[0,1],u2:[0,3],u4:[0,15],u8:[0,255],s8:[-128,127],u16:[0,65535],s16:[-32768,32767],u32:[0,4294967295],s32:[-2147483648,2147483647],f32:[-34028234663852886e22,34028234663852886e22],f64:[-Number.MAX_VALUE,Number.MAX_VALUE],unknown:void 0,c64:void 0,c128:void 0};function k(t){return V[t]??[-34028234663852886e22,34028234663852886e22]}function P(t,s){return t==null||s==null?"s32":t<0?t>=-128&&s<128?"s8":t>=-32768&&s<32768?"s16":"s32":s<256?"u8":s<65536?"u16":"u32"}function v(t){return((t==null?void 0:t.startsWith("s"))||(t==null?void 0:t.startsWith("u")))??!1}function U(t,s,e,l){let[i,o]=k(e);const n=v(e);return n&&(i-=1e-5,o+=1e-5),n?e.startsWith("u")?y(t,s,l,[i,o]):I(t,s,l,[i,o]):O(t,s,l,[i,o])}function W(t,s){for(let e=0;e<s.length;e++)s[e]&&isNaN(t[e])&&(s[e]=0,t[e]=0)}function y(t,s,e,l){const[i,o]=l;for(let n=0;n<s.length;n++)if(s[n]){const u=t[n];u<i||u>o?s[n]=0:e[n]=u+.5|0}}function I(t,s,e,l){const[i,o]=l;for(let n=0;n<s.length;n++)if(s[n]){const u=t[n];u<i||u>o?s[n]=0:e[n]=u+(u>0?.5:-.5)|0}}function O(t,s,e,l){const[i,o]=l;for(let n=0;n<s.length;n++)if(s[n]){const u=t[n];u<i||u>o?s[n]=0:e[n]=u}}function w(t,s,e){var N,g;if(t.depthCount&&t.depthCount>1)return;const{pixels:l,statistics:i,pixelType:o}=t,n=l[0].length,u=t.bandMasks??[],m=t.mask??new Uint8Array(n).fill(255),x=o==="f32"||o==="f64",p=k(o);let d=!1;for(let f=0;f<l.length;f++){const a=typeof s=="number"?s:s[f];if(a==null)continue;const A=((N=i==null?void 0:i[f])==null?void 0:N.minValue)??p[0],E=((g=i==null?void 0:i[f])==null?void 0:g.maxValue)??p[1];if(A>a+Number.EPSILON||E<a-Number.EPSILON)continue;const b=u[f]||m.slice(),h=l[f],M=e==null?void 0:e.customFloatTolerance;if(x&&M!==0){let c=M;c||(c=Math.abs(a)>=L?S*Math.abs(a):o==="f32"?2**-23:Number.EPSILON);for(let r=0;r<h.length;r++)b[r]&&Math.abs(h[r]-a)<c&&(h[r]=0,b[r]=0,m[r]=0,d=!0)}else for(let c=0;c<h.length;c++)b[c]&&h[c]===a&&(h[c]=0,b[c]=0,m[c]=0,d=!0);u[f]=b}d&&(t.bandMasks=t.bandMasks||t.pixels.length>1?u:null,t.mask=m),d&&"updateStatistics"in t&&t.updateStatistics()}export{w as a,U as i,W as l,v as o,k as s,P as u};
//# sourceMappingURL=pixelRangeUtils-DHjFxYEg.js.map