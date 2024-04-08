import { useCallback, useMemo } from 'react';
import { css } from '@emotion/react';
import MapView from './MapView';
import { Feature } from 'ol';
import { fromLonLat } from 'ol/proj';
import { Point } from 'ol/geom';
import { useOnCoordinate } from '../hooks/useOnCoordinate';
import { useOnClickFeature } from '../hooks/useOnClickFeature';
import { onHoverHighlight, onCursorPointer } from '../utils/openlayers/onMapHandler';
import { displayPoints } from '../utils/openlayers/displayHandler';
import { exampleCircleStyle } from '../utils/openlayers/style/pointStyle';
import { overlayCoverContentApi } from '../api';
import { FeatureLike } from 'ol/Feature';

const { onHoverHighlighter } = onHoverHighlight();
const exampleFeatures = [
  new Feature({ geometry: new Point(fromLonLat([126, 37.39])), name: 'example1' }),
  new Feature({ geometry: new Point(fromLonLat([125.5, 37.29])), name: 'example2' }),
  new Feature({ geometry: new Point(fromLonLat([125.75, 37.14])), name: 'example3' }),
];
const displayExamplePointsHandler = displayPoints(
  'exampleLayer',
  exampleFeatures,
  exampleCircleStyle,
);

const PopupElement = (props: { clickedFeature: Array<FeatureLike> | null }) => {
  const { clickedFeature } = props;

  const { data, error, isLoading } = overlayCoverContentApi.endpoints.getOverlayCoverContent.useQuery({ type: 'meat-and-filler', paras: 1, sentences: 1 });

  return (
    <div css={popupStyle(125, 150)}>
      {clickedFeature?.at(-1)?.get('name')}
      {!isLoading && <div>{data}</div>}
      {error && <div>404</div>}
    </div>
  );
};

export default function Content() {
  const [coordinates, onCoordinateHandler] = useOnCoordinate();
  const [clickedFeature, onClickFeatureHandler] = useOnClickFeature();

  const onHoverHighlightHandler = useCallback(onHoverHighlighter, []);
  const onCursorPointerHandler = useCallback(onCursorPointer, []);
  const displayPointsHandler = useCallback(displayExamplePointsHandler, []);

  const mapOnHandlers = useMemo(() => [
    onCoordinateHandler,
    onHoverHighlightHandler,
    onCursorPointerHandler,
    onClickFeatureHandler,
  ], [
    onCoordinateHandler,
    onHoverHighlightHandler,
    onCursorPointerHandler,
    onClickFeatureHandler,
  ]);
  const displayHandlers = useMemo(() => [
    displayPointsHandler,
  ], [
    displayPointsHandler,
  ]);

  const overlay = useMemo(() => {
    return {
      component: <PopupElement clickedFeature={clickedFeature} />,
      coordinates: (clickedFeature?.at(-1) as Feature<Point>)?.getGeometry()?.getCoordinates(),
      width: 125,
      height: 150,
    };
  }, [clickedFeature]);

  return(<>
    <div css={contentStyle}>
      <MapView mapOnHandlers={mapOnHandlers} displayHandlers={displayHandlers} overlayInfo={overlay} />
    </div>
    <div css={bottomDisplayStyle}>
      경도: {coordinates[0].toFixed(4)}, 위도: {coordinates[1].toFixed(4)}
    </div>
  </>);
}

const contentStyle = css`
  position: relative;
  height: calc(100vh - 6rem);
`;

const bottomDisplayStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2rem;

  color: white;

  background: #7777f8;
`;

const popupStyle = (width?: number, height?: number) => css`
  justify-content: center;

  box-sizing: border-box;
  width: ${width}px;
  height: ${height}px;
  padding: 5px;

  font-size: small;
  font-weight: bold;
  color: white;
  text-align: center;
  text-overflow: ellipsis;

  background: rgb(100 100 100 / 85%);
  border-radius: 5px;

  > div {
    margin-top: 5px;
    font-weight: normal;
  }

  ::after{
    content: '';

    position: absolute;
    right: calc(50% - 10px);
    bottom: -10px;

    width: 0; 
    height: 0;
    
    border-top: 10px solid rgb(100 100 100 / 85%);
    border-right: 10px solid transparent; 
    border-left: 10px solid transparent;
  }
`;