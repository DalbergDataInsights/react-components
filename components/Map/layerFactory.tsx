import React from "recharts"
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

export function createLayer(id, props) {
  const layerProps = createPaintProps(id, props)
  return createLayerObject(layerProps, {})
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
