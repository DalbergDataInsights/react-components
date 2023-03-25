export interface iLineChart {
  data: iDataPoint[]
  xLabel: string
  yLabel: string
  hue: string
  colors?: string[]
  title?: string
  useGrid?: boolean
  props?: any
}

export interface iDataPoint {
  hue: string
  xLabel: string | number
  yLabel: number
}

export interface iChartData {
  id: string | any
  data: { 
    x: string | number 
    y: string | number 
  }[]
}