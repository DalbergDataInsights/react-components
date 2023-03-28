export interface iLineChart {
  data: any[]
  X: string
  traces: {
    dataKey: string
    stroke: string
    activeDot?: any
  }[]
  children?: any
  props?: any
}
