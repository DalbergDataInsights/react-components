import { useState, ChangeEvent, useCallback } from "react"
import { MapLayerMouseEvent } from "react-map-gl"

export const useMapStates = (subscribers, observers, props ) => {
  if (!Object.keys(props).includes("hoverInfo")) {
    const [hoverInfo, setHoverInfo] = useState<{ [key: string]: any } | undefined>(undefined)
    props["hoverInfo"] = hoverInfo
    props["setValue"] = setHoverInfo
    subscribers.unshift({
      on: "move",
      func: useCallback(
        (event: MapLayerMouseEvent) => {
          const {
            features,
            originalEvent: { offsetX, offsetY },
          } = event
          // features will only be present in the event if the move
          // is over the interactive layer
          if (features !== undefined && features[0] !== undefined) {
            setHoverInfo({
              feature: features[0],
              x: offsetX,
              y: offsetY,
            })
          } else {
            setHoverInfo(undefined)
          }
        },
        [hoverInfo]
      ),
    })
  } else if (Object.keys(props).includes("setHoverInfo")) {
    subscribers.unshift({
      on: "move",
      funct: useCallback(
        (event: MapLayerMouseEvent) => {
          const {
            features,
            originalEvent: { offsetX, offsetY },
          } = event
          if (features !== undefined && features[0] !== undefined) {
            props["setHoverInfo"]({
              feature: features[0],
              x: offsetX,
              y: offsetY,
            })
          } else {
            props["setHoverInfo"](undefined)
          }
        },
        [props["hoverInfo"]]
      ),
    })
  }
}
