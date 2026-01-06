// MapView.js
import { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import Fill from 'ol/style/Fill';
import CircleStyle from 'ol/style/Circle';
import Zoom from 'ol/control/Zoom';
import FullScreen from 'ol/control/FullScreen';
import LineString from 'ol/geom/LineString';
import '../../assets/css/openlayer.css';
import { geojsonObject } from '../../assets/geoJson/geoJson';

const MapView = () => {
  const mapRef = useRef<HTMLDivElement | any>(undefined);

  // read geojson feature
  const geoJSONFeatures = new GeoJSON().readFeatures(geojsonObject);

  // create vector source
  const vectorSource = new VectorSource({
    features: geoJSONFeatures,
  });

  // create vector layer with source
  const vectorLayer = new VectorLayer({
    source: vectorSource,
    style: new Style({
      stroke: new Stroke({ color: 'green', width: 2 }),
    }),
  });

  //   point vector layer
  const pointSource = new VectorSource<Feature<Point>>();
  const pointFeature = new Feature({
    geometry: new Point(fromLonLat([85.3478288, 27.6934291])),
    name: 'ktm',
  });
  pointSource.addFeature(pointFeature);
  const pointLayer = new VectorLayer({
    source: pointSource,
    style: new Style({
      image: new CircleStyle({
        radius: 5,
        fill: new Fill({ color: 'red' }),
      }),
    }),
  });

  //   line string vector layer
  const lineSource = new VectorSource<Feature<LineString>>();
  const lineFeature = new Feature({
    geometry: new LineString([
      fromLonLat([85.3372, 27.6894]),
      fromLonLat([85.3478288, 27.6934291]),
      fromLonLat([85.3582, 27.6983]),
    ]),
  });
  lineSource.addFeature(lineFeature);
  const lineLayer = new VectorLayer({
    source: lineSource,
    style: new Style({
      stroke: new Stroke({ color: 'yellow', width: 2 }),
    }),
  });

  // View initialization
  const view = new View({
    center: fromLonLat([85.3478288, 27.6934291]),
    zoom: 15,
    zoomFactor: 2,
    minZoom: 10,
    maxZoom: 19,
    rotation: 0,
  });

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
        pointLayer,
        lineLayer,
      ],
      view: view,
      controls: [
        new Zoom({
          zoomInLabel: '+',
          zoomInTipLabel: 'Zoom In',
          duration: 1000,
        }),
        new Zoom({
          zoomOutLabel: '-',
          zoomOutTipLabel: 'Zoom Out',
          duration: 1000,
        }),
        new FullScreen({}),
      ],
    });

    // fit view to geometry of geojson feature with padding
    view.fit(geoJSONFeatures[0].getGeometry()!.getExtent(), {
      padding: [100, 100, 100, 100],
    });

    return () => map.setTarget(undefined);
  }, []);

  return (
    <div
      className="naxatw-p-10"
      ref={mapRef}
      style={{ position: 'relative', width: '100%', height: '500px' }}
    ></div>
  );
};

export default MapView;
