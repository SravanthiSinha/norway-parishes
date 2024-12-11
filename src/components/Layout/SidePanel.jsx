import React, { useState, useEffect } from 'react';
import {
    CalciteAction,
    CalciteActionBar,
    CalciteShellPanel
} from "@esri/calcite-components-react";
import uniqueValues from "@arcgis/core/smartMapping/statistics/uniqueValues";
import ParishSearchPanel from './ParishSearchPanel';
import FeaturesDetails from './FeaturesDetails';
import Legend from './Legend';


const SidePanel = (props) => {
    const { mapElement, referenceElement } = props;

    // Panel state management
    const [isPanelCollapsed, setIsPanelCollapsed] = useState(true);
    const [activePanel, setActivePanel] = useState(null);

    // Layer data state management
    const [counties, setCounties] = useState(null);
    const [parishes, setParishes] = useState(null);
    const [municipalities, setMunicipalities] = useState(null);

    // Shared selection state
    const [selectedCounty, setSelectedCounty] = useState('');
    const [selectedMunicipality, setSelectedMunicipality] = useState('');
    const [selectedParish, setSelectedParish] = useState('');

    // Event Handlers for Action Bar
    const handleActionClick = (event) => {
        if (counties) {
            const target = event.currentTarget;
            const nextPanel = target.dataset.actionId;

            if (!nextPanel) return;

            if (activePanel === nextPanel) {
                setIsPanelCollapsed(true);
                setActivePanel(null);
            } else {
                setIsPanelCollapsed(false);
                setActivePanel(nextPanel);
            }
        }
        event.stopPropagation();
    };

    // Shared selection handlers
    const handleCountySelection = async (selected) => {
        try {
            setSelectedCounty(selected || '');
            // Reset dependent fields
            setSelectedMunicipality('');
            setSelectedParish('');

            if (selected && mapElement?.map) {
                let targetLayer = mapElement.map.layers.find(layer =>
                    layer.title === 'Parishes (sokn)'
                );
                if (targetLayer) {
                    const whereClause = `COUNTY = '${selected.replace(/'/g, "''")}'`;
                    const extentf = await targetLayer.queryExtent({
                        where: whereClause
                    });
                    if (extentf?.extent) {
                        mapElement.view?.goTo(extentf.extent);
                    }
                }
            }
        } catch (error) {
            console.error('Error handling county selection:', error);
        }
    };

    const handleMunicipalitySelection = async (selected) => {
        try {
            setSelectedParish('');
            setSelectedMunicipality(selected || '');

            if (selected && selectedCounty && mapElement?.map) {
                let targetLayer = mapElement.map.layers.find(layer =>
                    layer.title === 'Parishes (sokn)'
                );
                if (targetLayer) {
                    const whereClause = `COUNTY = '${selectedCounty.replace(/'/g, "''")}' AND MUNICIPALITY = '${selected.replace(/'/g, "''")}'`;
                    const extentf = await targetLayer.queryExtent({
                        where: whereClause,
                    });
                    if (extentf?.extent) {
                        mapElement.view?.goTo(extentf.extent);
                    }
                }
            }
        } catch (error) {
            console.error('Error handling municipality selection:', error);
        }
    };

    const handleParishSelection = async (selected) => {
        try {
            setSelectedParish(selected || '');
        
            if (selected && selectedCounty && selectedMunicipality && mapElement?.map) {
                let targetLayer = mapElement.map.layers.find(layer =>
                    layer.title === 'Parishes (sokn)'
                );
                if (targetLayer) {
                    const whereClause = `COUNTY = '${selectedCounty.replace(/'/g, "''")}' AND MUNICIPALITY = '${selectedMunicipality.replace(/'/g, "''")}' AND Par_NAME = '${selected.replace(/'/g, "''")}'`;
                    const extentf = await targetLayer.queryExtent({
                        where: whereClause,
                    });
                    if (extentf?.extent) {
                        mapElement.view?.goTo(extentf.extent);
                    }
                }
            }
        } catch (error) {
            console.error('Error handling parish selection:', error);
        }
    };

    useEffect(() => {
        const initializeLayers = async () => {
            try {
                if (mapElement && mapElement.ready) {
                    const layers = mapElement.map.layers;
                    if (!layers) {
                        console.log('layers is not initialized yet');
                        return;
                    }

                    const parishLayer = layers.find(
                        (layer) => layer.title === "Parishes (sokn)"
                    );

                    if (!parishLayer) {
                        throw new Error('Parish layer not found');
                    }

                    // Fetch and process counties
                    const { uniqueValueInfos: countyInfos } = await uniqueValues({
                        layer: parishLayer,
                        field: "COUNTY"
                    });

                    const countyNames = countyInfos
                        .map((info) => info.value)
                        .filter(Boolean)
                        .sort();

                    setCounties(countyNames);

                    // Initialize data structures
                    const municipalityByCounty = {};
                    const parishByMunicipality = {};

                    // Fetch municipalities for each county
                    await Promise.all(
                        countyNames.map(async (county) => {
                            try {
                                const { uniqueValueInfos: municipalityInfos } = await uniqueValues({
                                    layer: parishLayer,
                                    field: "MUNICIPALITY",
                                    sqlWhere: `COUNTY = '${county}'`
                                });

                                const municipalityNames = municipalityInfos
                                    .map((info) => info.value)
                                    .filter(Boolean)
                                    .sort();

                                municipalityByCounty[county] = municipalityNames;
                                parishByMunicipality[county] = {};

                                // Fetch parishes for each municipality
                                await Promise.all(
                                    municipalityNames.map(async (municipality) => {
                                        try {
                                            const { uniqueValueInfos: parishInfos } = await uniqueValues({
                                                layer: parishLayer,
                                                field: "PAR_Name",
                                                sqlWhere: `COUNTY = '${county}' AND MUNICIPALITY = '${municipality}'`
                                            });

                                            parishByMunicipality[county][municipality] = parishInfos
                                                .map((info) => info.value)
                                                .filter(Boolean)
                                                .sort();
                                        } catch (error) {
                                            console.log(
                                                `Error fetching parishes for ${municipality} in ${county}:`,
                                                error
                                            );
                                            parishByMunicipality[county][municipality] = [];
                                        }
                                    })
                                );
                            } catch (error) {
                                console.log(`Error fetching municipalities for ${county}:`, error);
                                municipalityByCounty[county] = [];
                                parishByMunicipality[county] = {};
                            }
                        })
                    );

                    setMunicipalities(municipalityByCounty);
                    setParishes(parishByMunicipality);
                }
            } catch (error) {
                console.log('Error initializing map layers:', error);
            }
        };

        initializeLayers();
    }, [mapElement]);

    return (
        <CalciteShellPanel slot="panel-end" position="end" widthScale="l" displayMode="dock" collapsed={isPanelCollapsed}>
            <CalciteActionBar slot="action-bar">
                <CalciteAction 
                    data-action-id="parish-search" 
                    text="Find a parish" 
                    icon="search" 
                    active={activePanel === 'parish-search'} 
                    onClick={handleActionClick} 
                />
                <CalciteAction 
                    data-action-id="feature-details" 
                    text="Parish info" 
                    icon="feature-details" 
                    active={activePanel === 'feature-details'} 
                    onClick={handleActionClick} 
                />
                <CalciteAction 
                    data-action-id="legend" 
                    text="Legend" 
                    icon="legend" 
                    active={activePanel === 'legend'} 
                    onClick={handleActionClick} 
                />
                <calcite-tooltip slot="expand-tooltip">Toggle Action Bar</calcite-tooltip>
            </CalciteActionBar>
            
            {activePanel === 'parish-search' && (
                <ParishSearchPanel 
                    counties={counties}
                    parishes={parishes}
                    municipalities={municipalities}
                    referenceElement={referenceElement}
                    map={mapElement}
                    selectedCounty={selectedCounty}
                    selectedMunicipality={selectedMunicipality}
                    selectedParish={selectedParish}
                    onCountySelect={handleCountySelection}
                    onMunicipalitySelect={handleMunicipalitySelection}
                    onParishSelect={handleParishSelection}
                />
            )}
            {activePanel === 'feature-details' && mapElement && (
                <FeaturesDetails 
                    referenceElement={referenceElement} 
                    map={mapElement}
                />
            )}
            {activePanel === 'legend' && mapElement && (
                <Legend 
                    referenceElement={referenceElement}
                />
            )}
        </CalciteShellPanel>
    );
};

export default SidePanel;