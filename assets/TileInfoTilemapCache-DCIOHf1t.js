import{bj as s,I as h,x as r}from"./index-BLU2cKnj.js";class f{constructor(i,e=0,l=i.lods[i.lods.length-1].level){this.tileInfo=i,this.minLOD=e,this.maxLOD=l,i.lodAt(e)||(this.minLOD=i.lods[0].level),i.lodAt(l)||(this.maxLOD=i.lods[i.lods.length-1].level)}get effectiveMinLOD(){return this.minLOD??this.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.tileInfo.lods[this.tileInfo.lods.length-1].level}getAvailability(i,e,l){var a;const t=(a=this.tileInfo)==null?void 0:a.lodAt(i);return!t||i<this.minLOD||i>this.maxLOD?"unavailable":t.cols&&t.rows?l>=t.cols[0]&&l<=t.cols[1]&&e>=t.rows[0]&&e<=t.rows[1]?"unknown":"unavailable":"unknown"}async fetchAvailability(i,e,l,t){await s(t);const a=this.getAvailability(i,e,l);if(a==="unavailable")throw new h("tile-map:tile-unavailable","Tile is not available",{level:i,row:e,col:l});return a}async fetchAvailabilityUpsample(i,e,l,t,a){await s(a),t.level=i,t.row=e,t.col=l;const n=this.tileInfo;return n.updateTileInfo(t),this.fetchAvailability(i,e,l,a).catch(o=>{if(r(o))throw o;if(n.upsampleTile(t))return this.fetchAvailabilityUpsample(t.level,t.row,t.col,t,a);throw o})}}export{f as e};
//# sourceMappingURL=TileInfoTilemapCache-DCIOHf1t.js.map
