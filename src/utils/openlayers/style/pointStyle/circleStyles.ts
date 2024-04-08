import { Circle as CircleStyle } from 'ol/style';
import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';

const exampleCircleFill = new Fill({
  color: 'orange',
});
const exampleCircleStroke = new Stroke({
  color: 'rgba(111,111,111,1)',
  width: 1.5,
});

export const exampleCircleStyle = new Style({
  fill: exampleCircleFill,
  stroke: exampleCircleStroke,
  image: new CircleStyle({
    fill: exampleCircleFill,
    stroke: exampleCircleStroke,
    radius: 10,
  }),
});

const exampleCirclefill2 = new Fill({
  color: '#3399CC',
});
const exampleCircleStroke2 = new Stroke({
  color: 'rgba(255, 255, 255, 0.7)',
  width: 2,
});

export const exampleCircleStyle2 = new Style({
  fill: exampleCirclefill2,
  stroke: exampleCircleStroke2,
  image: new CircleStyle({
    fill: exampleCirclefill2,
    stroke: exampleCircleStroke2,
    radius: 10,
  }),
});