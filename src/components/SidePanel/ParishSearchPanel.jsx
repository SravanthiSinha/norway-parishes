import React, { useState, useEffect, useCallback } from 'react';
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
        onComboBoxSelect,
        onSearchResult,
        onSearchClear,
        searchText
    } = props;

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!counties || !parishes || !municipalities) {
            setLoading(true);
            return;
        }
        setLoading(false);
    }, [counties, parishes, municipalities]);

    const findCountyForMunicipality = useCallback((targetMunicipality) => {
        for (const county in municipalities) {
            if (municipalities[county]?.includes(targetMunicipality)) {
                return county;
            }
        }
        return null;
    }, [municipalities]);

    const findParentsForParish = useCallback((targetParish) => {
        for (const county in parishes) {
            for (const municipality in parishes[county]) {
                if (parishes[county][municipality]?.includes(targetParish)) {
                    return { county, municipality };
                }
            }
        }
        return { county: null, municipality: null };
    }, [parishes]);

    const handleCountySelection = useCallback((event) => {
        const selected = event.target?.value;
        if (selected === selectedCounty) return;
        onComboBoxSelect(selected);
    }, [selectedCounty, onComboBoxSelect]);

    const handleMunicipalitySelection = useCallback((event) => {
        const selected = event.target?.value;
        if (selected === selectedMunicipality) return;
        if (!selected) {
            onComboBoxSelect(selectedCounty);
            return
        }
        const county = findCountyForMunicipality(selected);
        onComboBoxSelect(county, selected);
    }, [selectedMunicipality, findCountyForMunicipality, onComboBoxSelect]);

    const handleLocalParishSelection = useCallback((event) => {
        const selected = event.target?.value;
        if (selected === selectedParish) return;
        if (!selected) {
            onComboBoxSelect(selectedCounty, selectedMunicipality);
            return
        }
        const { county, municipality } = findParentsForParish(selected);
        onComboBoxSelect(county, municipality, selected);
    }, [selectedParish, findParentsForParish, onComboBoxSelect]);

    const renderMunicipalityItems = useCallback((county) => {
        if (!municipalities[county]) return null;

        return municipalities[county].map((municipality) => (
            <CalciteComboboxItem
                key={`${county}-${municipality}`}
                value={municipality}
                textLabel={municipality}
                selected={selectedMunicipality === municipality}
            />
        ));
    }, [municipalities, selectedMunicipality]);

    const renderParishItems = useCallback((county, municipality) => {
        if (!parishes[county]?.[municipality]) return null;

        return parishes[county][municipality].map((parish) => (
            <CalciteComboboxItem
                key={`${county}-${municipality}-${parish}`}
                value={parish}
                textLabel={parish}
                selected={selectedParish === parish}
            />
        ));
    }, [parishes, selectedParish]);

    return (
        <CalcitePanel heading="Find a parish" id="parish-search" data-panel-id="parish-search" widthScale="l">
            <div className="panel-content">
                {loading && <CalciteLoader label="Loading data..." />}
                {!loading && (
                    <>
                        <div className="border border-stone-400 p-2 my-2">
                            <CalciteLabel>
                                County (fylke)
                                <CalciteCombobox
                                    placeholder="Select county name"
                                    selectionMode="single"
                                    id="county-combobox"
                                    onCalciteComboboxChange={handleCountySelection}
                                >
                                    {counties.map((county) => (
                                        <CalciteComboboxItem
                                            key={county}
                                            value={county}
                                            textLabel={county}
                                            selected={selectedCounty === county}
                                        />
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
                                >
                                    {counties.map((county) => (
                                        <CalciteComboboxItemGroup
                                            key={county}
                                            label={county}
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
                                >
                                    {counties.map((county) => (
                                        <CalciteComboboxItemGroup
                                            key={county}
                                            label={county}
                                        >
                                            {municipalities[county]?.map((municipality) => (
                                                <CalciteComboboxItemGroup
                                                    key={`${county}-${municipality}`}
                                                    label={municipality}
                                                >
                                                    {renderParishItems(county, municipality)}
                                                </CalciteComboboxItemGroup>
                                            ))}
                                        </CalciteComboboxItemGroup>
                                    ))}
                                </CalciteCombobox>
                            </CalciteLabel>
                        </div>
                        <div className="border border-stone-400 p-2 my-2">
                            <CalciteLabel>
                                Farm/property
                                <ArcgisSearch
                                    id="parish-search-widget"
                                    reference-element={referenceElement}
                                    onArcgisSelectResult={onSearchResult}
                                    onArcgisClear={onSearchClear}
                                    searchTerm={searchText}
                                    popupDisabled={true}
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