export interface iMap {
  data: any
  coordinates: {
    longitude: number
    latitude: number
    bearing: number
    zoom: number
  }
  valueColumn: string
  labelColumn: string
  steps?: number[]
  colors?: string[]
  colorsNA?: string
  tooltip?: {
    prefix?: string
    units?: string
    name?: string
  }
  layers?: LayerProps[]
  addBlurLayer?: boolean
  addHoverLayer?: boolean
  addBackgroundLayer?: boolean
  navigationControl?: boolean
  fullscreenControl?: boolean
  legend?: boolean
  props?: any
}
