import { ProgressCircleComponent } from './progressCircleComponent'
import { defaults } from './progressCircleConfig'

export const manifest = {
  name: "ProgressCircle",
  version: "0.5",
  defaults: defaults,
  Component: ProgressCircleComponent,
}

export type { iProgressCircle } from './progressCircleInterface'