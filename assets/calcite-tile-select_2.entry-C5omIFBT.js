import{r as u,c as y,h as n,g as h}from"./index-D2fbPmv2.js";import{g as x}from"./guid-9c230b6a-BxSjQh8J.js";import{u as p,I as b}from"./interactive-1a42577a-q2XeVP2J.js";import{c as v,s as w,a as C}from"./loadable-13e9ffb2-FT_pyice.js";import{l as g}from"./logger-d56ad214-BlRloLQ8.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const i={checked:"checked",description:"description",descriptionOnly:"description-only",disabled:"disabled",heading:"heading",headingOnly:"heading-only",icon:"icon",iconOnly:"icon-only",inputAlignmentEnd:"input-alignment-end",inputAlignmentStart:"input-alignment-start",inputEnabled:"input-enabled",largeVisual:"large-visual",tile:"tile",tileContentContainer:"tile-content-container",tileContent:"tile-content",tileDescription:"tile-description",tileHeading:"tile-heading",tileLargeVisual:"tile--large-visual",widthAuto:"width-auto",widthFull:"width-full"},z=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host .container{background-color:var(--calcite-color-foreground-1);box-shadow:0 0 0 1px var(--calcite-color-border-2);box-sizing:border-box;cursor:pointer;display:inline-block;block-size:100%;max-inline-size:300px;padding:0.75rem;position:relative;vertical-align:top;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host .container.checked{z-index:var(--calcite-z-index);box-shadow:0 0 0 1px var(--calcite-color-brand)}:host .container.heading-only{align-items:center}:host .container:not(.input-enabled) ::slotted(calcite-checkbox),:host .container:not(.input-enabled) ::slotted(calcite-radio-button){position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host .container.focused{outline-color:transparent}:host .container.focused:not(.disabled):not(.input-enabled){outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          );outline-offset:-4px;box-shadow:0 0 0 1px var(--calcite-color-brand), inset 0 0 0 2px var(--calcite-color-foreground-1)}:host .container.input-enabled.input-alignment-start.width-auto.heading-only,:host .container.input-enabled.input-alignment-start.width-auto.icon-only,:host .container.input-enabled.input-alignment-start.width-auto.description-only,:host .container.input-enabled.input-alignment-start.width-auto.heading.description,:host .container.input-enabled.input-alignment-start.width-auto.icon.description,:host .container.input-enabled.input-alignment-start.width-auto.heading.icon.description{display:inline-grid;grid-template-columns:max-content 1fr}:host .container.input-enabled.input-alignment-start.heading-only,:host .container.input-enabled.input-alignment-start.icon-only,:host .container.input-enabled.input-alignment-start.description-only,:host .container.input-enabled.input-alignment-start.heading.description,:host .container.input-enabled.input-alignment-start.icon.description,:host .container.input-enabled.input-alignment-start.heading.icon.description{gap:0.75rem}:host .container.input-enabled.input-alignment-start .tile{order:1}:host .container.input-enabled.input-alignment-start.large-visual ::slotted(calcite-checkbox),:host .container.input-enabled.input-alignment-start.large-visual ::slotted(calcite-radio-button){position:absolute;inset-block-start:0.75rem;inset-inline-start:0.75rem}:host .container.input-enabled.input-alignment-end.width-auto.heading-only,:host .container.input-enabled.input-alignment-end.width-auto.icon-only{display:inline-grid;grid-gap:0.75rem;grid-template-columns:max-content 1fr}:host .container.input-enabled.input-alignment-end.heading-only,:host .container.input-enabled.input-alignment-end.icon-only{gap:0.75rem}:host .container.input-enabled.input-alignment-end.description-only ::slotted(calcite-checkbox),:host .container.input-enabled.input-alignment-end.description-only ::slotted(calcite-radio-button),:host .container.input-enabled.input-alignment-end.heading.description ::slotted(calcite-checkbox),:host .container.input-enabled.input-alignment-end.heading.description ::slotted(calcite-radio-button),:host .container.input-enabled.input-alignment-end.icon.description ::slotted(calcite-checkbox),:host .container.input-enabled.input-alignment-end.icon.description ::slotted(calcite-radio-button),:host .container.input-enabled.input-alignment-end.heading.icon.description ::slotted(calcite-checkbox),:host .container.input-enabled.input-alignment-end.heading.icon.description ::slotted(calcite-radio-button){position:absolute;inset-block-start:0.75rem;inset-inline-end:0.75rem}:host .container.input-enabled.input-alignment-end.large-visual ::slotted(calcite-checkbox),:host .container.input-enabled.input-alignment-end.large-visual ::slotted(calcite-radio-button){position:absolute;inset-block-start:0.75rem;inset-inline-end:0.75rem}:host .container.width-full{display:flex;max-inline-size:none}:host .container.width-full .tile{flex:1 1 auto}.tile{pointer-events:none;box-sizing:border-box;display:flex;-webkit-user-select:none;user-select:none;flex-direction:column;gap:0.5rem;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.tile-content-container{display:flex;inline-size:100%;align-items:stretch;padding:0px;color:var(--calcite-color-text-2);outline-color:transparent}.tile-content{display:flex;flex:1 1 auto;flex-direction:column;gap:0.5rem;inline-size:10%}.tile-heading{pointer-events:none;overflow-wrap:break-word;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.tile-description{pointer-events:none;overflow-wrap:break-word;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-color-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.tile--large-visual{display:grid;justify-content:center;text-align:center;min-block-size:12rem}.tile--large-visual .icon{align-self:flex-end}.tile--large-visual calcite-icon{block-size:64px;inline-size:64px}.tile--large-visual .tile-content-container{align-self:center}:host(:hover) .container:not(.input-enabled){box-shadow:0 0 0 1px var(--calcite-color-brand)}:host(:hover) .tile-heading,.checked .tile-heading{color:var(--calcite-color-text-1)}:host(:hover) .tile-description,.checked .tile-description{color:var(--calcite-color-text-2)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`,S=z;g.deprecated("component",{name:"tile-select",removalVersion:4,suggested:["tile","tile-group"]});const B=class{constructor(e){u(this,e),this.calciteTileSelectChange=y(this,"calciteTileSelectChange",6),this.guid=`calcite-tile-select-${x()}`,this.checked=!1,this.description=void 0,this.disabled=!1,this.heading=void 0,this.icon=void 0,this.iconFlipRtl=!1,this.name=void 0,this.inputEnabled=!1,this.inputAlignment="start",this.type="radio",this.value=void 0,this.width="auto",this.focused=!1}checkedChanged(e){this.input.checked=e}nameChanged(e){this.input.name=e}async setFocus(){var e;return await v(this),(e=this.input)==null?void 0:e.setFocus()}checkboxChangeHandler(e){const t=e.target;t===this.input&&(this.checked=t.checked),e.stopPropagation(),this.calciteTileSelectChange.emit()}checkboxFocusBlurHandler(e){e.target===this.input&&(this.focused=e.detail),e.stopPropagation()}radioButtonChangeHandler(e){const t=e.target;t===this.input&&(this.checked=t.checked),e.stopPropagation(),this.calciteTileSelectChange.emit()}radioButtonCheckedChangeHandler(e){const t=e.target;t===this.input&&(this.checked=t.checked),e.stopPropagation()}radioButtonFocusBlurHandler(e){const t=e.target;t===this.input&&(this.focused=t.focused),e.stopPropagation()}clickHandler(e){if(this.disabled)return;const t=e.target;["calcite-tile","calcite-tile-select"].includes(t.localName)&&this.input.click()}pointerEnterHandler(){if(this.disabled)return;const{localName:e}=this.input;(e==="calcite-radio-button"||e==="calcite-checkbox")&&(this.input.hovered=!0)}pointerLeaveHandler(){if(this.disabled)return;const{localName:e}=this.input;(e==="calcite-radio-button"||e==="calcite-checkbox")&&(this.input.hovered=!1)}connectedCallback(){this.renderInput()}componentWillLoad(){w(this)}componentDidLoad(){C(this)}disconnectedCallback(){this.input.parentNode.removeChild(this.input)}componentDidRender(){p(this)}renderInput(){this.input=this.type==="radio"?document.createElement("calcite-radio-button"):document.createElement("calcite-checkbox"),this.input.checked=this.checked,this.input.disabled=this.disabled,this.input.hidden=this.el.hidden,this.input.id=this.guid,this.input.label=this.heading||this.name||"",this.name&&(this.input.name=this.name),this.value&&(this.input.value=this.value!=null?this.value.toString():""),this.el.insertAdjacentElement("beforeend",this.input)}render(){const{checked:e,description:t,disabled:l,focused:m,heading:o,icon:a,inputAlignment:c,inputEnabled:f,width:s,iconFlipRtl:k}=this,d=o&&a&&!t,r=!!a;return n(b,{key:"b4fb6d82534b03b51abeb0837e82f0eebf03e882",disabled:l},n("div",{key:"b600dccfa114222d765c7937e0a01646c59ef5e9",class:{checked:e,container:!0,[i.description]:!!t,[i.descriptionOnly]:!!(!o&&!a&&t),disabled:l,focused:m,[i.heading]:!!o,[i.headingOnly]:o&&!a&&!t,[i.icon]:r,[i.iconOnly]:!o&&a&&!t,[i.inputAlignmentEnd]:c==="end",[i.inputAlignmentStart]:c==="start",[i.inputEnabled]:f,[i.largeVisual]:d,[i.widthAuto]:s==="auto",[i.widthFull]:s==="full"}},n("div",{key:"3beecb159a117c775e541fd658e7a3b8426c10c7",class:{[i.tile]:!0,[i.tileLargeVisual]:d}},a&&n("div",{key:"b1be68fded421b3196c0ab1af79f64df378a8def",class:{[i.icon]:r}},n("calcite-icon",{key:"515fb12c5d3d436fcf41f0029a79f2a613d4c36d",flipRtl:k,icon:a,scale:"l"})),n("div",{key:"b1e4da0dcdf03bcd4690664e95bd83231af5d4a7",class:i.tileContentContainer},n("div",{key:"439d258883fb6223b36fca919bdeb4eb5a586286",class:i.tileContent},o&&n("div",{key:"84292dd16f68a95f562cfc0cfc8a8f33e922f5bd",class:i.tileHeading},o),t&&n("div",{key:"7d6eb7bb116c6f98656348cca96efa1b446347ee",class:i.tileDescription},t)))),n("slot",{key:"2fe8ada0d56e69984b02b47bb08e5b66d551ae47"})))}get el(){return h(this)}static get watchers(){return{checked:["checkedChanged"],name:["nameChanged"]}}};B.style=S;const E=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-wrap:wrap}:host ::slotted(calcite-tile-select){margin-block-end:1px;margin-inline-end:1px}:host([layout=vertical]){flex-direction:column}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}",H=E;g.deprecated("component",{name:"tile-select-group",removalVersion:4,suggested:["tile","tile-group"]});const A=class{constructor(e){u(this,e),this.disabled=!1,this.layout="horizontal"}componentDidRender(){p(this)}render(){return n(b,{key:"7ecdf608b21ec8854addcb9138e2540af1fb90f5",disabled:this.disabled},n("slot",{key:"67187ad6c8e5dd195cd2e905cfc78810b7566343"}))}get el(){return h(this)}};A.style=H;export{B as calcite_tile_select,A as calcite_tile_select_group};
//# sourceMappingURL=calcite-tile-select_2.entry-C5omIFBT.js.map
