import { Map as OpenLayersMap } from 'ol';

export function onCursorPointer(mapRef: OpenLayersMap) {
  mapRef.on('pointermove', (event) => {
    const hasFeature = mapRef.hasFeatureAtPixel(event.pixel);
    mapRef.getTargetElement().style.cursor = hasFeature ? 'pointer' : '';
  });
}