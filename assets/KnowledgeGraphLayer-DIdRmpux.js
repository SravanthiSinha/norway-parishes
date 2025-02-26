import{ez as T,eA as _,ae as f,ao as S,al as D,z as L,I as b,bc as c,eT as v,s as g,eU as k,eM as A,eK as w,eN as E,eV as N,bk as C,eB as I,j as n,m as h,o as $,u as R,k as G}from"./index-U3f91iFJ.js";import{S as O}from"./MultiOriginJSONSupport-BnxMaCt1.js";import{n as U}from"./uuid-Cl5lrJ4c.js";import{u as m,c as M,E as j,F as z,R as F}from"./KnowledgeGraphSublayer-C0HLF7yr.js";import{l as P}from"./ArcGISService-BOnIblqi.js";import{e as K}from"./CustomParametersMixin-D9nXkT8t.js";import{b as x}from"./OperationalLayer-DKdcF5P4.js";import{j as H}from"./PortalLayer-aOZD8pzD.js";import{f as V}from"./RefreshableLayer-DD1M1W5P.js";import{y as B}from"./commonProperties-CwULv9TP.js";import{F as Y}from"./knowledgeGraphService-BgCMWhdn.js";import"./featureConversionUtils-B3uX_x-_.js";import"./Relationship-Bi3FkU4s.js";import"./FeatureStore-zGk6vKXh.js";import"./BoundsStore-C_2orwk_.js";import"./PooledRBush-BkzX_i2u.js";import"./quickselect-QQC62dOK.js";import"./timeSupport-BfwWgrYo.js";import"./optimizedFeatureQueryEngineAdapter-THDAhgDR.js";import"./QueryEngine-DIqp090-.js";import"./WhereClause-D5WSWvLe.js";import"./TimeOnly-Db3oTXfb.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./Scheduler-BY19n29i.js";import"./signal-Dw7NEpD8.js";import"./clientSideDefaults-D6hNtxj4.js";import"./capabilities-D6exRNM4.js";import"./fieldProperties-BLajaGmD.js";import"./FeatureEffectLayer-YA4vPst_.js";import"./FeatureEffect-CgJAlCDp.js";import"./FeatureReductionLayer-DSSLH_OP.js";import"./FeatureReductionSelection-L9TRPyTR.js";import"./featureLayerUtils-DdNzm-CS.js";import"./labelingInfo-CqSOJnwT.js";import"./labelUtils-CN6gVbmf.js";import"./MD5-C9MwAd2G.js";import"./OrderedLayer-C36WgMOq.js";import"./OrderByInfo-cgZrrpeQ.js";import"./TemporalLayer-DcVjH4NI.js";import"./TimeInfo-1o5IA5_-.js";import"./popupUtils-DpnLXvM9.js";import"./portalItemUtils-DiwbiVEJ.js";let o=class extends T(_(V(P(x(H(O(K(I)))))))){constructor(e){super(e),this._graphTypeLookup=new Map,this._namedTypesModified=!1,this.dataManager=null,this.definitionSetMap=null,this.knowledgeGraph=null,this.layers=new(f.ofType(m)),this.memberEntityTypes=null,this.memberRelationshipTypes=null,this.operationalLayerType="KnowledgeGraphLayer",this.sublayerIdsCache=new Map,this.tables=new(f.ofType(m)),this.type="knowledge-graph",this.url=null,this.addHandles(S(()=>this.layers.concat(this.tables),(t,i)=>this._handleSublayersChange(t,i),D))}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){try{await this.loadFromPortal({supportedTypes:["Knowledge Graph Layer"]},e)}catch(t){L(t)}await this._fetchMetadata(),await this._initializeLayerProperties(),this.loadLayerAssumingLocalCache(),await M(this)}async _fetchMetadata(){if(!this.url)throw new b("knowledge-graph:missing-url","KnowledgeGraphLayer must be created with a url");const e=await Y(this.url);this.knowledgeGraph=e,this._forEachGraphType(t=>{t.name&&this._graphTypeLookup.set(t.name,t)})}async _initializeLayerProperties(){this.originIdOf("inclusionModeDefinition")===c.USER?this._validateInclusionModeDefinition():await this._initializeInclusionModeDefinition(),this._setMemberTypes(),this.dataManager=new j({knowledgeGraph:this.knowledgeGraph,inclusionModeDefinition:this.inclusionModeDefinition})}async _initializeInclusionModeDefinition(){const e=this.definitionSetMap?await z(this.definitionSetMap,!0):{generateAllSublayers:!0,namedTypeDefinitions:new Map};[...this.layers.toArray(),...this.tables.toArray()].forEach(t=>{const i=this._graphTypeLookup.get(t.graphTypeName);i&&!e.namedTypeDefinitions.has(i.name)&&e.namedTypeDefinitions.set(i.name,{useAllData:!0})}),this.setAtOrigin("inclusionModeDefinition",e,v(this.originIdOf("definitionSetMap")))}_validateInclusionModeDefinition(){const{inclusionModeDefinition:e}=this;if(!e)return;const{namedTypeDefinitions:t}=e;if((t==null?void 0:t.size)>0)t.forEach((i,a)=>{const s=this._graphTypeLookup.get(a);if(!s)return g.getLogger(this).warn(`A named type, ${a}, was in the inclusion list that wasn't in the data model and will be removed`),void t.delete(a);s.type!=="relationship"&&s.type!=="entity"&&(g.getLogger(this).warn(`A named type, ${a}, was in the inclusion list that wasn't properly modeled and will be removed`),t.delete(a))});else if(!e.generateAllSublayers)throw new b("knowledge-graph:composite-layer-constructor","If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined")}_setMemberTypes(){var s,r;let e=[],t=[];const{inclusionModeDefinition:i}=this,a=i==null?void 0:i.namedTypeDefinitions;!i||i.generateAllSublayers?(e=((s=this.knowledgeGraph.dataModel)==null?void 0:s.entityTypes)??[],t=((r=this.knowledgeGraph.dataModel)==null?void 0:r.relationshipTypes)??[]):a&&a.size>0&&a.forEach((p,d)=>{const l=this._graphTypeLookup.get(d);switch(l==null?void 0:l.type){case"relationship":t.push(l);break;case"entity":e.push(l)}}),this.memberEntityTypes=e,this.memberRelationshipTypes=t}_forEachGraphType(e){var t,i;[...((t=this.knowledgeGraph.dataModel)==null?void 0:t.entityTypes)??[],...((i=this.knowledgeGraph.dataModel)==null?void 0:i.relationshipTypes)??[]].forEach(a=>{e(a)})}_refreshNamedTypes(){this._namedTypesModified=!0;for(const e of this.layers)e.emit("refresh",{dataChanged:!0});for(const e of this.tables)e.emit("refresh",{dataChanged:!0})}async _handleNewRecords(e){const t=[];this.dataManager.addToLayer(e);for(const i of e)this.sublayerIdsCache.has(i.typeName)||(this.sublayerIdsCache.set(i.typeName,new Set),t.push(i.typeName)),this.sublayerIdsCache.get(i.typeName).add(i.id);for(const i of t){const a=this._graphTypeLookup.get(i);a&&(this._addSublayer(a),a.type==="entity"?this.dataManager.entityTypeNames.add(i):this.dataManager.relationshipTypeNames.add(i),this.dataManager.sublayerCaches.set(i,new Map))}await M(this,t),this._refreshNamedTypes()}_createSublayers(e,t,i){e.forEach(a=>{const s=this._createSublayer(a);i(s)&&t.push(s),this._updateSublayerCaches(a)})}_addSublayer(e){const t=this._createSublayer(e);return t.geometryType?this.layers.push(t):this.tables.push(t),t}_createSublayer(e){return new m({objectType:e,parentCompositeLayer:this,graphType:e.type})}_updateSublayers(e,t){t.forEach(i=>{i.parentCompositeLayer=this;const a=e.find(s=>s.type===i.graphType&&s.name===i.graphTypeName);a&&(i.objectType=a,this._updateSublayerCaches(a))})}_updateSublayerCaches(e){const t=this.dataManager.sublayerCaches;t.has(e.name)||t.set(e.name,new Map)}_saveUrlAsNewResource(e,t,i,a){e[t]="<pending>",i.pendingOperations.push(q(this.inclusionModeDefinition).then(s=>{const r=J(a);e[t]=r.itemRelativeUrl,i.toAdd.push({resource:r,content:{type:"blob",blob:s},compress:!1,finish:p=>{this.definitionSetMap=p.url}})}))}_displaysAllRecords(e){for(const[,{useAllData:t}]of e.namedTypeDefinitions)if(!t)return!1;return!0}_handleSublayersChange(e,t){t&&(t.forEach(i=>{i.parent=null}),this.removeHandles("sublayers-owner")),e&&(e.forEach(i=>{i.parent=this}),this.addHandles([e.on("after-add",({item:i})=>{i.parent=this}),e.on("after-remove",({item:i})=>{i.parent=null})],"sublayers-owner"))}readDefinitionSetMap(e,t,i){return k(e,i)}writeDefinitionSetMap(e,t,i,a){const s=a==null?void 0:a.portalItem,r=a==null?void 0:a.resources,p=A(a==null?void 0:a.origin);if(!s||!r||p==null)return void(e&&(t[i]=w(e,a)));const{inclusionModeDefinition:d}=this;if(!d||this._displaysAllRecords(d))return void(this.definitionSetMap=null);const l=this.originIdOf("inclusionModeDefinition");if(l===c.USER||this._namedTypesModified||p<l)this._saveUrlAsNewResource(t,i,r,s);else if(p===l&&e){const u=w(e,a);E(u)?this._saveUrlAsNewResource(t,i,r,s):t[i]=u}}set inclusionModeDefinition(e){this.loadStatus!=="loaded"&&this.loadStatus!=="failed"?this._set("inclusionModeDefinition",e):g.getLogger(this).error("#inclusionModeDefinition","inclusionModeDefinition cannot be changed after the layer is loaded.")}loadLayerAssumingLocalCache(){var t,i;const e=[...this.memberEntityTypes,...this.memberRelationshipTypes];this.originIdOf("layers")===c.DEFAULTS?this._createSublayers(e,this.layers,a=>!!a.geometryType):this._updateSublayers(e,this.layers),this.originIdOf("tables")===c.DEFAULTS?this._createSublayers(e,this.tables,a=>!a.geometryType):this._updateSublayers(e,this.tables),(i=(t=this.dataManager.inclusionModeDefinition)==null?void 0:t.namedTypeDefinitions)==null||i.forEach((a,s)=>{var p;const r=N(this.sublayerIdsCache,s,()=>new Set);(p=a.members)==null||p.forEach(d=>{r.add(d.id)})})}async addRecords(e){await this._handleNewRecords(e)}async removeRecords(e){var i,a,s,r,p,d,l,u;const t=[];for(const y of e)((s=(a=(i=this.dataManager.inclusionModeDefinition)==null?void 0:i.namedTypeDefinitions)==null?void 0:a.get(y.typeName))==null?void 0:s.useAllData)===!1&&((l=(d=(p=(r=this.dataManager.inclusionModeDefinition)==null?void 0:r.namedTypeDefinitions)==null?void 0:p.get(y.typeName))==null?void 0:d.members)!=null&&l.has(y.id))&&t.push(y);this.dataManager.removeFromLayer(t);for(const y of t)(u=this.sublayerIdsCache.get(y.typeName))==null||u.delete(y.id);return this._refreshNamedTypes(),t}};n([h()],o.prototype,"dataManager",void 0),n([h({json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}})],o.prototype,"definitionSetMap",void 0),n([$("definitionSetMap")],o.prototype,"readDefinitionSetMap",null),n([R("definitionSetMap")],o.prototype,"writeDefinitionSetMap",null),n([h()],o.prototype,"inclusionModeDefinition",null),n([h()],o.prototype,"knowledgeGraph",void 0),n([h({type:f.ofType(m),json:{write:{ignoreOrigin:!0}}})],o.prototype,"layers",void 0),n([h()],o.prototype,"memberEntityTypes",void 0),n([h()],o.prototype,"memberRelationshipTypes",void 0),n([h({type:["KnowledgeGraphLayer"]})],o.prototype,"operationalLayerType",void 0),n([h()],o.prototype,"sublayerIdsCache",void 0),n([h({type:f.ofType(m),json:{write:{ignoreOrigin:!0}}})],o.prototype,"tables",void 0),n([h({json:{read:!1}})],o.prototype,"type",void 0),n([h(B)],o.prototype,"url",void 0),o=n([G("esri.layers.KnowledgeGraphLayer")],o);const je=o;async function q(e){const t=await F(e);return new Blob([t],{type:"application/x-protobuf"})}function J(e){const t=`definitionSetMap-${U()}.dat`,i=C("knowledgeGraphLayer",t);return e.resourceFromPath(i)}export{je as default};
//# sourceMappingURL=KnowledgeGraphLayer-DIdRmpux.js.map
