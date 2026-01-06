import { fromLonLat } from "ol/proj";

export const geojsonObject = {
  type: "Feature",
  geometry: {
    type: "MultiLineString",
    coordinates: [
      [fromLonLat([85.3478288, 27.6934291]), fromLonLat([85.3119, 27.7007])],
      [fromLonLat([85.3119, 27.7007]), fromLonLat([85.3217, 27.7303])],
      [fromLonLat([85.3217, 27.7303]), fromLonLat([85.362, 27.7215])],
      [fromLonLat([85.362, 27.7215]), fromLonLat([85.3478288, 27.6934291])],
    ],
  },
};