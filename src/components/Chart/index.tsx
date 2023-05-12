import { ChartComponent } from "./chartComponent"
import { defaults } from "./chartConfig"

export const manifest = {
  name: "Chart",
  version: "0.1",
  defaults: defaults,
  Component: ChartComponent,
}

export type { iChart, iTrace } from "./chartInterface"
