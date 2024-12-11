import React, { useState, useEffect } from 'react';
import {
    CalcitePanel,
    CalciteLabel,
    CalciteCombobox,
    CalciteComboboxItem,
    CalciteComboboxItemGroup,
    CalciteLoader
} from "@esri/calcite-components-react";
import "@arcgis/map-components/dist/components/arcgis-search";
import { ArcgisSearch } from "@arcgis/map-components-react";

const ParishSearchPanel = (props) => {
    const { 
        counties, 
        parishes, 
        municipalities, 
        referenceElement,
        selectedCounty,
        selectedMunicipality,
        selectedParish,
        onCountySelect,
        onMunicipalitySelect,
        onParishSelect
    } = props;

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!counties || !parishes || !municipalities) {
            setLoading(true);
            return;
        }
        setLoading(false);
    }, [counties, parishes, municipalities]);

    // Combobox selection handlers
    const handleCountySelection = (event) => {
        const selected = event.target?.value;
        onCountySelect(selected);
    };

    const handleMunicipalitySelection = (event) => {
        const selected = event.target?.value;
        onMunicipalitySelect(selected);
    };

    const handleLocalParishSelection = (event) => {
        const selected = event.target?.value;
        onParishSelect(selected);
    };

    return (
        <CalcitePanel heading="Find a parish" id="parish-search" data-panel-id="parish-search" widthScale="l">
            <div className="panel-content">
                {loading && <CalciteLoader label="Loading data..." />}
                {!loading && (
                    <>
                        <div className='border border-stone-400 p-2 my-2'>
                            <CalciteLabel>
                                County (fylke)
                                <CalciteCombobox 
                                    placeholder="Select county name" 
                                    selectionMode="single" 
                                    id="county-combobox" 
                                    onCalciteComboboxChange={handleCountySelection} 
                                    value={selectedCounty}
                                >
                                    {counties.map((county) => (
                                        <CalciteComboboxItem key={county} value={county} textLabel={county} />
                                    ))}
                                </CalciteCombobox>
                            </CalciteLabel>

                            <CalciteLabel>
                                Municipality
                                <CalciteCombobox 
                                    placeholder="Select parish name" 
                                    selectionMode="single" 
                                    id="municipality-combobox" 
                                    onCalciteComboboxChange={handleMunicipalitySelection} 
                                    value={selectedMunicipality}
                                >
                                    {selectedCounty && (
                                        <CalciteComboboxItemGroup label={selectedCounty}>
                                            {municipalities[selectedCounty]?.map((municipality) => (
                                                <CalciteComboboxItem key={municipality} value={municipality} textLabel={municipality} />
                                            ))}
                                        </CalciteComboboxItemGroup>
                                    )}
                                </CalciteCombobox>
                            </CalciteLabel>

                            <CalciteLabel>
                                Local parish (sokn)
                                <CalciteCombobox 
                                    placeholder="Select local parish name" 
                                    selectionMode="single" 
                                    id="localparish-combobox" 
                                    onCalciteComboboxChange={handleLocalParishSelection} 
                                    value={selectedParish}
                                >
                                    {selectedCounty && selectedMunicipality && (
                                        <CalciteComboboxItemGroup label={selectedCounty}>
                                            <CalciteComboboxItemGroup label={selectedMunicipality}>
                                                {parishes[selectedCounty][selectedMunicipality]?.map((parish) => (
                                                    <CalciteComboboxItem key={parish} value={parish} textLabel={parish} />
                                                ))}
                                            </CalciteComboboxItemGroup>
                                        </CalciteComboboxItemGroup>
                                    )}
                                </CalciteCombobox>
                            </CalciteLabel>
                        </div>
                        <div className='border border-stone-400 p-2 my-2'>
                            <CalciteLabel>
                                Farm/property
                                <ArcgisSearch id="parish-search-widget" reference-element={referenceElement} />
                            </CalciteLabel>
                        </div>
                    </>
                )}
            </div> </CalcitePanel>);
}

export default ParishSearchPanel;