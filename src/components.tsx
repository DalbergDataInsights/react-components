import React from "react"
import { Wrapper } from "./core"
import { iWrapper, iReactive } from "./core"

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

export const Map = (props: iMap & iReactive): JSX.Element => (
  <Wrapper {...mapManifest} {...props} />
)

import { mapColorLegendManifest, iMapColorLegend } from "./components/Map"
export const MapColorLegend = (props: iMapColorLegend & iReactive) => (
  <Wrapper {...mapColorLegendManifest} {...props} />
)

import {
  manifest as toggleButtonGroupManifest,
  iToggleButtonGroup,
} from "./components/ToggleButtonGroup"
export const ToggleButtonGroup = (props: iToggleButtonGroup & iReactive) => (
  <Wrapper {...toggleButtonGroupManifest} {...props} />
)

import { manifest as dropdownManifest, iDropdown } from "./components/Dropdown"
export const Dropdown = (props: iDropdown & iReactive) => (
  <Wrapper {...dropdownManifest} {...props} />
)

import {
  manifest as progressBarManifest,
  iProgressBar,
} from "./components/ProgressBar"
export const ProgressBar = (props: iProgressBar & iReactive) => (
  <Wrapper {...progressBarManifest} {...props} />
)

import {
  manifest as colorCircleManifest,
  iStatusCircle,
} from "./components/StatusCircle"

export const StatusCircle = (props: iStatusCircle & iReactive) => (
  <Wrapper {...colorCircleManifest} {...props} />
)
