import React, { useState, useEffect } from 'react';
import {
    CalcitePanel,
    CalciteLabel,
    CalciteLoader
} from "@esri/calcite-components-react";
import "@arcgis/map-components/dist/components/arcgis-search";
import { ArcgisSearch } from "@arcgis/map-components-react";
import CountySelect from './CountySelect';
import MunicipalitySelect from './MunicipalitySelect';
import ParishSelect from './ParishSelect';

const ParishSearch = (props) => {
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

    return (
        <CalcitePanel heading="Find a parish" id="parish-search" data-panel-id="parish-search" widthScale="l">
            <div className="panel-content">
                {loading && <CalciteLoader label="Loading data..." />}
                {!loading && (
                    <>
                        <div className="border border-stone-400 p-2 my-2">
                            <CountySelect
                                counties={counties}
                                selectedCounty={selectedCounty}
                                onSelect={onComboBoxSelect}
                            />
                            <MunicipalitySelect
                                counties={counties}
                                municipalities={municipalities}
                                selectedCounty={selectedCounty}
                                selectedMunicipality={selectedMunicipality}
                                onSelect={onComboBoxSelect}
                            />
                            <ParishSelect
                                counties={counties}
                                municipalities={municipalities}
                                parishes={parishes}
                                selectedCounty={selectedCounty}
                                selectedMunicipality={selectedMunicipality}
                                selectedParish={selectedParish}
                                onSelect={onComboBoxSelect}
                            />
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

export default ParishSearch;