import { useRef, useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import { Feature, Polygon } from 'geojson';
import 'maplibre-gl/dist/maplibre-gl.css';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import { IControl } from 'maplibre-gl';
import { area, length, kinks } from '@turf/turf';
import '@Assets/css/maplibre.css';

//Manually overrides CSS classes for maplibre compatibility
//@ts-ignore
MapboxDraw.constants.classes.CONTROL_BASE = 'maplibregl-ctrl';
//@ts-ignore
MapboxDraw.constants.classes.CONTROL_PREFIX = 'maplibregl-ctrl-';
//@ts-ignore
MapboxDraw.constants.classes.CONTROL_GROUP = 'maplibregl-ctrl-group';
//@ts-ignore
MapboxDraw.constants.classes.ATTRIBUTION = 'maplibregl-ctrl-attrib';

function Map() {
  //@ts-ignore
  const key = import.meta.env.VITE_MAPTILER_KEY;
  const mapRef = useRef<maplibregl.Map | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dataRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    mapRef.current = new maplibregl.Map({
      container: containerRef.current!,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${key}`,
      center: [85.324, 27.7172],
      zoom: 10,
    });

    //displays controller button after map load complete
    mapRef.current.on('load', () => {
      // zoom control
      mapRef.current!.addControl(
        new maplibregl.NavigationControl({
          showZoom: true,
          showCompass: true,
        }),
        'top-left',
      );

      //   full screen control
      mapRef.current!.addControl(
        new maplibregl.FullscreenControl(),
        'top-left',
      );
    });

    mapRef.current.on('click', e => {
      new maplibregl.Popup({ closeOnClick: false })
        .setLngLat([85.347877, 27.6941155])
        .setHTML(
          `<p class='naxatw-text-blue-800 naxatw-text-md  naxatw-font-bold'>Naxa Pvt. Ltd. </p>`,
        )
        .addTo(mapRef.current!);
    });

    // mapbox draw
    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        line_string: true,
        point: true,
        trash: true,
      },
      styles: [
        {
          id: 'gl-draw-point-active',
          type: 'circle',
          filter: ['all', ['==', '$type', 'Point'], ['==', 'active', 'true']],
          paint: {
            'circle-color': 'red',
            'circle-radius': 5,
          },
        },
        {
          id: 'gl-draw-line-active-linestring',
          type: 'line',
          filter: [
            'all',
            ['==', '$type', 'LineString'],
            ['==', 'active', 'true'],
          ],
          paint: {
            'line-color': 'green',
            'line-width': 2,
          },
        },
        {
          id: 'gl-draw-polygon-stroke-active',
          type: 'line',
          filter: ['all', ['==', '$type', 'Polygon'], ['==', 'active', 'true']],
          paint: {
            'line-color': 'red',
            'line-width': 2,
          },
        },
        {
          id: 'gl-draw-polygon-fill-inactive',
          type: 'fill',
          filter: ['all', ['==', '$type', 'Polygon'], ['==', 'active', 'true']],
          paint: {
            'fill-color': 'blue',
            'fill-opacity': 0.2,
          },
        },
        {
          id: 'gl-draw-polygon-fill-active',
          type: 'fill',
          filter: ['all', ['==', '$type', 'Polygon'], ['==', 'active', 'true']],
          paint: {
            'fill-color': 'blue',
            'fill-opacity': 0.2,
          },
        },
      ],
    });

    // function to get area from map
    const updateArea = () => {
      const data = draw.getAll();
      const latestFeat = data.features[data.features.length - 1];

      if (!data.features.length) {
        dataRef.current!.innerHTML = '';
        return;
      }

      if (latestFeat.geometry.type === 'Polygon') {
        // checks if there is ovelap
        const checkOverlap = kinks(latestFeat as Feature<Polygon>);
        if (checkOverlap.features.length > 0) {
          alert("Don't overlap polygon !!!");
          return;
        }
        const totalArea = area(data);
        const roundedArea = (Math.round(totalArea / 1000) * 100) / 100;
        dataRef.current!.innerHTML = `<p> Area : <strong>${roundedArea} sq.km.</strong> </p>`;
      } else if (latestFeat.geometry.type === 'LineString') {
        const totalLength = length(data);
        dataRef.current!.innerHTML = `<p> Distance : <strong>${(Math.round(totalLength) * 100) / 100} km</strong> </p>`;
      } else if (latestFeat.geometry.type === 'Point') {
        const [lon, lat] = data.features[0].geometry.coordinates;
        dataRef.current!.innerHTML = `<div>
          <p>Longitude: <strong>${lon}</strong></p>
          <p>Longitude: <strong>${lat}</strong></p>
        </div>`;
      }
    };

    mapRef.current!.on('draw.create', updateArea);
    mapRef.current!.on('draw.update', updateArea);
    mapRef.current!.on('draw.delete', updateArea);

    mapRef.current?.addControl(draw as unknown as IControl, 'top-right');

    // cleanup
    return () => {
      mapRef.current?.remove();
      mapRef.current!.off('draw.create', updateArea);
      mapRef.current!.off('draw.update', updateArea);
      mapRef.current!.off('draw.delete', updateArea);
    };
  }, []);

  return (
    <div className="mb-10 naxatw-h-screen naxatw-w-screen naxatw-p-10">
      <div ref={containerRef} className="naxatw-w-100% naxatw-h-[500px]"></div>
      <div ref={dataRef}></div>
    </div>
  );
}

export default Map;
