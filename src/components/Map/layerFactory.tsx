import { Layer } from "react-map-gl"
import { mergeDicts } from "../../core"

function createLayerObject(layer: any) {
  return <Layer {...layer} />
}

export function createLayer(id: string, props: any, states: any) {
  const layerProps = {
    key: id,
    id,
    ...props,
  }
  const filterProps = createFilterProps(props.filter || undefined, states)
  return createLayerObject({ ...layerProps, ...filterProps })
}

// TODO think how to better align with mapbox documentation
// this now will work for only very simple filters
// also it expects 3rd argument to be a function
function createFilterProps(filter: any, states: any) {
  if (filter) {
    let filterEval = filter[2](states)
    if (filterEval instanceof Array) {
      return { filter: [filter[0], filter[1], ...filterEval] }
    }
    return { filter: [filter[0], filter[1], filterEval] }
  } else return {}
}

// add interpolated color palette?
export function createDataLyer(id: string, props: any) {
  const layerProps = {
    id,
    key: id,
    ...mergeDicts(createDataColor(props), props),
  }
  return createLayerObject(layerProps)
}

function createDataColor({
  steps,
  colors,
  naColor = "#BFBFBF",
  valueColumn = "value",
  type = "fill",
}: {
  steps: number[]
  colors: string[]
  type: string
  naColor: string
  valueColumn: string
}) {
  return {
    paint: {
      [`${type}-color`]: [
        "case",
        ["!=", ["get", valueColumn], null],
        ["step", ["get", valueColumn], ...createPaletteSteps(steps, colors)],
        naColor,
      ],
    },
  }
}

export function createPaletteSteps(steps: number[], colors: string[]) {
  const palette: Array<string | number> = colors ? [colors[0]] : []
  if (steps && colors) {
    steps.forEach((s, i) => {
      palette.push(s)
      palette.push(colors[i + 1])
    })
  }
  return palette
}
