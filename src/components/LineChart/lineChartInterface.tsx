export interface iLineChart {
  data: iDataPoint[]
  colors?: string[]
  title?: string
  xLabel?: string
  yLabel?: string
  useGrid?: boolean
  props?: any
}

export interface iDataPoint {
  name: string
  pe: string | number
  value: number
}

export interface iChartData {
  id: string
  data: { 
    x: string | number 
    y: number 
  }[]
}