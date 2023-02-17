import { Layer } from "react-map-gl"

function createLayerObject(layer, props) {
  return <Layer {...layer} {...props} />
}

function createPaintProps(id, props) {
  const layerPropertiesKeys = Object.keys(props).filter((e) => e.startsWith(id))
  const type = layerPropertiesKeys[0].split("-")[1]
  const layerProps = {}
  layerPropertiesKeys.forEach(
    (key) => (layerProps[key.replace(`${id}-`, "")] = props[key])
  )
  return { key: id, id, type, paint: layerProps }
}

export function createLayer(id, props, states) {
  const layerProps = createPaintProps(id, props)
  const filterProps = createFilterProps(id, props, states)
  return createLayerObject(layerProps, filterProps)
}

// TODO think how to better align with mapbox documentation
// this now will work for only very simple filters
// also it expects 3rd argument to be a function
function createFilterProps(id, props, states) {
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
  id,
  { steps, colors, naColor = "#BFBFBF", valueColumn = "value", ...props }
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

export function createPalette(steps, colors) {
  const palette: Array<string | number> = colors ? [colors[0]] : []
  if (steps && colors) {
    steps.forEach((s, i) => {
      palette.push(s)
      palette.push(colors[i + 1])
    })
  }
  return palette
}
