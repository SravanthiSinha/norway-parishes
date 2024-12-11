import React from 'react';
import "@arcgis/map-components/dist/components/arcgis-basemap-gallery";
import { ArcgisBasemapGallery } from "@arcgis/map-components-react";
import {
    CalcitePanel,
} from "@esri/calcite-components-react";

const BasemapGallery = (props) => {
    const { referenceElement } = props;

    return (<CalcitePanel
        heading="BasemapGallery"
        id="basemap"
        data-panel-id="basemap"
        width-scale="l"
    >
        <ArcgisBasemapGallery referenceElement={referenceElement} />
    </CalcitePanel>)
}

export default BasemapGallery;