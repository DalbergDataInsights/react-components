import { Dropdown } from "./dropdownComponent"
import { defaults } from "./dropdownConfig"
import { useDropdown } from "./dropdownLogic"

export const manifest = {
  name: "Dropdown",
  version: "0.3",
  defaults: defaults,
  Component: Dropdown,
  init: useDropdown,
}

export type { iDropdown } from "./dropdownInterface"
