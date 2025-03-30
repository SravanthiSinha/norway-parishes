import{V as h,X as C,q as v}from"./index-BMHxxDIj.js";function t(e,s,r){return!!m(e,s,r)}function l(e,s,r){return m(e,s,r)}function m(e,s,r){return e&&e.hasOwnProperty(s)?e[s]:r}const A={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function S(e){var r;const s=(r=e==null?void 0:e.supportedSpatialAggregationStatistics)==null?void 0:r.map(p=>p.toLowerCase());return{envelope:!!(s!=null&&s.includes("envelopeaggregate")),centroid:!!(s!=null&&s.includes("centroidaggregate")),convexHull:!!(s!=null&&s.includes("convexhullaggregate"))}}function c(e,s){var p;const r=(p=e==null?void 0:e.supportedOperationsWithCacheHint)==null?void 0:p.map(o=>o.toLowerCase());return!!(r!=null&&r.includes(s.toLowerCase()))}function Q(e){var r;const s=(r=e==null?void 0:e.supportedStatisticTypes)==null?void 0:r.map(p=>p.toLowerCase());return{count:!!(s!=null&&s.includes("count")),sum:!!(s!=null&&s.includes("sum")),min:!!(s!=null&&s.includes("min")),max:!!(s!=null&&s.includes("max")),avg:!!(s!=null&&s.includes("avg")),var:!!(s!=null&&s.includes("var")),stddev:!!(s!=null&&s.includes("stddev")),percentileContinuous:!!(s!=null&&s.includes("percentile_continuous")),percentileDiscrete:!!(s!=null&&s.includes("percentile_discrete")),envelope:!!(s!=null&&s.includes("envelopeaggregate")),centroid:!!(s!=null&&s.includes("centroidaggregate")),convexHull:!!(s!=null&&s.includes("convexhullaggregate"))}}function q(e,s){return{analytics:x(e),attachment:R(e),data:F(e),metadata:B(e),operations:T(e.capabilities,e,s),query:D(e,s),queryBins:M(e),queryRelated:E(e),queryTopFeatures:w(e),editing:b(e)}}function x(e){return{supportsCacheHint:c(e.advancedQueryCapabilities,"queryAnalytics")}}function R(e){const s=e.attachmentProperties,r={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:c(e.advancedQueryCapabilities,"queryAttachments"),supportsResize:t(e,"supportsAttachmentsResizing",!1)};return s&&Array.isArray(s)&&s.forEach(p=>{const o=A[p.name];o&&(r[o]=!!p.isEnabled)}),r}function F(e){return{isVersioned:t(e,"isDataVersioned",!1),isBranchVersioned:t(e,"isDataBranchVersioned",!1),supportsAttachment:t(e,"hasAttachments",!1),supportsM:t(e,"hasM",!1),supportsZ:t(e,"hasZ",!1)}}function B(e){return{supportsAdvancedFieldProperties:t(e,"supportsFieldDescriptionProperty",!1)}}function T(e,s,r){const p=e?e.toLowerCase().split(",").map(g=>g.trim()):[],o=r?v(r):null,y=p.includes(o!=null&&o.serverType==="MapServer"?"data":"query"),a=p.includes("editing")&&!s.datesInUnknownTimezone;let u=a&&p.includes("create"),n=a&&p.includes("delete"),i=a&&p.includes("update");const f=p.includes("changetracking"),d=s.advancedQueryCapabilities;return a&&!(u||n||i)&&(u=n=i=!0),{supportsCalculate:t(s,"supportsCalculate",!1),supportsTruncate:t(s,"supportsTruncate",!1),supportsValidateSql:t(s,"supportsValidateSql",!1),supportsAdd:u,supportsDelete:n,supportsEditing:a,supportsChangeTracking:f,supportsQuery:y,supportsQueryAnalytics:t(d,"supportsQueryAnalytic",!1),supportsQueryAttachments:t(d,"supportsQueryAttachments",!1),supportsQueryBins:t(d,"supportsQueryBins",!1),supportsQueryTopFeatures:t(d,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:t(s,"supportsAttachmentsResizing",!1),supportsSync:p.includes("sync"),supportsUpdate:i,supportsExceedsLimitStatistics:t(s,"supportsExceedsLimitStatistics",!1),supportsAsyncConvert3D:t(s,"supportsAsyncConvert3D",!1)}}function D(e,s){const r=e.advancedQueryCapabilities,p=e.ownershipBasedAccessControlForFeatures,o=e.archivingInfo,y=e.currentVersion,a=s==null?void 0:s.includes("MapServer"),u=!a||y>=h("mapserver-pbf-version-support"),n=C(s),i=new Set((e.supportedQueryFormats??"").split(",").map(f=>f.toLowerCase().trim()));return{maxRecordCount:l(e,"maxRecordCount",void 0),maxRecordCountFactor:l(e,"maxRecordCountFactor",void 0),standardMaxRecordCount:l(e,"standardMaxRecordCount",void 0),supportedSpatialAggregationStatistics:S(r),supportsCacheHint:t(r,"supportsQueryWithCacheHint",!1)||c(r,"query"),supportsCentroid:t(r,"supportsReturningGeometryCentroid",!1),supportsCompactGeometry:n,supportsDefaultSpatialReference:t(r,"supportsDefaultSR",!1),supportsDisjointSpatialRelationship:t(r,"supportsDisjointSpatialRel",!1),supportsDistance:t(r,"supportsQueryWithDistance",!1),supportsDistinct:t(r,"supportsDistinct",e.supportsAdvancedQueries),supportsExtent:t(r,"supportsReturningQueryExtent",!1),supportsFormatPBF:u&&i.has("pbf"),supportsFullTextSearch:t(r,"supportsFullTextSearch",!1),supportsGeometryProperties:t(r,"supportsReturningGeometryProperties",!1),supportsHavingClause:t(r,"supportsHavingClause",!1),supportsHistoricMoment:t(o,"supportsQueryWithHistoricMoment",!1),supportsMaxRecordCountFactor:t(r,"supportsMaxRecordCountFactor",!1),supportsOrderBy:t(r,"supportsOrderBy",e.supportsAdvancedQueries),supportsPagination:t(r,"supportsPagination",!1),supportsPercentileStatistics:t(r,"supportsPercentileStatistics",!1),supportsQuantization:t(e,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:t(e,"supportsQuantizationEditMode",!1),supportsQueryByAnonymous:t(p,"allowAnonymousToQuery",!0),supportsQueryByOthers:t(p,"allowOthersToQuery",!0),supportsQueryGeometry:t(e,"supportsReturningQueryGeometry",!1),supportsResultType:t(r,"supportsQueryWithResultType",!1),supportsSpatialAggregationStatistics:t(r,"supportsSpatialAggregationStatistics",!1),supportsSqlExpression:t(r,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:t(e,"useStandardizedQueries",!1),supportsStatistics:t(r,"supportsStatistics",e.supportsStatistics),supportsTopFeaturesQuery:t(r,"supportsTopFeaturesQuery",!1),tileMaxRecordCount:l(e,"tileMaxRecordCount",void 0)}}function E(e){const s=e.advancedQueryCapabilities,r=t(s,"supportsAdvancedQueryRelated",!1);return{supportsPagination:t(s,"supportsQueryRelatedPagination",!1),supportsCount:r,supportsOrderBy:r,supportsCacheHint:c(s,"queryRelated")}}function w(e){return{supportsCacheHint:c(e.advancedQueryCapabilities,"queryTopFilter")}}function M(e){const s=e?e.queryBinsCapabilities:void 0;return{supportsDate:t(s,"supportsDateBin",!1),supportsFixedInterval:t(s,"supportsFixedIntervalBin",!1),supportsAutoInterval:t(s,"supportsAutoIntervalBin",!1),supportsFixedBoundaries:t(s,"supportsFixedBoundariesBin",!1),supportedStatistics:Q(s)}}function b(e){const s=e.ownershipBasedAccessControlForFeatures,r=e?e.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:t(e,"allowGeometryUpdates",!0),supportsGlobalId:t(e,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:t(e,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:t(e,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:t(e,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:t(e,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:t(s,"allowAnonymousToDelete",!0),supportsDeleteByOthers:t(s,"allowOthersToDelete",!0),supportsUpdateByAnonymous:t(s,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:t(s,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:t(r,"supportsAsyncApplyEdits",!1),zDefault:l(e,"zDefault",void 0)}}function z(e){var s;return{operations:{supportsAppend:t(e,"supportsAppend",!1),supportsCoverageQuery:((s=e==null?void 0:e.playbackInfo)==null?void 0:s.klv["0601"])??!1,supportsExportClip:t(e,"supportsExportClip",!1),supportsExportFrameset:t(e,"supportsExportFrameset",!1),supportsMensuration:t(e,"supportsMensuration",!1),supportsUpdate:t(e,"supportsUpdate",!1)}}}export{z as A,q as i};
//# sourceMappingURL=serviceCapabilitiesUtils-CPPF4tj8.js.map
