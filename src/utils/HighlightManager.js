import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";

export class HighlightManager {
    constructor(view) {
        this.view = view;
        this.highlightLayer = new GraphicsLayer({
            id: "highlightLayer",
            title: "Highlight Layer",
            listMode: "hide"
        });
        this.view.map.add(this.highlightLayer);

        // Bind methods to instance
        this.highlightFeature = this.highlightFeature.bind(this);
        this.highlightSearchResult = this.highlightSearchResult.bind(this);
        this.clearHighlight = this.clearHighlight.bind(this);
        this.destroy = this.destroy.bind(this);

        // Symbol for polygon highlighting
        this.symbols = {
            polygon: {
                type: "simple-fill",
                color: [19, 253, 252, 0.2],
                outline: {
                    color: [19, 253, 252, 0.6],
                    width: 2
                }
            },
            point: {
                type: "simple-marker",
                style: "circle",
                color: [19, 253, 252, 0.6],
                size: "12px",
                outline: {
                    color: [19, 253, 252, 1],
                    width: 2
                }
            },
            polyline: {
                type: "simple-line",
                color: [19, 253, 252, 0.6],
                width: 4
            }
        };
    }

    getSymbolForGeometry(geometry) {
        if (!geometry || !geometry.type) {
            console.warn('Invalid geometry provided');
            return this.symbols.polygon; // Default fallback
        }

        const type = geometry.type.toLowerCase();

        switch (type) {
            case "point":
            case "multipoint":
                return this.symbols.point;
            case "polyline":
                return this.symbols.polyline;
            case "polygon":
            case "extent":
                return this.symbols.polygon;
            default:
                console.warn(`Unsupported geometry type: ${type}`);
                return this.symbols.polygon;
        }
    }

    async highlightFeature(layer, whereClause) {
        try {
            if (!layer || !whereClause) return;

            // Clear existing highlights
            this.clearHighlight();

            // Query the features
            const query = layer.createQuery();
            query.where = whereClause;
            query.returnGeometry = true;
            query.outFields = ["*"];

            const results = await layer.queryFeatures(query);

            if (results.features && results.features.length > 0) {
                results.features.forEach(feature => {
                    if (feature.geometry) {
                        const symbol = this.getSymbolForGeometry(feature.geometry);
                        const highlightGraphic = new Graphic({
                            geometry: feature.geometry,
                            symbol: symbol
                        });
                        this.highlightLayer.add(highlightGraphic);
                    }
                });
                return true;
            }
            return false;
        } catch (error) {
            console.error('Error highlighting feature:', error);
            return false;
        }
    }

    highlightSearchResult(searchResult) {
        try {
            if (!searchResult || !searchResult.feature) {
                console.warn('Invalid search result');
                return false;
            }

            this.clearHighlight();

            const { feature } = searchResult;

            if (!feature.geometry) {
                console.warn('Search result feature has no geometry');
                return false;
            }

            const symbol = this.getSymbolForGeometry(feature.geometry);

            const highlightGraphic = new Graphic({
                geometry: feature.geometry,
                symbol: symbol
            });

            this.highlightLayer.add(highlightGraphic);
            return true;
        } catch (error) {
            console.error('Error highlighting search result:', error);
            return false;
        }
    }

    clearHighlight() {
        if (this.highlightLayer) {
            this.highlightLayer.removeAll();
        }
    }

    destroy() {
        if (this.highlightLayer) {
            this.view.map.remove(this.highlightLayer);
        }
    }
}