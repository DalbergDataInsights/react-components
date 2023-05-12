export interface iChart {
  data: any[]
  traces?: iTrace[]
  axis?: iAxis[]
  type?: string
  children?: any
  props?: any
}

export interface iTrace {
  dataKey: string
  Trace?: any
  type?: string
  stroke?: string
  activeDot?: any
  fill?: string
  [key: string]: any
}

export interface iAxis {
  dataKey?: string
  [key: string]: any
}
