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
        onParishSelect,
        onSearchResult,
        searchText
    } = props;

    const [loading, setLoading] = useState(true);
    const [expandedCounty, setExpandedCounty] = useState(null);
    const [expandedMunicipality, setExpandedMunicipality] = useState(null);

    useEffect(() => {
        if (!counties || !parishes || !municipalities) {
            setLoading(true);
            return;
        }
        setLoading(false);
    }, [counties, parishes, municipalities]);

    // Find parent county for a municipality
    const findCountyForMunicipality = (targetMunicipality) => {
        for (const county in municipalities) {
            if (municipalities[county]?.includes(targetMunicipality)) {
                return county;
            }
        }
        return null;
    };

    // Find parent county and municipality for a parish
    const findParentsForParish = (targetParish) => {
        for (const county in parishes) {
            for (const municipality in parishes[county]) {
                if (parishes[county][municipality]?.includes(targetParish)) {
                    return { county, municipality };
                }
            }
        }
        return { county: null, municipality: null };
    };

    // Handle combobox expansions
    const handleCountyExpand = (event) => {
        setExpandedCounty(event.detail.groupId);
    };

    const handleMunicipalityExpand = (event) => {
        setExpandedMunicipality(event.detail.groupId);
    };

    // Combobox selection handlers with cascading updates
    const handleCountySelection = (event) => {
        const selected = event.target?.value;
        onCountySelect(selected);
        setExpandedCounty(selected);
    };

    const handleMunicipalitySelection = (event) => {
        const selected = event.target?.value;
        if (!selected) {
            onMunicipalitySelect(selected);
            return;
        }

        const parentCounty = findCountyForMunicipality(selected);
        if (parentCounty) {
            onCountySelect(parentCounty);
            setExpandedCounty(parentCounty);
        }
        onMunicipalitySelect(selected);
        setExpandedMunicipality(selected);
    };

    const handleLocalParishSelection = (event) => {
        const selected = event.target?.value;
        if (!selected) {
            onParishSelect(selected);
            return;
        }

        const { county, municipality } = findParentsForParish(selected);
        if (county && municipality) {
            onCountySelect(county);
            onMunicipalitySelect(municipality);
            setExpandedCounty(county);
            setExpandedMunicipality(municipality);
        }
        onParishSelect(selected);
    };

    // Render municipality items for a county
    const renderMunicipalityItems = (county) => {
        if (!municipalities[county]) return null;
        
        return municipalities[county].map((municipality) => (
            <CalciteComboboxItem
                key={`${county}-${municipality}`}
                value={municipality}
                textLabel={municipality}
            />
        ));
    };

    // Render parish items for a municipality
    const renderParishItems = (county, municipality) => {
        if (!parishes[county]?.[municipality]) return null;

        return parishes[county][municipality].map((parish) => (
            <CalciteComboboxItem
                key={`${county}-${municipality}-${parish}`}
                value={parish}
                textLabel={parish}
            />
        ));
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
                                    placeholder="Select municipality"
                                    selectionMode="single"
                                    id="municipality-combobox"
                                    onCalciteComboboxChange={handleMunicipalitySelection}
                                    value={selectedMunicipality}
                                >
                                    {counties.map((county) => (
                                        <CalciteComboboxItemGroup 
                                            key={county} 
                                            label={county}
                                            expanded={expandedCounty === county}
                                            onCalciteComboboxItemGroupClick={handleCountyExpand}
                                        >
                                            {renderMunicipalityItems(county)}
                                        </CalciteComboboxItemGroup>
                                    ))}
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
                                    {counties.map((county) => (
                                        <CalciteComboboxItemGroup 
                                            key={county} 
                                            label={county}
                                            expanded={expandedCounty === county}
                                            onCalciteComboboxItemGroupClick={handleCountyExpand}
                                        >
                                            {municipalities[county]?.map((municipality) => (
                                                <CalciteComboboxItemGroup
                                                    key={`${county}-${municipality}`}
                                                    label={municipality}
                                                    expanded={expandedMunicipality === municipality}
                                                    onCalciteComboboxItemGroupClick={handleMunicipalityExpand}
                                                >
                                                    {renderParishItems(county, municipality)}
                                                </CalciteComboboxItemGroup>
                                            ))}
                                        </CalciteComboboxItemGroup>
                                    ))}
                                </CalciteCombobox>
                            </CalciteLabel>
                        </div>
                        <div className='border border-stone-400 p-2 my-2'>
                            <CalciteLabel>
                                Farm/property
                                <ArcgisSearch
                                    id="parish-search-widget"
                                    reference-element={referenceElement}
                                    onArcgisSelectResult={onSearchResult}
                                    searchTerm={searchText}
                                    popupDisabled
                                />
                            </CalciteLabel>
                        </div>
                    </>
                )}
            </div>
        </CalcitePanel>
    );
};

export default ParishSearchPanel;