import React from "react"
import { Wrapper, iWrapper } from "./core"

import { manifest as tableManifest, iTable, iHeader } from "./components/Table"

export const Table = (props: iTable & iWrapper) => (
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
export const Map = (props: iMap & iWrapper) => (
  <Wrapper {...mapManifest} {...props} />
)

import {
  manifest as toggleButtonGroupManifest,
  iToggleButtonGroup,
} from "./components/ToggleButtonGroup"
export const ToggleButtonGroup = (props: iToggleButtonGroup & iWrapper) => (
  <Wrapper {...toggleButtonGroupManifest} {...props} />
)
