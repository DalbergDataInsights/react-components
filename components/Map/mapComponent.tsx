import React, { useCallback, useState, useRef, useMemo, useEffect } from "react"

import Map, {
  NavigationControl,
  FullscreenControl,
  Source,
  MapLayerMouseEvent,
  MapRef,
} from "react-map-gl"
// import MapLegend from "./mapLegend"
import ControlPanel from "./controlPanel"

import { iMap } from "./mapInterface"
import { createDataLyer, createLayer } from "./layerFactory"
import { Tooltip, renderTooltip } from "./mapTooltip"

// preventDefaultLayers
// todo map layers are rerendering every tick, so make sure
// to remove the layer creation on the useEffect on mount only
// maybe subscriber because it's onMount useEffect
// I suspect it's easier to do with the barebone mapbox-gl
export const MapComponent = ({
  data,
  labelColumn,
  valueColumn,
  steps,
  colors = [],
  coordinates,
  fullscreenControl = true,
  navigationControl = true,
  layers = ["outline", "blur", "highlight"],
  pointTooltip = renderTooltip,
  clickTooltip = renderTooltip,
  props,
}: iMap) => {
  // --- Pointer ---
  const mapRef = useRef<MapRef>(null)
  // const bounds = mapRef.current.getMap().getBounds();
  const [click, setClick] = useState()
  const [point, setPoint] = useState()

  // init state
  const [viewport, setViewport] = useState({
    latitude: coordinates.latitude,
    longitude: coordinates.longitude,
    bearing: coordinates.bearing,
    zoom: coordinates.zoom,
  })

  // housekeeping states
  const [hoverInfo, setHoverInfo] = useState<
    { [key: string]: any } | undefined
  >(undefined)
  const [clickedInfo, setClickedInfo] = useState<
    { [key: string]: any } | undefined
  >(undefined)

  // --- Callbacks ---
  const onMove = useCallback((event: MapLayerMouseEvent) => {
    const {
      features,
      lngLat: { lng, lat },
      originalEvent: { offsetX, offsetY },
    } = event
    const feature = features && features[0]
    setPoint(
      feature
        ? {
            ...feature["properties"],
            lng,
            lat,
            offsetX,
            offsetY,
          }
        : undefined
    )
  }, [])

  const onClick = useCallback(
    (event: MapLayerMouseEvent) => {
      const {
        features,
        lngLat: { lng, lat },
        originalEvent: { offsetX, offsetY },
      } = event
      let isNew = false
      if (features !== undefined && features[0] !== undefined) {
        isNew = true
        if (clickedInfo !== undefined && features[0].properties != null) {
          isNew =
            features[0].properties[labelColumn] !==
            clickedInfo["properties"][labelColumn]
              ? true
              : false
        }
      }

      if (isNew && features) {
        setClickedInfo(() => {
          mapRef.current?.flyTo({
            center: [lng, lat],
            zoom: 5.5,
            duration: 1000,
          })

          return features[0]
            ? {
                ...features[0]["properties"],
                lng,
                lat,
                offsetX,
                offsetY,
              }
            : undefined
        })
      } else {
        mapRef.current?.flyTo({
          center: [coordinates.longitude, coordinates.latitude],
          zoom: coordinates.zoom,
          duration: 1000,
        })
        setClickedInfo(undefined)
      }
    },
    [clickedInfo]
  )

  const regions = useMemo(
    () =>
      data.features.map(
        (f: { properties: { [key: string]: any } }) => f.properties[labelColumn]
      ),
    [data]
  )

  const [noClick, setNoClick] = useState([])

  useEffect(() => {
    if (clickedInfo !== undefined) {
      let noClickOU
      if (clickedInfo["properties"][labelColumn]) {
        noClickOU = regions.filter(
          (value: any) => value !== clickedInfo["properties"][labelColumn]
        )
      } else {
        noClickOU = []
      }
      setNoClick(noClickOU)
    } else {
      setNoClick([])
    }
  }, [clickedInfo])

  const [filterHover, setFilterHover] = useState("")

  useEffect(() => {
    if (hoverInfo !== undefined) {
      setFilterHover(hoverInfo.feature.properties[labelColumn])
    }
  }, [hoverInfo])

  // reset on data change
  useEffect(() => {
    setClickedInfo(undefined)
    mapRef.current?.flyTo({
      center: [coordinates.longitude, coordinates.latitude],
      zoom: coordinates.zoom,
      duration: 1000,
    })
  }, [data])

  return (
    <Map
      ref={mapRef}
      initialViewState={viewport}
      mapStyle={props.mapstyle}
      mapboxAccessToken={props.mapboxAccessToken}
      onMove={(evt) => setViewport({ ...evt.viewState })}
      interactiveLayerIds={["data"]}
      onMouseMove={onMove}
      onClick={onClick}
      {...props?.map}
    >
      {fullscreenControl == true && (
        <FullscreenControl {...props?.fullscreenControl} />
      )}
      {navigationControl == true && (
        <NavigationControl {...props?.navigationControl} />
      )}
      <Source type="geojson" data={data}>
        {createDataLyer("data", {
          steps,
          colors,
          ...props?.layerProps,
        })}
        {layers.map((layer) => {
          if (typeof layer === "string")
            return createLayer(layer, props?.layerProps)
          else return layer
        })}
      </Source>

      {pointTooltip && point ? (
        <Tooltip
          anchor={{ left: point.offsetX, top: point.offsetY }}
          info={point}
          renderer={pointTooltip}
          {...props}
        />
      ) : (
        ""
      )}

      {clickTooltip && click ? (
        <Tooltip info={point} renderer={clickTooltip} {...props} />
      ) : (
        ""
      )}

      {/* {clickedInfo && (
        <ControlPanel props={props?.clickedInfo}>
          <div>
            {tooltip?.prefix && `${tooltip?.prefix}: `}
            {clickedInfo["properties"][labelColumn]}
          </div>
          <div>
            {tooltip?.name && `${tooltip?.name}: `}
            {Math.round(clickedInfo["properties"][valueColumn])}
            {tooltip?.units}
          </div>
        </ControlPanel>
      )} */}
      {/* {legend && (
        <div className={`absolute visible ${props?.legend.position}`}>
          <MapLegend
            colors={colors}
            steps={steps}
            colorsNA={colorsNA}
            suffix={tooltip?.units}
            props={props?.legend}
          />
        </div>
      )} */}
    </Map>
  )
}
