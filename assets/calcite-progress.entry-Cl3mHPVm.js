import{r as a,h as e,C as n,g as s}from"./index-Du44_A8J.js";import{g as o}from"./dom-b6dedd88-CVzP8t2l.js";import"./guid-9c230b6a-BxSjQh8J.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const l=":host{position:relative;display:block;inline-size:100%}.track,.bar{position:absolute;inset-block-start:0px;block-size:2px}.track{z-index:var(--calcite-z-index);inline-size:100%;overflow:hidden;background-color:var(--calcite-progress-background-color, var(--calcite-color-border-3))}.bar{z-index:var(--calcite-z-index);background-color:var(--calcite-progress-fill-color, var(--calcite-color-brand))}@media (forced-colors: active){.track{background-color:highlightText}.bar{background-color:linkText}}.indeterminate{inline-size:20%;animation:looping-progress-bar-ani calc(var(--calcite-internal-animation-timing-medium) / var(--calcite-internal-duration-factor) * 11 / var(--calcite-internal-duration-factor)) linear infinite}.indeterminate.calcite--rtl{animation-name:looping-progress-bar-ani-rtl}.reversed{animation-direction:reverse}.text{padding-inline:0px;padding-block:1rem 0px;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-progress-text-color, var(--calcite-color-text-2))}@keyframes looping-progress-bar-ani{0%{transform:translate3d(-100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(600%, 0, 0)}}@keyframes looping-progress-bar-ani-rtl{0%{transform:translate3d(100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(-600%, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}",c=l,d=class{constructor(t){a(this,t),this.type="determinate",this.value=0,this.label=void 0,this.text=void 0,this.reversed=!1}render(){const r=this.type==="determinate"?{width:`${this.value*100}%`}:{},i=o(this.el);return e("div",{key:"92597fefec948e4494425db28cd87bfad3cc76f8","aria-label":this.label||this.text,"aria-valuemax":1,"aria-valuemin":0,"aria-valuenow":this.value,role:"progressbar"},e("div",{key:"d2a8ec085909b4bd35f443d0e831d645fb159317",class:"track"},e("div",{key:"2dd26e56a0f344d02f1b4068167f61d9da4d2cbd",class:{bar:!0,indeterminate:this.type==="indeterminate",[n.rtl]:i==="rtl",reversed:this.reversed},style:r})),this.text?e("div",{class:"text"},this.text):null)}get el(){return s(this)}};d.style=c;export{d as calcite_progress};
//# sourceMappingURL=calcite-progress.entry-Cl3mHPVm.js.map
