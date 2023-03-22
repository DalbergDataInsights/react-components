import { ProgressCircleComponent } from './progressCircleComponent'
import { defaults } from './progressCircleConfig'

export const manifest = {
  name: "DonutChart",
  version: "0.2",
  defaults: defaults,
  Component: ProgressCircleComponent,
}

export type { iProgressCircle } from './progressCircleInterface'