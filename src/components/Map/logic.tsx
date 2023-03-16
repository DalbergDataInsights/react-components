import { checkState } from "../../core/util"

export const useMapStates = (subscribers, observers, props) => {
  // adding states
  checkState("point", props)
  checkState("click", props)
  // adding onMove sub
  subscribers.unshift({
    on: "move",
    func: (event) => {
      const featureData = getInfoFromMapEvent(event)
      props["setPoint"](featureData)
    },
  })

  subscribers.unshift({
    on: "click",
    func: (event) => {
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
    func: (args) => {
      if (Object.keys(args.click).length > 0) {
        const newBound = getBound(args.click?.feature?.geometry.coordinates)
        const noClickRegions = args.controller.allLabels.filter(
          (l) => l !== args.click.name
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

function getInfoFromMapEvent(event) {
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

function getBound(coordinates) {
  const allLat = []
  const allLng = []
  collapse(coordinates).forEach((e, i) => {
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
function collapse(arrayOfArrays) {
  if (!(arrayOfArrays[0] instanceof Array)) return arrayOfArrays
  else return collapse(arrayOfArrays.flat())
}

// [[[v1,v2]], [[v1, v2], [v1, v2], [[v1,v2]]]]
