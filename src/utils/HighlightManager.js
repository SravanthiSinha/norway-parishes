import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";

export class HighlightManager {
    constructor(view) {
        this.view = view;
        this.highlightLayer = new GraphicsLayer({
            id: "highlightLayer",
            title: "Highlight Layer"
        });
        this.view.map.add(this.highlightLayer);

        // Symbol for highlighting
        this.highlightSymbol = {
            type: "simple-fill",
            color: [19, 253, 252, 0.2],
            outline: {
                color: [19, 253, 252, 0.6],
                width: 2
            }
        };
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

            if (results.features.length > 0) {
                results.features.forEach(feature => {
                    const highlightGraphic = new Graphic({
                        geometry: feature.geometry,
                        symbol: this.highlightSymbol
                    });
                    this.highlightLayer.add(highlightGraphic);
                });
                return true;
            }
            return false;
        } catch (error) {
            console.error('Error highlighting feature:', error);
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