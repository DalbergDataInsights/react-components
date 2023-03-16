import { ToggleButtonGroup } from "./toggleButtonGroupComponent"
import { defaults } from "./toggleButtonGroupConfig"
import { useToggleButtonGroup } from "./toggleButtonGroupLogic"

export const manifest = {
  name: "ToggleButtonGroup",
  version: "0.1",
  defaults: defaults,
  Component: ToggleButtonGroup,
  init: useToggleButtonGroup,
}

export type { iToggleButtonGroup } from "./toggleButtonGroupInterface"
