import { LineChartComponent } from "./lineChartComponent"
import { defaults } from "./lineChartConfig"

export const manifest = {
    name: "LineChart",
    version: "0.1",
    defaults: defaults,
    Component: LineChartComponent,
}

export type { iLineChart } from "./lineChartInterface"