import { LngLatBoundsLike } from "react-map-gl"

export interface iMap {
  data: any
  steps: number[]
  colors: string[]
  bounds?: LngLatBoundsLike
  controller?: object
  layers?: string[]
  point?: iMapInfo
  pointTooltip?: Function
  click?: iMapInfo
  clickTooltip?: Function
  onMove?: Function
  onClick?: Function
  fitBoundsOptions?: Object
  children?: any
  props?: any
}

export interface iMapInfo {
  feature?: Object
  lng?: number
  lat?: number
  offsetX?: number
  offsetY?: number
}
