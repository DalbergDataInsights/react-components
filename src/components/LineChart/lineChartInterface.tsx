export interface iLineChart {
  data: any[]
  xAxisDataKey: string
  yAxisDataKey: string
  traces?: {
    dataKey: string
    stroke: string
    activeDot?: any
  }[]
  children?: any
  props?: any
}
