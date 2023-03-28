import React from "react"
import { Wrapper } from "./core"
import { iReactive } from "./core"

import { manifest as tableManifest, iTable, iHeader } from "./components/Table"

export const Table = (props: iTable & iReactive) => (
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
  manifest as statusColorManifest,
  iStatusColor,
} from "./components/StatusColor"

export const StatusColor = (props: iStatusColor & iReactive) => (
  <Wrapper {...statusColorManifest} {...props} />
)

import {
  manifest as progressCircleManifest,
  iProgressCircle,
} from "./components/ProgressCircle"

export const ProgressCircle = (props: iProgressCircle & iReactive) => (
  <Wrapper {...progressCircleManifest} {...props} />
)

import {
  manifest as lineChartManifest,
  iLineChart,
} from "./components/LineChart"

export const LineChart = (props: iLineChart & iReactive) => (
  <Wrapper {...lineChartManifest} {...props} />
)