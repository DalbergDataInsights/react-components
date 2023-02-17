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

export function checkState(stateString, props) {
  const propKeys = Object.keys(props)
  const setStateString = `set${
    stateString.charAt(0).toUpperCase() + stateString.slice(1)
  }`

  if (!propKeys.includes(stateString) || !propKeys.includes(setStateString)) {
    const [state, setState] = useState()
    props[stateString] = state
    props[setStateString] = setState
  }
}
