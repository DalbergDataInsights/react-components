import { LngLatBoundsLike } from "react-map-gl"
import { checkState } from "../../core/util"
import { iReactive } from "../../core"

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
        const newBound = getBound(args.click?.feature?.geometry.coordinates)
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

function getBound(coordinates: any) {
  const allLat: number[] = []
  const allLng: number[] = []
  collapse(coordinates).forEach((e: number, i: number) => {
    if (i % 2 == 0) {
      allLat.push(e)
    } else {
      allLng.push(e)
    }
  })

  const minLat = Math.min(...allLat)
  const maxLat = Math.max(...allLat)
  const maxLng = Math.max(...allLng)
  const minLng = Math.min(...allLng)

  return [
    [minLat, minLng],
    [maxLat, maxLng],
  ]
}

// input is like multiple nested arrays
// desired ouput is a array of arrays
// of values [[v1, v2], [v1, v2], [v1, v2]]
function collapse(arrayOfArrays: any): number[] {
  if (!(arrayOfArrays[0] instanceof Array)) return arrayOfArrays
  else return collapse(arrayOfArrays.flat())
}

// [[[v1,v2]], [[v1, v2], [v1, v2], [[v1,v2]]]]
