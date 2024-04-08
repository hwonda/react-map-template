import { MapBrowserEvent, Map as OpenLayersMap } from 'ol';
import { FeatureLike } from 'ol/Feature';
import { useState, useCallback } from 'react';

type UseOnClickFeature = [
  Array<FeatureLike> | null,
  (mapRef: OpenLayersMap) => void
]

export function useOnClickFeature(): UseOnClickFeature {
  const [clickedFeature, setClickedFeature] = useState<Array<FeatureLike> | null>(null);
  const onClickFeatureHandler = useCallback((mapRef: OpenLayersMap) => {
    console.log('onClickFeatureHandler');
    mapRef.on('click', (event: MapBrowserEvent<UIEvent>) => {
      const feature = mapRef.getFeaturesAtPixel(event.pixel).at(-1);
      if (feature) {
        setClickedFeature((x) => x ? [...x, feature] : [feature]);
      } else {
        setClickedFeature(null);
      }
    });
  }, []);

  return [clickedFeature, onClickFeatureHandler];
}