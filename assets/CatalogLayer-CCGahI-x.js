import{ez as w,ey as F,el as A,ae as R,ao as Q,hA as j,hB as D,ar as L,eU as P,j as r,m as i,eY as M,k as I,eF as c,gz as $,b5 as g,$ as G,gA as N,gB as Z,ba as k,eE as z,dz as J,z as K,I as f,aQ as H,bi as W,fk as h,U as Y,hC as X,G as x,N as V,S as ee}from"./index-CRM8otC0.js";import{S as O}from"./MultiOriginJSONSupport-BQj34yrO.js";import{s as te}from"./ReactiveMap-KqFN-1SA.js";import{r as re}from"./signal-B5brgr9U.js";import{d as _,f as q,T as ie,c as oe,p as ne,v as ae,j as se,l as le,u as pe}from"./commonProperties-CVCJh__S.js";import{a as de}from"./OrderByInfo-D8Hy1VNl.js";import{V as ye,B as ue}from"./FeatureLayerBase-C7N8lgEM.js";import{c as he}from"./FeatureEffectLayer-Boxfr7fp.js";import{C as ce,n as me}from"./labelingInfo-Cfav7Q56.js";import{p as fe}from"./popupUtils-B6aGFeDJ.js";import ge from"./FeatureLayerSource-BbtGTPId.js";import{i as be}from"./APIKeyMixin-Bu60mLpV.js";import{l as ve}from"./ArcGISService-CVuarsrB.js";import{e as we}from"./CustomParametersMixin-WTeJPSFy.js";import{F as Fe}from"./EditBusLayer-ukYAVUDj.js";import{b as Ie}from"./OperationalLayer-DPk4_eOU.js";import{p as Oe}from"./OrderedLayer-C-1Ykjxa.js";import{j as _e}from"./PortalLayer-BRe8QXCY.js";import{f as Te}from"./RefreshableLayer-CrE7xPAy.js";import{l as Se}from"./TemporalLayer-D82QiTcc.js";import{J as Ee,q as je,W as Le,R as $e}from"./featureLayerUtils-aO5fX27x.js";import{n as xe}from"./FeatureType-CL3E80Br.js";import{s as Ve}from"./fieldProperties-BLTppBuC.js";import{b as Ce}from"./fetchService-CqVz9gro.js";import{t as Re}from"./versionUtils-BdyHtpX_.js";import"./HeightModelInfo-Cqv1ovWQ.js";import"./LayerFloorInfo-MarFDT-Y.js";import"./Relationship-DpIUkaBv.js";import"./serviceCapabilitiesUtils-CQaLxabh.js";import"./FeatureEffect-Br-ucsls.js";import"./labelUtils-BQXJfBAl.js";import"./uuid-Cl5lrJ4c.js";import"./MeshLocalVertexSpace-BFFEs8cg.js";import"./meshVertexSpaceUtils-BEUkThyD.js";import"./vec32-rRhbC1zp.js";import"./External-BCZuKCeP.js";import"./infoFor3D-CxdEiWhp.js";import"./MeshTransform-BuT0RVos.js";import"./mat4f64-CSKppSlJ.js";import"./quat-jexIQZKa.js";import"./mat3f64-q3fE-ZOt.js";import"./quatf64-aQ5IuZRd.js";import"./editingSupport-oFOvQcK3.js";import"./clientSideDefaults-j_kj_95r.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./capabilities-Y9lFlGVh.js";import"./QueryTask-CQ8QbORd.js";import"./executeForIds-XEDzn-5X.js";import"./featureConversionUtils-Cs6pOiJO.js";import"./editsZScale-FDKnvsaP.js";import"./portalItemUtils-DVVTb5W5.js";import"./TimeInfo-DWkOMgYh.js";import"./FeatureTemplate-CEZmvHRq.js";let d=class extends w(F(O(c))){constructor(e){super(e),this._layerCache=new A(20,t=>t.destroy()),this._oidToReference=new te,this._layerToReference=new Map,this.legendEnabled=!0,this.layers=new R,this.maximumVisibleSublayers=10,this.opacity=1,this.parent=null,this.persistenceEnabled=!0,this.title="Layers in view",this.type="catalog-dynamic-group",this.visible=!0}initialize(){this.addHandles([this.layers.on("after-add",({item:e})=>{e.parent=this}),this.layers.on("after-remove",({item:e})=>{e.parent=null}),Q(()=>this._orderBy,()=>{this._updateLayerSortValues(),this._sortAllLayers()})])}load(e){return this.addResolvingPromise(this.parent.load()),Promise.resolve(this)}destroy(){this._layerCache.destroy(),this._oidToReference.clear(),this._layerToReference.clear()}get _orderBy(){var e;return this.parent?((e=this.parent.orderBy)==null?void 0:e.find(t=>!t.valueExpression&&t.field))??new de({field:this.parent.objectIdField}):null}get _referenceComparator(){const e=this._orderBy;if(!this.parent||!e)return()=>0;const t=this.parent.fieldsIndex.get(e.field),a=j(t==null?void 0:t.toJSON().type,e.order==="descending"),n=j("esriFieldTypeOID",e.order==="descending");return(l,p)=>a(p.sortValue,l.sortValue)||n(p.objectId,l.objectId)}get fullExtent(){var e;return((e=this.parent)==null?void 0:e.fullExtent)??null}get updating(){return D(this._oidToReference,({pending:e})=>e!=null)}acquireLayer(e){if(this.destroyed)return L();const t=this._getLayerReference(e);return t.count++,L(()=>{t.count--,t.count||this._destroyLayerReference(t)})}_getLayerReference(e){const t=e.getObjectId();return P(this._oidToReference,t,()=>{const a=e.getObjectId(),n=`${a}`,l=e.getAttribute(this.parent.itemSourceField),p=new Pe(e,a,l),y=this._layerCache.pop(n);return y?(this._addLayer(p,y),p):(p.pending=this.parent.createLayerFromFootprint(e).then(u=>{p.count?this._addLayer(p,u):(this.destroyed||this._layerCache.get(n)||this._layerCache.put(n,u),p.layer=null)}).catch(()=>{}).finally(()=>{p.pending=null}),p)})}_destroyLayerReference(e){e.layer&&(this._layerToReference.delete(e.layer),this.layers.remove(e.layer),this.destroyed?e.layer.destroy():this._layerCache.put(`${e.objectId}`,e.layer),e.layer=null),this._oidToReference.delete(e.objectId)}_addLayer(e,t){e.layer=t,t.persistenceEnabled=!1,this._layerToReference.set(t,e),this._updateLayerSortValue(e),this.layers.add(t),this._sortAllLayers()}_updateLayerSortValues(){for(const e of this._layerToReference.values())this._updateLayerSortValue(e)}_updateLayerSortValue(e){this._orderBy&&(e.sortValue=e.footprint.getAttribute(this._orderBy.field))}_sortAllLayers(){this.layers.sort((e,t)=>this._referenceComparator(this._layerToReference.get(e),this._layerToReference.get(t)))}};r([i()],d.prototype,"_orderBy",null),r([i({readOnly:!0})],d.prototype,"_referenceComparator",null),r([i(_)],d.prototype,"legendEnabled",void 0),r([i({type:["show","hide","hide-children"],json:{write:!0}})],d.prototype,"listMode",void 0),r([i({readOnly:!0})],d.prototype,"fullExtent",null),r([i({type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],d.prototype,"id",void 0),r([i({readOnly:!0})],d.prototype,"layers",void 0),r([i({type:M,range:{min:0,max:50},json:{write:!0,default:10}})],d.prototype,"maximumVisibleSublayers",void 0),r([i(q)],d.prototype,"opacity",void 0),r([i({clonable:!1})],d.prototype,"parent",void 0),r([i({type:String,nonNullable:!0,json:{write:{ignoreOrigin:!0,isRequired:!0}}})],d.prototype,"title",void 0),r([i({json:{read:!1}})],d.prototype,"type",void 0),r([i({readOnly:!0})],d.prototype,"updating",null),r([i({type:Boolean,json:{name:"visibility",write:!0}})],d.prototype,"visible",void 0),d=r([I("esri.layers.catalog.CatalogDynamicGroupLayer")],d);const B=d;class Pe{constructor(t,a,n){this.footprint=t,this.objectId=a,this.itemSource=n,this.count=0,this.layer=null,this.sortValue=void 0,this._pending=re(null)}get pending(){return this._pending.value}set pending(t){this._pending.value=t}}function qe(){const e=new z({style:"solid",color:[0,0,0,0],outline:{style:"solid",color:[96,96,96,.75],width:.75}});return new J({symbol:e})}let o=class extends w(he(F(O(c)))){constructor(e){super(e),this.attributeTableTemplate=null,this.charts=null,this.editingEnabled=!0,this.elevationInfo=null,this.formTemplate=null,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxScale=0,this.minScale=0,this.opacity=1,this.parent=null,this.persistenceEnabled=!0,this.popupEnabled=!0,this.popupTemplate=null,this.title="Footprints",this.type="catalog-footprint",this.visible=!0}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){await this.parent.load(e),$(this.renderer,this.fieldsIndex),this.addHandles([this.parent.on("apply-edits",t=>this.emit("apply-edits",t)),this.parent.on("edits",t=>this.emit("edits",t)),this.parent.on("refresh",t=>this.emit("refresh",t))])}get apiKey(){var e;return(e=this.parent)==null?void 0:e.apiKey}get capabilities(){var e;return(e=this.parent)==null?void 0:e.capabilities}get customParameters(){var e;return(e=this.parent)==null?void 0:e.customParameters}get dateFieldsTimeZone(){var e;return((e=this.parent)==null?void 0:e.dateFieldsTimeZone)??null}get datesInUnknownTimezone(){var e;return((e=this.parent)==null?void 0:e.datesInUnknownTimezone)??!1}get definitionExpression(){var e;return(e=this.parent)==null?void 0:e.definitionExpression}get editingInfo(){var e;return(e=this.parent)==null?void 0:e.editingInfo}get effectiveCapabilities(){var e;return(e=this.parent)==null?void 0:e.effectiveCapabilities}get createQueryVersion(){var e;return(e=this.parent)==null?void 0:e.createQueryVersion}get defaultPopupTemplate(){return this.createPopupTemplate()}get displayField(){var e;return(e=this.parent)==null?void 0:e.displayField}get effectiveEditingEnabled(){return!1}get fields(){var e;return(e=this.parent)==null?void 0:e.fields}get fieldsIndex(){var e;return(e=this.parent)==null?void 0:e.fieldsIndex}get fullExtent(){var e;return(e=this.parent)==null?void 0:e.fullExtent}get geometryFieldsInfo(){var e;return(e=this.parent)==null?void 0:e.geometryFieldsInfo}get geometryType(){var e;return(e=this.parent)==null?void 0:e.geometryType}get globalIdField(){var e;return(e=this.parent)==null?void 0:e.globalIdField}get hasM(){var e;return((e=this.parent)==null?void 0:e.hasM)??!1}get hasZ(){var e;return((e=this.parent)==null?void 0:e.hasZ)??!1}get objectIdField(){var e;return(e=this.parent)==null?void 0:e.objectIdField}get orderBy(){var e;return((e=this.parent)==null?void 0:e.orderBy)??null}get outFields(){var e;return(e=this.parent)==null?void 0:e.outFields}get parsedUrl(){var e;return((e=this.parent)==null?void 0:e.parsedUrl)??null}get preferredTimeZone(){var e;return((e=this.parent)==null?void 0:e.preferredTimeZone)??null}set renderer(e){$(e,this.fieldsIndex),this._set("renderer",e)}get renderer(){return this._isOverridden("renderer")?this._get("renderer"):qe()}get returnM(){var e;return(e=this.parent)==null?void 0:e.returnM}get returnZ(){var e;return(e=this.parent)==null?void 0:e.returnZ}get source(){var e;return(e=this.parent)==null?void 0:e.source}get timeExtent(){var e;return(e=this.parent)==null?void 0:e.timeExtent}get timeInfo(){var e;return(e=this.parent)==null?void 0:e.timeInfo}get timeOffset(){var e;return(e=this.parent)==null?void 0:e.timeOffset}get typeIdField(){var e;return(e=this.parent)==null?void 0:e.typeIdField}get types(){var e;return(e=this.parent)==null?void 0:e.types}get useViewTime(){var e;return((e=this.parent)==null?void 0:e.useViewTime)??!0}get version(){var e;return(e=this.parent)==null?void 0:e.version}async applyEdits(e,t){return await this.load(),this.parent.applyEdits(e,t)}createPopupTemplate(e){const t={fields:this.fields,objectIdField:this.objectIdField,title:this.title};return fe(t,e)}createQuery(){var e;return(e=this.parent)==null?void 0:e.createQuery()}getField(e){var t;return(t=this.parent)==null?void 0:t.getField(e)}getFieldDomain(e,t){var a;return(a=this.parent)==null?void 0:a.getFieldDomain(e,t)}async queryExtent(e,t){return await this.load(),this.parent.queryExtent(e,t)}async queryFeatures(e,t){return await this.load(),this.parent.queryFeatures(e,t)}async queryFeatureCount(e,t){return await this.load(),this.parent.queryFeatureCount(e,t)}async queryObjectIds(e,t){return await this.load(),this.parent.queryObjectIds(e,t)}};r([i(ie)],o.prototype,"attributeTableTemplate",void 0),r([i({readOnly:!0})],o.prototype,"apiKey",null),r([i({readOnly:!0})],o.prototype,"capabilities",null),r([i({readOnly:!0})],o.prototype,"customParameters",null),r([i()],o.prototype,"dateFieldsTimeZone",null),r([i({readOnly:!0})],o.prototype,"datesInUnknownTimezone",null),r([i({readOnly:!0})],o.prototype,"definitionExpression",null),r([i({readOnly:!0})],o.prototype,"editingInfo",null),r([i({readOnly:!0})],o.prototype,"effectiveCapabilities",null),r([i({json:{origins:{"web-scene":{write:!1}},write:!0}})],o.prototype,"charts",void 0),r([i({readOnly:!0})],o.prototype,"createQueryVersion",null),r([i({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),r([i()],o.prototype,"displayField",null),r([i({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"editingEnabled",void 0),r([i({readOnly:!0})],o.prototype,"effectiveEditingEnabled",null),r([i((()=>{const e=g(oe);return e.json.origins["web-map"]={read:!1,write:!1},e})())],o.prototype,"elevationInfo",void 0),r([i({readOnly:!0})],o.prototype,"fields",null),r([i({readOnly:!0})],o.prototype,"fieldsIndex",null),r([i({type:ye,json:{name:"formInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"formTemplate",void 0),r([i({readOnly:!0})],o.prototype,"fullExtent",null),r([i({readOnly:!0})],o.prototype,"geometryFieldsInfo",null),r([i({readOnly:!0})],o.prototype,"geometryType",null),r([i({readOnly:!0})],o.prototype,"globalIdField",null),r([i({readOnly:!0})],o.prototype,"hasM",null),r([i({readOnly:!0})],o.prototype,"hasZ",null),r([i({type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],o.prototype,"id",void 0),r([i({type:[ce],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:me,write:!0}})],o.prototype,"labelingInfo",void 0),r([i(ne)],o.prototype,"labelsVisible",void 0),r([i(_)],o.prototype,"legendEnabled",void 0),r([i({type:["show","hide"],json:{write:!0}})],o.prototype,"listMode",void 0),r([i((()=>{const e=g(ae);return e.json.origins.service.read=!1,e})())],o.prototype,"maxScale",void 0),r([i((()=>{const e=g(se);return e.json.origins.service.read=!1,e})())],o.prototype,"minScale",void 0),r([i({readOnly:!0})],o.prototype,"objectIdField",null),r([i(q)],o.prototype,"opacity",void 0),r([i({readOnly:!0})],o.prototype,"orderBy",null),r([i({readOnly:!0})],o.prototype,"outFields",null),r([i({clonable:!1})],o.prototype,"parent",void 0),r([i({readOnly:!0})],o.prototype,"parsedUrl",null),r([i(le)],o.prototype,"popupEnabled",void 0),r([i({type:G,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([i({readOnly:!0})],o.prototype,"preferredTimeZone",null),r([i({types:N,json:{origins:{"web-scene":{types:Z}},name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy(e,t){return{ignoreOrigin:this.originIdOf(t)<k.PORTAL_ITEM}}}}})],o.prototype,"renderer",null),r([i({readOnly:!0})],o.prototype,"returnM",null),r([i({readOnly:!0})],o.prototype,"returnZ",null),r([i({readOnly:!0})],o.prototype,"source",null),r([i({readOnly:!0})],o.prototype,"timeExtent",null),r([i({readOnly:!0})],o.prototype,"timeInfo",null),r([i({readOnly:!0})],o.prototype,"timeOffset",null),r([i({type:String,nonNullable:!0,json:{write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"title",void 0),r([i({json:{read:!1}})],o.prototype,"type",void 0),r([i({readOnly:!0})],o.prototype,"typeIdField",null),r([i({readOnly:!0})],o.prototype,"types",null),r([i({readOnly:!0})],o.prototype,"useViewTime",null),r([i({type:Boolean,json:{name:"visibility",write:!0}})],o.prototype,"visible",void 0),o=r([I("esri.layers.catalog.CatalogFootprintLayer")],o);const U=o,b=Ve();function Be(e){return typeof e=="object"&&e!=null&&"itemId"in e&&"portalUrl"in e}function Ue(e){return typeof e=="object"&&e!=null&&"url"in e}function Ae(e){if(e==null)return!0;const t=Object.keys(e);return!t.length||t.length===1&&t[0]==="id"}function C(e,t,a,n){const l=e.write({},n);Ae(l)||(t[a]=l)}let s=class extends ue(Fe(F(Oe(Se(w(Te(ve(Ie(_e(O(we(be(c))))))))))))){constructor(e){super(e),this.legendEnabled=!0,this._portals=new Map,this._layerToFootprint=new WeakMap,this.drawOrderField="cd_draworder",this.dynamicGroupLayer=new B({parent:this}),this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.floorInfo=null,this.footprintLayer=new U({parent:this}),this.itemNameField="cd_itemname",this.itemSourceField="cd_itemsource",this.itemTypeField="cd_itemtype",this.layers=new R([this.dynamicGroupLayer,this.footprintLayer]),this.maxScaleField="cd_maxscale",this.minScaleField="cd_minscale",this.orderBy=null,this.outFields=null,this.supportedSourceTypes=new Set(["Catalog Layer"]),this.source=new ge({layer:this,supportedSourceTypes:this.supportedSourceTypes}),this.type="catalog",this.typeIdField=null,this.types=null}load(e){const t=e!=null?e.signal:null,a=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(K).then(async()=>{const{url:n,source:l,portalItem:p}=this;if(!n)throw new f("catalog-layer:missing-url","Catalog layer must be created with a url");if(this.layerId==null){const u=await this._fetchFirstValidLayerId(t);if(u==null)throw new f("catalog-layer:missing-layerId","There is no Catalog Layer in the service",{service:n});this.layerId=u}await l.load({signal:t});const{sourceJSON:y}=l;y&&(this.sourceJSON=y,this.read(y,{origin:"service",portalItem:p,portal:p==null?void 0:p.portal,url:this.parsedUrl}))}).then(()=>{const n=[this.itemNameField,this.itemSourceField,this.itemTypeField,this.minScaleField,this.maxScaleField],l=n.filter(p=>!this.fieldsIndex.has(p));if(l.length)throw new f("catalog-layer:missing-fields","There are missing fields to operate properly",{requiredFields:n,missingFields:l})}).then(()=>Ee(this,"load",e));return this.addResolvingPromise(a),Promise.resolve(this)}destroy(){this.footprintLayer.destroy(),this.dynamicGroupLayer.destroy();for(const e of this._portals.values())e.destroy();this._portals.clear()}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities!=null&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return!1}get parsedUrl(){const e=H(this.url);return e!=null&&this.layerId!=null&&(e.path=W(e.path,this.layerId.toString())),e}async applyEdits(e,t){return je(this,e,t)}on(e,t){return super.on(e,t)}async createLayerFromFootprint(e){const t=await this._createLayer(e);return this._configureLayer(t,e),this._layerToFootprint.set(t,e),t}createFootprintFromLayer(e){var t;return(t=this._layerToFootprint.get(e))==null?void 0:t.clone()}createQuery(){var l;const e=new h,t=(l=this.capabilities)==null?void 0:l.query;e.returnGeometry=!0,t&&(e.compactGeometryEnabled=t.supportsCompactGeometry,e.defaultSpatialReferenceEnabled=t.supportsDefaultSpatialReference),e.outFields=["*"];const{timeOffset:a,timeExtent:n}=this;return e.timeExtent=a!=null&&n!=null?n.offset(-a.value,a.unit):n||null,e.where=this.definitionExpression||"1=1",e}getFeatureType(e){return Le(this.types,this.typeIdField,e)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var l;const a=t==null?void 0:t.feature,n=this.getFeatureType(a);if(n){const p=n.domains&&n.domains[e];if(p&&p.type!=="inherited")return p}return(l=this.getField(e))==null?void 0:l.domain}async hasDataChanged(){return $e(this)}async queryFeatures(e,t){const a=await this.load(),n=await a.source.queryFeatures(h.from(e)??a.createQuery(),t);if(n!=null&&n.features)for(const l of n.features)l.layer=l.sourceLayer=a.footprintLayer;return n}async queryObjectIds(e,t){return(await this.load()).source.queryObjectIds(h.from(e)??this.createQuery(),t)}async queryFeatureCount(e,t){return(await this.load()).source.queryFeatureCount(h.from(e)??this.createQuery(),t)}async queryExtent(e,t){return(await this.load()).source.queryExtent(h.from(e)??this.createQuery(),t)}serviceSupportsSpatialReference(e){return this.loaded&&Re(this,e)}read(e,t){if(super.read(e,t),e){const{footprintLayer:a,dynamicGroupLayer:n}=e;a&&this.footprintLayer.read(a,t),n&&this.dynamicGroupLayer.read(n,t)}}async _fetchFirstValidLayerId(e){var a;const{data:t}=await Y(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});if(Array.isArray(t==null?void 0:t.layers))return(a=t.layers.find(({type:n})=>this.supportedSourceTypes.has(n)))==null?void 0:a.id}async _createLayer(e){var n;const t=e.getAttribute(this.itemSourceField);if(!t)throw new f("catalog-layer:item-source-missing",`The footprint is missing the "${this.itemSourceField}" attribute`);const a=JSON.parse(t);if(Be(a)){const{itemId:l,portalUrl:p}=a,y=X(p),u=(n=this.portalItem)==null?void 0:n.portal,T=x.getDefault();let m,S=!0;u&&V(p,u.url)?m=u:V(p,T.url)?m=T:(m=P(this._portals,y,()=>new x({url:y})),S=!1);const E=await c.fromPortalItem(new ee({id:l,portal:m}));return S||await v(E),E}return Ue(a)?c.fromArcGISServerUrl({url:a.url}):new(await Ce.UnsupportedLayer())}_configureLayer(e,t){const a=t.getAttribute(this.itemNameField);a&&(e.title=a);const n=t.getAttribute(this.maxScaleField);n!=null&&"maxScale"in e&&(e.maxScale=n);const l=t.getAttribute(this.minScaleField);l!=null&&"minScale"in e&&(e.minScale=l)}};async function v(e){if("portalItem"in e&&e.portalItem){try{await e.load()}catch{}e.portalItem=null,e.type==="group"&&await Promise.allSettled([...e.layers.map(t=>v(t)),...e.tables.map(t=>v(t))])}}r([i(_)],s.prototype,"legendEnabled",void 0),r([i({readOnly:!0})],s.prototype,"createQueryVersion",null),r([i({readOnly:!0})],s.prototype,"drawOrderField",void 0),r([i({type:B,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:C}}})],s.prototype,"dynamicGroupLayer",void 0),r([i({readOnly:!0})],s.prototype,"editingEnabled",null),r([i({readOnly:!0})],s.prototype,"effectiveEditingEnabled",null),r([i({json:{origins:{"web-scene":{name:"layerDefinition.elevationInfo",read:!1,write:!1}}}})],s.prototype,"elevationInfo",void 0),r([i({...b.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],s.prototype,"fields",void 0),r([i(b.fieldsIndex)],s.prototype,"fieldsIndex",void 0),r([i({json:{origins:{"web-scene":{name:"layerDefinition.floorInfo",read:!1,write:!1}}}})],s.prototype,"floorInfo",void 0),r([i({type:U,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:C}}})],s.prototype,"footprintLayer",void 0),r([i(pe)],s.prototype,"id",void 0),r([i({readOnly:!0})],s.prototype,"itemNameField",void 0),r([i({readOnly:!0})],s.prototype,"itemSourceField",void 0),r([i({readOnly:!0})],s.prototype,"itemTypeField",void 0),r([i({readOnly:!0})],s.prototype,"layers",void 0),r([i({type:["show","hide","hide-children"]})],s.prototype,"listMode",void 0),r([i({readOnly:!0})],s.prototype,"maxScaleField",void 0),r([i({readOnly:!0})],s.prototype,"minScaleField",void 0),r([i({value:"CatalogLayer",type:["CatalogLayer"]})],s.prototype,"operationalLayerType",void 0),r([i({json:{origins:{"web-scene":{name:"layerDefinition.orderBy",write:!0,read:!0}}}})],s.prototype,"orderBy",void 0),r([i(b.outFields)],s.prototype,"outFields",void 0),r([i({readOnly:!0})],s.prototype,"parsedUrl",null),r([i({readOnly:!0})],s.prototype,"source",void 0),r([i({json:{read:!1}})],s.prototype,"type",void 0),r([i({type:String})],s.prototype,"typeIdField",void 0),r([i({type:[xe]})],s.prototype,"types",void 0),s=r([I("esri.layers.CatalogLayer")],s);const At=s;export{At as default};
//# sourceMappingURL=CatalogLayer-CCGahI-x.js.map
