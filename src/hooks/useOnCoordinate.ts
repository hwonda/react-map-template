import { Map as OpenLayersMap } from 'ol';
import { toLonLat } from 'ol/proj';
import { useState, useCallback } from 'react';

export function useOnCoordinate(): [Array<number>, (mapRef: OpenLayersMap) => void] {
  const [coordinates, setCoordinates] = useState([0, 0]);
  const onCoordinateHandler = useCallback((mapRef: OpenLayersMap) => {
    console.log('onCoordinateHandler');
    mapRef.on('pointermove', (event) => {
      setCoordinates(toLonLat(event.coordinate));
    });
  }, []);

  return [coordinates, onCoordinateHandler];
}