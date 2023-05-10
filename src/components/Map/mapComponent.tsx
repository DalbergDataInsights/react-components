import React, { useRef, useMemo, useEffect } from "react"

import Map, { Source, MapRef, LngLatBoundsLike } from "react-map-gl"
// import MapLegend from "./mapLegend"

import { iMap } from "./mapInterface"
import { createDataLyer, createLayer } from "./layerFactory"
import { Tooltip, renderTooltip } from "./mapTooltip"

// preventDefaultLayers
// todo map layers are rerendering every tick, so make sure
// to remove the layer creation on the useEffect on mount only
// maybe subscriber because it's onMount useEffect
// I suspect it's easier to do with the barebone mapbox-gl

// look into map styles using https://github.com/visgl/react-map-gl/blob/7.0-release/examples/zoom-to-bounds/src/app.tsx
export const MapComponent = ({
  // data viz
  data,
  // TODO: move steps and colors in the config? It might be
  // the case that the colors change depending on the render,
  // so it's better to keep it in props I think
  steps,
  colors,
  // map control
  bounds,
  controller = {},
  // layer control
  layers = ["outline", "blur", "highlight"],
  // hover & tooltip
  point,
  pointTooltip = renderTooltip,
  // click & tooltip
  click,
  clickTooltip = renderTooltip,
  //events
  onMove,
  onClick,
  // customization
  fitBoundsOptions = { padding: 20, duration: 3000 },
  children,
  props,
}: iMap) => {
  // --- Pointer ---
  const mapRef = useRef<MapRef>()

  // since reference is only accessible from inside the component,
  // I am introducing the controller
  // basically every interaction with the component outside of component
  // as for example with observers
  // should be done through contorller
  function fitBounds(bounds: LngLatBoundsLike) {
    if (mapRef.current) {
      mapRef.current.fitBounds(bounds, fitBoundsOptions)
    }
  }
  controller["fitBounds"] = fitBounds
  controller["allLabels"] = useMemo(
    () =>
      data.features.map(
        (f: { properties: { name: string } }) => f.properties.name
      ),
    [data]
  )

  return (
    <Map
      ref={mapRef}
      initialViewState={{
        longitude: 0,
        latitude: 0,
        zoom: 2,
      }}
      interactiveLayerIds={["data"]}
      onMouseMove={onMove}
      onClick={onClick}
      onLoad={() => {
        fitBounds(bounds)
      }}
      attributionControl={false}
      {...props.map}
    >
      <Source type="geojson" data={data}>
        {createDataLyer("data", {
          steps,
          colors,
          ...props.layers["data"],
        })}
        {layers.map((layer) => {
          if (typeof layer === "string")
            return createLayer(layer, props.layers[layer], { click, point })
          else return layer
        })}
      </Source>

      {pointTooltip && point && point.feature ? (
        <Tooltip
          renderer={pointTooltip}
          {...props.tooltip}
          info={point}
          anchor={{ left: point.offsetX, top: point.offsetY }}
        />
      ) : (
        ""
      )}

      {clickTooltip && click && click.feature ? (
        <Tooltip
          renderer={clickTooltip}
          {...props.tooltip}
          info={click}
          pointer={{ display: "none" }}
        />
      ) : (
        ""
      )}
      {children}
    </Map>
  )
}
