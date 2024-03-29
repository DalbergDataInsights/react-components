import { ProgressBarComponent } from "./progressBarComponent"
import { defaults } from "./progressBarConfig"

export const manifest = {
  name: "ProgressBar",
  version: "0.3",
  defaults: defaults,
  Component: ProgressBarComponent,
}

export type { iProgressBar } from "./progressBarInterface"
