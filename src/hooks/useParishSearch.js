import { useState, useCallback, useRef, useEffect } from 'react';
import { HighlightManager } from '../utils/HighlightManager';

export const useParishSearch = (mapElement) => {
    const [selection, setSelection] = useState({
        county: '',
        municipality: '',
        parish: ''
    });

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

        // Cleanup
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
        // Check if the value has actually changed from last selection
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

        if (parish && selection.county && selection.municipality) {
            const whereClause = `COUNTY = '${selection.county.replace(/'/g, "''")}' AND MUNICIPALITY = '${selection.municipality.replace(/'/g, "''")}' AND Par_NAME = '${parish.replace(/'/g, "''")}'`;
            await zoomToFeature(whereClause);
        }
    }, [selection.county, selection.municipality, zoomToFeature, shouldZoom]);

    return {
        selection,
        handlers: {
            onCountySelect: handleCountySelect,
            onMunicipalitySelect: handleMunicipalitySelect,
            onParishSelect: handleParishSelect
        }
    };
};