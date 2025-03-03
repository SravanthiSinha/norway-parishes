import React, { useRef, useState } from 'react';
import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-zoom";
import "@arcgis/map-components/dist/components/arcgis-home";
import '@arcgis/map-components/dist/components/arcgis-features';
import { ArcgisMap, ArcgisZoom, ArcgisHome } from "@arcgis/map-components-react";
import { CalciteShell } from "@esri/calcite-components-react";
import SidePanel from '../components/SidePanel';

import "@arcgis/map-components/dist/components/arcgis-legend";

const Home = () => {
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);
    const mapId = 'arcgis-map';

    return (
        <CalciteShell>
            <ArcgisMap
                id={mapId}
                itemId="454a0303bffb487abf2d6c2c36ff4f0f"
                ref={mapRef}
                onArcgisViewReadyChange={(e) => setMap(e.target)}
            >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <ArcgisHome position="top-left" />
                    <ArcgisZoom position="top-left" />
                </div>
            </ArcgisMap>
            <SidePanel mapElement={map} referenceElement={`#${mapId}`} />
        </CalciteShell>
    );
}

export default Home;