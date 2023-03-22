import { useState } from "react"

// merge two dictionaries - used to merge props and keeping all default values
export function mergeDicts(a, b, path = undefined) {
  if (!path) {
    path = []
  }
  for (const key in b) {
    if (key in a) {
      if (a[key] instanceof Object && b[key] instanceof Object) {
        path.push(JSON.stringify(key))
        mergeDicts(a[key], b[key], path)
      } else {
      }
    } else {
      a[key] = b[key]
    }
  }
  return a
}

export function checkState(stateString: string, props: any, initValue = {}) {
  const propKeys = Object.keys(props)
  const setStateString = `set${
    stateString.charAt(0).toUpperCase() + stateString.slice(1)
  }`

  if (!propKeys.includes(stateString) || !propKeys.includes(setStateString)) {
    const [state, setState] = useState(initValue)
    props[stateString] = state
    props[setStateString] = setState
  }
}

export function getColor({
  value,
  colors,
  steps,
  naColor,
}: {
  value: number
  colors: string[]
  steps: number[]
  naColor: string
}) {
  if (value == undefined || value == null || Number.isNaN(value)) {
    return naColor
  }
  let color = colors[0]
  steps.forEach((step: number, index: number) => {
    if (step > value) {
      color = colors[index + 1]
    } else {
      return color
    }
  })
  return color
}

export function getBounds(coordinates: any) {
  const allLat: number[] = []
  const allLng: number[] = []
  collapse(coordinates).forEach((e: number, i: number) => {
    if (i % 2 == 0) {
      allLat.push(e)
    } else {
      allLng.push(e)
    }
  })

  const minLat = getMin(allLat)
  const maxLat = getMax(allLat)
  const maxLng = getMax(allLng)
  const minLng = getMin(allLng)

  return [
    [minLat, minLng],
    [maxLat, maxLng],
  ]
}

function getMax(arr: number[]) {
  return arr.reduce((max, v) => (max >= v ? max : v), -Infinity)
}

function getMin(arr: number[]) {
  return arr.reduce((min, v) => (min <= v ? min : v), +Infinity)
}

// input is like multiple nested arrays
// desired ouput is a array of arrays
// of values [[v1, v2], [v1, v2], [v1, v2]]
function collapse(arrayOfArrays: any): number[] {
  if (!(arrayOfArrays[0] instanceof Array)) return arrayOfArrays
  else return collapse(arrayOfArrays.flat())
}
