import { defaults } from "./statusColorConfig"
import { StatusColorComponent } from "./statusColorComponent"

export const manifest = {
  name: "StatusColor",
  version: "0.1",
  defaults: defaults,
  Component: StatusColorComponent
}

export type { iStatusColor } from "./statusColorInterface"
