import"./index-BvuY3ppR.js";class l{constructor(t){this.message=t}toString(){return`AssertException: ${this.message}`}}function h(e,t="Assertion"){if(!e){const a=new Error(t).stack;throw new l(`${t} at ${a}`)}}function m(e,t,a,f){let i,o=(a[0]-e[0])/t[0],s=(f[0]-e[0])/t[0];o>s&&(i=o,o=s,s=i);let n=(a[1]-e[1])/t[1],r=(f[1]-e[1])/t[1];if(n>r&&(i=n,n=r,r=i),o>r||n>s)return!1;n>o&&(o=n),r<s&&(s=r);let u=(a[2]-e[2])/t[2],c=(f[2]-e[2])/t[2];return u>c&&(i=u,u=c,c=i),!(o>c||u>s)&&(c<s&&(s=c),!(s<0))}export{m as i,h as s};
//# sourceMappingURL=Util-eL0Y6jbb.js.map
