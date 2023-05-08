import { Layer } from "react-map-gl"

function createLayerObject(layer: any, props: any) {
  return <Layer {...layer} {...props} />
}

function createPaintProps(id: string, props: any) {
  const layerPropertiesKeys = Object.keys(props).filter((e) => e.startsWith(id))
  if (layerPropertiesKeys.length > 0) {
    const type = layerPropertiesKeys[0].split("-")[1]
    const layerProps: { [key: string]: any } = {}
    layerPropertiesKeys.forEach(
      (key) => (layerProps[key.replace(`${id}-`, "")] = props[key])
    )
    return { key: id, id, type, paint: layerProps }
  } else return { key: id, id}
  
}

function createLayoutProps(id: string, props: any) {
  const layerPropertiesKeys = Object.keys(props).filter(
    (e) => e.startsWith("layout") && e.endsWith(id)
  )
  if (layerPropertiesKeys.length > 0) {
    const type = layerPropertiesKeys[0].split("-")[1]
    const layoutProps = props[layerPropertiesKeys[0]]
    return { type, layout: layoutProps }
  } else return {}
}

export function createLayer(id: string, props: any, states: any) {
  const layerProps = createPaintProps(id, props)
  const filterProps = createFilterProps(id, props, states)
  const layoutProps = createLayoutProps(id, props)
  return createLayerObject(layerProps, {...filterProps, ...layoutProps})
}

// TODO think how to better align with mapbox documentation
// this now will work for only very simple filters
// also it expects 3rd argument to be a function
function createFilterProps(id: string, props: any, states: any) {
  const filterKey = Object.keys(props).filter(
    (e) => e.startsWith("filter") && e.endsWith(id)
  )
  if (filterKey.length > 0) {
    const filter = props[filterKey[0]]
    let filterEval = filter[2](states)
    if (filterEval instanceof Array) {
      return { filter: [filter[0], filter[1], ...filterEval] }
    }
    return { filter: [filter[0], filter[1], filterEval] }
  } else return {}
}

// add interpolated color palette?
export function createDataLyer(
  id: string,
  {
    steps,
    colors,
    naColor = "#BFBFBF",
    valueColumn = "value",
    ...props
  }: {
    steps: number[]
    colors: string[]
    naColor: string
    valueColumn: string
  }
) {
  const layerProps = createPaintProps(id, {
    ...{
      "data-fill-color": [
        "case",
        ["!=", ["get", valueColumn], null],
        ["step", ["get", valueColumn], ...createPalette(steps, colors)],
        props["na-fill-color"] || null,
      ],
    },
    ...props,
  })

  return createLayerObject(layerProps, props)
}

export function createPalette(steps: number[], colors: string[]) {
  const palette: Array<string | number> = colors ? [colors[0]] : []
  if (steps && colors) {
    steps.forEach((s, i) => {
      palette.push(s)
      palette.push(colors[i + 1])
    })
  }
  return palette
}
