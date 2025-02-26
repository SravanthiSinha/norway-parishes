import{cW as f,cX as y}from"./index-DbNmBX4d.js";var p,a,u,l,m,n,o,i,r;(function(t){t[t.BACKGROUND=0]="BACKGROUND",t[t.FILL=1]="FILL",t[t.LINE=2]="LINE",t[t.SYMBOL=3]="SYMBOL",t[t.CIRCLE=4]="CIRCLE"})(p||(p={})),function(t){t[t.VISIBLE=0]="VISIBLE",t[t.NONE=1]="NONE"}(a||(a={})),function(t){t[t.POINT=0]="POINT",t[t.LINE=1]="LINE",t[t.LINE_CENTER=2]="LINE_CENTER"}(u||(u={})),function(t){t[t.MAP=0]="MAP",t[t.VIEWPORT=1]="VIEWPORT",t[t.AUTO=2]="AUTO"}(l||(l={})),function(t){t[t.AUTO=0]="AUTO",t[t.LEFT=1]="LEFT",t[t.CENTER=2]="CENTER",t[t.RIGHT=3]="RIGHT"}(m||(m={})),function(t){t[t.CENTER=0]="CENTER",t[t.LEFT=1]="LEFT",t[t.RIGHT=2]="RIGHT",t[t.TOP=3]="TOP",t[t.BOTTOM=4]="BOTTOM",t[t.TOP_LEFT=5]="TOP_LEFT",t[t.TOP_RIGHT=6]="TOP_RIGHT",t[t.BOTTOM_LEFT=7]="BOTTOM_LEFT",t[t.BOTTOM_RIGHT=8]="BOTTOM_RIGHT"}(n||(n={})),function(t){t[t.NONE=0]="NONE",t[t.UPPERCASE=1]="UPPERCASE",t[t.LOWERCASE=2]="LOWERCASE"}(o||(o={})),function(t){t[t.MAP=0]="MAP",t[t.VIEWPORT=1]="VIEWPORT"}(i||(i={})),function(t){t[t.HORIZONTAL=0]="HORIZONTAL",t[t.VERTICAL=1]="VERTICAL"}(r||(r={}));class e{}e.backgroundLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:a.VISIBLE}},e.fillLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:a.VISIBLE}},e.lineLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:a.VISIBLE},"line-cap":{type:"enum",values:["butt","round","square"],default:y.BUTT},"line-join":{type:"enum",values:["bevel","round","miter"],default:f.MITER},"line-miter-limit":{type:"number",default:2},"line-round-limit":{type:"number",default:1.05}},e.symbolLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:a.VISIBLE},"symbol-avoid-edges":{type:"boolean",default:!1},"symbol-placement":{type:"enum",values:["point","line","line-center"],default:u.POINT},"symbol-sort-key":{type:"number",default:-1},"symbol-spacing":{type:"number",minimum:1,default:250},"icon-allow-overlap":{type:"boolean",default:!1},"icon-anchor":{type:"enum",values:["center","left","right","top","bottom","top-left","top-right","bottom-left","bottom-right"],default:n.CENTER},"icon-ignore-placement":{type:"boolean",default:!1},"icon-image":{type:"string"},"icon-keep-upright":{type:"boolean",default:!1},"icon-offset":{type:"array",value:"number",length:2,default:[0,0]},"icon-optional":{type:"boolean",default:!1},"icon-padding":{type:"number",minimum:0,default:2},"icon-rotate":{type:"number",default:0},"icon-rotation-alignment":{type:"enum",values:["map","viewport","auto"],default:l.AUTO},"icon-size":{type:"number",minimum:0,default:1},"text-allow-overlap":{type:"boolean",default:!1},"text-anchor":{type:"enum",values:["center","left","right","top","bottom","top-left","top-right","bottom-left","bottom-right"],default:n.CENTER},"text-field":{type:"string"},"text-font":{type:"array",value:"string",default:["Open Sans Regular","Arial Unicode MS Regular"]},"text-ignore-placement":{type:"boolean",default:!1},"text-justify":{type:"enum",values:["auto","left","center","right"],default:m.CENTER},"text-keep-upright":{type:"boolean",default:!0},"text-letter-spacing":{type:"number",default:0},"text-line-height":{type:"number",default:1.2},"text-max-angle":{type:"number",minimum:0,default:45},"text-max-width":{type:"number",minimum:0,default:10},"text-offset":{type:"array",value:"number",length:2,default:[0,0]},"text-optional":{type:"boolean",default:!1},"text-padding":{type:"number",minimum:0,default:2},"text-rotate":{type:"number",default:0},"text-rotation-alignment":{type:"enum",values:["map","viewport","auto"],default:l.AUTO},"text-size":{type:"number",minimum:0,default:16},"text-transform":{type:"enum",values:["none","uppercase","lowercase"],default:o.NONE},"text-writing-mode":{type:"array",value:"enum",values:["horizontal","vertical"],default:[r.HORIZONTAL]}},e.circleLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:a.VISIBLE}},e.backgroundPaintDefinition={"background-color":{type:"color",default:[0,0,0,1]},"background-opacity":{type:"number",minimum:0,maximum:1,default:1},"background-pattern":{type:"string"}},e.fillPaintDefinition={"fill-antialias":{type:"boolean",default:!0},"fill-color":{type:"color",default:[0,0,0,1]},"fill-opacity":{type:"number",minimum:0,maximum:1,default:1},"fill-outline-color":{type:"color",default:[0,0,0,0]},"fill-pattern":{type:"string"},"fill-translate":{type:"array",value:"number",length:2,default:[0,0]},"fill-translate-anchor":{type:"enum",values:["map","viewport"],default:i.MAP}},e.linePaintDefinition={"line-blur":{type:"number",minimum:0,default:0},"line-color":{type:"color",default:[0,0,0,1]},"line-dasharray":{type:"array",value:"number",default:[]},"line-gap-width":{type:"number",minimum:0,default:0},"line-offset":{type:"number",default:0},"line-opacity":{type:"number",minimum:0,maximum:1,default:1},"line-pattern":{type:"string"},"line-translate":{type:"array",value:"number",length:2,default:[0,0]},"line-translate-anchor":{type:"enum",values:["map","viewport"],default:i.MAP},"line-width":{type:"number",minimum:0,default:1}},e.symbolPaintDefinition={"icon-color":{type:"color",default:[0,0,0,1]},"icon-halo-blur":{type:"number",minimum:0,default:0},"icon-halo-color":{type:"color",default:[0,0,0,0]},"icon-halo-width":{type:"number",minimum:0,default:0},"icon-opacity":{type:"number",minimum:0,maximum:1,default:1},"icon-translate":{type:"array",value:"number",length:2,default:[0,0]},"icon-translate-anchor":{type:"enum",values:["map","viewport"],default:i.MAP},"text-color":{type:"color",default:[0,0,0,1]},"text-halo-blur":{type:"number",minimum:0,default:0},"text-halo-color":{type:"color",default:[0,0,0,0]},"text-halo-width":{type:"number",minimum:0,default:0},"text-opacity":{type:"number",minimum:0,maximum:1,default:1},"text-translate":{type:"array",value:"number",length:2,default:[0,0]},"text-translate-anchor":{type:"enum",values:["map","viewport"],default:i.MAP}},e.rasterPaintDefinition={"raster-opacity":{type:"number",minimum:0,maximum:1,default:1},"raster-hue-rotate":{type:"number",default:0},"raster-brightness-min":{type:"number",minimum:0,maximum:1,default:0},"raster-brightness-max":{type:"number",minimum:0,maximum:1,default:1},"raster-saturation":{type:"number",minimum:-1,maximum:1,default:0},"raster-contrast":{type:"number",minimum:-1,maximum:1,default:0},"raster-fade-duration":{type:"number",minimum:0,default:300}},e.circlePaintDefinition={"circle-blur":{type:"number",minimum:0,default:0},"circle-color":{type:"color",default:[0,0,0,1]},"circle-opacity":{type:"number",minimum:0,maximum:1,default:1},"circle-radius":{type:"number",minimum:0,default:5},"circle-stroke-color":{type:"color",default:[0,0,0,1]},"circle-stroke-opacity":{type:"number",minimum:0,maximum:1,default:1},"circle-stroke-width":{type:"number",minimum:0,default:0},"circle-translate":{type:"array",value:"number",length:2,default:[0,0]},"circle-translate-anchor":{type:"enum",values:["map","viewport"],default:i.MAP}};export{p as a,e as f,a as i,l,n as m,u as n,o,r as p,i as r,m as u};
//# sourceMappingURL=StyleDefinition-C6D6ERIt.js.map
