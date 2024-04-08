import { useCallback, useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import { Map as OpenLayersMap, Overlay, View } from 'ol';
import { defaults as defaultControls } from 'ol/control';
import { Projection, fromLonLat, get as getProjection } from 'ol/proj';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { XYZ as XYZSource, Vector as VectorSource } from 'ol/source';
import 'ol/ol.css';
import { Coordinate } from 'ol/coordinate';

interface MapViewProps {
  displayHandlers?: Array<((mapRef: OpenLayersMap) => void) | null | undefined>
  mapOnHandlers?: Array<((mapRef: OpenLayersMap) => void) | null | undefined>
  overlayInfo?: {
    component: JSX.Element
    coordinates?: Coordinate
    width?: number
    height?: number
  }
}

const vectorLayer = new VectorLayer({ source: new VectorSource() });
const baseMapLayer = new TileLayer({ source: new XYZSource({ url: import.meta.env.VITE_BASE_MAP_URL }) });
const baseView = new View({
  projection: getProjection('EPSG:3857') ?? new Projection({ code: 'EPSG:3857' }),
  center: fromLonLat([127.296364, 37.503429]),
  zoom: 7,
  minZoom: 7,
  maxZoom: 20,
});
const openLayersMap = new OpenLayersMap({
  controls: defaultControls({ zoom: false, rotate: false }).extend([]),
  layers: [baseMapLayer, vectorLayer],
  view: baseView,
});

export default function MapView(props: MapViewProps) {
  const { displayHandlers, mapOnHandlers, overlayInfo } = props;

  const mapRef = useRef(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const initializeMap = useCallback((mapRef: React.MutableRefObject<null>) => {
    if (!mapRef.current) return;
    openLayersMap.setTarget(mapRef.current);
  }, []);

  const destroyMap = useCallback(() => {
    openLayersMap.setTarget(undefined);
  }, []);

  const initializeHandlers = useCallback(() => {
    mapOnHandlers?.forEach(handler => handler?.(openLayersMap));
    displayHandlers?.forEach(handler => handler?.(openLayersMap));
  }, [mapOnHandlers, displayHandlers]);

  const createOverlay = useCallback(() => {
    console.log('createOverlay');
    openLayersMap.addOverlay(new Overlay({
      position: overlayInfo?.coordinates,
      element: overlayRef.current ?? undefined,
      positioning: 'center-center',
    }));
  }, [overlayInfo?.coordinates]);

  useEffect(() => {
    console.log('asdf');
    initializeMap(mapRef);
    return () => destroyMap();
  }, [destroyMap, initializeMap]);

  useEffect(() => {
    createOverlay();
  }, [createOverlay]);

  useEffect(() => {
    console.log('initializeHandlers');
    initializeHandlers();
  }, [initializeHandlers]);

  return <>
    <div css={mapViewStyle} ref={mapRef} />
    <div ref={overlayRef} css={overlayStyle(overlayInfo?.width, overlayInfo?.height)}>{overlayInfo?.component}</div>
  </>;
}

const mapViewStyle = css`
  width: 100%;
  height: 100%;
`;

const overlayStyle = (width?: number, height?: number) => css`
  position: absolute;
  top: calc(0px - ${(height ?? 0) + 30}px);
  left: calc(0px - ${(width ?? 0) / 2}px);
`;