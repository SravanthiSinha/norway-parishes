import { useState, useCallback, useRef, useEffect } from 'react';
import { HighlightManager } from '../utils/HighlightManager';

export const useParishSearch = (mapElement) => {
    const [selection, setSelection] = useState({
        county: '',
        municipality: '',
        parish: ''
    });

    const [searchText, setSearchText] = useState('');

    const lastSelection = useRef({
        county: '',
        municipality: '',
        parish: ''
    });

    const highlightManagerRef = useRef(null);

    // Initialize highlight manager when map is ready
    useEffect(() => {
        if (mapElement?.view && !highlightManagerRef.current) {
            highlightManagerRef.current = new HighlightManager(mapElement.view);
        }

        return () => {
            if (highlightManagerRef.current) {
                highlightManagerRef.current.destroy();
                highlightManagerRef.current = null;
            }
        };
    }, [mapElement?.view]);

    const zoomToFeature = useCallback(async (whereClause) => {
        if (!mapElement?.map) return;

        try {
            const targetLayer = mapElement.map.layers.find(
                layer => layer.title === 'Parishes (sokn)'
            );

            if (!targetLayer) return;

            const extentResult = await targetLayer.queryExtent({ where: whereClause });
            if (extentResult?.extent) {
                await mapElement.view?.goTo(extentResult.extent);
                // Highlight the feature
                if (highlightManagerRef.current) {
                    await highlightManagerRef.current.highlightFeature(targetLayer, whereClause);
                }
            }
        } catch (error) {
            console.error('Error zooming to feature:', error);
        }
    }, [mapElement]);

    const shouldZoom = useCallback((newValue, type) => {
        return newValue !== lastSelection.current[type];
    }, []);

    const handleCountySelect = useCallback(async (county) => {
        if (!shouldZoom(county, 'county')) return;

        setSelection({ county: county || '', municipality: '', parish: '' });
        lastSelection.current = {
            county: county || '',
            municipality: '',
            parish: ''
        };

        // Reset search text
        setSearchText('');

        if (county) {
            const whereClause = `COUNTY = '${county.replace(/'/g, "''")}'`;
            await zoomToFeature(whereClause);
        }
    }, [zoomToFeature, shouldZoom]);

    const handleMunicipalitySelect = useCallback(async (municipality) => {
        if (!shouldZoom(municipality, 'municipality')) return;

        setSelection(prev => ({
            ...prev,
            municipality: municipality || '',
            parish: ''
        }));
        lastSelection.current = {
            ...lastSelection.current,
            municipality: municipality || '',
            parish: ''
        };

        // Reset search text
        setSearchText('');

        if (municipality && selection.county) {
            const whereClause = `COUNTY = '${selection.county.replace(/'/g, "''")}' AND MUNICIPALITY = '${municipality.replace(/'/g, "''")}'`;
            await zoomToFeature(whereClause);
        }
    }, [selection.county, zoomToFeature, shouldZoom]);

    const handleParishSelect = useCallback(async (parish) => {
        if (!shouldZoom(parish, 'parish')) return;

        setSelection(prev => ({ ...prev, parish: parish || '' }));
        lastSelection.current = {
            ...lastSelection.current,
            parish: parish || ''
        };

        // Reset search text
        setSearchText('');
        
        if (parish && selection.county && selection.municipality) {
            const whereClause = `COUNTY = '${selection.county.replace(/'/g, "''")}' AND MUNICIPALITY = '${selection.municipality.replace(/'/g, "''")}' AND Par_NAME = '${parish.replace(/'/g, "''")}'`;
            await zoomToFeature(whereClause);
        }
    }, [selection.county, selection.municipality, zoomToFeature, shouldZoom]);

    const queryParishLayer = useCallback(async (geometry) => {
        if (!mapElement?.map) return null;

        const parishLayer = mapElement.map.layers.find(
            layer => layer.title === 'Parishes (sokn)'
        );

        if (!parishLayer) return null;

        try {
            const query = parishLayer.createQuery();
            query.geometry = geometry;
            query.spatialRelationship = "intersects";
            query.outFields = ["COUNTY", "MUNICIPALITY", "Par_NAME"];
            query.returnGeometry = false;

            const result = await parishLayer.queryFeatures(query);
            return result.features?.[0]?.attributes;
        } catch (error) {
            console.error('Error querying parish layer:', error);
            return null;
        }
    }, [mapElement]);

    const handleSearchResult = useCallback(async (event) => {
        try {
            const result = event.detail.result;
            if (!result?.feature?.geometry) return;

            if (result.name) {
                setSearchText(result.name);
            }

            const attributes = await queryParishLayer(result.feature.geometry);
            if (!attributes) return;

            const {
                COUNTY: county,
                MUNICIPALITY: municipality,
                Par_NAME: parish
            } = attributes;

            const searchName = result.name?.toLowerCase() || '';
            let newSelection = { ...selection };

            if (county?.toLowerCase() === searchName) {
                newSelection = {
                    county,
                    municipality: '',
                    parish: ''
                };
            } else if (municipality?.toLowerCase() === searchName) {
                newSelection = {
                    county,
                    municipality,
                    parish: ''
                };
            } else if (parish?.toLowerCase() === searchName) {
                newSelection = {
                    county,
                    municipality,
                    parish
                };
            } else {
                newSelection = {
                    county: county || '',
                    municipality: municipality || '',
                    parish: parish || ''
                };
            }

            setSelection(newSelection);
            lastSelection.current = newSelection;

            if (highlightManagerRef.current) {
                await highlightManagerRef.current.highlightSearchResult(result);
            }

        } catch (error) {
            console.error('Search result processing error:', error);
        }
    }, [queryParishLayer, selection]);

    return {
        selection,
        searchText,
        handlers: {
            onCountySelect: handleCountySelect,
            onMunicipalitySelect: handleMunicipalitySelect,
            onParishSelect: handleParishSelect,
            onSearchResult: handleSearchResult
        }
    };
};