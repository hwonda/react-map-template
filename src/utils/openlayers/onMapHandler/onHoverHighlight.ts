import { Feature, Map as OpenLayersMap } from 'ol';
import { exampleCircleStyle2 } from '../style/pointStyle';

export function onHoverHighlight() {
  let previousHoveredFeature: Feature | null = null;

  const onHoverHighlighter = (mapRef: OpenLayersMap) => {
    console.log('onHoverHighlighter');
    mapRef.on('pointermove', (event) => {
      const feature = mapRef.getFeaturesAtPixel(event.pixel).at(-1);
      if (feature instanceof Feature) {
        previousHoveredFeature = feature;
        feature.setStyle(exampleCircleStyle2);
      } else {
        previousHoveredFeature?.setStyle(undefined);
      }
    });
  };

  return { onHoverHighlighter };
}