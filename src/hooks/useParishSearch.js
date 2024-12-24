import { useState, useCallback } from 'react';

export const useParishSearch = (mapElement) => {
    const [selection, setSelection] = useState({
        county: '',
        municipality: '',
        parish: ''
    });

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
            }
        } catch (error) {
            console.error('Error zooming to feature:', error);
        }
    }, [mapElement]);

    const handleCountySelect = useCallback(async (county) => {
        setSelection({ county: county || '', municipality: '', parish: '' });

        if (county) {
            const whereClause = `COUNTY = '${county.replace(/'/g, "''")}'`;
            await zoomToFeature(whereClause);
        }
    }, [zoomToFeature]);

    const handleMunicipalitySelect = useCallback(async (municipality) => {
        setSelection(prev => ({
            ...prev,
            municipality: municipality || '',
            parish: ''
        }));

        if (municipality && selection.county) {
            const whereClause = `COUNTY = '${selection.county.replace(/'/g, "''")}' AND MUNICIPALITY = '${municipality.replace(/'/g, "''")}'`;
            await zoomToFeature(whereClause);
        }
    }, [selection.county, zoomToFeature]);

    const handleParishSelect = useCallback(async (parish) => {
        setSelection(prev => ({ ...prev, parish: parish || '' }));

        if (parish && selection.county && selection.municipality) {
            const whereClause = `COUNTY = '${selection.county.replace(/'/g, "''")}' AND MUNICIPALITY = '${selection.municipality.replace(/'/g, "''")}' AND Par_NAME = '${parish.replace(/'/g, "''")}'`;
            await zoomToFeature(whereClause);
        }
    }, [selection.county, selection.municipality, zoomToFeature]);

    return {
        selection,
        handlers: {
            onCountySelect: handleCountySelect,
            onMunicipalitySelect: handleMunicipalitySelect,
            onParishSelect: handleParishSelect
        }
    };
};