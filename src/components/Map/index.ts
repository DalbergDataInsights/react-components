import { MapComponent } from "./mapComponent"
import { defaults } from "./mapConfig"
import { ColorLegendComponent } from "./mapColorLegendComponent"
import {defaults as colorLegendDefaults} from "./colorLegendConfig"
import { useMapStates } from "./mapLogic"

/**
 * Creates Map React component
 * @param {Array<iOption>} options: Array of objects that has at least { value }, optionally {name, value}
 * @param {unknown} value: React state to controll current DropDown value
 * @see iMap props
 */

export const manifest = {
  name: "Map",
  version: "0.4",
  defaults: defaults,
  Component: MapComponent,
  init: useMapStates,
}

export const mapColorLegendManifest = {
  name: "MapColorLegend",
  version: "0.4",
  defaults: colorLegendDefaults,
  Component: ColorLegendComponent
}

export type { iMap, iMapColorLegend } from "./mapInterface"
