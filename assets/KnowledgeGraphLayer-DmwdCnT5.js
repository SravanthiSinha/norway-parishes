import{ae as f,as as T,ap as _,z as S,I as b,ba as u,eP as D,s as g,eQ as L,eI as v,eG as w,eJ as E,eR as k,j as n,m as d,o as A,u as C,k as N,bx as I}from"./index-XUmwAfbD.js";import{S as R}from"./MultiOriginJSONSupport-TXhd9nAR.js";import{n as $}from"./uuid-Cl5lrJ4c.js";import{f as G}from"./Layer-B5mrXn3K.js";import{u as c,c as M,E as O,F as U,R as j}from"./KnowledgeGraphSublayer-991koLsP.js";import{l as F}from"./ArcGISService-CB8oOmIt.js";import{l as P}from"./BlendLayer-Q9TmnPKi.js";import{e as z}from"./CustomParametersMixin-NfSN27e-.js";import{b as x}from"./OperationalLayer-BeJ9mX3b.js";import{j as K}from"./PortalLayer-bO1XB4Ox.js";import{f as H}from"./RefreshableLayer-YgujgLRm.js";import{t as V}from"./ScaleRangeLayer-BxZFwKIw.js";import{y as B}from"./commonProperties-D13FKckC.js";import{F as J}from"./knowledgeGraphService-0Jex-9_S.js";import"./featureConversionUtils-Ca7zclSe.js";import"./GraphicsLayer-C7BcyeQz.js";import"./GraphicsCollection-CqRCPGob.js";import"./ElevationInfo-z6ZU5G2f.js";import"./Relationship-DMyM8v-P.js";import"./FeatureStore-BqBpf8PV.js";import"./BoundsStore-BpyK4lqj.js";import"./PooledRBush-CWsOyeyJ.js";import"./quickselect-QQC62dOK.js";import"./timeSupport-Cn_oQ_Lu.js";import"./optimizedFeatureQueryEngineAdapter-DiIDmDbv.js";import"./QueryEngine-jeGel9u4.js";import"./WhereClause-B8-nns-r.js";import"./TimeOnly-ut_l4niB.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./Scheduler-DwrhUjyT.js";import"./signal-Bf1SjXkK.js";import"./clientSideDefaults-BkajzCyd.js";import"./capabilities-Y9lFlGVh.js";import"./fieldProperties-DHA7YMWE.js";import"./FeatureEffectLayer-CaR4X2Bg.js";import"./FeatureEffect-C_BRmPW_.js";import"./jsonUtils-lTMEmXdL.js";import"./parser-CTvraIcx.js";import"./utils-CXJkEfDz.js";import"./FeatureReductionLayer-IbsAwH-k.js";import"./FeatureReductionSelection-CyX2kmVv.js";import"./featureLayerUtils-DUVMzVB1.js";import"./labelingInfo-B9KvZpaH.js";import"./labelUtils-BQ78aDcx.js";import"./MD5-C9MwAd2G.js";import"./OrderedLayer-DN--jf84.js";import"./OrderByInfo-DKQNrewq.js";import"./TemporalLayer-BphDWGgM.js";import"./TimeInfo-BDtP0myK.js";import"./popupUtils-BUO4PhcE.js";import"./portalItemUtils-EEgQYIkq.js";let o=class extends P(V(H(F(x(K(R(z(G)))))))){constructor(e){super(e),this._graphTypeLookup=new Map,this._namedTypesModified=!1,this.dataManager=null,this.definitionSetMap=null,this.knowledgeGraph=null,this.layers=new(f.ofType(c)),this.memberEntityTypes=null,this.memberRelationshipTypes=null,this.operationalLayerType="KnowledgeGraphLayer",this.sublayerIdsCache=new Map,this.tables=new(f.ofType(c)),this.type="knowledge-graph",this.url=null,this.addHandles(T(()=>this.layers.concat(this.tables),(t,i)=>this._handleSublayersChange(t,i),_))}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){try{await this.loadFromPortal({supportedTypes:["Knowledge Graph Layer"]},e)}catch(t){S(t)}await this._fetchMetadata(),await this._initializeLayerProperties(),this.loadLayerAssumingLocalCache(),await M(this)}async _fetchMetadata(){if(!this.url)throw new b("knowledge-graph:missing-url","KnowledgeGraphLayer must be created with a url");const e=await J(this.url);this.knowledgeGraph=e,this._forEachGraphType(t=>{t.name&&this._graphTypeLookup.set(t.name,t)})}async _initializeLayerProperties(){this.originIdOf("inclusionModeDefinition")===u.USER?this._validateInclusionModeDefinition():await this._initializeInclusionModeDefinition(),this._setMemberTypes(),this.dataManager=new O({knowledgeGraph:this.knowledgeGraph,inclusionModeDefinition:this.inclusionModeDefinition})}async _initializeInclusionModeDefinition(){const e=this.definitionSetMap?await U(this.definitionSetMap,!0):{generateAllSublayers:!0,namedTypeDefinitions:new Map};[...this.layers.toArray(),...this.tables.toArray()].forEach(t=>{const i=this._graphTypeLookup.get(t.graphTypeName);i&&!e.namedTypeDefinitions.has(i.name)&&e.namedTypeDefinitions.set(i.name,{useAllData:!0})}),this.setAtOrigin("inclusionModeDefinition",e,D(this.originIdOf("definitionSetMap")))}_validateInclusionModeDefinition(){const{inclusionModeDefinition:e}=this;if(!e)return;const{namedTypeDefinitions:t}=e;if((t==null?void 0:t.size)>0)t.forEach((i,a)=>{const s=this._graphTypeLookup.get(a);if(!s)return g.getLogger(this).warn(`A named type, ${a}, was in the inclusion list that wasn't in the data model and will be removed`),void t.delete(a);s.type!=="relationship"&&s.type!=="entity"&&(g.getLogger(this).warn(`A named type, ${a}, was in the inclusion list that wasn't properly modeled and will be removed`),t.delete(a))});else if(!e.generateAllSublayers)throw new b("knowledge-graph:composite-layer-constructor","If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined")}_setMemberTypes(){var s,r;let e=[],t=[];const{inclusionModeDefinition:i}=this,a=i==null?void 0:i.namedTypeDefinitions;!i||i.generateAllSublayers?(e=((s=this.knowledgeGraph.dataModel)==null?void 0:s.entityTypes)??[],t=((r=this.knowledgeGraph.dataModel)==null?void 0:r.relationshipTypes)??[]):a&&a.size>0&&a.forEach((p,l)=>{const h=this._graphTypeLookup.get(l);switch(h==null?void 0:h.type){case"relationship":t.push(h);break;case"entity":e.push(h)}}),this.memberEntityTypes=e,this.memberRelationshipTypes=t}_forEachGraphType(e){var t,i;[...((t=this.knowledgeGraph.dataModel)==null?void 0:t.entityTypes)??[],...((i=this.knowledgeGraph.dataModel)==null?void 0:i.relationshipTypes)??[]].forEach(a=>{e(a)})}_refreshNamedTypes(){this._namedTypesModified=!0;for(const e of this.layers)e.emit("refresh",{dataChanged:!0});for(const e of this.tables)e.emit("refresh",{dataChanged:!0})}async _handleNewRecords(e){const t=[];this.dataManager.addToLayer(e);for(const i of e)this.sublayerIdsCache.has(i.typeName)||(this.sublayerIdsCache.set(i.typeName,new Set),t.push(i.typeName)),this.sublayerIdsCache.get(i.typeName).add(i.id);for(const i of t){const a=this._graphTypeLookup.get(i);a&&(this._addSublayer(a),a.type==="entity"?this.dataManager.entityTypeNames.add(i):this.dataManager.relationshipTypeNames.add(i),this.dataManager.sublayerCaches.set(i,new Map))}await M(this,t),this._refreshNamedTypes()}_createSublayers(e,t,i){e.forEach(a=>{const s=this._createSublayer(a);i(s)&&t.push(s),this._updateSublayerCaches(a)})}_addSublayer(e){const t=this._createSublayer(e);return t.geometryType?this.layers.push(t):this.tables.push(t),t}_createSublayer(e){return new c({objectType:e,parentCompositeLayer:this,graphType:e.type})}_updateSublayers(e,t){t.forEach(i=>{i.parentCompositeLayer=this;const a=e.find(s=>s.type===i.graphType&&s.name===i.graphTypeName);a&&(i.objectType=a,this._updateSublayerCaches(a))})}_updateSublayerCaches(e){const t=this.dataManager.sublayerCaches;t.has(e.name)||t.set(e.name,new Map)}_saveUrlAsNewResource(e,t,i,a){e[t]="<pending>",i.pendingOperations.push(Q(this.inclusionModeDefinition).then(s=>{const r=Y(a);e[t]=r.itemRelativeUrl,i.toAdd.push({resource:r,content:{type:"blob",blob:s},compress:!1,finish:p=>{this.definitionSetMap=p.url}})}))}_displaysAllRecords(e){for(const[,{useAllData:t}]of e.namedTypeDefinitions)if(!t)return!1;return!0}_handleSublayersChange(e,t){t&&(t.forEach(i=>{i.parent=null}),this.removeHandles("sublayers-owner")),e&&(e.forEach(i=>{i.parent=this}),this.addHandles([e.on("after-add",({item:i})=>{i.parent=this}),e.on("after-remove",({item:i})=>{i.parent=null})],"sublayers-owner"))}readDefinitionSetMap(e,t,i){return L(e,i)}writeDefinitionSetMap(e,t,i,a){const s=a==null?void 0:a.portalItem,r=a==null?void 0:a.resources,p=v(a==null?void 0:a.origin);if(!s||!r||p==null)return void(e&&(t[i]=w(e,a)));const{inclusionModeDefinition:l}=this;if(!l||this._displaysAllRecords(l))return void(this.definitionSetMap=null);const h=this.originIdOf("inclusionModeDefinition");if(h===u.USER||this._namedTypesModified||p<h)this._saveUrlAsNewResource(t,i,r,s);else if(p===h&&e){const m=w(e,a);E(m)?this._saveUrlAsNewResource(t,i,r,s):t[i]=m}}set inclusionModeDefinition(e){this.loadStatus!=="loaded"&&this.loadStatus!=="failed"?this._set("inclusionModeDefinition",e):g.getLogger(this).error("#inclusionModeDefinition","inclusionModeDefinition cannot be changed after the layer is loaded.")}loadLayerAssumingLocalCache(){var t,i;const e=[...this.memberEntityTypes,...this.memberRelationshipTypes];this.originIdOf("layers")===u.DEFAULTS?this._createSublayers(e,this.layers,a=>!!a.geometryType):this._updateSublayers(e,this.layers),this.originIdOf("tables")===u.DEFAULTS?this._createSublayers(e,this.tables,a=>!a.geometryType):this._updateSublayers(e,this.tables),(i=(t=this.dataManager.inclusionModeDefinition)==null?void 0:t.namedTypeDefinitions)==null||i.forEach((a,s)=>{var p;const r=k(this.sublayerIdsCache,s,()=>new Set);(p=a.members)==null||p.forEach(l=>{r.add(l.id)})})}async addRecords(e){await this._handleNewRecords(e)}async removeRecords(e){var i,a,s,r,p,l,h,m;const t=[];for(const y of e)((s=(a=(i=this.dataManager.inclusionModeDefinition)==null?void 0:i.namedTypeDefinitions)==null?void 0:a.get(y.typeName))==null?void 0:s.useAllData)===!1&&((h=(l=(p=(r=this.dataManager.inclusionModeDefinition)==null?void 0:r.namedTypeDefinitions)==null?void 0:p.get(y.typeName))==null?void 0:l.members)!=null&&h.has(y.id))&&t.push(y);this.dataManager.removeFromLayer(t);for(const y of t)(m=this.sublayerIdsCache.get(y.typeName))==null||m.delete(y.id);return this._refreshNamedTypes(),t}};n([d()],o.prototype,"dataManager",void 0),n([d({json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}})],o.prototype,"definitionSetMap",void 0),n([A("definitionSetMap")],o.prototype,"readDefinitionSetMap",null),n([C("definitionSetMap")],o.prototype,"writeDefinitionSetMap",null),n([d()],o.prototype,"inclusionModeDefinition",null),n([d()],o.prototype,"knowledgeGraph",void 0),n([d({type:f.ofType(c),json:{write:{ignoreOrigin:!0}}})],o.prototype,"layers",void 0),n([d()],o.prototype,"memberEntityTypes",void 0),n([d()],o.prototype,"memberRelationshipTypes",void 0),n([d({type:["KnowledgeGraphLayer"]})],o.prototype,"operationalLayerType",void 0),n([d()],o.prototype,"sublayerIdsCache",void 0),n([d({type:f.ofType(c),json:{write:{ignoreOrigin:!0}}})],o.prototype,"tables",void 0),n([d({json:{read:!1}})],o.prototype,"type",void 0),n([d(B)],o.prototype,"url",void 0),o=n([N("esri.layers.KnowledgeGraphLayer")],o);const Je=o;async function Q(e){const t=await j(e);return new Blob([t],{type:"application/x-protobuf"})}function Y(e){const t=`definitionSetMap-${$()}.dat`,i=I("knowledgeGraphLayer",t);return e.resourceFromPath(i)}export{Je as default};
//# sourceMappingURL=KnowledgeGraphLayer-DmwdCnT5.js.map