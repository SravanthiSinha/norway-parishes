
import React, { useRef } from 'react';
import {
    CalciteLabel,
    CalcitePanel
} from '@esri/calcite-components-react';


import '@arcgis/map-components/dist/components/arcgis-features';
import { ArcgisFeatures } from '@arcgis/map-components-react';

const FeaturesDetails = (props) => {
    const { map, referenceElement } = props;
    const featuresRef = useRef(null);

    const handlefeatures = () => {
        map?.addEventListener('click', (event) => {
            const mappoint = map.toMap(event);
            event.stopPropagation();
            // Clear existing highlights by finding and clearing the highlight layer
            const highlightLayer = map.map.findLayerById("highlightLayer");
            if (highlightLayer) {
                highlightLayer.removeAll();
            }
            const featuresElement = featuresRef.current;
            featuresElement?.open({
                location: mappoint,
                fetchFeatures: true
            });
        });
    }
    return (
        <CalcitePanel
            heading="Parish details"
            id="feature-details"
            data-panel-id="feature-details"
            width-scale="l"
        >
            <div className="panel-content">
                <CalciteLabel>Select a parish in the map or in the parish search tool.</CalciteLabel>
                <ArcgisFeatures id="features-widget" referenceElement={referenceElement} onArcgisReady={handlefeatures} ref={featuresRef} hideCloseButton={true} />
            </div>
        </CalcitePanel>
    );
};

export default FeaturesDetails;