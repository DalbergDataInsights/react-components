import { DonutChartComponent } from './donutchartComponent'
import { defaults } from './donutchartConfig'

export const manifest = {
  name: "DonutChart",
  version: "0.1",
  defaults: defaults,
  Component: DonutChartComponent,
}

export type { iDonutChart } from './donutchartInterface'