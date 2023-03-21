import { LngLatBoundsLike } from "react-map-gl"
import { checkState } from "../../core/util"
import { iReactive } from "../../core"
import { getBounds } from "../../core/util"

export const useMapStates = ({
  subscribers = [],
  observers = [],
  props = {},
}: iReactive) => {
  // adding states
  checkState("point", props)
  checkState("click", props)
  // adding onMove sub
  subscribers.unshift({
    on: "move",
    func: (event: any) => {
      const featureData = getInfoFromMapEvent(event)
      props["setPoint"](featureData)
    },
  })

  subscribers.unshift({
    on: "click",
    func: (event: any) => {
      let featureData = getInfoFromMapEvent(event)
      if (featureData) {
        featureData =
          props.click?.name === featureData.name ? undefined : featureData
      }
      props["setClick"](featureData)
    },
  })

  observers.unshift({
    args: ["controller", "click", "bounds", "data"],
    func: (args: any) => {
      if (args.click && Object.keys(args.click).length > 0) {
        const newBound = getBounds(args.click?.feature?.geometry.coordinates)
        const noClickRegions = args.controller.allLabels.filter(
          (l: string) => l !== args.click.name
        )
        args.click["noClick"] = noClickRegions
        args.controller?.fitBounds(newBound)
      } else {
        args.controller?.fitBounds(args.bounds)
      }
    },
    prop: "click",
  })
}

function getInfoFromMapEvent(event: any) {
  const {
    features,
    lngLat: { lng, lat },
    originalEvent: { offsetX, offsetY },
  } = event
  const feature = features && features[0]
  return feature
    ? {
        ...feature["properties"],
        feature,
        lng,
        lat,
        offsetX,
        offsetY,
      }
    : undefined
}
