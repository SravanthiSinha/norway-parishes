import{ae as f,as as T,ap as _,z as S,I as b,ba as u,eP as D,s as g,eQ as L,eI as v,eG as w,eJ as E,eR as k,j as n,m as d,o as A,u as C,k as N,bx as I}from"./index-Bs-G_wsu.js";import{S as R}from"./MultiOriginJSONSupport-BBxe_F7T.js";import{n as $}from"./uuid-Cl5lrJ4c.js";import{f as G}from"./Layer-BD5fEEcE.js";import{u as c,c as M,E as O,F as U,R as j}from"./KnowledgeGraphSublayer-CxroiA4c.js";import{l as F}from"./ArcGISService-Dhi-DofJ.js";import{l as P}from"./BlendLayer-BeHYTX5Y.js";import{e as z}from"./CustomParametersMixin-Y8anAD7D.js";import{b as x}from"./OperationalLayer-okMj1Nle.js";import{j as K}from"./PortalLayer-DHH3dWZi.js";import{f as H}from"./RefreshableLayer-BAKri3Ps.js";import{t as V}from"./ScaleRangeLayer-DoKtR3vt.js";import{y as B}from"./commonProperties-D2JZeGzF.js";import{F as J}from"./knowledgeGraphService-Ce9P5RXK.js";import"./featureConversionUtils-ei0M_jjf.js";import"./GraphicsLayer-9_2aFqyC.js";import"./GraphicsCollection-BPX1FENo.js";import"./ElevationInfo-Ogo5JfE3.js";import"./Relationship-DvkaYox8.js";import"./FeatureStore-Bax8y5RB.js";import"./BoundsStore-DfeI_NWz.js";import"./PooledRBush-DSVhiw0F.js";import"./quickselect-QQC62dOK.js";import"./timeSupport-BJfDK5BJ.js";import"./optimizedFeatureQueryEngineAdapter-BEwK06Os.js";import"./QueryEngine-syVkeXtR.js";import"./WhereClause-7a-e-G47.js";import"./TimeOnly-57yuO3Wy.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./Scheduler-Y5S3bHF4.js";import"./signal-C7Z0zfYm.js";import"./clientSideDefaults-CWkks-vM.js";import"./capabilities-Y9lFlGVh.js";import"./fieldProperties-CwoNl49C.js";import"./FeatureEffectLayer-CFhteKe0.js";import"./FeatureEffect-27mWUEtN.js";import"./jsonUtils-qHdUfL9L.js";import"./parser-DP7rDSW3.js";import"./utils-DzB8n6BG.js";import"./FeatureReductionLayer-C4ahZQSV.js";import"./FeatureReductionSelection-QQOJQw4A.js";import"./featureLayerUtils-B9lP5GlN.js";import"./labelingInfo-Qff1pGsE.js";import"./labelUtils-BPgYl1Yw.js";import"./MD5-C9MwAd2G.js";import"./OrderedLayer-BJsCVehV.js";import"./OrderByInfo-Dttd1GVs.js";import"./TemporalLayer-Byau-JSW.js";import"./TimeInfo-BCZiCiBo.js";import"./popupUtils-Cu6PoQ9J.js";import"./portalItemUtils-DwiXoV8_.js";let o=class extends P(V(H(F(x(K(R(z(G)))))))){constructor(e){super(e),this._graphTypeLookup=new Map,this._namedTypesModified=!1,this.dataManager=null,this.definitionSetMap=null,this.knowledgeGraph=null,this.layers=new(f.ofType(c)),this.memberEntityTypes=null,this.memberRelationshipTypes=null,this.operationalLayerType="KnowledgeGraphLayer",this.sublayerIdsCache=new Map,this.tables=new(f.ofType(c)),this.type="knowledge-graph",this.url=null,this.addHandles(T(()=>this.layers.concat(this.tables),(t,i)=>this._handleSublayersChange(t,i),_))}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){try{await this.loadFromPortal({supportedTypes:["Knowledge Graph Layer"]},e)}catch(t){S(t)}await this._fetchMetadata(),await this._initializeLayerProperties(),this.loadLayerAssumingLocalCache(),await M(this)}async _fetchMetadata(){if(!this.url)throw new b("knowledge-graph:missing-url","KnowledgeGraphLayer must be created with a url");const e=await J(this.url);this.knowledgeGraph=e,this._forEachGraphType(t=>{t.name&&this._graphTypeLookup.set(t.name,t)})}async _initializeLayerProperties(){this.originIdOf("inclusionModeDefinition")===u.USER?this._validateInclusionModeDefinition():await this._initializeInclusionModeDefinition(),this._setMemberTypes(),this.dataManager=new O({knowledgeGraph:this.knowledgeGraph,inclusionModeDefinition:this.inclusionModeDefinition})}async _initializeInclusionModeDefinition(){const e=this.definitionSetMap?await U(this.definitionSetMap,!0):{generateAllSublayers:!0,namedTypeDefinitions:new Map};[...this.layers.toArray(),...this.tables.toArray()].forEach(t=>{const i=this._graphTypeLookup.get(t.graphTypeName);i&&!e.namedTypeDefinitions.has(i.name)&&e.namedTypeDefinitions.set(i.name,{useAllData:!0})}),this.setAtOrigin("inclusionModeDefinition",e,D(this.originIdOf("definitionSetMap")))}_validateInclusionModeDefinition(){const{inclusionModeDefinition:e}=this;if(!e)return;const{namedTypeDefinitions:t}=e;if((t==null?void 0:t.size)>0)t.forEach((i,a)=>{const s=this._graphTypeLookup.get(a);if(!s)return g.getLogger(this).warn(`A named type, ${a}, was in the inclusion list that wasn't in the data model and will be removed`),void t.delete(a);s.type!=="relationship"&&s.type!=="entity"&&(g.getLogger(this).warn(`A named type, ${a}, was in the inclusion list that wasn't properly modeled and will be removed`),t.delete(a))});else if(!e.generateAllSublayers)throw new b("knowledge-graph:composite-layer-constructor","If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined")}_setMemberTypes(){var s,r;let e=[],t=[];const{inclusionModeDefinition:i}=this,a=i==null?void 0:i.namedTypeDefinitions;!i||i.generateAllSublayers?(e=((s=this.knowledgeGraph.dataModel)==null?void 0:s.entityTypes)??[],t=((r=this.knowledgeGraph.dataModel)==null?void 0:r.relationshipTypes)??[]):a&&a.size>0&&a.forEach((p,l)=>{const h=this._graphTypeLookup.get(l);switch(h==null?void 0:h.type){case"relationship":t.push(h);break;case"entity":e.push(h)}}),this.memberEntityTypes=e,this.memberRelationshipTypes=t}_forEachGraphType(e){var t,i;[...((t=this.knowledgeGraph.dataModel)==null?void 0:t.entityTypes)??[],...((i=this.knowledgeGraph.dataModel)==null?void 0:i.relationshipTypes)??[]].forEach(a=>{e(a)})}_refreshNamedTypes(){this._namedTypesModified=!0;for(const e of this.layers)e.emit("refresh",{dataChanged:!0});for(const e of this.tables)e.emit("refresh",{dataChanged:!0})}async _handleNewRecords(e){const t=[];this.dataManager.addToLayer(e);for(const i of e)this.sublayerIdsCache.has(i.typeName)||(this.sublayerIdsCache.set(i.typeName,new Set),t.push(i.typeName)),this.sublayerIdsCache.get(i.typeName).add(i.id);for(const i of t){const a=this._graphTypeLookup.get(i);a&&(this._addSublayer(a),a.type==="entity"?this.dataManager.entityTypeNames.add(i):this.dataManager.relationshipTypeNames.add(i),this.dataManager.sublayerCaches.set(i,new Map))}await M(this,t),this._refreshNamedTypes()}_createSublayers(e,t,i){e.forEach(a=>{const s=this._createSublayer(a);i(s)&&t.push(s),this._updateSublayerCaches(a)})}_addSublayer(e){const t=this._createSublayer(e);return t.geometryType?this.layers.push(t):this.tables.push(t),t}_createSublayer(e){return new c({objectType:e,parentCompositeLayer:this,graphType:e.type})}_updateSublayers(e,t){t.forEach(i=>{i.parentCompositeLayer=this;const a=e.find(s=>s.type===i.graphType&&s.name===i.graphTypeName);a&&(i.objectType=a,this._updateSublayerCaches(a))})}_updateSublayerCaches(e){const t=this.dataManager.sublayerCaches;t.has(e.name)||t.set(e.name,new Map)}_saveUrlAsNewResource(e,t,i,a){e[t]="<pending>",i.pendingOperations.push(Q(this.inclusionModeDefinition).then(s=>{const r=Y(a);e[t]=r.itemRelativeUrl,i.toAdd.push({resource:r,content:{type:"blob",blob:s},compress:!1,finish:p=>{this.definitionSetMap=p.url}})}))}_displaysAllRecords(e){for(const[,{useAllData:t}]of e.namedTypeDefinitions)if(!t)return!1;return!0}_handleSublayersChange(e,t){t&&(t.forEach(i=>{i.parent=null}),this.removeHandles("sublayers-owner")),e&&(e.forEach(i=>{i.parent=this}),this.addHandles([e.on("after-add",({item:i})=>{i.parent=this}),e.on("after-remove",({item:i})=>{i.parent=null})],"sublayers-owner"))}readDefinitionSetMap(e,t,i){return L(e,i)}writeDefinitionSetMap(e,t,i,a){const s=a==null?void 0:a.portalItem,r=a==null?void 0:a.resources,p=v(a==null?void 0:a.origin);if(!s||!r||p==null)return void(e&&(t[i]=w(e,a)));const{inclusionModeDefinition:l}=this;if(!l||this._displaysAllRecords(l))return void(this.definitionSetMap=null);const h=this.originIdOf("inclusionModeDefinition");if(h===u.USER||this._namedTypesModified||p<h)this._saveUrlAsNewResource(t,i,r,s);else if(p===h&&e){const m=w(e,a);E(m)?this._saveUrlAsNewResource(t,i,r,s):t[i]=m}}set inclusionModeDefinition(e){this.loadStatus!=="loaded"&&this.loadStatus!=="failed"?this._set("inclusionModeDefinition",e):g.getLogger(this).error("#inclusionModeDefinition","inclusionModeDefinition cannot be changed after the layer is loaded.")}loadLayerAssumingLocalCache(){var t,i;const e=[...this.memberEntityTypes,...this.memberRelationshipTypes];this.originIdOf("layers")===u.DEFAULTS?this._createSublayers(e,this.layers,a=>!!a.geometryType):this._updateSublayers(e,this.layers),this.originIdOf("tables")===u.DEFAULTS?this._createSublayers(e,this.tables,a=>!a.geometryType):this._updateSublayers(e,this.tables),(i=(t=this.dataManager.inclusionModeDefinition)==null?void 0:t.namedTypeDefinitions)==null||i.forEach((a,s)=>{var p;const r=k(this.sublayerIdsCache,s,()=>new Set);(p=a.members)==null||p.forEach(l=>{r.add(l.id)})})}async addRecords(e){await this._handleNewRecords(e)}async removeRecords(e){var i,a,s,r,p,l,h,m;const t=[];for(const y of e)((s=(a=(i=this.dataManager.inclusionModeDefinition)==null?void 0:i.namedTypeDefinitions)==null?void 0:a.get(y.typeName))==null?void 0:s.useAllData)===!1&&((h=(l=(p=(r=this.dataManager.inclusionModeDefinition)==null?void 0:r.namedTypeDefinitions)==null?void 0:p.get(y.typeName))==null?void 0:l.members)!=null&&h.has(y.id))&&t.push(y);this.dataManager.removeFromLayer(t);for(const y of t)(m=this.sublayerIdsCache.get(y.typeName))==null||m.delete(y.id);return this._refreshNamedTypes(),t}};n([d()],o.prototype,"dataManager",void 0),n([d({json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}})],o.prototype,"definitionSetMap",void 0),n([A("definitionSetMap")],o.prototype,"readDefinitionSetMap",null),n([C("definitionSetMap")],o.prototype,"writeDefinitionSetMap",null),n([d()],o.prototype,"inclusionModeDefinition",null),n([d()],o.prototype,"knowledgeGraph",void 0),n([d({type:f.ofType(c),json:{write:{ignoreOrigin:!0}}})],o.prototype,"layers",void 0),n([d()],o.prototype,"memberEntityTypes",void 0),n([d()],o.prototype,"memberRelationshipTypes",void 0),n([d({type:["KnowledgeGraphLayer"]})],o.prototype,"operationalLayerType",void 0),n([d()],o.prototype,"sublayerIdsCache",void 0),n([d({type:f.ofType(c),json:{write:{ignoreOrigin:!0}}})],o.prototype,"tables",void 0),n([d({json:{read:!1}})],o.prototype,"type",void 0),n([d(B)],o.prototype,"url",void 0),o=n([N("esri.layers.KnowledgeGraphLayer")],o);const Je=o;async function Q(e){const t=await j(e);return new Blob([t],{type:"application/x-protobuf"})}function Y(e){const t=`definitionSetMap-${$()}.dat`,i=I("knowledgeGraphLayer",t);return e.resourceFromPath(i)}export{Je as default};
