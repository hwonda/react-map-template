import { Feature, Map as OpenLayersMap } from 'ol';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { StyleLike } from 'ol/style/Style';

export type DisplayPoints = [string, Array<Feature>, StyleLike]

export const displayPoints = (...params: DisplayPoints) => (mapRef: OpenLayersMap) => {
  const [
    layerName,
    features,
    style,
  ] = params;

  const previousLayer = mapRef.getAllLayers().filter((x) => x.getClassName() === layerName);
  if(previousLayer.length) previousLayer.forEach(x => mapRef.removeLayer(x));

  mapRef.addLayer(new VectorLayer({
    className: layerName,
    source: new VectorSource({ features }),
    style,
  }));
  console.log(mapRef.getAllLayers());
};