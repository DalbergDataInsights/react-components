import React from "react"
import { Wrapper } from "./core"

import { manifest as tableManifest, iTable, iHeader } from "./components/Table"

export const Table = (props: iTable) => (
  <Wrapper {...tableManifest} {...props} />
)

import { manifest as mapManifest, iMap } from "./components/Map"
// exporting controls so user would not need to extra install react-map-gl
// and use peer dependencies instead
export {
  AttributionControl as MapAttributionControl,
  FullscreenControl as MapFullscreenControl,
  GeolocateControl as MapGeolocateControl,
  NavigationControl as MapNavigationControl,
  ScaleControl as MapScaleControl,
} from "react-map-gl"
export { MapLegend } from "./components/Map"
export const Map = (props: iMap) => <Wrapper {...mapManifest} {...props} />
