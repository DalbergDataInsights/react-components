import { defaults } from "./statusCircleConfig"
import { StatusCircleComponent } from "./statusCircleComponent"

export const manifest = {
  name: "StatusCircle",
  version: "0.1",
  defaults: defaults,
  Component: StatusCircleComponent
}

export type { iColorCircle } from "./statusCircleInterface"
