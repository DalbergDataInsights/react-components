import { useState } from "react"

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

export function checkState(stateString, props, initValue = {}) {
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
