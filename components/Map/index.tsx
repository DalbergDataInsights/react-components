import { MapComponent } from "./mapComponent"
import { defaults } from "./mapConfig"
import { useMapStates } from "./logic"

/**
 * Creates Map React component
 * @param {Array<iOption>} options: Array of objects that has at least { value }, optionally {name, value}
 * @param {unknown} value: React state to controll current DropDown value
 * @see iMap props
 */

export const manifest = {
  name: "Map",
  version: "0.1",
  defaults: defaults,
  Component: MapComponent,
  init: useMapStates,
}

export { default as MapLegend } from "./MapLegend"
export type { iMap } from "./mapInterface"
